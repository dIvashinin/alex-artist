import React, { useState } from "react";
// import ImageGallery from "react-image-gallery";
import ImageModal from "./ImageModal";
import MasonryItem from "./MasonryItem";
import "bootstrap/dist/css/bootstrap.min.css";

// import "react-image-gallery/styles/css/image-gallery.css";

function ArtPage() {
  const url =
    "https://res.cloudinary.com/dzghua4dz/image/upload/v1714764179/alex/lgpxiysxcdolegrl4j4w.jpg";
  const url4 =
    "https://res.cloudinary.com/dzghua4dz/image/upload/v1714764179/alex/ql5ece14ucdokv8hrygf.jpg";
  const url2 =
    "https://res.cloudinary.com/dzghua4dz/image/upload/v1714764179/alex/bxu86x1yazkf262kbc0y.jpg";
  const url3 =
    "https://res.cloudinary.com/dzghua4dz/image/upload/v1714764179/alex/e3pdkdekzmvpn17hjmyr.jpg";

    const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleShowModal = (imageUrl) => {
    setCurrentImage(imageUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentImage('');
  };

  /* image gallery works but this is not the way i want it */

  // const images = [
  //   {original: url, thumbnail: url,
  //   },
  //   {original: url4, thumbnail: url4,
  //   },
  //   {original: url2, thumbnail: url2,
  //   },
  //   {original: url3, thumbnail: url3,
  //   },
  // ];

  return (

    <div className="art-page-main-container">
      <div className="masonry-grid">
        <MasonryItem url={url} onClick={handleShowModal} />
        <MasonryItem url={url4} onClick={handleShowModal} />
        <MasonryItem url={url2} onClick={handleShowModal} />
        <MasonryItem url={url3} onClick={handleShowModal} />
        <MasonryItem url={url} onClick={handleShowModal} />
        <MasonryItem url={url4} onClick={handleShowModal} />
        <MasonryItem url={url2} onClick={handleShowModal} />
        <MasonryItem url={url3} onClick={handleShowModal} />
        <MasonryItem url={url} onClick={handleShowModal} />
        <MasonryItem url={url4} onClick={handleShowModal} />
        <MasonryItem url={url2} onClick={handleShowModal} />
        <MasonryItem url={url3} onClick={handleShowModal} />
        <MasonryItem url={url} onClick={handleShowModal} />
        <MasonryItem url={url4} onClick={handleShowModal} />
        <MasonryItem url={url2} onClick={handleShowModal} />
        <MasonryItem url={url3} onClick={handleShowModal} />
        <MasonryItem url={url} onClick={handleShowModal} />
        <MasonryItem url={url4} onClick={handleShowModal} />
        <MasonryItem url={url2} onClick={handleShowModal} />
        <MasonryItem url={url3} onClick={handleShowModal} />
        <MasonryItem url={url} onClick={handleShowModal} />
        <MasonryItem url={url4} onClick={handleShowModal} />
        <MasonryItem url={url2} onClick={handleShowModal} />
        <MasonryItem url={url3} onClick={handleShowModal} />
        <MasonryItem url={url} onClick={handleShowModal} />
        <MasonryItem url={url4} onClick={handleShowModal} />
        <MasonryItem url={url2} onClick={handleShowModal} />
        <MasonryItem url={url3} onClick={handleShowModal} />
        <MasonryItem url={url} onClick={handleShowModal} />
        <MasonryItem url={url4} onClick={handleShowModal} />
        <MasonryItem url={url2} onClick={handleShowModal} />
        <MasonryItem url={url3} onClick={handleShowModal} />
        
        {/* Add more MasonryItem components as needed */}
      </div>
      <ImageModal show={showModal} handleClose={handleCloseModal} imageUrl={currentImage} />
    </div>

  //   <div className="art-page-main-container">
  //     <div class="masonry-item">
  //       <img src={url} className="pic" alt="pic" />
  //     </div>
  //     <div class="masonry-item">
  //       <img src={url4} className="pic4" alt="pic" />
  //     </div>
  //     <div class="masonry-item">
  //       <img src={url2} className="pic2" alt="pic" />
  //     </div>
  //     <div class="masonry-item">
  //       <img src={url3} className="pic3" alt="pic" />
  //     </div>
  //     <div class="masonry-item">
  //       <img src={url} className="pic" alt="pic" />
  //     </div>
  //     <div class="masonry-item">
  //       <img src={url4} className="pic4" alt="pic" />
  //     </div>
  //     <div class="masonry-item">
  //       <img src={url2} className="pic2" alt="pic" />
  //     </div>
  //     <div class="masonry-item">
  //       <img src={url3} className="pic3" alt="pic" />
  //     </div>
  //     <div class="masonry-item">
  //       <img src={url} className="pic" alt="pic" />
  //     </div>
  //     <div class="masonry-item">
  //       <img src={url4} className="pic4" alt="pic" />
  //     </div>
  //     <div class="masonry-item">
  //       <img src={url2} className="pic2" alt="pic" />
  //     </div>
  //     <div class="masonry-item">
  //       <img src={url3} className="pic3" alt="pic" />
  //     </div>
  //     <div class="masonry-item">
  //       <img src={url} className="pic" alt="pic" />
  //     </div>
  //     <div class="masonry-item">
  //       <img src={url4} className="pic4" alt="pic" />
  //     </div>
  //     <div class="masonry-item">
  //       <img src={url2} className="pic2" alt="pic" />
  //     </div>
  //     <div class="masonry-item">
  //       <img src={url3} className="pic3" alt="pic" />
  //     </div>
  //     <div class="masonry-item">
  //       <img src={url} className="pic" alt="pic" />
  //     </div>
  //     <div class="masonry-item">
  //       <img src={url4} className="pic4" alt="pic" />
  //     </div>
  //     <div class="masonry-item">
  //       <img src={url2} className="pic2" alt="pic" />
  //     </div>
  //     <div class="masonry-item">
  //       <img src={url3} className="pic3" alt="pic" />
  //     </div>
  //     <div class="masonry-item">
  //       <img src={url} className="pic" alt="pic" />
  //     </div>
  //     <div class="masonry-item">
  //       <img src={url4} className="pic4" alt="pic" />
  //     </div>
  //     <div class="masonry-item">
  //       <img src={url2} className="pic2" alt="pic" />
  //     </div>
  //     <div class="masonry-item">
  //       <img src={url3} className="pic3" alt="pic" />
  //     </div>

  //     {/* image gallery works but this is not the way i want it */}
  //     {/* <ImageGallery items={images} /> */}
  //   </div>
  );
}
export default ArtPage;
