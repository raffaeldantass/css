import './PhotoList.css';

const PhotoList = ({ photo }) => {
  const { user, urls, alt_description, description } = photo;

  return (
    <div className="image-container">
      <img alt={alt_description} className="img" src={urls.regular} />
      <a
        className="title"
        target="_blank"
        href={`https://unsplash.com/@${user.username}`}
        rel="noreferrer"
      >
        {user.name}
      </a>
      <p className="description"> {description} </p>
    </div>
  );
};

export default PhotoList;
