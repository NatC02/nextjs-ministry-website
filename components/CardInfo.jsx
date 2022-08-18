import PropTypes from 'prop-types'
import Image from 'next/image'

import {stackCard, boxCard} from "../styles/card.module.css"

export default function CardInfo({ title, description }) {
  
  const textAlignCenter = {
    textAlign: 'center'
  }

  return (
    <>
      <section className={stackCard}>
        <cluster-l>
          <box-l>
            <stack-l>

              <center-l>
                <h2 role="none" className={boxCard}>
                    {title}
                </h2>
              </center-l>
            
              <center-l>
                <p 
                // use textAlignCenter object to center the text for the className property
                className={boxCard} style={textAlignCenter}
                >
                  {description}
                </p>
              </center-l>
            
            </stack-l>
          </box-l>
        </cluster-l>
      </section>
    </>
  )
}

// prop validation
CardInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}