<!--单选弹出层-->
<template>
  <div>
    <!-- 弹出层 -->
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :with-header="false"
      :show-close="false"
    >
      <div class="demo-drawer__content">
        <div class="drawer_title"><img :src="mechanism" />请选择机构</div>
        <!-- tree树形控件 -->
        <el-tree
          :data="data"
          :props="defaultProps"
          @node-click="handleNodeClick"
        />
        <div class="demo-drawer__footer">
          <div>
            <el-button @click="cancelForm">取 消</el-button>
            <el-button type="primary" @click="confirm">
              确定
            </el-button>
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      mechanism: require('@/assets/img/icon/mechanism.png'),

      drawer: false, // 是否显示弹出层
      // 节点选中值
      selectedValue: '',
      // 树形控件数据
      data: [
        {
          label: '所有店',
          children: [
            {
              label: ' 华南区'
            },
            {
              label: '华中区'
            },
            {
              label: '西南区',
              children: [
                {
                  label: '广东',
                  children: [
                    {
                      label: '广州'
                    },
                    {
                      label: '东莞'
                    },
                    {
                      label: '深圳',
                      children: [
                        {
                          label: '宝安区华为体验店'
                        },
                        {
                          label: '南山区华为体验店'
                        },
                        {
                          label: '龙华区华为体验店'
                        },
                        {
                          label: '盐田区华为体验店'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],

      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    // 触发显示弹出层
    show() {
      this.drawer = true
    },
    // 取消关闭弹出层
    cancelForm() {
      this.drawer = false
    },
    // 当点击节点时触发
    handleNodeClick(data) {
      if (!data.children) {
        this.selectedValue = data.label
      } else {
        this.selectedValue = ''
      }
    },
    // 触发向父组件传参
    confirm() {
      if (this.selectedValue) {
        this.$emit('change', this.selectedValue)
        this.drawer = false
      } else {
        this.$message({
          message: '请选择机构'
        })
      }
    }
  }
}
</script>
<style lang="less" scoped>
/deep/.el-drawer {
  width: 346px !important;
}
.drawer_title {
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #fff;
  height: 65px;
  background-color: #38414a;
  img {
    width: 28px;
    height: 28px;
    margin: 0 6px 0 19px;
  }
}
.demo-drawer__footer {
  position: absolute;
  bottom: 46px;
  width: 100%;

  & > div {
    padding: 0 42px;
    display: flex;
    justify-content: space-between;
  }
  .el-button {
    width: 125px;
  }
}
/deep/.el-tree-node.is-current.is-focusable.is-expanded {
  color: #606266;
}
/deep/.is-expanded {
  color: #606266;
}
/deep/.el-tree-node.is-current.is-focusable {
  color: #4a92ff;
}

/deep/.el-drawer:focus {
  outline: none;
}
</style>
