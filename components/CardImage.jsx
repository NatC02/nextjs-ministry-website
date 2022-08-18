import PropTypes from 'prop-types'
import Image from 'next/image'

import {stackCard, boxCard, coverCard } from "../styles/card.module.css"

export default function CardImage({ image, alt, title, description, buttonName }) {

  const textAlignCenter = {
    textAlign: 'center'
  }

  return (
    <>
      <section className={stackCard}>
          <stack-l>
            
            <div className={coverCard}>
              <frame-l>
                <img src={image} alt={alt} loading="lazy"/>
              </frame-l>
            </div>

            <stack-l>
              <h2 role="none" className={boxCard} style={textAlignCenter}>
                {title}
              </h2>
            </stack-l>

              
            <stack-l>
              <p className={boxCard} style={textAlignCenter}>
                {description}
              </p>
            </stack-l>
              
            <stack-l>
              <cluster-l>
                <center-l>
                  <button className={boxCard}>
                    {buttonName}
                  </button>
                </center-l>
              </cluster-l>
            </stack-l>
          
          </stack-l>
      </section>
    </>
  )
}

// prop validation
CardImage.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired
}