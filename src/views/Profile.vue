<template>
  <div class="profile-wrapper pb-50">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <p class="title">
          小区简介
        </p>
        <p class="sub-title">Community profile</p>
      </div>
    </parallax>

    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-80 md-xsmall-size-100">
              <h3 class="title">小区简介</h3>
              <p class="author-info">
                <span class="author">花月街智慧小区</span>
                <span class="date">2020/03/20 09:00</span>
              </p>
              <div class="content-images">
                <img
                  :src="image"
                  alt="Raised Image"
                  class="img-raised rounded"
                />
                <img
                  :src="image"
                  alt="Raised Image"
                  class="img-raised rounded"
                />
              </div>
              <h5 class="description">
                水务小区位于双流区东升街道西安路一段93号，占地约8000余平方米，小区内房屋主体建筑于1988年-1996年间陆续施工完毕，据统计现居住户数为86户，共计211人，小区院内生活环境经由社区2018年进行老旧院落改造，将车位增加至75个，小区内功能性设施较为齐全，拥有居民健身区域，退休人员活动室，非机动车棚。<br />
                2020年花月街社区在区、街道的支持下，对水务小区进行提档升级微更新，打造党建引领示范小区。一是以党建引领，二是融入水务文化，三是共建共治，酝酿出“1+1234”的院落布局和思路，发展出“1+4+N”治理模式。以党建引领，即打造若水驿站，退休支部及若水支部活动载体，体现党的领导。融入水务文化，即打造治水记忆文化墙、邻里话廊、小院墙报，传承治水精神，弘扬家风民风。共建共治，即打造集美花市、垃圾分类智能回收房以及设置共享停车位，调动居民参与院落活动积极性，并从中延伸出四个微项目，即院落文化小组、秩序环保小组、花艺小组及健身养身小组，使得院落居民积极参与小组活动中，带动院内居民参与院落共治。
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerStyle: {
        background: `url(${require("@/assets/img/header/community-profile.png")}) no-repeat`,
        backgroundSize: "100% 344px"
      },
      image: require("@/assets/img/profile.png")
    };
  }
};
</script>

<style lang="scss" scoped>
.profile-wrapper {
  .content-images {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    img {
      width: 48%;
    }
  }
}
</style>
