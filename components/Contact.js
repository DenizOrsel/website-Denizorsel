import React from 'react'
import Title from './Title';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-14">
      <h1 className="text-5xl md:text-9xl font-bold">Deniz Orsel</h1>
      <Title />
      <p className="md:text-4xl font-light">
        <a href="mailto:denizonerorsel@gmail.com" className="hover:underline">
          denizonerorsel@gmail.com
        </a>
      </p>
    </div>
  );
}

export default Contact