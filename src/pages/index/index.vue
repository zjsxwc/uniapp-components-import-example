<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>

    <view>
      <pp></pp>
      <kk></kk>
      <tt text="fffff"></tt>
      <ppx></ppx>
      <text class="title" @click="up">{{ title }}</text>
    </view>
  </view>
</template>

<script>
import pp from "../../components/pp.vue";
import tt from "../../components/yz-text.vue";
export default {
  components: {
    // 2.注册局部组件
    pp,
    tt,
  },
  data() {
    return {
      title: "Hello",
    };
  },
  onLoad() {},
  methods: {
    up(x) {
      console.log(x);
      this.title += "+";
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
