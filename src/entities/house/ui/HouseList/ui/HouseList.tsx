import './HouseList.scss'
import { useEffect } from 'react'
import { useHousesStore } from '@/entities/house/model/store.ts'
import HouseCard from '@/entities/house/ui/HouseCard'

const HouseList = () => {
  const { filteredHouses, fetchHouses } = useHousesStore()
  const titleId = 'houses list'

  useEffect(() => {
    void fetchHouses()
  }, [fetchHouses])

  return (
    <section className="house-list" aria-labelledby={titleId}>
      <div className="house-list__inner container">
        <h2 className="house-list__title" id={titleId}>
          Over 200 stays
        </h2>
        <ul className="house-list__body">
          {filteredHouses.map((house) => (
            <li className="house-list__item" key={house.id}>
              <HouseCard {...house} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default HouseList
