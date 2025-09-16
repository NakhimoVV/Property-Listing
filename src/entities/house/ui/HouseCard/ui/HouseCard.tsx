import './HouseCard.scss'
import type { House } from '@/entities/house/model/types.ts'
import Badge from '@/shared/ui/Badge'
import StarIcon from '@/shared/assets/icons/Starfill.svg?react'
import HomeIcon from '@/shared/assets/icons/Home_duotone.svg?react'
import UserIcon from '@/shared/assets/icons/User_alt_duotone.svg?react'

const HouseCard = (props: Partial<House>) => {
  const { title, description, price, rating, superhost, capacity, image } =
    props
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
        {superhost && (
          <Badge className="house-card__badge" label="Superhost ⭐️" />
        )}
      </header>
      <section className="house-card__body" aria-labelledby={titleId}>
        <h3 className="house-card__title" id={titleId}>
          {title}
        </h3>
        <p className="house-card__description">{description}</p>
        <div className="house-card__capacity">
          <span className="house-card__capacity-item">
            <HomeIcon
              className="house-card__capacity-icon"
              width={24}
              height={24}
            />
            {capacity?.bedroom} bedroom
          </span>
          <span className="house-card__capacity-item">
            <UserIcon
              className="house-card__capacity-icon"
              width={24}
              height={24}
            />
            {capacity?.people} guests
          </span>
        </div>
      </section>
      <footer className="house-card__footer">
        <span className="house-card__price">
          <span>${price}</span>
          /night
        </span>
        <span className="house-card__rating">
          <StarIcon width={24} height={24} />
          {rating}
        </span>
      </footer>
    </a>
  )
}

export default HouseCard
