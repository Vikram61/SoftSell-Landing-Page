import React from 'react'
import './How.css'



const How = () => {
  const steps = [
  {
    icon: '📤',
    title: 'Upload License',
    description: 'Provide details about your unused software licenses.',
  },
  {
    icon: '📈',
    title: 'Get Valuation',
    description: 'We evaluate your licenses and give you the best offer.',
  },
  {
    icon: '💸',
    title: 'Get Paid',
    description: 'Accept the offer and receive your payment securely.',
  },
 ];
  return (
    <div>
      <section className="how-it-works">
      <h2 className="how-title">How It Works</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
      </section>
    </div>
  )
}

export default How

