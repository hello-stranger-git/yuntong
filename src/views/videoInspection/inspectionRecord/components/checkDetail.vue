<!--巡查记录点检详情-->
<template>
  <div class="contain">
    <!-- 左侧 -->
    <div class="left">
      <div class="box"><img :src="img" /></div>
      <div class="pics">
        <div class="pic"><img :src="img" /></div>
        <div class="pic"><img :src="img" /></div>
      </div>
      <div class="problem">
        点检问题(问题项：
        <span>{{ problems.length }}</span>
        ),得分
        <span>{{ totalScore }}</span>
        分
        <div class="toggle" @click="showProblems = !showProblems">
          {{ showProblems ? '收起' : '展开' }}
          <img
            :src="arrowIcon"
            :style="{
              transform: 'rotate(' + (showProblems ? -90 : 0) + 'deg)'
            }"
          />
        </div>
        <el-collapse-transition>
          <div v-show="showProblems">
            <div v-for="(item, i) in problems" :key="i" class="cell">
              1、台席干净整洁，作业工具、受理单纸摆放整齐。
            </div>
          </div>
        </el-collapse-transition>
      </div>
    </div>
    <!-- 右侧 -->
    <div class="right">
      <div class="storeName">
        <img :src="storeIcon" />
        {{ $route.query.data.store }}
        <div class="waitChange">待整改</div>
      </div>
      <div class="detail">
        <div class="item">
          抄送人：孙颖，罗浩，张某某，陈某某，李.张某某，陈某某123456789
        </div>
        <div class="item">
          整改人：{{ $route.query.data.rectificationPerson }}
        </div>
        <div class="item">时间：{{ $route.query.data.evaluationTime }}</div>
        <div class="item">模板：南宁2020年实体渠道电子监测标准</div>
      </div>
      <div class=" changRecord">
        整改记录
        <div class="toggle" @click="showStep = !showStep">
          {{ showStep ? '收起' : '展开' }}
          <img
            :src="arrowIcon"
            :style="{ transform: 'rotate(' + (showStep ? -90 : 0) + 'deg)' }"
          />
        </div>
      </div>
      <!-- 整改步骤条 -->
      <el-collapse-transition>
        <div v-show="showStep" class="step">
          <div class="stepCell">
            <div class="date">提交点检：2020-11-16 11:34:41</div>
            <div class="person">提交人：黄忠业</div>
            <div class="content">
              [处理意见]"视频是否卡顿通道1、2、4视频卡顿"点检不合格
            </div>
          </div>
          <div class="stepCell">
            <div class="date">在线考评：2020-11-16 11:34:41</div>
            <div class="person">提交人：南宁移动</div>
            <div class="content" :style="{ color: '#4A92FF' }">
              <span>查看详情</span>
            </div>
          </div>
        </div>
      </el-collapse-transition>

      <!-- 抓拍图片 -->
      <div class="control">
        <el-button
          :style="{ backgroundColor: '#63D45B' }"
          @click="$router.go(-1)"
        >
          返回
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require('@/assets/img/patrolTask/patrolImg.png'),
      storeIcon: require('@/assets/img/patrolTask/store.png'),
      arrowIcon: require('@/assets/img/patrolTask/arrowIcon.png'),

      showProblems: true,
      showStep: true,
      problems: [
        { value: '1、台席干净整洁，作业工具、受理单纸摆放整齐。', score: -1 },
        { value: '2、台席干净整洁，作业工具、受理单纸摆放整齐。', score: -1 },
        { value: '3、台席干净整洁，作业工具、受理单纸摆放整齐。', score: -1 }
      ]
    }
  },
  computed: {
    totalScore() {
      let total = 0
      for (const i in this.problems) {
        total += this.problems[i].score
      }
      return total
    }
  },
  mounted() {
    console.log(this.$route.query.data)
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.contain {
  display: flex;
  background-color: #fff;
  margin: 24px;
  padding: 24px;
  border-radius: 10px;
  .left {
    width: 949px;
    height: 100%;
    overflow: hidden;
    .box {
      height: 534px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .pics {
      display: flex;
      flex-wrap: wrap;
      .pic {
        margin-top: 18px;
        width: 201px;
        height: 113px;
        margin-right: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .problem {
      position: relative;
      width: 561px;
      font-size: 16px;
      margin-top: 36px;
      font-weight: bold;
      color: #141414;
      span {
        color: #ff4e4e;
      }
      .toggle {
        cursor: pointer;
        position: absolute;
        right: 0;
        top: 0;
        color: #4a92ff;
        span {
          transition: all 0.2s;
          display: inline-block;
          margin-left: 3px;
          color: #4a92ff;
          transform: rotate(90deg);
        }
      }
    }
    .cell {
      font-weight: 400;
      height: 19px;
      line-height: 19px;
      &:first-child {
        margin-top: 24px;
      }
      margin-top: 10px;
    }
  }
  .right {
    flex: 1;
    height: 100%;
    margin-left: 44px;
    padding-right: 20px;
    color: #141414;
    .storeName {
      position: relative;
      font-size: 20px;
      font-weight: bold;
      height: 26px;
      line-height: 26px;
      color: #141414;
      img {
        vertical-align: middle;
        transform: translateY(-2px);
      }
      .waitChange {
        position: absolute;
        right: 0px;
        top: 0;
        font-size: 14px;
        color: #4a92ff;
      }
    }
    .detail {
      display: flex;
      flex-wrap: wrap;
      margin-top: 24px;
      font-size: 14px;
      .item {
        box-sizing: border-box;
        width: 50%;
        height: 19px;
        line-height: 19px;
        padding-right: 20px;
        margin-top: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .changRecord {
      position: relative;
      margin-top: 70px;
      // margin-right: 20px;
      font-weight: bold;
      font-size: 16px;
      color: #141414;
      .toggle {
        cursor: pointer;
        position: absolute;
        right: 0;
        top: 0;
        font-size: 14px;
        color: #4a92ff;
        img {
          transition: all 0.2s;
          display: inline-block;
          margin-left: 3px;
          color: #4a92ff;
          transform: rotate(90deg);
        }
      }
    }
    .step {
      position: relative;
      margin-top: 23px;
      padding-left: 8px;
      color: #141414;
      font-size: 12px;
      .stepCell {
        position: relative;
        .date {
          position: relative;
          margin-left: 24px;
          &::before {
            content: '';
            display: inline-block;
            position: absolute;
            top: 0;
            left: -30px;
            width: 14px;
            height: 14px;
            background-color: #4a92ff;
            border-radius: 50%;
          }
        }
        .person {
          position: absolute;
          right: 0;
          top: 0;
        }
        .content {
          height: 94px;
          border-left: 0.3px solid #707070;
          padding: 16px 0 0 24px;
          font-weight: bold;
          font-size: 14px;
          margin-top: 4px;
          span {
            cursor: pointer;
          }
        }
      }
    }

    .control {
      margin-top: 317px;
      .el-button {
        color: #fff;
        border-radius: 8px;
      }
    }
  }
}
</style>
