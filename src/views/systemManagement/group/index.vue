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
        <el-form-item
          ref="uploadLogo"
          label="集团logo"
          class="must logoHeight"
          prop="logo"
        >
          <el-upload
            v-model="ruleForm.logo"
            :class="['avatar-uploader']"
            action=""
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            :auto-upload="true"
            :on-change="uploadLogo"
          >
            <img
              v-if="logoUrl"
              :src="logoUrl"
              class="avatar"
              title="当前头像"
            />
            <i v-else :class="['el-icon-plus avatar-uploader-icon']"></i>
          </el-upload>
          <!-- <div class="tip">请</div> -->
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
        <el-form-item ref="area" label="所属区域" prop="area" class="must">
          <el-cascader
            v-model="ruleForm.area"
            :options="options"
            filterable
            :props="{ expandTrigger: 'hover' }"
            @change="changeArea"
          />
          <el-button
            type="primary"
            class="areaReset"
            :style="{
              backgroundColor: btnPreviewColor ? btnPreviewColor : btnBgColor
            }"
            @click="resetArea"
          >
            重置
          </el-button>
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
                @click="setPreviewBgc(item)"
              ></div>
              <!-- 菜单颜色选择器 -->
              <div class="menuBox">
                <el-color-picker v-model="menuPickColor" />
              </div>
            </div>
            <div class="buttonColor">
              <div class="label">自定义按钮颜色</div>
              <div
                v-for="(item, i) in buttonColorArr"
                :key="i"
                :class="'menuBox'"
                :style="{ background: item }"
                @click="setBtnPreviewColor(item)"
              ></div>
              <!-- 按钮颜色选择器 -->

              <div class="menuBox" :style="{ background: '#eee' }">
                <el-color-picker v-model="buttonPickColor" />
              </div>
            </div>
          </div>
          <!-- 自定义登陆图片 -->
          <div class="diyBg">
            <div class="label">自定义登陆页背景</div>
            <div class="bgpic">
              <img :src="loginBgPic ? loginBgPic : bgpic" alt="" />
              <div class="picSize">建议图片尺寸 1920*1080</div>
              <!-- 上传背景图片 -->
              <el-upload
                class="avatar-uploader"
                action=""
                :show-file-list="true"
                :on-success="handleBgSuccess"
                :before-upload="beforeBgUpload"
                :limit="1"
                :auto-upload="true"
              >
                <el-button
                  type="primary"
                  :style="{
                    backgroundColor: btnPreviewColor
                      ? btnPreviewColor
                      : btnBgColor
                  }"
                >
                  更改
                </el-button>
              </el-upload>
            </div>
          </div>
        </div>
        <!-- 按钮 -->
        <div class="control">
          <el-button
            type="primary"
            :style="{
              backgroundColor: btnPreviewColor ? btnPreviewColor : btnBgColor
            }"
            @click="submitForm"
          >
            保存
          </el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import bgpic from '@/assets/img/login/background.png'
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      bgpic,
      menuPickColor: '',
      buttonPickColor: '',
      logoUrl: '',
      loginBgPic: '',
      // uploadLogoTip: false,
      menuColorArr: ['#f37b1d', '#8dc63f', '#8799a3', '#0081ff'],
      buttonColorArr: ['#e54d42', '#39b54a', '#e03997', '#6739b6'],
      ruleForm: {
        logo: '',
        name: '',
        ID: '',
        linkMan: '',
        tel: '',
        area: '',
        location: '',
        introduce: ''
      },
      rules: {
        logo: [
          {
            required: true,
            message: '请选择logo',
            trigger: 'change'
          }
        ],
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
            type: 'array',
            required: true,
            message: '请选择所属区域',
            trigger: 'blur'
          }
        ],
        location: [
          { required: true, message: '请输入详细地址', trigger: 'blur' }
        ]
      },
      options: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致'
                },
                {
                  value: 'fankui',
                  label: '反馈'
                },
                {
                  value: 'xiaolv',
                  label: '效率'
                },
                {
                  value: 'kekong',
                  label: '可控'
                }
              ]
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }
              ]
            }
          ]
        },
        {
          value: 'zujian',
          label: '组件',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout 布局'
                },
                {
                  value: 'color',
                  label: 'Color 色彩'
                },
                {
                  value: 'typography',
                  label: 'Typography 字体'
                },
                {
                  value: 'icon',
                  label: 'Icon 图标'
                },
                {
                  value: 'button',
                  label: 'Button 按钮'
                }
              ]
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio 单选框'
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox 多选框'
                },
                {
                  value: 'input',
                  label: 'Input 输入框'
                },
                {
                  value: 'input-number',
                  label: 'InputNumber 计数器'
                },
                {
                  value: 'select',
                  label: 'Select 选择器'
                },
                {
                  value: 'cascader',
                  label: 'Cascader 级联选择器'
                },
                {
                  value: 'switch',
                  label: 'Switch 开关'
                },
                {
                  value: 'slider',
                  label: 'Slider 滑块'
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器'
                },
                {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器'
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器'
                },
                {
                  value: 'upload',
                  label: 'Upload 上传'
                },
                {
                  value: 'rate',
                  label: 'Rate 评分'
                },
                {
                  value: 'form',
                  label: 'Form 表单'
                }
              ]
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table 表格'
                },
                {
                  value: 'tag',
                  label: 'Tag 标签'
                },
                {
                  value: 'progress',
                  label: 'Progress 进度条'
                },
                {
                  value: 'tree',
                  label: 'Tree 树形控件'
                },
                {
                  value: 'pagination',
                  label: 'Pagination 分页'
                },
                {
                  value: 'badge',
                  label: 'Badge 标记'
                }
              ]
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert 警告'
                },
                {
                  value: 'loading',
                  label: 'Loading 加载'
                },
                {
                  value: 'message',
                  label: 'Message 消息提示'
                },
                {
                  value: 'message-box',
                  label: 'MessageBox 弹框'
                },
                {
                  value: 'notification',
                  label: 'Notification 通知'
                }
              ]
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                },
                {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑'
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                },
                {
                  value: 'steps',
                  label: 'Steps 步骤条'
                }
              ]
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog 对话框'
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                },
                {
                  value: 'popover',
                  label: 'Popover 弹出框'
                },
                {
                  value: 'card',
                  label: 'Card 卡片'
                },
                {
                  value: 'carousel',
                  label: 'Carousel 走马灯'
                },
                {
                  value: 'collapse',
                  label: 'Collapse 折叠面板'
                }
              ]
            }
          ]
        },
        {
          value: 'ziyuan',
          label: '资源',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            },
            {
              value: 'sketch',
              label: 'Sketch Templates'
            },
            {
              value: 'jiaohu',
              label: '组件交互文档'
            }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['getLogo']),
    ...mapState(['btnBgColor', 'btnPreviewColor'])
  },
  watch: {
    // 监听菜单和按钮选择器的颜色
    menuPickColor() {
      if (this.menuPickColor) {
        this.setPreviewBgc(this.menuPickColor)
      } else {
        this.clearPreviewBgc()
      }
    },
    buttonPickColor() {
      if (this.buttonPickColor) {
        this.setBtnPreviewColor(this.buttonPickColor)
      } else {
        this.setBtnPreviewColor('')
      }
    }
  },
  // 清除未保存的颜色
  beforeDestroy() {
    this.clearPreviewBgc()
    this.setBtnPreviewColor('')
  },
  methods: {
    ...mapMutations([
      'setAsideBgc',
      'setPreviewBgc',
      'clearPreviewBgc',
      'setLogo',
      'setBtnPreviewColor',
      'setBtnBgColor',
      'setBgPic'
    ]),
    changeArea() {
      if (this.ruleForm.area) {
        this.$refs.area.clearValidate()
      }
    },
    // logo成功上传
    handleAvatarSuccess(res, file, fl) {
      // this.logoUrl = URL.createObjectURL(file.raw)
      // console.log(this.logoUrl)
    },
    // logo校验图片格式
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
      // 小于2mb
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    // 上传图片变化钩子
    uploadLogo(file) {
      this.logoUrl = URL.createObjectURL(file.raw)
      this.ruleForm.logo = this.logoUrl
      // 清除了验证消息
      this.$refs.uploadLogo.clearValidate()
    },
    // bg上传成功
    handleBgSuccess(res, file, fl) {
      console.log('成功上传')
    },
    // 校验背景图片
    beforeBgUpload(file) {
      this.loginBgPic = URL.createObjectURL(file)
      return true
    },
    // 提交
    submitForm(formName) {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          // 侧边背景色、清除预览背景色
          this.setAsideBgc(this.$store.state.previewBgc)
          this.clearPreviewBgc()
          // 保存按钮颜色、清除按钮预览色
          this.setBtnBgColor(this.btnPreviewColor)
          this.setBtnPreviewColor('')
          // 保存登陆背景图
          this.setBgPic(this.loginBgPic)
          // 保存logo
          this.setLogo(this.logoUrl)
          this.logoUrl = ''
          this.$message.success('提交成功')
          this.resetForm()
        } else {
          console.log(this.ruleForm.logo)
          return false
        }
      })
    },
    // 清空表单
    resetForm(formName) {
      this.$refs.ruleForm.resetFields()
    },
    //
    resetArea() {
      this.ruleForm.area = ''
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
    width: 679px;
  }
  .el-cascader {
    width: 526px;
  }
  .areaReset {
    float: right;
    width: 90px;
  }
}
.el-button {
  border: none;
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
    .logoTip {
      border: 1px solid #f56c6c;
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
  .el-button {
    width: 90px;
  }
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
