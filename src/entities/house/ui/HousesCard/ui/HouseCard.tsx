import './HouseCard.scss'
import type { House } from '@/entities/house/model/types.ts'

// type HouseCardProps = {
//   title,
//   description,
//   price,
//   rating,
//   superhost,
//   location,
//   capacity,
//   image
// }

const HouseCard = (props: Partial<House>) => {
  const {
    title,
    description,
    price,
    rating,
    capacity,
    image
  } = props
const titleId = `${title}-title`

  return (
    <a className="house-card">
      <header className="house-card__header">
        <img
          className="house-card__image"
          src={image}
          alt=""
          width="357px"
          height="200px"
          loading="lazy"
        />
      </header>
      <section className="house-card__body" aria-labelledby={titleId}>
        <h3 className="house-card__title" id={titleId}>{title}</h3>
        <p className="house-card__description">
          {description}
        </p>
        <div className="house-card__capacity">
          <span className="house-card__bedroom">{capacity?.bedroom} bedroom</span>
          <span className="house-card__people">{capacity?.people} guests</span>
        </div>
      </section>
      <footer className="house-card__footer">
        <span className="house-card__price">{price}</span>
        <span className="house-card__rating">{rating}</span>
      </footer>
    </a>
  )
}

export default HouseCard
