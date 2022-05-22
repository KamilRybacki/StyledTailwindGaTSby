# Gatsby Typescript template, which uses Styled Tailwind library

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
