import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

import CodeSnippet from '../CodeSnippet';
import DivisionGroupsDemo from '../DivisionGroupsDemo';

function MDXRender({ source = '', components = {} }) {
  return (
    <MDXRemote
      source={source}
      components={{
        ...components,
        pre: CodeSnippet,
        DivisionGroupsDemo,
      }}
    />
  );
}

export default MDXRender;
