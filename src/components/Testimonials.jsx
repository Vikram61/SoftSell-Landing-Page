
import React from 'react'
import './Testimonials.css'
const Testimonials = () => {

    const reviews=[
        {
            name:'Alluri Seetha RamaRaju',
            role:'IT Manager',
            company:'Google',
            text: 'SoftSell made it easy to offload unused licenses. Fast and reliable service!',
        },
        {
            name:'Roy Mustang',
            role: 'Procurement Head',
            company: 'ByteWorks',
            text: 'We recovered value from old software we thought was worthless. Highly recommend!',
        },
    ]
  return (
    <div>
      <section className="testimonials">
        <h2 className="testimonial-title">What Our Customers Say</h2>
        <div className="testimonial-cards">
            {
                reviews.map((review,index)=>(
                    <div  key={index} className="testimonial-card">
                    <p className="testimonial-text">"{review.text}"</p>
                    <div className="testimonial-author">
                        <strong>{review.name}</strong>, {review.role} at {review.company} 
                    </div>
                    </div>
                ))
            }
        </div>
      </section>
    </div>
  )
}

export default Testimonials
