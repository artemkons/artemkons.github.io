import React from 'react'
import Button from "../../components/Button"

import "./our-benefits-page.sass"

const OurBenefitsPage = () => {
  return <div className="our-benefits-page">
    <h1>Наши преимущества</h1>
           <ul>
             <li>Web архитектура</li>
             <li>Маркетплейс</li>
             <li>Collaboration</li>
             <li>Cross-Plattform</li>
             <li>Монетизация</li>
             <li>Динамика</li>
           </ul>
           <Button>Хочу следить за проектом</Button>
  </div>
}

export default OurBenefitsPage
