<template>
  <div class="l-wrapper">
    <header class="l-header">
      <router-link class="l-header__link" to="/">Home</router-link>·
      <router-link class="l-header__link" to="/tags/">Tag</router-link>
    </header>
    <DefaultGlobalLayout />
    <footer class="l-footer">
      <p class="copyright">Copyright 2020 nasum</p>
    </footer>
  </div>
</template>

<script>
import GlobalLayout from "@app/components/GlobalLayout.vue";

export default {
  components: { DefaultGlobalLayout: GlobalLayout },
  created() {
    console.log();
  }
};
</script>

<style lang="scss">
html,
body,
#app {
  color: #222;
  height: 100%;
  font-family: "M PLUS 1p";
}
.l-wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.l-header {
  border-bottom: 1px solid #ebebeb;
  padding: 15px;
  &__link {
    text-decoration: none;
  }
}
.l-main {
  padding: 15px;
}
.l-footer {
  padding: 15px;
  margin-top: auto;
  background-color: #f5f5f5;
  .copyright {
    text-align: center;
    font-weight: bold;
  }
}
</style>
