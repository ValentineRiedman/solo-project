import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h2>About Us</h2>
        <p className="about">With help from The National Weather Service and mother nature, our app hopes to assist even the most novice green 
          thumb to grow their very own dream garden. Just to make salsa. Your dreams are all about salsa. Salsa.</p>
      </div>
    </div>
  );
}

export default AboutPage;
