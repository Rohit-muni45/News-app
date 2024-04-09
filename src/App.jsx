import React, { useState } from 'react';
import News from './Components/News';
import Category from './Components/Category';``
import './Components/Cate.css'
// function App() {
//   const [selectedCategory, setSelectedCategory] = useState('');

//   const handleSelectCategory = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div>
//       <h1>News Today</h1>
//       <Category onSelectCategory={handleSelectCategory} />
//       <News category={selectedCategory} />
//     </div>
//   );
// }

// export default App;


function App() {
  const [selectedCategory, setSelectedCategory] = useState('General');
  const [selectedCountry, setSelectedCountry] = useState('in');

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
   
  };

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };

  const countries = [
    { code: 'us', name: 'United States' },
    { code: 'gb', name: 'United Kingdom' },
    { code: 'in', name: 'India' },
    { code: 'za', name: 'South Africa' },
    { code: 'jp', name: 'Japan' },
    { code: 'ca', name: 'Canada' }
    // Add more countries as needed
  ];

  return (
    <div>
      <h1>News Today</h1>
      <div>
      <Category  onSelectCategory={handleSelectCategory} />
      </div>
      <div className='country'>
        <label>Select Country: </label>
        <select  className='selectcon' value={selectedCountry} onChange={(e) => handleSelectCountry(e.target.value)}>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>{country.name}</option>
          ))}
        </select>
      </div>
      <News category={selectedCategory} country={selectedCountry} />
    </div>
  );
}

export default App;
