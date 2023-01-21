/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, useRef } from 'react';
import { createApi } from 'unsplash-js';
import './Food.css';

const api = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_TOKEN,
});

const FoodList = ({ photo }) => {
  const { user, urls, alt_description, description } = photo;

  return (
    <div className="image-container">
      <img alt={alt_description} className="img" src={urls.regular} />
      <p className="title">{user.name}</p>
      <p className="username">{user.username}</p>
    </div>
  );
};

const Food = () => {
  const [data, setPhotosResponse] = useState(null);

  useEffect(() => {
    api.topics
      .getPhotos({ topicIdOrSlug: 'food-drink', perPage: 6 })
      .then((result) => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log('Algo deu errado');
      });
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Insira o Token corretamente!</div>
      </div>
    );
  } else {
    return (
      <div>
        <ul className="list-grid">
          {data.response.results.map((photo) => (
            <li key={photo.id} className="list-item">
              <FoodList photo={photo} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Food;
