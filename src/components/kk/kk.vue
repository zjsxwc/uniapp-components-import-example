<template>
  <view>
    <view>
      <text @click="up">{{ title }}</text>
    </view>
  </view>
</template>

<script>
export default {
    name:"pp",
  props: {},
  data() {
    return {
      title: "KK",
    };
  },
  onLoad() {},
  methods: {
    up(x) {
      console.log(x);
      this.title += "!";
    },
  },
};
</script>

<style></style>
