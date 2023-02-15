import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Icon } from './types';

export const HerokuIcon = (): Icon => (
  <>
    <StaticImage
      src="../assets/images/heroku.png"
      alt="A stuff"
      placeholder="blurred"
      width={90}
    />
  </>
);
