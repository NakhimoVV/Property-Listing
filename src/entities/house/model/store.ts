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
    const mergedFilter = { ...filter, ...newFilter }

    const filtered = allHouses.filter((house) => {
      if (mergedFilter.location && house.location !== mergedFilter.location)
        return false
      if (
        mergedFilter.superhost !== undefined &&
        house.superhost !== mergedFilter.superhost
      )
        return false
      if (
        mergedFilter.bedroom &&
        house.capacity.bedroom !== mergedFilter.bedroom
      )
        return false
      return true
    })

    set({ filteredHouses: filtered, filter: mergedFilter })
  },
  // TODO: надо подумать как быть с superhost
  resetFilter: () => {
    const { allHouses } = get()
    set({
      filter: {
        superhost: true,
      },
      filteredHouses: allHouses,
    })
  },
}))
