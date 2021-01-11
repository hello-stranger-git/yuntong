<!--实时分析-->
<template>
  <div style="padding:24px">
    <!--搜索板块-->
    <div class="search">
      <!-- 区域选择 -->
      <span @click="drawer">
        <el-input
          v-model="searchValue"
          placeholder="请选择机构"
          readonly="readonly"
        />
      </span>
      <!-- 侧边弹出层 -->
      <SingleChoice ref="singleChoice" @change="obtain" />
      <el-select
        v-model="selectValue"
        clearable
        placeholder="请选择"
        class="select"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-button
        type="primary"
        :style="
          `background-color:${this.$store.state.btnBgColor};border-color:${this.$store.state.btnBgColor}`
        "
        class="searchBtn"
      >
        查询
      </el-button>
      <el-button type="info" class="resetBtn" @click="reset">重置</el-button>
    </div>
    <!--今日进店板块-->
    <div class="todayEnterStore">
      <div class="titleDiv">
        <span class="title">今日进店</span>
        <span class="more">更多</span>
      </div>
      <div style="margin-top:47px;display:flex;justify-content: space-between;">
        <template v-for="item in user">
          <UserItem
            :key="item.id"
            :user-img="item.userImg"
            :date="item.date"
            :age="item.age"
            :sex="item.sex"
            :count="item.count"
            :cross-store="item.crossStore"
            :vip="item.vip"
          />
        </template>
      </div>
    </div>
    <!--今日店内客流与今日店外客流-->
    <div class="flow">
      <!-- 店内客流区域 -->
      <div class="inner">
        <div class="titleDiv">
          <span class="title">
            今日店内客流
          </span>
          <span class="more">
            更多
          </span>
        </div>
        <InnerLineChart />
      </div>
      <!-- 店外客流区域 -->
      <div class="out">
        <div class="titleDiv">
          <span class="title">
            今日店外客流
          </span>
          <span class="more">
            更多
          </span>
        </div>
        <OutLineChart />
      </div>
    </div>

    <!--客群特征与热力图-->
    <div class="customerHeat">
      <div class="customer">
        <div class="titleDiv">
          <span class="title">
            客群特征
          </span>
          <span class="more">
            更多
          </span>
        </div>
        <CustomerCircularChart />
      </div>
      <div class="heat">
        <div class="titleDiv">
          <span class="title">
            热力图
          </span>
          <span class="more">
            更多
          </span>
        </div>
        <HeatMap />
      </div>
    </div>

    <!-- 客流单价分析 -->
    <div class="price">
      <div class="titleDiv">
        <span class="title">
          客流单价分析
        </span>
        <span class="more">
          更多
        </span>
      </div>
      <div id="priceBar" style="width:100%;text-align:center">
        <PriceBarChart />
      </div>
    </div>
  </div>
</template>

<script>
import SingleChoice from '@/components/popupTree/singleChoice.vue' // 单选弹出层

import UserItem from './components/userItem'
import InnerLineChart from './components/innerLineChart' // 引入店内折线图
import OutLineChart from './components/outLineChart' // 引入店外客流折线图
import HeatMap from './components/heatMap' // 热力图

import CustomerCircularChart from './components/customerCircularChart' // 引入客群特征环形图
import PriceBarChart from './components/BarChart'
export default {
  components: {
    UserItem,
    InnerLineChart,
    CustomerCircularChart,
    PriceBarChart,
    OutLineChart,
    HeatMap,
    SingleChoice
  },
  data() {
    return {
      // 区域选择
      searchValue: '',
      // 下拉框里面的数据
      options: [
        {
          value: '1',
          label: '雅宝COCOPark体验店'
        },
        {
          value: '2',
          label: '龙岗体验店'
        },
        {
          value: '3',
          label: '南坑体验店'
        },
        {
          value: '4',
          label: '布吉体验店'
        },
        {
          value: '5',
          label: '福田体验店'
        }
      ],
      // 下拉框值
      selectValue: '',
      // 搜索模块数据end

      // 今日进店模块数据start

      // 用户数据
      user: [
        {
          id: 1,
          userImg: require('@/assets/img/dataAnalysis/realTime/user3.png'),
          date: '19:35:18',
          age: '20~35',
          sex: 1,
          count: 2,
          crossStore: false,
          vip: false
        },
        {
          id: 2,
          userImg: require('@/assets/img/dataAnalysis/realTime/user2.png'),
          date: '19:35:21',
          age: '35~40',
          sex: 1,
          count: 2,
          crossStore: true,
          vip: false
        },
        {
          id: 3,
          userImg: require('@/assets/img/dataAnalysis/realTime/user1.png'),
          date: '19:36:45',
          age: '20~35',
          sex: 0,
          count: 1,
          crossStore: false,
          vip: true
        },
        {
          id: 4,
          userImg: require('@/assets/img/dataAnalysis/realTime/user4.png'),
          date: '20:00:18',
          age: '35~50',
          sex: 1,
          count: 2,
          crossStore: false,
          vip: true
        },
        {
          id: 5,
          userImg: require('@/assets/img/dataAnalysis/realTime/user5.png'),
          date: '20:21:18',
          age: '20~35',
          sex: 0,
          count: 2,
          crossStore: true,
          vip: true
        },
        {
          id: 6,
          userImg: require('@/assets/img/dataAnalysis/realTime/user6.png'),
          date: '20:35:18',
          age: '50~65',
          sex: 1,
          count: 2,
          crossStore: true,
          vip: false
        },
        {
          id: 7,
          userImg: require('@/assets/img/dataAnalysis/realTime/user7.png'),
          date: '20:40:18',
          age: '20~35',
          sex: 1,
          count: 2,
          crossStore: false,
          vip: true
        },
        {
          id: 8,
          userImg: require('@/assets/img/dataAnalysis/realTime/user8.png'),
          date: '19:35:18',
          age: '20~35',
          sex: 0,
          count: 1,
          crossStore: false,
          vip: false
        },
        {
          id: 9,
          userImg: require('@/assets/img/dataAnalysis/realTime/user9.png'),
          date: '19:45:21',
          age: '35~40',
          sex: 0,
          count: 1,
          crossStore: false,
          vip: false
        }
      ]
      // 今日进店模块数据end

      // 单价分析柱状图模块宽度
      // priceBarWidth: 1600
    }
  },
  methods: {
    // 触发调用子组件方法
    drawer() {
      this.$refs.singleChoice.show()
    },
    // 获取子组件选择数据
    obtain(i) {
      this.searchValue = i
    },
    // 触发重置输入框
    reset() {
      this.searchValue = ''
      this.selectValue = ''
    }
  },
  mounted() {
    // this.priceBarWidth = document.getElementById('priceBar').clientWidth
    // window.onresize = () => {
    //   this.priceBarWidth = document.getElementById('priceBar').clientWidth
    // }
  }
}
</script>

<style lang="less" scoped>
//搜索板块
.search {
  box-sizing: border-box;
  padding: 20px 24px;
  // margin: 24px 24px 0 24px;
  height: 80px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  /deep/.el-input {
    width: 280px;
  }
  .select {
    margin-left: 24px;
  }
  .searchBtn {
    margin-left: 48px;
  }
  .resetBtn {
    margin-left: 24px;
  }
  .el-button {
    width: 90px;
  }
}

//今日进店板块
.todayEnterStore {
  box-sizing: border-box;
  margin-top: 24px;
  padding: 24px;
  height: 354px;
  background: #ffffff;
  border-radius: 10px;
  .titleDiv {
    margin: 0;
  }
}

//今日店内客流与今日店外客流模块
.flow {
  height: 497px;
  margin-top: 24px;
  display: flex;
  .inner {
    width: 50%;
    background-color: #ffffff;
    margin-right: 26px;
    border-radius: 10px;
  }
  .out {
    width: 50%;
    background-color: #ffffff;
    border-radius: 10px;
  }
}

// 客群特征与热力图

.customerHeat {
  height: 497px;
  margin-top: 24px;
  display: flex;

  .customer {
    width: 50%;
    background-color: #ffffff;
    margin-right: 26px;
    border-radius: 10px;
  }
  .heat {
    width: 50%;
    background-color: #ffffff;
    border-radius: 10px;
  }
}

//客流单价分析
.price {
  margin-top: 24px;
  height: 531px;
  padding: 24px;
  background: #ffffff;
  border-radius: 10px;
  .titleDiv {
    margin: 0;
  }
}
//头部title全部公用样式
.titleDiv {
  margin: 24px 24px 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    font-size: 28px;
    font-weight: bold;
    color: #141414;
  }
  .more {
    font-size: 16px;
    font-weight: 400;
    color: #4a92ff;
    cursor: pointer;
  }
}
</style>
