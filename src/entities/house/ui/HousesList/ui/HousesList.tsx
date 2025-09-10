import './HousesList.scss'
import { useEffect } from 'react'
import { useHousesStore } from '@/entities/house/model/store.ts'

const HousesList = () => {
  const { filteredHouses, fetchHouses } = useHousesStore()

  useEffect(() => {
    void fetchHouses()
  }, [fetchHouses])

  return (
    <div className="houses-list">
      <div className="houses-list__inner container">
        <ul className="list">
          {filteredHouses.map((house) => (
            <li key={house.id}>{house.title}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HousesList
