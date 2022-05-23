# Gatsby Typescript template, which uses Styled Tailwind library

## Overall usage

By putting new posts into
`content/posts` directory
as `.md` or `.mdx` files,
You can create new entries,
which are used by Gatsby
to automatically generate static sites.

Please refer to `tailwind-styled-components`
documentation for information about
styling elements by using `styled-components`
syntax and TailwindCSS classes.

Static pages generation is carried out
by using the `createPages` function
inside `gatsby-node.js` file.
Please modify the query there if
You want to expand upon the posts frontmatter,
as well as the layout
(`src/layouts/BlogPostLayout.tsx`).

## Custom aliases

If You want to use aliases for easier imports,
check out the `gatsby-config.js` file
(and `tsconfig.json`) if You want to use plugins based on it,
to define those paths and embrace more @-goodness.

## CI/CD

This template also comes with following pipelines
defined in `.github/workflows`directory:

- `code-quality.yaml`: This one runs ESLint and Typescript
  checkers to catch a plethora of linting and typing errors in Your code.
- `markdown-syntax.taml`: A basic syntax and style check for Markdown files
  with complimentary validation of links embedded inside their contents i.e.
  whether they work or not

For customization of rules used for code and/or Markdown checks, please
refer to `markdownlint.json` and `.eslint*` configuration files.
