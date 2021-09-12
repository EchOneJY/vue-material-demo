<template>
  <div class="prevention-wrapper pb-50">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <p class="title">
          防疫工作
        </p>
        <p class="sub-title">Epidemic prevention</p>
      </div>
    </parallax>

    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-80 md-xsmall-size-100">
              <h3 class="title">防疫工作</h3>
              <p class="author-info">
                <span class="author">花月街智慧小区</span>
                <span class="date">2020/03/20 09:00</span>
              </p>
              <el-alert
                title="防疫通知"
                type="warning"
                description="为全面做好新型冠状病毒感染的肺炎疫情防控督查工作，切实保障人民群众身体健康和生命安全，全面打赢新型冠状病毒感染肺炎病情联防联控这场阻击战，水务小区迅速行动、主动担当、多措并举，全力做好疫情防控督查工作。"
                show-icon
                :closable="false"
              >
              </el-alert>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-80 md-xsmall-size-100">
              <h4 class="title mt-30">防疫工作统计</h4>
              <div class="prevention-statistics">
                <div class="item left">
                  <span class="num red">4</span>
                  <span class="name">未接种人数</span>
                </div>
                <div class="item center">
                  <span class="num">237</span>
                  <span class="name">已接种人数</span>
                </div>
                <div class="item right">
                  <span class="num">241</span>
                  <span class="name">总人数</span>
                </div>
              </div>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-80 md-xsmall-size-100">
              <h4 class="title mt-30">接种人员详情</h4>
              <el-table
                :data="tableData"
                style="width: 100%"
                :header-cell-style="{ color: '#98A2AD', fontSize: '12px' }"
              >
                <el-table-column prop="name" label="房主姓名" width="150">
                </el-table-column>
                <el-table-column prop="phone" label="手机号" width="150">
                </el-table-column>
                <el-table-column prop="idCard" label="身份证" width="180">
                </el-table-column>
                <el-table-column prop="address" label="住址" width="180">
                </el-table-column>
                <el-table-column
                  prop="vaccination"
                  label="接种情况"
                  width="120"
                >
                  <template slot-scope="scope">
                    <span :class="{ red: scope.row.vaccination === 0 }">{{
                      scope.row.vaccination === 0 ? "未接种" : "已接种"
                    }}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="reamrk" label="备注"> </el-table-column>
              </el-table>
              <div class="pagination-wrapper">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[10, 30, 50, 100]"
                  :page-size="100"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="4"
                >
                </el-pagination>
              </div>
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
      image: require("@/assets/img/profile.png"),
      tableData: [
        {
          name: "张**",
          phone: "186****8233",
          address: "9栋****",
          idCard: "5131************12",
          vaccination: 0,
          reamrk: "年龄不符合"
        },
        {
          name: "张**",
          phone: "186****8233",
          address: "9栋****",
          idCard: "5131************12",
          vaccination: 0,
          reamrk: "年龄不符合"
        },
        {
          name: "张**",
          phone: "186****8233",
          address: "9栋****",
          idCard: "5131************12",
          vaccination: 1,
          reamrk: "年龄不符合"
        },
        {
          name: "张**",
          phone: "186****8233",
          address: "9栋****",
          idCard: "5131************12",
          vaccination: 1,
          reamrk: "年龄不符合"
        }
      ],
      currentPage: 1
    };
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {}
  }
};
</script>

<style lang="scss" scoped>
.prevention-wrapper {
  .prevention-statistics {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    .item {
      display: flex;
      flex-direction: column;

      .num {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 4px;
      }

      .name {
        font-size: 12px;
        color: #98a2ad;
      }
    }
  }

  span.red {
    color: #f54568;
  }
}
</style>
