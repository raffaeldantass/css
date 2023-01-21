/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, useRef } from 'react';
import './logo.css';

const Logo = () => {
  const [data, setPhotosResponse] = useState(null);

  return (
    <ul className="list-grid">
      <li>
        <img
          alt="exemplo"
          className="img"
          src="https://iotusecase.com/wp-content/uploads/2022/07/aws.jpg"
        />
      </li>
      <li>
        <img
          alt="exemplo"
          className="img"
          src="https://milionarioz.com.br/wp-content/uploads/2022/04/historia-da-Apple-1-1.png"
        />
      </li>
      <li>
        <img
          alt="exemplo"
          className="img"
          src="http://2.bp.blogspot.com/-PkNbuZ2OwiM/T9JXSYSPxcI/AAAAAAAABd4/J_kLFNSiFK8/s320/new-twitter-logo.jpg"
        />
      </li>
    </ul>
  );
};

export default Logo;
