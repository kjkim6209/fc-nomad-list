# Nomad

## 도시 이미지 자동 다운로드

1. Unsplash 개발자 콘솔에서 앱을 생성하고 `UNSPLASH_ACCESS_KEY` 를 발급합니다.
2. `.env.local` 또는 셸 세션에 `UNSPLASH_ACCESS_KEY=<발급받은 키>` 를 설정합니다.
3. 아래 스크립트를 실행하면 `components/city-grid.tsx` 에서 감지한 모든 도시 이름에 대한 이미지를 Unsplash API 로 검색하여 `public/city` 경로에 저장합니다.

```bash
npm run download:city-images
```

- 기본적으로 동일한 파일명이 존재하면 건너뜁니다. 강제로 덮어쓰려면 `npm run download:city-images -- --overwrite` 옵션을 추가하세요.
- 각 도시는 `도시명 + " city skyline"` 쿼리로 검색되며, 결과가 없으면 에러 로그만 남기고 다음 도시로 넘어갑니다.

