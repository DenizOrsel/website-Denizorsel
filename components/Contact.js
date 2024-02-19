import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl md:text-9xl font-bold">Deniz Orsel</h1>
      <p className="md:text-4xl font-light">
        <a href="mailto:denizonerorsel@gmail.com" className="hover:underline">
          denizonerorsel@gmail.com
        </a>
      </p>
    </div>
  );
}

export default Contact