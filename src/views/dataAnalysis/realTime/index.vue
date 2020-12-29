<!--实时分析-->
<template>
  <div style="padding:24px">
    <!--搜索板块-->
    <div class="search">
      <el-input v-model="searchValue" placeholder="请输入内容" clearable />
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
      <el-button type="primary" class="searchBtn">查询</el-button>
      <el-button type="info" class="resetBtn">重置</el-button>
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
            :userImg="item.userImg"
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
      <div class="out">
        <div class="titleDiv">
          <span class="title">
            今日店外客流
          </span>
          <span class="more">
            更多
          </span>
        </div>
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
    </div>
  </div>
</template>

<script>
import UserItem from './components/userItem'
import InnerLineChart from './components/innerLineChart' // 引入店内折线图

import CustomerCircularChart from './components/customerCircularChart' // 引入客群特征环形图
export default {
  components: {
    UserItem,
    InnerLineChart,
    CustomerCircularChart
  },
  data() {
    return {
      // 搜索模块数据start
      // 搜索输入框
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
    }
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
