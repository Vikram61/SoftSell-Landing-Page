import React from 'react'
import './WhyChoose.css'

const WhyChoose = () => {
    const features=[
        {
    icon: '🤝',
    title: 'Trusted Resale Network',
    description: 'We work with a vetted network of buyers and sellers.',
  },
  {
    icon: '⚡',
    title: 'Fast Valuation & Payouts',
    description: 'Get a fair offer and your money in no time.',
  },
  {
    icon: '🔒',
    title: 'Secure Transactions',
    description: 'Your data and deals are protected with top-grade security.',
  },
  {
    icon: '🧑‍💼',
    title: 'Expert Support',
    description: 'Talk to real people who understand your needs.',
  },
    ]
  return (
    <div>
        <section className="why-choose-us">
            <h2  className="why-title">Why Choose Us?</h2>
            <div  className="features">
                {
                features.map((feature,index)=>(
                    <div key={index} className="feature" >
                        <div className="feature-icon"> {feature.icon} </div>
                        <h3>{feature.title} </h3>
                        <p>{feature.description} </p>
                    </div>
                ))
                }
            </div>
        </section>
      
    </div>
  )
}

export default WhyChoose
