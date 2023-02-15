import React from 'react';

export const ImageContainer = ({
  children,
  x = 20,
  y = 20,
}: {
  children: JSX.Element;
  x: number;
  y: number;
}): JSX.Element => {
  return (
    <div
      style={{
        position: 'absolute',
        top: y,
        left: x,
        height: 40,
        width: 40,
      }}
    >
      {children}
    </div>
  );
};
