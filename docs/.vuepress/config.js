module.exports = {
  title: "nasum's tech memo",
  description: "A blog that collects technical notes written by nasum",
  locales: {
    "/": {
      lang: "ja"
    }
  },
  head: [
    [
      "meta",
      { name: "google-site-verification", content: process.env.G_SEARCH }
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css?family=M+PLUS+1p",
        rel: "stylesheet"
      }
    ]
  ],
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
          hostname: "https://nasum.dev"
        },
        feed: {
          canonical_base: "https://nasum.dev"
        }
      }
    ],
    [
      "@vuepress/google-analytics",
      {
        ga: process.env.GA
      }
    ]
  ]
};
