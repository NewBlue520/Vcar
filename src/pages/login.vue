<template>
  <div>
    登录
    <button tapmode @click="imitateEvent">点击</button>
  </div>
</template>

<script>
  export default {
    name: "login",
    data(){
      return {

      }
    },
    created(){
    },
    mounted(){
      this.$nextTick(() => {
        // alert(`地址：${location.href}`);
      })
    },
    destroyed(){
      console.log('销毁了登录页')
    },
    methods: {
      imitateEvent(){
        this.$router.push({
          name: 'scan'
        })
      }
    }
  }
</script>

<style scoped>

</style>
