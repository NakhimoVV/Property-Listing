import './HousesList.scss'
import { useEffect } from 'react'
import { useHousesStore } from '@/entities/house/model/store.ts'
import HouseCard from '@/entities/house/ui/HousesCard'

const HousesList = () => {
  const { filteredHouses, fetchHouses } = useHousesStore()
  const titleId = 'houses list'

  useEffect(() => {
    void fetchHouses()
  }, [fetchHouses])

  return (
    <section className="houses-list" aria-labelledby={titleId}>
      <div className="houses-list__inner container">
        <h2 className="houses-list__title" id={titleId}>Over 200 stays</h2>
        <ul className="houses-list__body">
          {filteredHouses.map((house) => (
            <li className="houses-list__item" key={house.id}>
              <HouseCard {...house} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default HousesList
