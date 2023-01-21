import { useEffect, useState, useRef } from 'react';
import { createApi } from 'unsplash-js';
import PhotoList from '../PhotoList/PhotoList';
import '../../style/filters.css';
import './BlogPosts.css';

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_TOKEN,
});

const BlogPosts = () => {
  const listRef = useRef(null);
  const [data, setPhotosResponse] = useState(null);

  const handleClick = (className) => {
    const list = listRef.current;
    for (let i = 0; i < list.children.length; i++) {
      list.children[i].classList.remove(
        'filtro-Willow',
        'filtro-Vintage',
        'filtro-Ashby',
        'filtro-Old'
      );
    }
    for (let i = 0; i < list.children.length; i++) {
      list.children[i].classList.add(className);
    }
  };

  useEffect(() => {
    api.search
      .getPhotos({ query: 'dog', orientation: 'landscape' })
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
        <section className="btn-list">
          <button className="btn" onClick={() => handleClick('filtro-Willow')}>
            Willow
          </button>
          <button className="btn" onClick={() => handleClick('filtro-Vintage')}>
            Vintage
          </button>
          <button className="btn" onClick={() => handleClick('filtro-Ashby')}>
            Ashby
          </button>
          <button className="btn" onClick={() => handleClick('filtro-Old')}>
            Old
          </button>
        </section>

        <ul ref={listRef} className="list-grid">
          {data.response.results.map((photo) => (
            <li key={photo.id} className="list-item">
              <PhotoList photo={photo} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default BlogPosts;
