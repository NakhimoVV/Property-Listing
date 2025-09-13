import locationList from '@/entities/house/model/locationList.ts'

export type Location = (typeof locationList)[number]

export type House = {
  id: number
  title: string
  description: string
  price: number
  rating: number
  superhost: boolean
  location: Location
  capacity: {
    people: number
    bedroom: number
  }
  image: string
}
