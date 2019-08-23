<template>
  <div class="page-content-container" id="page">
  </div>
</template>

<script>
  export default {
    name: "customScan",
    data(){
      return {

      }
    },
    mounted(){
      this.$nextTick(() => {
        alert(`地址：${location.href}`);
      })
    },
    methods: {
    }
  }
</script>

<style scoped lang="less">
  [v-cloak] {
    display: none !important;
  }

  html,
  body {
    background-color: transparent;
  }

  .page-content-container {
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    background: url("../assets/image/_scan-bg@ipxm.png") no-repeat center center transparent;
    background-size: 100vw 216.4vw;
    position: fixed;
    top: 0;
    left: 0;

    .page-header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background-color: transparent;

      .header-content {
        position: relative;
        height: 0.95rem;

        .iconfont {
          color: #fff;
          font-size: 0.36rem;
        }

        .icon-back {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 0.3rem;

          .iconfont {
          }
        }

        .toast-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 0.95rem;
          line-height: 0.95rem;

          .toast {
            outline: none;
            padding: 0 0.24rem;
            color: #fff;
            height: 0.5rem;
            font-size: 0.28rem;
            font-weight: 400;
            border: 0 none;
            background-color: #65C3A4;
            border-radius: 0.04rem;
            &.warnToast{
              background-color: #FF7C12;
            }
          }
        }
      }
    }

    .scan-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 68.84vw;
      height: 68.84vw;
      box-sizing: border-box;

      .scan-title {
        white-space: nowrap;
        color: #fff;
        height: 0.42rem;
        line-height: 0.42rem;
        text-align: center;
        font-weight: 400;
        margin-top: -0.76rem;
        font-size: 0.3rem;

        &.codeTip {
          margin-top: -1.18rem;
        }

        .scan-code-tip {
          display: block;
          font-size: 0.3rem;
          line-height: 0.42rem;
          color: #FF7C12;
        }
      }

      .scan-box {
        width: 100%;
        height: 100%;

        .light-btn {
          position: absolute;
          bottom: 0.27rem;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          font-size: 0.24rem;
          color: #E7E7E7;
          line-height: 0.33rem;

          .iconfont {
            font-size: 0.38rem;
            margin-bottom: 0.14rem;
            display: block;
          }

          &.light {
            .iconfont {
              color: #13AC08;
            }
          }
        }
      }

      .scan-btns {
        position: absolute;
        bottom: -2.7rem;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;

        .btn {
          width: 4rem;
          height: 0.8rem;
          line-height: calc(0.8rem - 2px);
          box-sizing: border-box;
          border: 1px solid #65C3A4;
          border-radius: 0.4rem;
          color: #65C3A4;
          font-size: 0.32rem;
          outline: none;

          + .btn {
            margin-top: 0.4rem;
          }

          &.success-btn {
            background-color: #65C3A4;
            box-shadow: 0px 14px 21px 0px rgba(101, 195, 164, 0.3);
            color: #fff;
          }
        }
      }
    }

    .added-source-modal {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, .4);

      .added-source-wrap {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .added-source-content {
          border-radius: 0.1rem;
          overflow: hidden;
          width: 5.4rem;

          .modal-title {
            line-height: 0.89rem;
            height: 0.89rem;
            text-align: center;
            background-color: #65C3A4;
            font-size: 0.32rem;
            font-weight: 500;
            color: #fff;
          }

          .modal-content {
            height: 6.51rem;
            background-color: #fff;
            overflow: hidden;
            overflow-y: auto;

            .code-lists {
              .list {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 0.3rem;
                box-sizing: border-box;
                position: relative;
                height: 0.89rem;

                &:before {
                  content: '';
                  position: absolute;
                  bottom: 0;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 4.8rem;
                  height: 1px;
                  background-color: #E7E7E7;
                }

                span {
                  color: #333;
                  font-size: 0.28rem;
                  font-weight: 400;
                }

                .remove-btn {
                  outline: none;
                  box-sizing: border-box;
                  width: 0.84rem;
                  height: 0.42rem;
                  line-height: calc(0.42rem - 2px);
                  border-radius: 0.21rem;
                  border: 1px solid #999;
                  color: #999999;
                  font-size: 0.26rem;
                  font-weight: 400;
                }
              }
            }
          }
        }

        .modal-close {
          border: 0 none;
          outline: none;
          color: #fff;
          width: 0.8rem;
          height: 0.8rem;
          display: block;
          margin: 0.6rem auto 0;
          text-align: center;

          .iconfont {
            font-size: 0.64rem;
          }
        }
      }
    }
  }

  .scan-animate {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 0.05rem;
      background: url("../assets/image/scan-line_.png")no-repeat;
      background-size: 100% 100%;
      animation: scan 2.5s infinite linear;
    }
  }

  @keyframes scan {
    from {
      top: 0;
    }
    to {
      top: 100%;
    }
  }

</style>
