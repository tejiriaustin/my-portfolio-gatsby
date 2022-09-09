import * as React from 'react';
import type { HeadFC } from 'gatsby';

const IndexPage = () => {
  return <main>Hello There, I'm Tejiri Odiase</main>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Welcome</title>;
