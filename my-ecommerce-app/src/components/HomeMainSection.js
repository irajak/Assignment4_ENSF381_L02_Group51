import React, { useEffect, useState } from 'react';
import reviews from '../data/reviews'; 

function HomeMainSection() {
  const [randomReviews, setRandomReviews] = useState([]);

  useEffect(() => {
    const shuffled = [...reviews].sort(() => 0.5 - Math.random());
    setRandomReviews(shuffled.slice(0, 2));
  }, []);

  return (
    <div className="home-main-section">
      <section>
        <h2>About Us</h2>
        <p>Welcome to our online store! We are passionate about providing high-quality products and exceptional customer service.</p>
        <button className="shop-now">Shop Now</button>
      </section>
      <section className="customer-reviews">
        <h2>Customer Reviews</h2>
        {randomReviews.map((review, index) => (
          <div key={index} className="review">
            <h4>{review.customerName}</h4>
            <p>{review.reviewContent}</p>
            <p className="rating">{'⭐'.repeat(review.stars)}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home
