<!--密度区域配置-->
<template>
  <div style="padding:24px">
    <!--输入框板块-->
    <div class="search">
      <!-- 区域选择 -->
      <span @click="drawer">
        <el-input
          v-model="region"
          placeholder="请选择机构"
          readonly="readonly"
        />
      </span>
      <!-- 侧边弹出层 -->
      <SingleChoice ref="singleChoice" @change="obtain" />
      <!-- 营业厅选择 -->
      <el-select v-model="businessHall" filterable placeholder="请选择门店">
        <el-option
          v-for="item in businessHallData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <!-- 位置选择 -->
      <el-select v-model="position" filterable placeholder="请选择位置">
        <el-option
          v-for="item in positionData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>

    <!-- 配置板块 -->
    <div class="toConfigure ">
      <!-- 消息提示 -->
      <el-alert
        title="提示：在图片上点击进行连线，设置不同规则图形"
        type="warning"
        show-icon
        :closable="false"
      />
      <!-- 图与配置 -->
      <div class="deploy">
        <!-- 左侧图 -->
        <div class="deploy_left">
          <img :src="toConfigure" />
        </div>
        <!-- 右侧配置 -->
        <div class="deploy_right">
          <div v-for="(item, i) of toConfigureData" :key="i">
            <el-select v-model="item.choiceDeploy" placeholder="下拉选择">
              <el-option
                v-for="item in choiceDeployData"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <i class="el-icon-error" @click="dlt(i)"></i>
            <el-input v-model="item.choicePosition" placeholder="请输入区域" />
          </div>
          <p>
            <el-button
              type="primary"
              @click="submit"
              :style="
                `background-color:${this.$store.state.btnBgColor};border-color:${this.$store.state.btnBgColor}`
              "
              >提交</el-button
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleChoice from '@/components/popupTree/singleChoice.vue' // 单选弹出层

export default {
  components: {
    SingleChoice
  },
  data() {
    return {
      toConfigure: require('@/assets/img/parameterConfig/densityAreaConfig/toConfigure.png'), // 下降图标
      // 请选择地区
      region: '',
      // 请选择营业厅
      businessHall: '',
      // 请选择位置
      position: '',
      // 营业厅可选值
      businessHallData: [
        {
          value: '百信广场苹果专门店',
          label: '百信广场苹果专门店'
        },
        {
          value: '百信广场华为专门店',
          label: '百信广场华为专门店'
        },
        {
          value: '丽的钟落潭全球通',
          label: '丽的钟落潭全球通'
        },
        {
          value: '雄洲城',
          label: '雄洲城'
        },
        {
          value: '人人佳华为',
          label: '人人佳华为'
        },
        {
          value: '太和华为体验店',
          label: '太和华为体验店'
        }
      ],
      // 位置可选值
      positionData: [
        {
          value: '正门左上',
          label: '正门左上'
        }
      ],
      // 配置可选值
      choiceDeployData: [
        {
          value: '不统计区域',
          label: '不统计区域'
        },
        {
          value: '店内产品热力图',
          label: '店内产品热力图'
        }
      ],
      // 配置数据
      toConfigureData: [
        {
          id: 1,
          choiceDeploy: '百信广场苹果专门店',
          choicePosition: '1号桌'
        },
        {
          id: 2,
          choiceDeploy: '百信广场苹果专门店',
          choicePosition: '2号桌'
        }
      ]
    }
  },
  methods: {
    // 触发调用子组件方法
    drawer() {
      this.$refs.singleChoice.show()
    },
    // 触发删除配置
    dlt(i) {
      this.toConfigureData.splice(i, 1)
    },
    // 获取子组件整改人选择数据
    obtain(i) {
      this.region = i
    },
    // 触发提交
    submit() {
      console.log(this.toConfigureData)
    }
  }
}
</script>

<style lang="less" scoped>
//输入框板块
.search {
  box-sizing: border-box;
  padding: 20px 24px;
  height: 80px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  /deep/.el-input {
    width: 280px;
  }
  .el-select {
    margin-left: 24px;
  }
}
// 配置板块
.toConfigure {
  margin-top: 27px;
  padding: 24px;
  border-radius: 10px;
  background-color: #fff;

  // 消息提示
  .el-alert--warning.is-light {
    background-color: #ffd2ba;
    /deep/.el-alert__title {
      font-size: 14px;
      color: #ff4e4e;
    }
  }
  .el-alert--warning.is-light {
    color: #ff4e4e;
  }
  .el-alert {
    padding: 15px 20px;
    border-radius: 5px;
  }

  // 图与配置
  .deploy {
    margin-top: 24px;
    display: flex;
    .deploy_left {
      width: 824px;
      height: 466px;
      img {
        width: 100%;
      }
    }
    .deploy_right {
      flex: 1;
      padding-left: 36px;
      & > div {
        width: 242px;
        display: inline-block;
        margin-right: 5px;
        margin-bottom: 30px;
      }
      .el-select,
      .el-input {
        width: 198px;
      }
      .el-input {
        margin-top: 14px;
      }
      .el-icon-error {
        padding-left: 12px;
        vertical-align: middle;
        font-size: 25px;
        color: #4a92ff;
      }
      .el-button {
        width: 90px;
        height: 40px;
        margin-top: 24px;
        margin-left: 54px;
      }
    }
  }
}
</style>
