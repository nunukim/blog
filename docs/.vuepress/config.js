module.exports = {
  title: "nasum's tech memo",
  description: "A blog that collects technical notes written by nasum",
  locales: {
    "/": {
      lang: "ja"
    }
  },
  plugins: [
    [
      "@vuepress/blog",
      {
        directories: [
          {
            id: "Index",
            dirname: "_posts",
            path: "/"
          }
        ],
        frontmatters: [
          {
            id: "tag",
            keys: ["tag", "tags"],
            path: "/tags/",
            layout: "Tag",
            frontmatter: { title: "Tag" },
            pagination: {
              perPagePosts: 10
            }
          }
        ],
        sitemap: {
          hostname: 'https://nasum.dev'
        },
        feed: {
          canonical_base: 'https://nasum.dev'
        }
      }
    ]
  ]
};
