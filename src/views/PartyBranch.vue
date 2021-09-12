<template>
  <div class="party-branch-wrapper pb-50">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <p class="title">
          小区党支部
        </p>
        <p class="sub-title">Community party bran</p>
      </div>
    </parallax>

    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-80 md-xsmall-size-100">
              <h3 class="title">小区党支部</h3>
              <p class="author-info">
                <span class="author">花月街智慧小区</span>
                <span class="date">2020/03/20 09:00</span>
              </p>
              <h5 class="description">
                为完善水务小区管理体系，临时组建若水居党支部，党员组织关系不转接的，经上级党组织批准，成立临时党支部。临时党支部书记、副书记和委员由批准其成立的党组织指定。临时组建的机构撤销后，临时党支部自然撤销。临时党支部主要组织党员开展政治学习，教育、管理、监督党员，对入党积极分子进行教育培养等，一般不发展党员、处分处置党员，不收缴党费，不选举党代表大会代表和进行换届。特定情况不方便学习党员可通过向上级党组织申请，经批复后可进入临时党组织进行任务及学习。
                <br /><br />1. 什么是临时党支部？<br />
                为执行某项任务临时组建的机构，党员组织关系不转接的，经上级党组织批准，可以成立临时党支部。
                临时党支部书记、副书记和委员由批准其成立的党组织指定。
                临时组建的机构撤销后，临时党支部自然撤销。 <br />
                2. 临时党支部可以发展或处分处置党员吗？<br />
                临时党支部主要组织党员开展政治学习，教育、管理、监督党员，对入党积极分子进行教育培养等，一般不发展党员、处分处置党员，不收缴党费，不选举党代表大会代表和进行换届。
              </h5>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-80 md-xsmall-size-100">
              <h4 class="title">党支部组织架构图</h4>
              <img class="w-full" :src="imageUrl" alt="党支部组织架构图" />
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
        background: `url(${require("@/assets/img/header/party-branch.png")}) no-repeat`,
        backgroundSize: "100% 344px"
      },
      imageUrl: require("@/assets/img/party-branch.png")
    };
  }
};
</script>
