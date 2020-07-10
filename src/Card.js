import React from 'react'

// https://designsystem.digital.gov/components/card/

const Card = ({ title, body, footer }) => (
  <div className="usa-card__container">
    <header className="usa-card__header">
      <h2 className="usa-card__heading">{title}</h2>
    </header>
    <div className="usa-card__body">
      <p>{body}</p>
    </div>
    <div className="usa-card__footer">
      <button className="usa-button">{footer}</button>
    </div>
  </div>
)

export default Card
