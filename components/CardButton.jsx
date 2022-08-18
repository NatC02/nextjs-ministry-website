import PropTypes from 'prop-types'
import Image from 'next/image'

import {stackCard, boxCard, clusterCard} from "../styles/card.module.css"

export default function Card({ title, description, buttonName }) {

  const textAlignCenter = {
    textAlign: 'center'
  }

  return (
    <>
      <section className={stackCard}>
        <cluster-l>
          <box-l>

            <stack-l>
              <h2 role="none" className={boxCard} style={textAlignCenter}>
                {title}
              </h2>
              
              <p className={boxCard}>
                {description}
              </p>
              
              <div className={clusterCard}>
                <button className={boxCard}>
                  {buttonName}
                </button>
              </div>
            </stack-l>
          
          </box-l>
        </cluster-l>
      </section>
    </>
  )
}

// prop validation
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired
}
