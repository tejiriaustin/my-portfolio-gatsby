import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Icon } from './types';

export const GitIcon = (): Icon => (
  <>
    <StaticImage
      src="../assets/images/18133.png"
      alt="A stuff"
      placeholder="blurred"
      width={90}
    />
  </>
);
