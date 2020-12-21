import React from "react";
import SkeletonLoading from "./helper/SkeletonLoading/SkeletonLoading";

const ImageCard = ({ images }) => {
  return (
    <>
      {images.hits.map(
        ({ id, webformatURL, user, views, downloads, likes, tags }) => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg" key={id}>
            <SkeletonLoading
              src={webformatURL}
              className="w-full"
              alt={`Photo by {user}`}
            />
            <div className="px-6 py4">
              <div className="font-bold text-purple-500 text-x1 mb2">
                Photo by {user}
              </div>
              <ul>
                <li>
                  <strong>Views: </strong>
                  {views}
                </li>
                <li>
                  <strong>Downloads: </strong>
                  {downloads}
                </li>
                <li>
                  <strong>Likes: </strong>
                  {likes}
                </li>
              </ul>
            </div>
            <div className="px-6 py-4">
              {tags.split(",").map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )
      )}
    </>
  );
};

export default ImageCard;
