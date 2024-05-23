import React from "react";

const MasonryItem = ({ url, onClick }) => {
  return (
    <div className="masonry-item" onClick={() => onClick(url)}>
      <img
        src={url}
        className="pic"
        alt="pic"
        // style={{ width: '100%', cursor: 'pointer' }}
      />
    </div>
  );
};

export default MasonryItem;
