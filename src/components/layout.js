import React from 'react';
import { MDXProvider } from '@mdx-js/tag';

const components = {};

export default ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
