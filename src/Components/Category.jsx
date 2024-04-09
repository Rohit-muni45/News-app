import React from 'react';
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

  return (
    <div>
      <div className='nav'>
        {categories.map((category, index) => (
          <div className='cate' key={index} onClick={() => onSelectCategory(category)}>
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
