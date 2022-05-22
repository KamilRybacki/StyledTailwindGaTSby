// @ts-nocheck 
import React from 'react';
import {Link, graphql, StaticQuery} from 'gatsby';

import {PostsQuery, Node} from '@src/graphql-types';

const postsQuery = graphql`
  query Posts {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
          thumbnail
        }
        slug
      }
    }
  }
`;

const PostsPage = () => {
  return (
    <>
      <main className="p-7">
        <h1 className="mb-10 my-5 font-bold text-4xl underline">Posts list</h1>
        <StaticQuery
          query={postsQuery}
          render={(queryResult: PostsQuery) => {
            const posts = queryResult.allMdx.nodes;
            return (
              posts.map((post: Node) => {
                return (<Link to={`/posts/${post.slug}`} key={post.slug}>{post.frontmatter.title}</Link>);
              })
            );
          }}
        />
      </main>
    </>
  );
};

export default PostsPage;
