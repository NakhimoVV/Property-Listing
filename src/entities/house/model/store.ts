import { create } from 'zustand/react'
import { getHouses } from '@/entities/house/api/getHouses.ts'
import type { House } from '@/entities/house/model/types.ts'
import type { Filter } from '@/widgets/FilterPanel/model/types.ts'
import { applyFilter } from '@/entities/house/model/applyFilter.ts'

type HousesStore = {
  allHouses: House[]
  filteredHouses: House[]
  isLoading: boolean
  fetchHouses: () => Promise<void>
  filter: Filter
  setFilter: (filter: Partial<Filter>) => void
  resetFilter: () => void
}

const initialFilter: Filter = {
  locations: [],
  superhost: true,
  bedroom: undefined,
}

export const useHousesStore = create<HousesStore>((set, get) => ({
  allHouses: [],
  filteredHouses: [],
  isLoading: false,
  filter: initialFilter,

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

    if (JSON.stringify(updatedFilter) === JSON.stringify(filter)) return

    set({
      filteredHouses: applyFilter(allHouses, updatedFilter),
      filter: updatedFilter,
    })
  },

  resetFilter: () => {
    const { allHouses } = get()
    set({
      filter: initialFilter,
      filteredHouses: allHouses,
    })
  },
}))
