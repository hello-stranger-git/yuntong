<!--集团管理-->
<template>
  <div class="contain">
    <!-- 卡片 -->
    <el-card>
      <!-- 表单 -->
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
        class="demo-ruleForm"
      >
        <!-- logo上传 -->
        <el-form-item label="集团logo" class="must logoHeight">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="true"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            :before-remove="removeLogo"
            :limit="1"
          >
            <img
              v-if="imageUrl"
              :src="imageUrl"
              class="avatar"
              title="当前头像"
            />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <!-- 集团名称 -->
        <el-form-item label="集团名称" prop="name" class="must">
          <el-input v-model="ruleForm.name" />
        </el-form-item>

        <!-- 集团账号 -->
        <el-form-item label="集团账号">
          <el-input v-model="ruleForm.ID" />
        </el-form-item>

        <!-- 联系人 -->
        <el-form-item label="联系人" prop="linkMan" class="must">
          <el-input v-model="ruleForm.linkMan" />
        </el-form-item>

        <!-- 联系电话 -->
        <el-form-item label="联系电话" prop="tel" class="must">
          <el-input v-model="ruleForm.tel" type="number" />
        </el-form-item>

        <!-- 所属区域 -->
        <el-form-item label="所属区域" prop="area" class="must">
          <el-input v-model="ruleForm.area" />
        </el-form-item>

        <!-- 详细地址 -->
        <el-form-item label="详细地址" prop="location" class="must">
          <el-input v-model="ruleForm.location" />
        </el-form-item>

        <!-- 集团介绍 -->
        <el-form-item label="集团介绍">
          <el-input v-model="ruleForm.introduce" />
        </el-form-item>

        <!-- 自定义 -->
        <div class="diy">
          <!-- 自定义颜色 -->
          <div class="diyColor">
            <div class="menuColor">
              <div class="label">自定义菜单栏颜色</div>
              <div
                v-for="(item, i) in menuColorArr"
                :key="i"
                :class="'menuBox'"
                :style="{ background: item }"
              ></div>

              <div class="menuBox">
                <el-color-picker v-model="color1" />
              </div>
            </div>
            <div class="buttonColor">
              <div class="label">自定义按钮颜色</div>
              <div
                v-for="(item, i) in buttonColorArr"
                :key="i"
                :class="'menuBox'"
                :style="{ background: item }"
              ></div>
              <div class="menuBox" :style="{ background: 'pink' }">
                <el-color-picker v-model="color2" />
              </div>
            </div>
          </div>
          <!-- 自定义登陆图片 -->
          <div class="diyBg">
            <div class="label">自定义登陆页背景</div>
            <div class="bgpic">
              <img :src="imageUrl1 ? imageUrl1 : bgpic" alt="" />
              <div class="picSize">建议图片尺寸 1920*1080</div>
              <!-- 上传背景图片 -->
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="true"
                :on-success="handleBgSuccess"
                :before-upload="beforeBgUpload"
                :limit="1"
                :before-remove="removeBgPic"
                :on-change="changeBg"
                :auto-upload="false"
              >
                <el-button type="primary">重置</el-button>
              </el-upload>
            </div>
          </div>
        </div>
        <!-- 按钮 -->
        <div class="control">
          <el-button type="primary" @click="submitForm">
            保存
          </el-button>
          <el-button type="primary" @click="resetForm">
            清空
          </el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import bgpic from '@/assets/img/login/background.png'
export default {
  data() {
    return {
      bgpic,
      color1: '',
      color2: '',
      imageUrl: '',
      imageUrl1: '',
      menuColorArr: ['red', 'blue', 'green', 'pink'],
      buttonColorArr: ['orange', 'yellow', 'purple', 'pink'],
      ruleForm: {
        name: '',
        ID: '',
        linkMan: '',
        tel: '',
        area: '',
        location: '',
        introduce: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入集团名称',
            trigger: 'blur'
          },
          {
            pattern: /^[\u4E00-\u9FA5]+$/, // 正则
            message: '集团名称只能为中文'
          }
        ],
        linkMan: [
          {
            required: true,
            message: '联系人不能为空',
            trigger: 'blur'
          },
          {
            pattern: /^[\u4E00-\u9FA5]+$/, // 正则
            message: '用户名只能为中文'
          }
        ],
        tel: [
          {
            required: true,
            message: '请输入正确的电话格式',
            trigger: 'blur'
          }
        ],
        area: [
          {
            required: true,
            message: '请输入所属区域',
            trigger: 'blur'
          }
        ],
        location: [
          { required: true, message: '请输入详细地址', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    flag() {
      console.log('变化了')
      return sessionStorage.getItem('aa')
    }
  },
  mounted() {
    setTimeout(() => {
      sessionStorage.setItem('aa', '123')
      console.log('完成赋值')
      console.log(sessionStorage.getItem('aa'))
    }, 5000)
    console.log(this.flag)
  },
  methods: {
    // logo成功上传
    handleAvatarSuccess(res, file, fl) {
      // console.log(res)
      console.log(file)
      this.imageUrl = URL.createObjectURL(file.raw)
      console.log(this.imageUrl)
    },
    // logo校验图片格式
    beforeAvatarUpload(file) {
      // console.log(file)
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
      // 小于2mb
      const isLt2M = file.size / 1024 / 1024 < 2
      // console.log(file.size / 1024 / 1024)
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      // false会终止上传
      console.log('校验格式' + isJPG && isLt2M)
      return isJPG && isLt2M
    },
    // bg上传成功
    handleBgSuccess(res, file, fl) {
      console.log('成功上传')
      console.log(file)
      console.log(this.imageUrl1)
    },
    // 校验背景图片
    beforeBgUpload(file) {
      console.log('校验文件')
      // this.imageUrl1 = URL.createObjectURL(file)
      return true
    },

    submitForm(formName) {
      console.log(formName)
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          if (!this.imageUrl) {
            return this.$message.error('请选择logo')
          }
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs.ruleForm.resetFields()
    },
    removeBgPic() {
      this.imageUrl1 = ''
    },
    removeLogo() {
      this.imageUrl = ''
    },
    changeBg(file) {
      this.imageUrl1 = URL.createObjectURL(file.raw)
    }
  }
}
</script>

<style lang="less" scoped>
.contain {
  min-width: 1390px;
  padding: 24px;
}
.el-card {
  padding-left: 349px;
  border-radius: 10px;
  .el-input {
    width: 673px;
  }
}
.el-form {
  width: 779px;
  /deep/.el-form-item__label {
    text-align: left;
    position: relative;
    font-weight: bold;
  }
  .logoHeight {
    /deep/.el-form-item__label {
      height: 78px;
      line-height: 78px;
    }
  }

  .must {
    /deep/label.el-form-item__label::after {
      content: '*';
      // width: 0;
      color: red;
      position: absolute;
      top: 4px;
      right: 10px;
    }
  }
  /deep/label.el-form-item__label::before {
    content: '' !important;
    width: 0;
    height: 0;
  }
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 78px;
  height: 78px;
  line-height: 78px;
  text-align: center;
  background-color: #eee;
}
.avatar {
  width: 78px;
  height: 78px;
  display: block;
}
.reset {
  float: right;
  width: 90px;
  height: 40px;
  line-height: 40px;
  border-radius: 8px;
  text-align: center;
  background-color: #409eff;
  color: #fff;
  font-size: 14px;
}
.diyColor {
  display: inline-block;
  width: 468px;
  .menuColor {
    height: 40px;
    margin-bottom: 26px;
  }
  .menuBox {
    cursor: pointer;
    display: inline-block;
    margin-left: 15px;
    border-radius: 8px;
    width: 40px;
    height: 40px;
    background-color: #eee;
  }
  .buttonColor {
    height: 40px;
  }
}

.label {
  width: 117px;
  display: inline-block;
  color: #141414;
  font-size: 14px;
  font-weight: bold;
  vertical-align: top;
}
.diyBg {
  .bgpic {
    display: inline-block;
    padding-left: 20px;
    width: 173px;
    height: 98px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      cursor: pointer;
    }
    .picSize {
      font-size: 12px;
      height: 16px;
      line-height: 16px;
      color: rgba(122, 122, 122, 0.8);
    }
    .el-button {
      width: 90px;
      margin-left: 83px;
      margin-top: 12px;
    }
  }
}
.diy {
  display: flex;
}
.control {
  text-align: center;
  margin-top: 69px;
}
/deep/.el-color-picker__trigger {
  border: none;
}
/deep/.el-color-picker__color {
  border: none;
}
</style>
<style>
/* 去除input数字箭头 */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
