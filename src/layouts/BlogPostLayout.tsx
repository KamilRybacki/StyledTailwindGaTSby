// @ts-nocheck
import React from 'react';
import {Link, graphql, StaticQuery} from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx';

import {PostsThumbnailQuery, Edge} from '@src/graphql-types'

type BlogPostLayoutProps = {
    pageContext: object
}

const BlogPostLayout: React.FunctionComponent<BlogPostLayoutProps> = ({pageContext: context}) => {
  const postsThumbnailsQuery = graphql`
            query PostsThumbnail {
                allFile(filter: {relativePath: {regex: "/thumbnails/posts/"}}) {
                    edges {
                        node {
                            publicURL
                        }
                    }
                }
            }
        `;
  // @ts-ignore
  return (<StaticQuery
    query={postsThumbnailsQuery}
    render={(postsThumbnailsList: PostsThumbnailQuery) => {
      const firstMatchingThumbnail = postsThumbnailsList.allFile.edges.map(
          (edge: Edge) => {
            if (edge.node.publicURL.includes(context.frontmatter.thumbnail)) {
              return edge.node.publicURL;
            }
          },
      )[0];
      return (
        // @ts-ignore
        <article className="p-10 flex flex-col gap-5"> <Link
          to="/posts"
          className="p-2 bg-primary-500 text-secondary-50 font-bold font-display w-fit"
        >
                            Go back to posts
        </Link>
        <h1 className="text-4xl font-bold font-display underline my-5 bg-primary-900 text-secondary-50 p-5 w-fit">
          {context.frontmatter.title}
        </h1>
        {
            context.frontmatter.thumbnail !== 'none' ?
              <img
                className="absolute top-0 left-0 -z-50 opacity-50"
                src={firstMatchingThumbnail}
              /> : ''
        }
        <section className="p-5">
          <MDXRenderer>
            {context.content}
          </MDXRenderer>
        </section>
        </article>
      );
    }}/>
  );
};

export default BlogPostLayout;
