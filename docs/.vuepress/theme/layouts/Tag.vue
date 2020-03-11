<template>
  <div class="l-main">
    <ul class="c-tag-list">
      <li class="c-tag-list__tag" v-for="tag in $tag.list">
        <router-link class="page-link" :to="tag.path">{{
          tag.name
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

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
</style>
