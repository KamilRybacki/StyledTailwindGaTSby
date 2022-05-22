module.exports.createPages = async ({graphql, actions, reporter}) => {
  const {createPage} = actions;

  const postsResult = await graphql(`
      {
        allMdx(
            sort: {fields: [frontmatter___date]}
            filter: {fileAbsolutePath: {regex: "/\/posts\//"}}
        ) {
            edges {
                node {
                    frontmatter {
                        date(formatString: "MM/DD/YYYY")
                        title
                        tags
                        thumbnail
                    }
                    slug
                    timeToRead
                    body
                }
            }
        }
    }`);

  if (postsResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  postsResult.data.allMdx.edges.forEach(({node}) => {
    const path = `/posts/${node.slug}`;
    createPage({
      path,
      component: require.resolve('./src/layouts/BlogPostLayout.tsx'),
      context: {
        pagePath: path,
        frontmatter: {
          title: node.frontmatter.title,
          date: node.frontmatter.date,
          tags: node.frontmatter.tags.split(' ') || [],
          time: node.timeToRead,
          thumbnail: node.frontmatter.thumbnail,
        },
        content: node.body,
      }});
  });
};
