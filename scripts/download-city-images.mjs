import fs from "node:fs/promises"
import { existsSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, "..")
const cityGridPath = path.join(projectRoot, "components", "city-grid.tsx")
const outputDir = path.join(projectRoot, "public", "city")

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY
const overwrite = process.argv.includes("--overwrite")

if (!UNSPLASH_ACCESS_KEY) {
  console.error("❌ 환경 변수 UNSPLASH_ACCESS_KEY 가 필요합니다.")
  process.exit(1)
}

const slugify = (value) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

async function extractCityNames() {
  const source = await fs.readFile(cityGridPath, "utf-8")
  const matches = [...source.matchAll(/name:\s*"([^"]+)"/g)]
  return [...new Set(matches.map((match) => match[1]))]
}

async function ensureOutputDir() {
  await fs.mkdir(outputDir, { recursive: true })
}

async function fetchUnsplashPhoto(cityName) {
  const query = encodeURIComponent(`${cityName} city skyline`)
  const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&orientation=landscape&per_page=1`

  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      "Accept-Version": "v1",
    },
  })

  if (!response.ok) {
    throw new Error(`Unsplash API 요청 실패 (${response.status}): ${await response.text()}`)
  }

  const data = await response.json()
  const photo = data.results?.[0]

  if (!photo) {
    throw new Error(`"${cityName}" 검색 결과가 없습니다.`)
  }

  const optimizedUrl = `${photo.urls.raw}&w=1200&h=800&fit=crop`
  const imageResponse = await fetch(optimizedUrl)

  if (!imageResponse.ok) {
    throw new Error(`이미지 다운로드 실패 (${imageResponse.status})`)
  }

  return Buffer.from(await imageResponse.arrayBuffer())
}

async function downloadCityImage(cityName) {
  const filename = `${slugify(cityName) || "city"}.jpg`
  const filepath = path.join(outputDir, filename)

  if (!overwrite && existsSync(filepath)) {
    console.log(`⏭️  ${cityName} (이미 존재, --overwrite 없이 건너뜀)`)
    return
  }

  try {
    const imageBuffer = await fetchUnsplashPhoto(cityName)
    await fs.writeFile(filepath, imageBuffer)
    console.log(`✅  ${cityName} → ${path.relative(projectRoot, filepath)}`)
  } catch (error) {
    console.error(`❌  ${cityName} 다운로드 실패: ${error.message}`)
  }
}

async function main() {
  await ensureOutputDir()
  const cities = await extractCityNames()

  if (cities.length === 0) {
    console.error("도시 이름을 찾지 못했습니다. components/city-grid.tsx 를 확인하세요.")
    process.exit(1)
  }

  for (const city of cities) {
    await downloadCityImage(city)
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})

