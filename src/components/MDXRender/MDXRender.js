import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

function MDXRender({ source = '', components = [] }) {
  return <MDXRemote source={source} components={components} />;
}

export default MDXRender;
