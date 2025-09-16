import type { House } from '@/entities/house/model/types.ts'
import type { Filter } from '@/widgets/FilterPanel/model/types.ts'

export const applyFilter = (houses: House[], filter: Filter) => {
  return houses.filter((house) => {
    if (
      filter.locations.length > 0 &&
      !filter.locations.includes(house.location)
    ) {
      return false
    }
    if (!filter.superhost && house.superhost) {
      return false
    }
    return !(filter.bedroom && house.capacity.bedroom !== filter.bedroom)
  })
}
