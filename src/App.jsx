import React, { useState } from 'react';
import orangeImage from './assets/orange.jpg';
import whiteImage from './assets/white.jpg';
import greenImage from './assets/green.jpg';
import yellowImage from './assets/yellow.jpg';
import blueImage from './assets/blue.jpg';
import pinkImage from './assets/light-pink.jpg';
import blackImage from './assets/black.jpg';
import skyImage from './assets/sky.jpg';

function App() {
  const [background, setBackground] = useState({image: skyImage});

  const setcolor = (image) => {
    setBackground({image});
  };

  return (
    <div>
      <div className='fixed w-full h-screen p-10 duration-700' 
        style={{backgroundColor: background.color, backgroundImage: background.image ? `url(${background.image})` : 'none', backgroundSize: 'cover'}}>
        <h1 className={'pt-10 font-bold  text-8xl text-center text-white'}>
          Welcome to Background Changer
        </h1>

        {/* button set div  */}
        <div className='fixed p-2 inset-x-1 bottom-12 flex flex-wrap justify-center'>
          
          <div className='flex flex-wrap justify-around bg-white rounded-2xl gap-5 shadow-lg px-3 py-2'>
            
            {/* buttons */}
            <button className='bg-orange-500 text-white font-bold rounded-xl px-2 py-1'
              onClick={() => setcolor(orangeImage)}>Orange</button>
            
            <button className='bg-slate-400 text-blue-500 font-bold rounded-xl px-2 py-1'
              onClick={() => setcolor(whiteImage)}>White</button>
            
            <button className='bg-green-500 text-white font-bold rounded-xl px-2 py-1'
              onClick={() => setcolor(greenImage)}>Green</button>
            
            <button className='bg-yellow-400 text-white font-bold rounded-xl px-2 py-1'
              onClick={() => setcolor(yellowImage)}>Yellow</button>
            
            <button className='bg-blue-600 text-white font-bold rounded-xl px-2 py-1'
              onClick={() => setcolor(blueImage)}>Blue</button>
            
            <button className='bg-pink-500 text-white font-bold rounded-xl px-2 py-1'
              onClick={() => setcolor(pinkImage)}>Pink</button>

            <button className='bg-black text-white font-bold rounded-xl px-2 py-1'
              onClick={() => setcolor(blackImage)}>Black</button>

            <button className='bg-blue-400 text-black font-bold rounded-xl px-2 py-1'
              onClick={() => setcolor(skyImage)}>SkyBlue</button>
          
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
