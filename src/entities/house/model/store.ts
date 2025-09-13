import { create } from 'zustand/react'
import { getHouses } from '@/entities/house/api/getHouses.ts'
import type { House } from '@/entities/house/model/types.ts'
import type { Filter } from '@/widgets/FilterPanel/model/types.ts'

type HousesStore = {
  allHouses: House[]
  filteredHouses: House[]
  isLoading: boolean
  fetchHouses: () => Promise<void>
  filter: Filter
  setFilter: (filter: Partial<Filter>) => void
}

export const useHousesStore = create<HousesStore>((set, get) => ({
  allHouses: [],
  filteredHouses: [],
  isLoading: false,
  filter: {
    locations: [],
    superhost: true,
  },

  fetchHouses: async () => {
    set({ isLoading: true })
    try {
      const houses = await getHouses()
      set({ allHouses: houses, filteredHouses: houses })
    } catch (error) {
      console.error(error)
    } finally {
      set({ isLoading: false })
    }
  },

  setFilter: (newFilter) => {
    const { allHouses, filter } = get()
    const updatedFilter = { ...filter, ...newFilter }

    const filtered = allHouses.filter((house) => {
      if (
        updatedFilter.locations.length > 0 &&
        !updatedFilter.locations.includes(house.location)
      )
        return false
      if (updatedFilter.superhost && !house.superhost) return false
      if (
        updatedFilter.bedroom &&
        house.capacity.bedroom !== updatedFilter.bedroom
      )
        return false
      return true
    })

    set({ filteredHouses: filtered, filter: updatedFilter })
  },

  resetFilter: () => {
    const { allHouses } = get()
    set({
      filter: {
        locations: [],
        superhost: true,
      },
      filteredHouses: allHouses,
    })
  },
}))
