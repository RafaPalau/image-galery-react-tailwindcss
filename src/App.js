import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import Loading from "./components/Loading";

function App() {
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchAllImages = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}q=${term}&image_type=photo&pretty=true`
      );
      const json = await response.json();
      setImages(json);
      setIsLoading(false);
    };
    fetchAllImages();
  }, [term]);

  if (images === null) return null;
  if (isLoading) <Loading />;
  return (
    <>
      <div className="container mx-auto">
        <ImageSearch searchText={text => setTerm(text)} />
        {!isLoading && images.total === 0 && (
          <h1 className="text-5xl text-center mx-auto mt-32">
            Nenhuma imagem encontrada
          </h1>
        )}
        {!isLoading && images !== null && (
          <div className="grid grid-cols-3 gap-4">
            <ImageCard images={images} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
