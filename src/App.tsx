import '@/shared/styles'
import Hero from '@/widgets/Hero'
import FilterPanel from '@/widgets/FilterPanel'
import HousesList from '@/entities/house/ui/HousesList'

function App() {
  return (
    <>
      <Hero />
      <FilterPanel />
      <HousesList />
    </>
  )
}

export default App
