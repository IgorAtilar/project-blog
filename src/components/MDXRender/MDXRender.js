import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

import CodeSnippet from '../CodeSnippet';
import DivisionGroupsDemo from '../DivisionGroupsDemo';
import CircularColorsDemo from '../CircularColorsDemo';

function MDXRender({ source = '', components = {} }) {
  return (
    <MDXRemote
      source={source}
      components={{
        ...components,
        pre: CodeSnippet,
        DivisionGroupsDemo,
        CircularColorsDemo,
      }}
    />
  );
}

export default MDXRender;
