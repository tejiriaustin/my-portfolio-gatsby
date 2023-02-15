import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export const AWSIcon = () => {
  return (
    <StaticImage
      src="../assets/images/aws.png"
      alt="GraphQl Icon"
      placeholder="blurred"
      width={90}
    />
  );
};
