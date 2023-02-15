import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `my-portfolio-gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },

  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
  ],
};

export default config;
