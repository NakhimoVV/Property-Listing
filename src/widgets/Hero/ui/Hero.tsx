import './Hero.scss'

const Hero = () => {
  const titleId = 'hero-title'

  return (
    <section className="hero" aria-labelledby={titleId}>
      <div className="hero__pano">
        <div className="hero__pano-inner">
          <h1 className="hero__title" id={titleId}>Peace, nature, dream</h1>
          <p className="hero__subtitle">Find and book a great experience</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
