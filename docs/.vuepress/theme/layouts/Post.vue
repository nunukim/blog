<template>
  <div class="c-article-main">
    <ul class="c-tag-list">
      <li class="c-tag-list__tag" v-for="tag in $frontmatter.tag">
        <router-link class="page-link" :to="`/tags/${tag}/`">
          {{
          tag
          }}
        </router-link>
      </li>
    </ul>
    <Content />
  </div>
</template>

<style src="prism-themes/themes/prism-dracula.css"></style>
<style lang="scss">
.c-tag-list {
  display: flex;
  flex-direction: row;
  list-style: none;
  padding-bottom: 6px;

  &__tag {
    padding: 4px;
    border: 1px solid #d8dadb;
    border-radius: 5px;
    margin-right: 4px;
    a {
      color: #222;
      text-decoration: none;
    }
  }
}
.c-article-main {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 15px 5px;
  h1 {
    margin-bottom: 16px;
  }
  h2 {
    margin: 10px 0;
  }
  h3 {
    margin: 10px 0;
  }
  p {
    line-height: 30px;
  }
  ol {
    margin-left: 48px;
    li {
      line-height: 24px;
    }
  }
  img {
    max-width: 100%;
    width: auto;
    border: 1px solid #282a36;
    border-radius: 0.3rem;
  }
}
</style>
