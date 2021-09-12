<template>
  <div class="home-wrapper">
    <div class="md-layout h-full">
      <md-card class="home-wrapper__card">
        <carousel
          class="home-wrapper__carousel"
          :per-page="1"
          loop
          :speed="700"
          :autoplay-timeout="5000"
          :mouse-drag="false"
          navigationEnabled
          navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
          navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
        >
          <slide v-for="(item, index) in carouselImages" :key="index">
            <div class="carousel-caption">
              <span>
                {{ item.title }}
              </span>
            </div>
            <img :src="item.url" alt="carousel1" />
          </slide>
        </carousel>
      </md-card>

      <!-- <div class="md-layout">
          <div class="md-layout-item md-size-16">
            <div class="entry-item"></div>
          </div>
          <div class="md-layout-item md-size-16" />
          <div class="md-layout-item md-size-16">
            <div class="entry-item"></div>
          </div>
          <div class="md-layout-item md-size-16" />
          <div class="md-layout-item md-size-16">
            <div class="entry-item"></div>
          </div>
        </div> -->
      <div class="md-layout-item md-size-10" />
      <div class="md-layout-item md-size-10">
        <div class="entry-item mb none"></div>
        <div class="entry-item mb none"></div>
        <div class="entry-item mb icon1">
          <span class="title">流动人口</span>
        </div>
      </div>
      <div class="md-layout-item md-size-10" />
      <div class="md-layout-item md-size-10">
        <div class="entry-item mb none"></div>
        <div class="entry-item mb none"></div>
        <div class="entry-item mb icon2">
          <span class="title">小区管委会</span>
        </div>
      </div>
      <div class="md-layout-item md-size-10" />
      <div class="md-layout-item md-size-10">
        <div class="entry-item mb none"></div>
        <div class="entry-item mb none"></div>
        <div class="entry-item mb icon3">
          <span class="title">小区服务</span>
        </div>
      </div>
      <div class="md-layout-item md-size-10" />
      <div class="md-layout-item md-size-10">
        <div class="entry-item mb icon4" @click="$router.push('/profile')">
          <span class="title">小区简介</span>
        </div>
        <div class="entry-item mb icon5" @click="$router.push('/prevention')">
          <span class="title">防疫工作</span>
        </div>
        <div class="entry-item mb icon6">
          <span class="title">周边推荐</span>
        </div>
      </div>
      <div class="md-layout-item md-size-10" />
      <div class="md-layout-item md-size-10">
        <div class="entry-item mb icon7" @click="$router.push('/partyBranch')">
          <span class="title">小区党支部</span>
        </div>
        <div class="entry-item mb icon8">
          <span class="title">常住人口</span>
        </div>
        <div class="entry-item mb icon9">
          <span class="title">附近小区</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselImages: [
        {
          title: "东升街道花月街社区",
          url: require("@/assets/img/carousel.png")
        },
        {
          title: "东升街道花月街社区",
          url: require("@/assets/img/carousel.png")
        },
        {
          title: "东升街道花月街社区",
          url: require("@/assets/img/carousel.png")
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.home-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #262529;
  padding: 6% 15% 6% 5%;

  .md-layout {
    position: relative;
  }

  .md-layout-item {
    padding: 0;
  }

  &__card {
    position: absolute;
    width: 50%;
    height: 60%;
    left: 10%;
    margin: 0;
    border-radius: 30px;
  }

  &__carousel {
    width: 100%;
    height: 100%;
    // img {
    //   width: 100%;
    //   height: 60%;
    // }

    ::v-deep .VueCarousel-wrapper {
      border-radius: 30px;
    }

    ::v-deep .VueCarousel-inner {
      height: 100% !important;
    }
  }

  .entry-item {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    cursor: pointer;
    transition: 0.25s;
    &:hover {
      transform: scale(1.1);
    }
    .title {
      width: 100%;
      position: absolute;
      bottom: -32px;
      text-align: center;
      font-size: 12px;
      color: white;
    }
    &.mb {
      margin-bottom: 60%;
    }
    &.none {
      visibility: hidden;
    }
    &.icon1 {
      background: url("../assets/img/home/icon1.png") no-repeat;
      background-size: contain;
    }
    &.icon2 {
      background: url("../assets/img/home/icon2.png") no-repeat;
      background-size: contain;
    }
    &.icon3 {
      background: url("../assets/img/home/icon2.png") no-repeat;
      background-size: contain;
    }
    &.icon4 {
      background: url("../assets/img/home/icon4.png") no-repeat;
      background-size: contain;
    }
    &.icon5 {
      background: url("../assets/img/home/icon5.png") no-repeat;
      background-size: contain;
    }
    &.icon6 {
      background: url("../assets/img/home/icon6.png") no-repeat;
      background-size: contain;
    }
    &.icon7 {
      background: url("../assets/img/home/icon7.png") no-repeat;
      background-size: contain;
    }
    &.icon8 {
      background: url("../assets/img/home/icon8.png") no-repeat;
      background-size: contain;
    }
    &.icon9 {
      background: url("../assets/img/home/icon9.png") no-repeat;
      background-size: contain;
    }
  }
}
</style>
