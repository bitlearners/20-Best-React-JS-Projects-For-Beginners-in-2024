import React, { useState } from "react";
import "./Style.css";

function App() {
  const [currentImage, setCurrentImage] = useState(0);

  const imageData = [
    "https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1701962541409-e2c1256a8574?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % imageData.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevIndex) => (prevIndex - 1 + imageData.length) % imageData.length
    );
  };

  const selectImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Image Slider in React</h1>
      <div className="relative">
        <img
          src={imageData[currentImage]}
          alt={`Image ${currentImage + 1}`}
          className="rounded-lg shadow-lg mb-4"
        />

        <button
          onClick={nextImage}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-l-md"
        >
          Next
        </button>

        <button
          onClick={prevImage}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-r-md"
        >
          Prev
        </button>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 space-x-2">
          {imageData.map((_, index) => (
            <span
              key={index}
              onClick={() => selectImage(index)}
              className={`h-4 w-4 bg-white rounded-full inline-block cursor-pointer ${
                index === currentImage ? "bg-blue-500" : ""
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
