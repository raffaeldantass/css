/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og';
import Image from 'next/image';

export const config = {
  runtime: 'edge',
};

export default async function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          color: 'black',
          background: '#f6f6f6',
          width: '100%',
          height: '100%',
          paddingTop: 50,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          width="256"
          height="256"
          alt="exemplo"
          src="exemplo.jpg"
          style={{
            borderRadius: 128,
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
