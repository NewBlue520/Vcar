<template>
  <div id="app" ref="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    created() {

    },
    mounted() {
      this.$nextTick(() => {
        if (window.api) {
          if (api.statusBarAppearance) {
            this.$refs.app.style.paddingTop = api.safeArea.top + 'px';
            console.log(this.$refs.app.offsetHeight);
          }
        }
      })
    }
  }
</script>

<style lang="less" scoped>
  #app{
    height: 100vh;
    box-sizing: border-box;
  }
</style>
