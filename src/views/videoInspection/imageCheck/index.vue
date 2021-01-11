<!--图片点检-->
<template>
  <div style="padding:24px">
    <!--搜索板块-->
    <div class="search">
      <!-- <el-input v-model="searchDoor" placeholder="请输入内容" clearable /> -->
      <!-- 区域选择 -->
      <span @click="drawer">
        <el-input
          v-model="searchDoor"
          placeholder="请选择机构"
          readonly="readonly"
        />
      </span>
      <!-- 侧边弹出层 -->
      <MultipleChoice ref="singleChoice" @change="obtain" />

      <el-select
        v-model="videoValue"
        clearable
        placeholder="请选择"
        class="select"
        :disabled="searchDoor ? false : true"
      >
        <el-option
          v-for="item in videoOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>

      <el-date-picker
        v-model="selectTime"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions"
      />

      <el-select
        v-model="strackVideo"
        clearable
        placeholder="请选择"
        class="select"
      >
        <el-option
          v-for="item in strackVideoOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>

      <el-button
        type="primary"
        class="searchBtn"
        :style="
          `background-color:${this.$store.state.btnBgColor};border-color:${this.$store.state.btnBgColor}`
        "
      >
        查询
      </el-button>
      <el-button type="info" class="resetBtn" @click="reset">重置</el-button>
    </div>

    <!--下面类容板块-->
    <div class="imgCheck">
      <div class="context">
        <template v-for="item in imgCheckData">
          <el-col :key="item.id" :span="6">
            <ImgCheckItem
              :title="item.title"
              :type="item.type"
              :address="item.address"
              :time="item.time"
              :image="item.img"
              style="width:364px;margin:25px"
            />
          </el-col>
        </template>
      </div>
      <!--分页组件-->
      <div style="text-align:center;margin-top:50px">
        <el-pagination
          background
          layout="total,prev, pager, next"
          :total="total"
          :page-size="pageSize"
          :current-page="currentPage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MultipleChoice from '@/components/popupTree/multipleChoice.vue' // 多选弹出层

import ImgCheckItem from './components/imgCheckItem'
export default {
  components: {
    ImgCheckItem,
    MultipleChoice
  },
  data() {
    return {
      // 分页数据start
      total: 8, // 总共多少条数据
      pageSize: 8, // 每页显示条数
      currentPage: 1, // 当前在哪一页
      // 分页数据end
      imgCheckData: [
        {
          id: 1,
          title: '业务咨询台枪机',
          type: '定时抓拍',
          address: '南宁移动园湖营业厅',
          time: '2021-01-05 14:01:52',
          img: require('@/assets/img/videoInspection/imageCheck/imgCheck1.png')
        },
        {
          id: 2,
          title: '业务咨询台枪机',
          type: '定时抓拍',
          address: '南宁移动园湖营业厅',
          time: '2021-01-05 14:01:52',
          img: require('@/assets/img/videoInspection/imageCheck/imgCheck1.png')
        },
        {
          id: 3,
          title: '业务咨询台枪机',
          type: '定时抓拍',
          address: '南宁移动园湖营业厅',
          time: '2021-01-05 14:01:52',
          img: require('@/assets/img/videoInspection/imageCheck/imgCheck1.png')
        },
        {
          id: 4,
          title: '业务咨询台枪机',
          type: '定时抓拍',
          address: '南宁移动园湖营业厅',
          time: '2021-01-05 14:01:52',
          img: require('@/assets/img/videoInspection/imageCheck/imgCheck1.png')
        },
        {
          id: 5,
          title: '业务咨询台枪机',
          type: '定时抓拍',
          address: '南宁移动园湖营业厅',
          time: '2021-01-05 14:01:52',
          img: require('@/assets/img/videoInspection/imageCheck/imgCheck1.png')
        },
        {
          id: 6,
          title: '业务咨询台枪机',
          type: '定时抓拍',
          address: '南宁移动园湖营业厅',
          time: '2021-01-05 14:01:52',
          img: require('@/assets/img/videoInspection/imageCheck/imgCheck1.png')
        },
        {
          id: 7,
          title: '业务咨询台枪机',
          type: '定时抓拍',
          address: '南宁移动园湖营业厅',
          time: '2021-01-05 14:01:52',
          img: require('@/assets/img/videoInspection/imageCheck/imgCheck1.png')
        },
        {
          id: 8,
          title: '业务咨询台枪机',
          type: '定时抓拍',
          address: '南宁移动园湖营业厅',
          time: '2021-01-05 14:01:52',
          img: require('@/assets/img/videoInspection/imageCheck/imgCheck1.png')
        }
      ],

      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      searchDoor: '', // 选择门店
      videoOptions: [
        {
          value: '1',
          label: '大厅'
        },
        {
          value: '2',
          label: '大门'
        },
        {
          value: '3',
          label: '侧门'
        },
        {
          value: '4',
          label: '右侧大门'
        },
        {
          value: '5',
          label: '左侧大门'
        }
      ],
      strackVideoOptions: [
        {
          value: '1',
          label: '大厅'
        },
        {
          value: '2',
          label: '大门'
        },
        {
          value: '3',
          label: '侧门'
        },
        {
          value: '4',
          label: '右侧大门'
        },
        {
          value: '5',
          label: '左侧大门'
        }
      ],
      // 下拉框值
      videoValue: '', // 门店值
      selectTime: '', // 时间段选择
      strackVideo: '' // 定时抓拍
    }
  },
  methods: {
    // 触发调用子组件方法
    drawer() {
      this.$refs.singleChoice.show()
    },
    // 获取子组件选择数据
    obtain(i) {
      console.log(i)
      var obj = []
      for (var item of i) {
        obj.push(item.label)
      }
      this.searchDoor = obj.join('；')
    },
    // 触发重置输入框
    reset() {
      this.searchDoor = ''
      this.dateTime = ''
      this.selectTime = ''
      this.strackVideo = ''
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
  /deep/.el-input__inner.el-date-editor--daterange {
    width: 280px;
    margin-left: 24px;
  }
}

//内容板块
.imgCheck {
  background: #ffffff;
  opacity: 1;
  border-radius: 10px;
  margin-top: 24px;
  padding: 20px 0 36px 0;
  .context {
    &::after {
      content: '';
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }
  }
}
</style>
