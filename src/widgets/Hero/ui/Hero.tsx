import './Hero.scss'

type HeroProps = {}

const Hero = (props: HeroProps) => {
  const {} = props

  return (
    <section className="hero">
      <div className="hero__pano">
        <div className="hero__pano-inner">
          <h1>Peace, nature, dream</h1>
          <p>Find and book a great experience</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
