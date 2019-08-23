<template>
  <div class="scan">
    scan
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "scan",
    data() {
      return {
        FNScanner: null
      }
    },
    created() {
      // this.goBack();
      // this.openScan();
      // this.openFrame();
    },
    mounted(){
      this.$nextTick(() => {
        // alert(`地址：${location.href}`);
      })
    },
    destroyed(){
      console.log('销毁了扫码页')
    },
    methods: {
      goBack(){
        api.addEventListener({
          name: 'keyback'
        },  (ret, err) => {
          if (err) return false;
          api.closeFrame({
            name: 'customScanFrame'
          });
          this.FNScanner.closeView();
          this.$router.push({
            name: 'login'
          })
        })
      },
      /**
       * 此处写法是因为vue-router 的模式为默认模式，地址上会自带# openFrame 在loader包上会替换了 /（根路径的地址，打包使用vue-router的正确地址来访问单页面），
       * 该方法访问页面 只能在loader包中可用，测试包或者正式包内部的文件是以静态文件的方式访问，导致单页面地址添加不正确（猜想， 如官方修改地址的添加方式，单页面访问应该不成为问题）
       */
      openFrame(){
        api.openFrame({
          name: 'customScan',
          url: '#/customScan.html', // #/customScan
          rect: {
            x: 0,
            y: 0,
            w: 'auto',
            h: 'auto'
          },
          bgColor: 'rgba(0,0,0,0)',
          bounces: false
        })
      },

      openScan(){
        this.FNScanner = api.require('FNScanner');

        /*this.FNScanner.openView({
          rect: {
            x: 0,
            y: 0,
            w: api.winWidth,
            h: api.winHeight
          },
          autorotation: true
        }, (ret, err) => {
          if (ret) {
            api.bringFrameToFront({
              from: 'customScanFrame'
            });
            console.log(ret);
          } else {
            console.log(err);
          }
        });*/
      },

    }
  }
</script>

<style scoped lang="less">
  .scan{
    height: 100%;
    font-size: 40px;
    text-align: center;
    box-sizing: border-box;
    color: #000;
  }
</style>
