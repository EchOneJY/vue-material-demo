<template>
  <div class="home-wrapper">
    <div class="home-content w-full h-full">
      <md-card class="home-content__card">
        <el-carousel height="100%">
          <el-carousel-item v-for="(item, index) in carousels" :key="index">
            <span class="carousel-title">{{ item.title }}</span>
            <img :src="item.url" :alt="item.title" />
          </el-carousel-item>
        </el-carousel>
      </md-card>
      <div
        class="entry-item"
        :class="`entry-item-${index + 1}`"
        v-for="(item, index) in entrys"
        :key="index"
        @click="$router.push(item.path)"
      >
        <img :src="item.image" :alt="item.title" />
        <span class="title">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carousels: [
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
      ],
      entrys: [
        {
          title: "流动人口",
          image: require("@/assets/img/home/icon1.png"),
          path: "/"
        },
        {
          title: "小区管委会",
          image: require("@/assets/img/home/icon2.png"),
          path: "/"
        },
        {
          title: "小区服务",
          image: require("@/assets/img/home/icon2.png"),
          path: "/"
        },
        {
          title: "小区简介",
          image: require("@/assets/img/home/icon4.png"),
          path: "/profile"
        },
        {
          title: "小区党支部",
          image: require("@/assets/img/home/icon7.png"),
          path: "/partyBranch"
        },
        {
          title: "防疫工作",
          image: require("@/assets/img/home/icon5.png"),
          path: "/prevention"
        },
        {
          title: "常住人口",
          image: require("@/assets/img/home/icon8.png"),
          path: "/"
        },
        {
          title: "周边推荐",
          image: require("@/assets/img/home/icon6.png"),
          path: "/"
        },
        {
          title: "附近小区",
          image: require("@/assets/img/home/icon9.png"),
          path: "/"
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
  background-color: #262529;
  overflow: hidden;
  padding: 5% 12%;

  .home-content {
    background-color: #262529;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: repeat(3, 1fr);
    grid-column-gap: 10%;
    grid-row-gap: 6%;

    &__card {
      grid-column: 1/4;
      grid-row: 1/3;
      margin: 0;
      border-radius: 30px;
      height: 92%;

      ::v-deep .el-carousel {
        height: 100%;
        background-color: #262529;
        border-radius: 30px;

        img {
          border-radius: 30px;
          height: 100%;
        }

        .carousel-title {
          position: absolute;
          bottom: 8px;
          left: 16px;
          font-size: 14px;
          color: white;
        }
      }
    }

    .entry-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      transition: 0.25s;
      &:hover {
        transform: scale(1.05);
      }

      .title {
        margin-top: 6px;
        font-size: 12px;
        color: white;
      }

      &-1 {
        grid-column: 1;
        grid-row: 3;
      }

      &-2 {
        grid-column: 2;
        grid-row: 3;
      }

      &-3 {
        grid-column: 3;
        grid-row: 3;
      }

      &-4 {
        grid-column: 4;
        grid-row: 1;
      }

      &-5 {
        grid-column: 5;
        grid-row: 1;
      }

      &-6 {
        grid-column: 4;
        grid-row: 2;
      }

      &-7 {
        grid-column: 5;
        grid-row: 2;
      }

      &-8 {
        grid-column: 4;
        grid-row: 3;
      }

      &-9 {
        grid-column: 5;
        grid-row: 3;
      }
    }
  }

  @media (max-width: 768px) {
    .home-wrapper {
      padding: 4% 12%;
    }
    .home-content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 35% 1fr 1fr 1fr;
      grid-column-gap: 20%;
      grid-row-gap: 3%;

      &__card {
        grid-column: 1/4;
        grid-row: 1;
      }

      .entry-item {
        &-1 {
          grid-column: 1;
          grid-row: 2;
        }

        &-2 {
          grid-column: 2;
          grid-row: 2;
        }

        &-3 {
          grid-column: 3;
          grid-row: 2;
        }
        &-4 {
          grid-column: 1;
          grid-row: 3;
        }

        &-5 {
          grid-column: 2;
          grid-row: 3;
        }

        &-6 {
          grid-column: 3;
          grid-row: 3;
        }

        &-7 {
          grid-column: 1;
          grid-row: 4;
        }

        &-8 {
          grid-column: 2;
          grid-row: 4;
        }

        &-9 {
          grid-column: 3;
          grid-row: 4;
        }
      }
    }
  }
}
</style>
