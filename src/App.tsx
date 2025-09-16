import '@/shared/styles'
import Hero from '@/widgets/Hero'
import FilterPanel from '@/widgets/FilterPanel'
import HouseList from '@/entities/house/ui/HouseList'

function App() {
  return (
    <>
      <Hero />
      <FilterPanel />
      <HouseList />
    </>
  )
}

export default App
