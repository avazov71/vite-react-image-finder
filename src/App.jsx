import { useState, useEffect } from "react";
import "./App.css";
import { fetchData } from "./api/fetchData";
import ImageGallery from "./components/ImageGallery";
import Searchbar from "./components/Searchbar";
import NotFound from "./components/NotFound";
import Modal from "./components/Modal";
import Button from "./components/Button";
import arrow from "./assets/arrowv.png";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("nature");
  const [largeImg, setLargeImg] = useState(null);
  const [pages, setPages] = useState(1);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    fetchData(query, pages).then((data) => setImages(data.hits));
  }, [query]);
  useEffect(() => {
    if (pages > 1) {
      fetchData(query, pages).then((data) =>
        setImages([...images, ...data.hits])
      );
    }
  }, [query, pages]);

  const handleQuery = (search) => {
    setImages("");
    setQuery(search);
  };

  const handleLargeImg = (image) => {
    setLargeImg(image);
  };
  const handleDelete = () => {
    setLargeImg(null);
  };

  const handleLoadMore = () => {
    setPages(pages + 1);
  };

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  window.addEventListener("scroll", (event) => {
    setScroll(true);
  });

  return (
    <main className="App">
      <Searchbar handleQuery={handleQuery} />
      {images.length > 0 ? (
        <>
          <ImageGallery images={images} handleLargeImg={handleLargeImg} />
          <Button handleLoadMore={handleLoadMore} />
          {scroll ? (
            <button className="scroll" onClick={handleScroll}>
              <img src={arrow} alt="arrow" />
            </button>
          ) : (
            ""
          )}
        </>
      ) : (
        <NotFound />
      )}

      {largeImg ? (
        <Modal largeImg={largeImg} handleDelete={handleDelete} />
      ) : (
        ""
      )}
    </main>
  );
};

export default App;
