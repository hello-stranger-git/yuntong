<!--到店统计-->
<template>
  <div style="padding:24px">
    <!--搜索板块-->
    <div class="search">
      <el-input v-model="searchValue" placeholder="请输入内容" clearable />
      <el-date-picker
        v-model="dateTime"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        style="margin-left:24px"
      />

      <el-button
        type="primary"
        class="searchBtn"
        :style="
          `background-color:${this.$store.state.btnBgColor};border-color:${this.$store.state.btnBgColor}`
        "
      >
        查询
      </el-button>
      <el-button type="info" class="resetBtn">重置</el-button>
    </div>
    <!--会员到店记录-->
    <div class="module" style="height:668px">
      <div class="toStore">
        <div class="titleDiv">
          <span class="title">
            会员到店记录
            <span
              style="font-size: 18px;font-weight: 400;color: #141414;vertical-align: bottom;"
            >
              （2020-12-19至2020-12-25）
            </span>
          </span>
        </div>

        <div style="margin-top:6px;padding-left: 45px;">
          <el-row>
            <template v-for="item in userVip">
              <el-col :key="item.id" :span="6" style="margin-top:48px">
                <UserItem
                  :user-name="item.userName"
                  :user-img="item.userImg"
                  :date="item.date"
                  :count="item.count"
                  :cross-store="item.crossStore"
                  :vip="item.vip"
                />
              </el-col>
            </template>
          </el-row>
        </div>
        <!--分页组件-->
        <div style="text-align:center;margin-top:65px">
          <el-pagination
            background
            layout="total,prev, pager, next"
            :total="vipTotal"
            :page-size="vipPageSize"
            :current-page="vipPurrentPage"
          />
        </div>
      </div>
    </div>
    <!--跨店到店记录-->
    <div class="module" style="height:668px">
      <div class="toStore">
        <div class="titleDiv">
          <span class="title">
            跨店到店记录
            <span
              style="font-size: 18px;font-weight: 400;color: #141414;vertical-align: bottom;"
            >
              （2020-12-19至2020-12-25）
            </span>
          </span>
        </div>

        <div style="margin-top:6px;padding-left: 45px;">
          <el-row>
            <template v-for="item in userCrossStore">
              <el-col :key="item.id" :span="6" style="margin-top:48px">
                <UserItem
                  :user-name="item.userName"
                  :user-img="item.userImg"
                  :date="item.date"
                  :count="item.count"
                  :cross-store="item.crossStore"
                  :vip="item.vip"
                />
              </el-col>
            </template>
          </el-row>
        </div>

        <!--分页组件-->
        <div style="text-align:center;margin-top:65px">
          <el-pagination
            background
            layout="total,prev, pager, next"
            :total="crossStoreTotal"
            :page-size="crossStorePageSize"
            :current-page="crossStorePurrentPage"
          />
        </div>
      </div>
    </div>
    <!--全部到店记录-->
    <div class="module" style="height:1016px">
      <div class="toStore">
        <div class="titleDiv">
          <span class="title">
            全部到店记录
            <span
              style="font-size: 18px;font-weight: 400;color: #141414;vertical-align: bottom;"
            >
              （2020-12-19至2020-12-25）
            </span>
          </span>
        </div>

        <div style="margin-top:6px;padding-left: 45px;">
          <el-row>
            <template v-for="item in allUser">
              <el-col :key="item.id" :span="6" style="margin-top:48px">
                <UserItem
                  :user-name="item.userName"
                  :user-img="item.userImg"
                  :date="item.date"
                  :count="item.count"
                  :cross-store="item.crossStore"
                  :vip="item.vip"
                />
              </el-col>
            </template>
          </el-row>
        </div>
        <!--分页组件-->
        <div style="text-align:center;margin-top:97px">
          <el-pagination
            background
            layout="total,prev, pager, next"
            :total="allTotal"
            :page-size="allPageSize"
            :current-page="allPurrentPage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserItem from './components/userItem'
export default {
  components: {
    UserItem
  },
  data() {
    return {
      searchValue: '', // 搜索输入
      dateTime: '', // 日期选择器

      // vip分页数据start
      vipTotal: 12, // 总共多少条数据
      vipPageSize: 12, // 每页显示条数
      vipPurrentPage: 1, // 当前在哪一页
      // vip分页数据end
      // crossStore分页数据start
      crossStoreTotal: 12, // 总共多少条数据
      crossStorePageSize: 12, // 每页显示条数
      crossStorePurrentPage: 1, // 当前在哪一页
      // crossStore分页数据end
      // all分页数据start
      allTotal: 20, // 总共多少条数据
      allPageSize: 20, // 每页显示条数
      allPurrentPage: 1, // 当前在哪一页
      // all分页数据end
      // 会员用户数据
      userVip: [
        {
          id: 1,
          userName: '兰女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user3.png'),
          date: '2020-10-12 20:35:18',
          count: 2,
          crossStore: false,
          vip: true
        },
        {
          id: 2,
          userName: '李女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user2.png'),
          date: '2020-10-12 20:35:18',
          count: 6,
          crossStore: false,
          vip: true
        },
        {
          id: 3,
          userName: '张女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user1.png'),
          date: '2020-10-12 20:35:18',
          count: 3,
          crossStore: false,
          vip: true
        },
        {
          id: 4,
          userName: '王女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user4.png'),
          date: '2020-10-12 20:35:18',
          count: 2,
          crossStore: false,
          vip: true
        },
        {
          id: 5,
          userName: '周先生',
          userImg: require('@/assets/img/dataAnalysis/realTime/user5.png'),
          date: '2020-10-12 20:35:18',
          count: 2,
          crossStore: false,
          vip: true
        },
        {
          id: 6,
          userName: '陈女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user6.png'),
          date: '2020-10-12 20:35:18',
          count: 3,
          crossStore: false,
          vip: true
        },
        {
          id: 7,
          userName: '林先生',
          userImg: require('@/assets/img/dataAnalysis/realTime/user7.png'),
          date: '2020-10-12 20:35:18',
          count: 5,
          crossStore: false,
          vip: true
        },
        {
          id: 8,
          userName: '黄先生',
          userImg: require('@/assets/img/dataAnalysis/realTime/user8.png'),
          date: '2020-10-12 20:35:18',
          count: 3,
          crossStore: false,
          vip: true
        },
        {
          id: 9,
          userName: '周先生',
          userImg: require('@/assets/img/dataAnalysis/realTime/user9.png'),
          date: '2020-10-12 20:35:18',
          count: 6,
          crossStore: false,
          vip: true
        },
        {
          id: 10,
          userName: '兰女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user3.png'),
          date: '2020-10-12 20:35:18',
          count: 5,
          crossStore: false,
          vip: true
        },
        {
          id: 11,
          userName: '李女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user2.png'),
          date: '2020-10-12 20:35:18',
          count: 2,
          crossStore: false,
          vip: true
        },
        {
          id: 12,
          userName: '张女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user1.png'),
          date: '2020-10-12 20:35:18',
          count: 5,
          crossStore: false,
          vip: true
        }
      ],
      // 跨店用户数据
      userCrossStore: [
        {
          id: 1,
          userName: '兰女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user3.png'),
          date: '2020-10-12 20:35:18',
          count: 2,
          crossStore: true,
          vip: false
        },
        {
          id: 2,
          userName: '李女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user2.png'),
          date: '2020-10-12 20:35:18',
          count: 6,
          crossStore: true,
          vip: false
        },
        {
          id: 3,
          userName: '张女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user1.png'),
          date: '2020-10-12 20:35:18',
          count: 3,
          crossStore: true,
          vip: false
        },
        {
          id: 4,
          userName: '王女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user4.png'),
          date: '2020-10-12 20:35:18',
          count: 2,
          crossStore: true,
          vip: false
        },
        {
          id: 5,
          userName: '周先生',
          userImg: require('@/assets/img/dataAnalysis/realTime/user5.png'),
          date: '2020-10-12 20:35:18',
          count: 2,
          crossStore: true,
          vip: false
        },
        {
          id: 6,
          userName: '陈女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user6.png'),
          date: '2020-10-12 20:35:18',
          count: 3,
          crossStore: true,
          vip: false
        },
        {
          id: 7,
          userName: '林先生',
          userImg: require('@/assets/img/dataAnalysis/realTime/user7.png'),
          date: '2020-10-12 20:35:18',
          count: 5,
          crossStore: true,
          vip: false
        },
        {
          id: 8,
          userName: '黄先生',
          userImg: require('@/assets/img/dataAnalysis/realTime/user8.png'),
          date: '2020-10-12 20:35:18',
          count: 3,
          crossStore: true,
          vip: false
        },
        {
          id: 9,
          userName: '周先生',
          userImg: require('@/assets/img/dataAnalysis/realTime/user9.png'),
          date: '2020-10-12 20:35:18',
          count: 6,
          crossStore: true,
          vip: false
        },
        {
          id: 10,
          userName: '兰女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user3.png'),
          date: '2020-10-12 20:35:18',
          count: 5,
          crossStore: true,
          vip: false
        },
        {
          id: 11,
          userName: '李女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user2.png'),
          date: '2020-10-12 20:35:18',
          count: 2,
          crossStore: true,
          vip: false
        },
        {
          id: 12,
          userName: '张女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user1.png'),
          date: '2020-10-12 20:35:18',
          count: 5,
          crossStore: true,
          vip: false
        }
      ],
      // 全部到店用户
      allUser: [
        {
          id: 1,
          userName: '兰女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user3.png'),
          date: '2020-10-12 20:35:18',
          count: 2,
          crossStore: true,
          vip: false
        },
        {
          id: 2,
          userName: '李女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user2.png'),
          date: '2020-10-12 20:35:18',
          count: 6,
          crossStore: false,
          vip: true
        },
        {
          id: 3,
          userName: '张女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user1.png'),
          date: '2020-10-12 20:35:18',
          count: 3,
          crossStore: false,
          vip: true
        },
        {
          id: 4,
          userName: '王女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user4.png'),
          date: '2020-10-12 20:35:18',
          count: 2,
          crossStore: false,
          vip: true
        },
        {
          id: 5,
          userName: '周先生',
          userImg: require('@/assets/img/dataAnalysis/realTime/user5.png'),
          date: '2020-10-12 20:35:18',
          count: 2,
          crossStore: false,
          vip: true
        },
        {
          id: 6,
          userName: '陈女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user6.png'),
          date: '2020-10-12 20:35:18',
          count: 3,
          crossStore: false,
          vip: true
        },
        {
          id: 7,
          userName: '林先生',
          userImg: require('@/assets/img/dataAnalysis/realTime/user7.png'),
          date: '2020-10-12 20:35:18',
          count: 5,
          crossStore: true,
          vip: false
        },
        {
          id: 8,
          userName: '黄先生',
          userImg: require('@/assets/img/dataAnalysis/realTime/user8.png'),
          date: '2020-10-12 20:35:18',
          count: 3,
          crossStore: false,
          vip: true
        },
        {
          id: 9,
          userName: '周先生',
          userImg: require('@/assets/img/dataAnalysis/realTime/user9.png'),
          date: '2020-10-12 20:35:18',
          count: 6,
          crossStore: false,
          vip: true
        },
        {
          id: 10,
          userName: '兰女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user3.png'),
          date: '2020-10-12 20:35:18',
          count: 5,
          crossStore: false,
          vip: true
        },
        {
          id: 11,
          userName: '李女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user2.png'),
          date: '2020-10-12 20:35:18',
          count: 2,
          crossStore: true,
          vip: false
        },
        {
          id: 12,
          userName: '张女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user1.png'),
          date: '2020-10-12 20:35:18',
          count: 5,
          crossStore: true,
          vip: false
        },

        {
          id: 13,
          userName: '兰女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user3.png'),
          date: '2020-10-12 20:35:18',
          count: 2,
          crossStore: false,
          vip: true
        },
        {
          id: 14,
          userName: '李女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user2.png'),
          date: '2020-10-12 20:35:18',
          count: 6,
          crossStore: false,
          vip: true
        },
        {
          id: 15,
          userName: '张女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user1.png'),
          date: '2020-10-12 20:35:18',
          count: 3,
          crossStore: false,
          vip: true
        },
        {
          id: 16,
          userName: '王女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user4.png'),
          date: '2020-10-12 20:35:18',
          count: 2,
          crossStore: true,
          vip: false
        },
        {
          id: 17,
          userName: '周先生',
          userImg: require('@/assets/img/dataAnalysis/realTime/user5.png'),
          date: '2020-10-12 20:35:18',
          count: 2,
          crossStore: false,
          vip: true
        },
        {
          id: 18,
          userName: '陈女士',
          userImg: require('@/assets/img/dataAnalysis/realTime/user6.png'),
          date: '2020-10-12 20:35:18',
          count: 3,
          crossStore: true,
          vip: false
        },
        {
          id: 19,
          userName: '林先生',
          userImg: require('@/assets/img/dataAnalysis/realTime/user7.png'),
          date: '2020-10-12 20:35:18',
          count: 5,
          crossStore: false,
          vip: true
        },
        {
          id: 20,
          userName: '黄先生',
          userImg: require('@/assets/img/dataAnalysis/realTime/user8.png'),
          date: '2020-10-12 20:35:18',
          count: 3,
          crossStore: true,
          vip: false
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
//搜索板块
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

//所有记录模块
.module {
  height: 668px;
  margin-top: 24px;
  display: flex;
  .toStore {
    width: 100%;
    background-color: #ffffff;
    border-radius: 10px;
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
}
</style>
