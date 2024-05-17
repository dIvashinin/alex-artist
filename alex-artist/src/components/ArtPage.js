import React from "react";

function ArtPage() {
  const url =
    "https://res.cloudinary.com/dzghua4dz/image/upload/v1714764179/alex/lgpxiysxcdolegrl4j4w.jpg";
  const url4 =
    "https://res.cloudinary.com/dzghua4dz/image/upload/v1714764179/alex/ql5ece14ucdokv8hrygf.jpg";
  const url2 =
    "https://res.cloudinary.com/dzghua4dz/image/upload/v1714764179/alex/bxu86x1yazkf262kbc0y.jpg";
  const url3 =
    "https://res.cloudinary.com/dzghua4dz/image/upload/v1714764179/alex/e3pdkdekzmvpn17hjmyr.jpg";
  return (
    <div className="art-page-main-container">
      <div class="masonry-item"><img src={url} className="pic" alt="pic" /></div>
      <div class="masonry-item"><img src={url4} className="pic4" alt="pic" /></div>
      <div class="masonry-item"><img src={url2} className="pic2" alt="pic" /></div>
      <div class="masonry-item"><img src={url3} className="pic3" alt="pic" /></div>
      <div class="masonry-item"><img src={url} className="pic" alt="pic" /></div>
      <div class="masonry-item"><img src={url4} className="pic4" alt="pic" /></div>
      <div class="masonry-item"><img src={url2} className="pic2" alt="pic" /></div>
      <div class="masonry-item"><img src={url3} className="pic3" alt="pic" /></div>
      <div class="masonry-item"><img src={url} className="pic" alt="pic" /></div>
      <div class="masonry-item"><img src={url4} className="pic4" alt="pic" /></div>
      <div class="masonry-item"><img src={url2} className="pic2" alt="pic" /></div>
      <div class="masonry-item"><img src={url3} className="pic3" alt="pic" /></div>
      <div class="masonry-item"><img src={url} className="pic" alt="pic" /></div>
      <div class="masonry-item"><img src={url4} className="pic4" alt="pic" /></div>
      <div class="masonry-item"><img src={url2} className="pic2" alt="pic" /></div>
      <div class="masonry-item"><img src={url3} className="pic3" alt="pic" /></div>
      <div class="masonry-item"><img src={url} className="pic" alt="pic" /></div>
      <div class="masonry-item"><img src={url4} className="pic4" alt="pic" /></div>
      <div class="masonry-item"><img src={url2} className="pic2" alt="pic" /></div>
      <div class="masonry-item"><img src={url3} className="pic3" alt="pic" /></div>
      <div class="masonry-item"><img src={url} className="pic" alt="pic" /></div>
      <div class="masonry-item"><img src={url4} className="pic4" alt="pic" /></div>
      <div class="masonry-item"><img src={url2} className="pic2" alt="pic" /></div>
      <div class="masonry-item"><img src={url3} className="pic3" alt="pic" /></div>
    </div>
  );
}

export default ArtPage;
