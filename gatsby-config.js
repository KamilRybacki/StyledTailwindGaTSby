module.exports = {
  siteMetadata: {
    title: 'Your site',
    siteUrl: 'https://example.com',
  },
  plugins: [
    'gatsby-plugin-styled-components', 'gatsby-plugin-image',
    'gatsby-plugin-sharp', 'gatsby-transformer-sharp', 'gatsby-plugin-postcss',
    'gatsby-plugin-graphql-codegen',
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          // YOUR ALIASES HERE
        },
        extensions: ['js', 'ts', 'tsx', 'jsx'],
      },
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        'name': 'images',
        'path': './assets/images/',
      },
      __key: 'images',
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        'name': 'pages',
        'path': './src/pages/',
      },
      __key: 'pages',
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        'name': 'posts',
        'path': './content/posts/',
      },
      __key: 'posts',
    }, {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          posts: require.resolve('./src/layouts/BlogPostLayout.tsx'),
        },
        extensions: ['.mdx', '.md'],
      },
    }],
};
