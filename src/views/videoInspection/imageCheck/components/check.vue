<!--点检-->
<template>
  <div class="contain">
    <div class="pic">
      <img :src="data.image" />
    </div>
    <div class="main">
      <div class="storeName">
        <img :src="storeIcon" />
        {{ data.address }}
      </div>
      <div class="date">时间：{{ data.time }}</div>
      <el-select v-model="templateType" placeholder="请选择">
        <el-option
          v-for="item in type"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <div class="total">
        问题
        <span>{{ problemArr.length }}</span>
        项 得分
        <span>{{ getTotal }}</span>
        分
      </div>
      <div class="problems">
        <div v-for="(item, i) in problemArr" :key="i" class="item">
          {{ item.text }}
          <span>{{ item.score }}</span>
          <img :src="removeItem" @click="removeProblem(i)" />
        </div>
      </div>
      <div class="addProblem">
        +添加问题项
        <el-cascader
          v-model="currentProblem"
          :options="options"
          :props="{ multiple: true }"
          collapse-tags
          @change="pushProblem"
        />
      </div>
      <div class="suggestion">
        <el-input v-model="input" placeholder="请输入点检意见" clearable />
      </div>
      <div class="control">
        <el-radio v-model="checked" :label="true">需要整改</el-radio>
        <el-radio v-model="checked" :label="false">不需要整改</el-radio>
      </div>
      <div class="otherPerson">
        <el-select v-model="otherPerson" multiple placeholder="请选择抄送人">
          <el-option
            v-for="item in otherPersonArr"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div v-if="checked" class="changePerson">
        <el-select v-model="changePerson" placeholder="请选择整改人">
          <el-option
            v-for="item in changePersonArr"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="buttons">
        <el-button type="primary">保存</el-button>
        <el-button type="success">返回</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      storeIcon: require('@/assets/img/patrolTask/store.png'),
      removeItem: require('@/assets/img/icon/removeItem.png'),
      data: '',
      arr1: ['change'],
      options: [
        {
          value: '禁忌行为',
          label: '禁忌行为',
          children: [
            {
              value: '服务禁忌',
              label: '服务禁忌',
              children: [
                {
                  value: {
                    score: -1,
                    text: '1、表情：不可面对客户出现负面表情'
                  },
                  label: '1、表情：不可面对客户出现负面表情'
                },
                {
                  value: {
                    score: -1,
                    text: '2、态度：对待客户应认真，负责，耐心'
                  },
                  label: '2、态度：对待客户应认真，负责，耐心'
                },
                {
                  value: {
                    score: -1,
                    text: '3、行为：严禁在工作区域出现严重公司服务形象...'
                  },
                  label: '3、行为：严禁在工作区域出现严重公司服务形象...'
                },
                {
                  value: {
                    score: -1,
                    text: '4、语言：使用文明礼貌用语，尊重客户'
                  },
                  label: '4、语言：使用文明礼貌用语，尊重客户'
                },
                {
                  value: {
                    score: -1,
                    text: '5、表情：不可面对客户出现负面表情'
                  },
                  label: '5、表情：不可面对客户出现负面表情'
                }
              ]
            },
            {
              value: '服务禁忌',
              label: '服务禁忌',
              children: [
                {
                  value: {
                    score: -1,
                    text: '6、表情：不可面对客户出现负面表情'
                  },
                  label: '6、表情：不可面对客户出现负面表情'
                },
                {
                  value: {
                    score: -1,
                    text: '7、态度：对待客户应认真，负责，耐心'
                  },
                  label: '7、态度：对待客户应认真，负责，耐心'
                },
                {
                  value: {
                    score: -1,
                    text: '8、行为：严禁在工作区域出现严重公司服务形象...'
                  },
                  label: '8、行为：严禁在工作区域出现严重公司服务形象...'
                },
                {
                  value: {
                    score: -1,
                    text: '9、语言：使用文明礼貌用语，尊重客户'
                  },
                  label: '9、语言：使用文明礼貌用语，尊重客户'
                },
                {
                  value: {
                    score: -1,
                    text: '10、表情：不可面对客户出现负面表情'
                  },
                  label: '10、表情：不可面对客户出现负面表情'
                }
              ]
            }
          ]
        },
        {
          value: '禁止行为',
          label: '禁止行为',
          children: [
            {
              value: '服务禁忌',
              label: '服务禁忌',
              children: [
                {
                  value: {
                    score: -1,
                    text: '11、表情：不可面对客户出现负面表情'
                  },
                  label: '11、表情：不可面对客户出现负面表情'
                },
                {
                  value: {
                    score: -1,
                    text: '12、态度：对待客户应认真，负责，耐心'
                  },
                  label: '12、态度：对待客户应认真，负责，耐心'
                },
                {
                  value: {
                    score: -1,
                    text: '13、行为：严禁在工作区域出现严重公司服务形象...'
                  },
                  label: '13、行为：严禁在工作区域出现严重公司服务形象...'
                },
                {
                  value: {
                    score: -1,
                    text: '14、语言：使用文明礼貌用语，尊重客户'
                  },
                  label: '14、语言：使用文明礼貌用语，尊重客户'
                },
                {
                  value: {
                    score: -1,
                    text: '15、表情：不可面对客户出现负面表情'
                  },
                  label: '15、表情：不可面对客户出现负面表情'
                }
              ]
            }
          ]
        }
      ],
      otherPersonArr: [
        { label: '刘德华', value: '刘德华' },
        { label: '张学友', value: '张学友' }
      ],
      changePersonArr: [
        { label: '刘德华', value: '刘德华' },
        { label: '张学友', value: '张学友' }
      ],
      type: [
        {
          value: '标准1',
          label: '标准1'
        },
        {
          value: '标准2',
          label: '标准2'
        }
      ],
      templateType: '',
      currentProblem: [],
      problemArr: [],
      otherPerson: [],
      changePerson: '',
      input: '',
      checked: 'show',
      problems: []
    }
  },
  computed: {
    getTotal() {
      let total = 0
      for (const i in this.problemArr) {
        total += this.problemArr[i].score
      }
      return total
    }
  },
  mounted() {
    console.log(this.$route.query.data)
    this.data = JSON.parse(this.$route.query.data)
  },
  methods: {
    pushProblem() {
      this.problemArr = []
      for (let i = 0; i < this.currentProblem.length; i++) {
        this.problemArr.push(
          this.currentProblem[i][this.currentProblem[i].length - 1]
        )
      }
    },
    removeProblem(i) {
      // 解决复选框不刷新问题
      const arr = []
      for (const k in this.currentProblem) {
        if (this.currentProblem[k] !== this.currentProblem[i]) {
          arr.push(this.currentProblem[k])
        }
      }
      this.currentProblem = []
      this.currentProblem = arr
      this.pushProblem()
    }
  }
}
</script>

<style lang="less" scoped>
.contain {
  display: flex;
  margin: 24px;
  background-color: #fff;
  padding: 24px;
  border-radius: 10px;
  .pic {
    width: 949px;
    height: 534px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0;
    }
  }
  .main {
    flex: 1;
    margin: 0 24px 0 45px;
    color: #141414;
    font-size: 14px;
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
    }
    .date {
      margin-top: 24px;
    }
    .el-select {
      margin-top: 25px;
      width: 100%;
    }
    .total {
      height: 19px;
      line-height: 19px;
      margin-top: 42px;
      span {
        color: #ff4e4e;
      }
    }
    .problems {
      margin-top: 12px;
      padding: 16px 60px 16px 16px;
      height: 252px;
      border: 1px rgba(112, 112, 112, 0.5) solid;
      border-radius: 8px;
      overflow: auto;
      .item {
        position: relative;
        width: 100%;
        font-size: 12px;
        margin-top: 12px;
        &:first-child {
          margin-top: 0;
        }
        span,
        img {
          color: #ff4e4e;
          position: absolute;
          top: 0;
          right: -20px;
        }
        img {
          right: -43px;
          cursor: pointer;
        }
      }
    }
    .addProblem {
      position: relative;
      margin-top: 12px;
      height: 40px;
      line-height: 40px;
      background-color: #4a92ff;
      border-radius: 4px;
      text-align: center;
      color: #fff;
      cursor: pointer;
      .el-cascader {
        position: absolute;
        // height: 500px;
        top: 0;
        left: 20px;
        width: 100%;
        opacity: 0;
      }
    }
    .suggestion {
      margin-top: 12px;
    }
    .control {
      margin-top: 12px;
      font-size: 16px;
    }
    .buttons {
      margin-top: 12px;
      .el-button {
        border-radius: 8px;
        padding: 10px 21px;
      }
    }
  }
}
</style>
