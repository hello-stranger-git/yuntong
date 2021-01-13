<!--用户新增-->
<template>
  <div class="userEdit">
    <!-- 表单区域 -->
    <el-form ref="form" :model="form" label-width="106px">
      <!-- 账号 -->
      <el-form-item>
        <template #label>
          <p>账号</p>
          <span>*</span>
        </template>
        <el-input v-model="form.number" />
      </el-form-item>
      <!-- 密码 -->
      <el-form-item>
        <template #label>
          <p>密码</p>
          <span>*</span>
        </template>
        <el-input type="password" v-model="form.password1" />
      </el-form-item>
      <!-- 密码确认 -->
      <el-form-item>
        <template #label>
          <p>密码确认</p>
          <span>*</span>
        </template>
        <el-input type="password" v-model="form.password2" />
      </el-form-item>
      <!-- 姓名 -->
      <el-form-item>
        <template #label>
          <p>姓名</p>
          <span>*</span>
        </template>
        <el-input v-model="form.name" />
      </el-form-item>
      <!-- 性别 -->
      <el-form-item>
        <template #label>
          <p>性别</p>
        </template>
        <el-radio-group v-model="form.sex">
          <el-radio label="男" />
          <el-radio label="女" />
        </el-radio-group>
      </el-form-item>
      <!-- 用户编号 -->
      <el-form-item>
        <template #label>
          <p>用户编号</p>
        </template>
        <el-input v-model="form.identifier" />
      </el-form-item>
      <!-- 联系方式 -->
      <el-form-item>
        <template #label>
          <p>联系方式</p>
          <span>*</span>
        </template>
        <el-input v-model="form.phone" />
      </el-form-item>
      <!-- 电子邮箱 -->
      <el-form-item>
        <template #label>
          <p>电子邮箱</p>
          <span>*</span>
        </template>
        <el-input v-model="form.email" />
      </el-form-item>
      <!-- 所属组织 -->
      <el-form-item>
        <template #label>
          <p>所属组织</p>
          <span>*</span>
        </template>
        <span @click="drawer">
          <el-input v-model="form.organization" readonly="readonly" />
        </span>
      </el-form-item>
      <!-- 授权门店 -->
      <el-form-item>
        <template #label>
          <p>授权门店</p>
          <span>*</span>
        </template>
        <span @click="show">
          <el-input v-model="store" />
        </span>
      </el-form-item>
      <!-- 职位 -->
      <el-form-item>
        <template #label>
          <p>职位</p>
          <span>*</span>
        </template>
        <el-select
          v-model="form.position"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请选择"
        >
          <el-option
            v-for="item in positionData"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <!-- 权限 -->
      <el-form-item>
        <template #label>
          <p>权限</p>
        </template>
        <div>
          <el-tree
            :data="userTree"
            show-checkbox
            node-key="id"
            ref="tree"
            :props="defaultProps"
            @check="handleNodeClick"
          />
        </div>
      </el-form-item>
      <!-- 描述 -->
      <el-form-item>
        <template #label>
          <p>描述</p>
        </template>
        <el-input type="textarea" v-model="form.desc" />
      </el-form-item>
      <el-form-item class="footerButton">
        <el-button
          type="primary"
          :style="
            `background-color:${this.$store.state.btnBgColor};border-color:${this.$store.state.btnBgColor}`
          "
          @click="submitForm()"
        >
          保存</el-button
        >
        <el-button>返回</el-button>
      </el-form-item>
    </el-form>
    <!-- 所属组织弹出层 -->
    <SingleChoice ref="singleChoice" @change="obtain" />
    <!-- 授权门店弹出层 -->
    <MultipleChoice ref="multipleChoice" @change="getStores" />
  </div>
</template>
<script>
import SingleChoice from '@/components/popupTree/singleChoice.vue' // 单选弹出层
import MultipleChoice from '@/components/popupTree/multipleChoice.vue' // 多选弹出层

export default {
  components: {
    SingleChoice,
    MultipleChoice
  },
  data() {
    return {
      store: '', // 授权门店输入框值
      // 表单
      form: {
        number: '', // 账号
        password1: '', // 密码
        password2: '', // 确认密码
        name: '', // 姓名
        sex: '', // 性别
        identifier: '', // 编号
        phone: '', // 联系方式
        email: '', // 电子邮箱
        organization: '', // 组织
        stores: [], // 门店
        position: '', // 职位
        power: '', // 权限
        desc: '' // 描述
      },
      // 用户权限tree
      userTree: [
        {
          id: 1,
          label: '门店分布',
          children: [
            {
              id: 10,
              label: '门店分布'
            }
          ]
        },
        {
          id: 2,
          label: '数据分析',
          children: [
            {
              id: 11,
              label: '实时客流'
            },
            {
              id: 12,
              label: '客流分析'
            }
          ]
        },
        {
          id: 3,
          label: '实时视频',
          children: [
            {
              id: 13,
              label: '实时视频'
            }
          ]
        },
        {
          id: 4,
          label: '视频巡查',
          children: [
            {
              id: 14,
              label: '图片点检'
            },
            {
              id: 15,
              label: 'AI巡查'
            }
          ]
        },
        {
          id: 5,
          label: '巡查任务',
          children: [
            {
              id: 16,
              label: '待我处理'
            },
            {
              id: 17,
              label: '与我相关'
            }
          ]
        },
        {
          id: 6,
          label: '门店管理',
          children: [
            {
              id: 18,
              label: '门店列表'
            },
            {
              id: 19,
              label: '门店审核'
            }
          ]
        },
        {
          id: 7,
          label: '运维管理',
          children: [
            {
              id: 20,
              label: '设备管理',
              children: [
                {
                  id: 22,
                  label: '生成视频地址'
                }
              ]
            },
            {
              id: 21,
              label: '视频观看统计'
            }
          ]
        },
        {
          id: 8,
          label: '参数配置',
          children: [
            {
              id: 23,
              label: '考评任务配置'
            },
            {
              id: 24,
              label: '巡查模板配置'
            }
          ]
        },
        {
          id: 9,
          label: '系统设置',
          children: [
            {
              id: 25,
              label: '用户管理'
            },
            {
              id: 26,
              label: '组织管理'
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      // 职位下拉选项
      positionData: [
        {
          value: '店长',
          label: '店长'
        },
        {
          value: '全部权限',
          label: '全部权限'
        },
        {
          value: '管理员',
          label: '管理员'
        }
      ]
    }
  },
  methods: {
    // 触发保存提交
    submitForm() {
      console.log(this.form)
    },
    // 触发组织子组件方法
    drawer() {
      this.$refs.singleChoice.show()
    },
    // 获取组织子组件选择数据
    obtain(i) {
      this.form.organization = i
    },

    // 触发调用门店子组件方法
    show() {
      this.$refs.multipleChoice.show()
    },
    // 获取门店子组件选择数据
    getStores(i) {
      console.log(i)
      this.form.stores = i
      var obj = []
      for (var item of this.form.stores) {
        obj.push(item.label)
      }
      this.store = obj.join('；')
    },
    // 获取权限选中节点
    handleNodeClick() {
      this.form.power = this.$refs.tree.getCheckedNodes(true)

      // console.log(111)
    }
  }
}
</script>
<style lang="less" scoped>
.userEdit {
  margin: 24px;
  padding: 66px 349px 24px;
  border-radius: 10px;
  background: #fff;
  // 表单区域
  .el-form {
    .el-input {
      width: 673px;
      overflow: hidden;
    }
    /deep/.el-input__inner {
      border-radius: 8px;
    }
  }

  /deep/.el-form-item__label {
    display: flex;
    align-items: center;
    p {
      width: 59px;
      font-size: 14px;
      color: #141414;
      font-weight: bold;
    }
    // 必填框图标
    span {
      height: 32px;
      font-weight: bold;
      color: #ff0000;
      margin-left: 18px;
    }
  }
  .el-form-item {
    margin-bottom: 30px;
  }
  // 职位
  .el-select {
    width: 673px;
  }
  // 保存提交按钮
  .footerButton {
    /deep/.el-form-item__content {
      display: flex;
      justify-content: center;
    }
    .el-button {
      width: 90px;
      height: 40px;
      &:nth-child(2) {
        background-color: #63d45b;
        color: #fff;
      }
    }
  }
}
</style>
