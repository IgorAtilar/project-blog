import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

import CodeSnippet from '../CodeSnippet';

function MDXRender({ source = '', components = {} }) {
  return (
    <MDXRemote
      source={source}
      components={{
        ...components,
        pre: CodeSnippet,
      }}
    />
  );
}

export default MDXRender;
