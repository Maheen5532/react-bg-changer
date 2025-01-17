import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const ColorChanger = () => {
  // Step 1: Initialize state with a default color
  const [bgColor, setBgColor] = useState('white');

  // Step 2: Create a dropdown with color options
  const handleColorChange = (event) => {
    setBgColor(event.target.value);
  };

  return (
    <body className="flex items-center justify-center border-2 w-full h-screen bg-red-300">
      <div className="p-4 w-96 h-96 border-black border-2 flex flex-col justify-center items-center bg-gray-200 rounded-lg shadow-md">
        <h1 className='uppercase text-3xl mb-8 text-bold'>backgroun changer</h1>
      <label htmlFor="color" className="block text-lg font-semibold mb-2">
        Select a background color:
      </label>
      <select
        id="color"
        onChange={handleColorChange}
        value={bgColor}
        className="p-2 border border-gray-300 rounded-md"
      >
        <option value="plum">Plum</option>
        <option value="lightblue">Light Blue</option>
        <option value="lightgreen">Light Green</option>
        <option value="lightcoral">Light Coral</option>
        <option value="pink">Pink</option>
      </select>
      <div
        className={`mt-6 p-8 text-center text-white font-bold rounded-md transition-colors duration-300`}
        style={{ backgroundColor: bgColor }}
      >
        <p>The background color is: {bgColor}</p>
      </div>
     </div>
   </body>
  );
};

export default ColorChanger;
