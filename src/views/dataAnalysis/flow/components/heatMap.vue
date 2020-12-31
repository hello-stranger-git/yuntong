<template>
  <div class="heatMap">
    <dl>
      <!-- 左侧图像区域 -->
      <dt>
        <img :src="heatMapImg" />
      </dt>
      <!-- 右侧排行区域 -->
      <dd>
        <el-row class="ranking_text">
          <el-col :span="6">排行</el-col>
          <el-col :span="12">区域</el-col>
          <el-col :span="6">热力</el-col>
        </el-row>
        <el-row
          v-for="(item, i) of rankingData"
          :key="i"
          type="flex"
          align="middle"
          class="ranking_content "
        >
          <el-col :span="6"><img :src="item.icon"/></el-col>
          <el-col :span="12">{{ item.region }}</el-col>
          <el-col :span="6">{{ item.heat }}</el-col>
        </el-row>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  data() {
    return {
      heatMapImg: require('@/assets/img/dataAnalysis/realTime/heatMapImg.png'), // 热力图
      First: require('@/assets/img/dataAnalysis/realTime/First.png'), // 排名图

      // 热力图排行数据
      rankingData: [
        {
          icon: require('@/assets/img/dataAnalysis/realTime/First.png'),
          region: '手机专区1',
          heat: '30℃'
        },
        {
          icon: require('@/assets/img/dataAnalysis/realTime/second.png'),
          region: '手机专区2',
          heat: '25℃'
        },
        {
          icon: require('@/assets/img/dataAnalysis/realTime/third .png'),
          region: '手机专区3',
          heat: '20℃'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.heatMap {
  margin-top: 90px;
  dl {
    display: flex;
    margin-top: 52px;
    // 左侧图形样式
    dt {
      width: 444px;
      height: 339px;
      padding-left: 48px;
      img {
        width: 100%;
      }
    }
    // 右侧排行样式
    dd {
      flex: 1;
      padding: 0 20px 0 52px;
      .el-col {
        text-align: center;
        font-size: 16px;
        color: #141414;
      }
      .ranking_text {
        margin-bottom: 40px;
        .el-col {
          font-weight: bold;
        }
      }
      .ranking_content {
        margin-bottom: 25px;
        img {
          width: 26px;
          height: 42px;
        }
      }
    }
  }
}
</style>
