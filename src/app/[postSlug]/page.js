import React from 'react';

import BlogHero from '@/components/BlogHero';
import MDXRender from '@/components/MDXRender';
import { loadBlogPost } from '@/helpers/file-helpers';
import { BLOG_TITLE } from '@/constants';

import styles from './postSlug.module.css';

export async function generateMetadata({ params: { postSlug } }) {
  const {
    frontmatter: { title, abstract },
  } = await loadBlogPost(postSlug);

  return {
    title: `${title} • ${BLOG_TITLE}`,
    description: abstract,
  };
}

async function BlogPost({ params: { postSlug } }) {
  const {
    content,
    frontmatter: { title, publishedOn },
  } = await loadBlogPost(postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero title={title} publishedOn={publishedOn} />
      <div className={styles.page}>
        <MDXRender source={content} />
      </div>
    </article>
  );
}

export default BlogPost;
