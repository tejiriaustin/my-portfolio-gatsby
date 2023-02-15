import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Icon } from './types';

export const OctaCatIcons = ({ width = 90 }): Icon => (
  <>
    <StaticImage
      src="../assets/images/Octicons-mark-github.svg"
      alt="A stuff"
      placeholder="blurred"
      width={90}
    />
  </>
);
