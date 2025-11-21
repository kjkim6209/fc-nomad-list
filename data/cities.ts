export type CityRegion = "all" | "asia" | "europe" | "americas" | "africa" | "oceania"

export interface City {
  name: string
  country: string
  image: string
  rating: number
  price: string
  climate: string
}

type CityCollections = Record<CityRegion, City[]>

export const cities: CityCollections = {
  all: [
    {
      name: "Bali",
      country: "Indonesia",
      image: "/city/bali.jpg",
      rating: 5.8,
      price: "$",
      climate: "🌞",
    },
    {
      name: "Bangkok",
      country: "Thailand",
      image: "/city/bangkok.jpg",
      rating: 5.7,
      price: "$",
      climate: "🌞",
    },
    {
      name: "Lisbon",
      country: "Portugal",
      image: "/city/lisbon.jpg",
      rating: 5.9,
      price: "$",
      climate: "☀️",
    },
    {
      name: "Mexico City",
      country: "Mexico",
      image: "/city/mexico-city.jpg",
      rating: 6.6,
      price: "$",
      climate: "🌤️",
    },
    {
      name: "Chiang Mai",
      country: "Thailand",
      image: "/city/chiang-mai.jpg",
      rating: 5.5,
      price: "$",
      climate: "🌞",
    },
    {
      name: "Barcelona",
      country: "Spain",
      image: "/city/barcelona.jpg",
      rating: 5.7,
      price: "$",
      climate: "☀️",
    },
    {
      name: "Da Nang",
      country: "Vietnam",
      image: "/city/da-nang.jpg",
      rating: 5.4,
      price: "$",
      climate: "🌊",
    },
    {
      name: "Buenos Aires",
      country: "Argentina",
      image: "/city/buenos-aires.jpg",
      rating: 5.8,
      price: "$",
      climate: "🌤️",
    },
  ],
  asia: [
    {
      name: "Bali",
      country: "Indonesia",
      image: "/city/bali.jpg",
      rating: 5.8,
      price: "$",
      climate: "🌞",
    },
    {
      name: "Bangkok",
      country: "Thailand",
      image: "/city/bangkok.jpg",
      rating: 5.7,
      price: "$",
      climate: "🌞",
    },
    {
      name: "Chiang Mai",
      country: "Thailand",
      image: "/city/chiang-mai.jpg",
      rating: 5.5,
      price: "$",
      climate: "🌞",
    },
  ],
  europe: [
    {
      name: "Lisbon",
      country: "Portugal",
      image: "/city/lisbon.jpg",
      rating: 5.9,
      price: "$",
      climate: "☀️",
    },
    {
      name: "Barcelona",
      country: "Spain",
      image: "/city/barcelona.jpg",
      rating: 5.7,
      price: "$",
      climate: "☀️",
    },
  ],
  americas: [
    {
      name: "Mexico City",
      country: "Mexico",
      image: "/city/mexico-city.jpg",
      rating: 6.6,
      price: "$",
      climate: "🌤️",
    },
    {
      name: "Buenos Aires",
      country: "Argentina",
      image: "/city/buenos-aires.jpg",
      rating: 5.8,
      price: "$",
      climate: "🌤️",
    },
  ],
  africa: [],
  oceania: [],
}


