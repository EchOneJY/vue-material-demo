<template>
  <div class="welcome-wrapper">
    <div class="welcome-wrapper__content">
      <img :src="titleImage" class="welcome-wrapper__title" />
      <md-button class="welcome-wrapper__btn md-primary" @click="handleGoHome"
        >进入首页</md-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleImage: require("@/assets/img/welcom-title.png")
    };
  },
  methods: {
    handleGoHome() {
      this.$router.push("/home");
    }
  }
};
</script>

<style lang="scss" scoped>
.welcome-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("../assets/img/welcome-bg.png") no-repeat center;
  background-size: cover;

  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  &__title {
    width: 589px;
    height: 88px;
  }

  &__btn {
    display: block;
    margin: 10% auto 0;
    width: 180px;
    height: 40px;
    font-size: 14px;
  }
}
</style>
