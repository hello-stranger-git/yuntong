<!--AI巡查-->
<template>
  <div class="contain">
    <div class="title">
      AI巡查开启后，将对已启用巡查的店铺，进行自动巡查，并将店铺巡查结果发送至整改人。
    </div>
    <div class="serve">
      <div v-for="(item, i) in dataArr" :key="i" class="item">
        <div class="icon"><img :src="item.icon" /></div>
        <div class="type">
          {{ item.title }} <span>{{ item.description }}</span>
        </div>
        <div class="value">{{ item.value }}</div>
        <div v-if="i !== 3" class="openServe" @click="openMessage(i)">
          启用此项
        </div>
        <div v-if="i === 3" class="tip">
          <div class="openServe" @click="openMessage(i)">
            {{ showCapture ? '关闭此项' : '启用此项' }}
          </div>
          <template v-if="showCapture">
            <span>时间间隔：{{ interval }}</span>
            <span>抓拍时间段：{{ startTime }}-{{ endTime }}</span>
          </template>
        </div>
      </div>
    </div>
    <!--dialog-->
    <el-dialog title="定时抓拍" :visible.sync="dialogFormVisible">
      <el-form ref="form" :model="form" label-position="cneter" :rules="rules">
        <el-form-item label="抓拍时间段" prop="time">
          <el-time-picker
            v-model="form.time"
            is-range
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围"
          />
        </el-form-item>
        <el-form-item label="抓拍时间间隔" prop="interval">
          <el-select v-model="form.interval" placeholder="请选择抓拍时间间隔">
            <el-option
              v-for="item in option"
              :key="item.id"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          :style="
            `background-color:${this.$store.state.btnBgColor};border-color:${this.$store.state.btnBgColor}`
          "
          @click="submit()"
        >
          设置
        </el-button>
        <el-button @click="dialogFormVisible = false">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataArr: [
        {
          title: '空岗巡查',
          value: '工作时间内，超过30分钟店内无员工值守，将自动发送整改提醒',
          icon: require('@/assets/img/icon/aiIcon1.png')
        },
        {
          title: '着装巡查',
          value:
            'AI将自动识别员工着装标准是否符合，对不符合标准的店铺自动发送整改提醒',
          icon: require('@/assets/img/icon/aiIcon2.png'),
          description: '完善着装标准'
        },
        {
          title: '吸烟巡查',
          value: '自动识别店铺内的吸烟行为，自动发送整改提醒',
          icon: require('@/assets/img/icon/aiIcon3.png')
        },
        {
          title: '定时抓拍',
          value: '定时抓拍店铺图像，可在图片点检中查看不同时段，不同店铺图像',
          icon: require('@/assets/img/icon/aiIcon4.png'),
          description: '完善抓拍标准'
        }
      ],
      // diaolg表单数据
      form: {
        time: '',
        interval: ''
      },
      option: [
        { id: 1, label: '5分钟/次', value: '5分钟/次' },
        { id: 2, label: '10分钟/次', value: '10分钟/次' },
        { id: 3, label: '15分钟/次', value: '15分钟/次' },
        { id: 4, label: '30分钟/次', value: '30分钟/次' },
        { id: 5, label: '一小时/次', value: '一小时/次' }
      ],
      dialogFormVisible: false, // 是否打开dialog
      startTime: '09:00', // start抓拍时间段
      endTime: '18:00', // end抓拍时间段
      interval: '60分钟/次', // 抓拍时间间隔
      showCapture: true,
      rules: {
        time: [{ required: true, message: '请选择时间段', trigger: 'blur' }],
        interval: [
          { required: true, message: '请选择时间间隔', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    openMessage(i) {
      if (i === 3) {
        if (this.showCapture) {
          this.$confirm('是否关闭?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          })
            .then(() => {
              this.showCapture = false
              this.$message({
                type: 'success',
                message: '关闭成功!'
              })
            })
            .catch(() => {
              this.$message({
                type: 'info',
                message: '取消关闭'
              })
            })
        } else {
          this.dialogFormVisible = true
        }
      } else {
        this.$message('功能开发中')
      }
    },
    submit() {
      // if (!this.form.time) return
      // if (!this.form.time[0] || !this.form.time[1] || !this.form.interval) {
      //   return
      // }
      this.$refs['form'].validate(valid => {
        if (valid) {
          const startTime = this.form.time[0]
          const start = this.timeFormat(startTime)
          this.startTime = start

          const endTime = this.form.time[1]
          const end = this.timeFormat(endTime)
          this.endTime = end
          this.interval = this.form.interval
          this.dialogFormVisible = false

          this.showCapture = true
        } else {
          // console.log('error submit!!')
          return false
        }
      })
    },
    timeFormat(data) {
      const time = data
      let hour = time.getHours() + ''
      let minutes = time.getMinutes() + ''
      if (hour.length < 2) {
        hour = '0' + hour
      }
      if (minutes.length < 2) {
        minutes = '0' + minutes
      }
      return `${hour}:${minutes}`
    }
  }
}
</script>

<style lang="less" scoped>
.contain {
  margin: 24px;
  .title {
    padding-left: 15px;
    height: 55px;
    line-height: 55px;
    font-size: 14px;
    color: #141414;
    font-weight: bold;
    border-radius: 10px;
    background-color: #fff;
  }
  .serve {
    background-color: #fff;
    border-radius: 10px;
    margin-top: 24px;
    padding: 15px 15px 63px;
    .item {
      position: relative;
      height: 135px;
      padding-left: 120px;
      border-radius: 23px;
      margin-top: 20px;
      &:first-child {
        margin-top: 0;
      }
      .icon {
        position: absolute;
        left: 32px;
        top: 48px;
        width: 62px;
        height: 62px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .type {
        font-size: 18px;
        padding-top: 48px;
        font-weight: bold;
        color: #141414;
        span {
          display: inline-block;
          font-size: 14px;
          color: #4a92ff;
        }
      }
      .value {
        margin-top: 14px;
        font-size: 14px;
        color: #a7a7a7;
      }
      .openServe {
        position: absolute;
        right: 30px;
        top: 59px;
        width: 90px;
        height: 48px;
        line-height: 48px;
        font-size: 14px;
        font-weight: bold;
        color: #fff;
        background-color: #4a92ff;
        border-radius: 8px;
        text-align: center;
        cursor: pointer;
        &:hover {
          color: paleturquoise;
        }
      }
      .tip {
        span {
          margin-top: 14px;
          display: inline-block;
          font-size: 14px;
          color: #4a92ff;
        }
      }
    }
  }
}

// diaolg样式
/deep/.el-dialog {
  width: 678px;
  height: 264px;
  background: #ffffff;
  border-radius: 10px;
  .el-dialog__title {
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
    color: #141414;
  }
  .el-form-item__label {
    font-size: 14px;
    font-weight: bold;
    color: #6e6c6c;
    width: 120px;
  }
  .el-date-editor--timerange.el-input__inner {
    width: 462px;
  }
  .el-select {
    .el-input__inner {
      width: 462px;
    }
  }
  .el-dialog__footer {
    .dialog-footer {
      text-align: center;
    }
  }
  .el-form {
    margin-left: 24px;
    .el-form-item {
      &:first-child {
        margin-bottom: 20px;
      }
      &:last-child {
        margin-bottom: 24px;
      }
    }
  }
  .el-dialog__header {
    padding-top: 24px;
  }
  .el-dialog__body {
    padding-top: 22px;
    padding-bottom: 0;
  }
  .el-dialog__footer {
    padding-top: 0;
  }
  .el-form-item__error {
    left: 120px;
  }
}
</style>
