import React from 'react';

import BlogHero from '@/components/BlogHero';
import MDXRender from '@/components/MDXRender';
import { loadBlogPost } from '@/helpers/file-helpers';

import styles from './postSlug.module.css';

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
