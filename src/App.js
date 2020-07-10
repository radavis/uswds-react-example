import React from 'react'
import Card from './Card'
import Accordion from './Accordion'

const App = () => (
  <>
    <Card
      title="USWDS Example Card"
      body="Content goes here."
      footer="Visit Fearless in Baltimore, MD, USA"
    />
    <br />
    <Accordion />
  </>
)

export default App;
