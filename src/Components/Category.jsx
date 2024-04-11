import React, { useState } from 'react';
import './Cate.css'

const Category = ({ onSelectCategory }) => {
  const categories = [
    'General',
    'Business',
    'Technology',
    'Health',
    'Science',
    'Entertainment',
    'Sports',
  ];

const [activeCate, setActiveCate] = useState()

const handleClick = (category) => {
  onSelectCategory(category)
  setActiveCate(category)
}

  return (
    <div>
      <div className='nav'>
        {categories.map((category, index) => (
          <div 
            className={`cate ${activeCate === category ? 'active' : ''}`}
            key={index} 
            onClick={() => handleClick(category)}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
