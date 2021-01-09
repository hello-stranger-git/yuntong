<!--实时视频-->
<template>
  <div class="contain">
    <div class="aside">
      <div class="tabs">
        <div
          class="list"
          :style="{ border: activeTab === 0 ? '' : 'none' }"
          @click="activeTab = 0"
        >
          全部门店
        </div>
        <div
          class="task"
          :style="{ border: activeTab === 1 ? '' : 'none' }"
          @click="activeTab = 1"
        >
          我的收藏
        </div>
      </div>
      <!-- tab1 -->
      <div v-if="!activeTab">
        <div class="search">
          <el-input v-model="filterText" placeholder="请输入店名" />
          <el-button type="primary" icon="el-icon-search" />
        </div>
        <!-- 树形控件 -->
        <el-tree
          ref="tree"
          class="filter-tree"
          :data="storeData"
          accordion
          :props="defaultProps"
          :filter-node-method="filterNode"
        >
          <span slot-scope="{ node, data }" class="custom-tree-node">
            <span>{{ node.label }}</span>
            <img
              v-if="!data.children"
              :src="data.collect ? fullStar : emptyStar"
              @click="toggleCollect(node, data)"
            />
          </span>
        </el-tree>
      </div>
      <!-- tab2 -->
      <div v-else>
        <div v-for="(item, i) in myCollection" :key="i" class="storeCell">
          {{ item.label }}
          <img :src="storeIcon" />
          <img :src="fullStar" @click="myCollection.splice(i, 1)" />
        </div>
      </div>
    </div>
    <div class="main">
      <!-- 控制 -->
      <div class="control">
        <div
          v-for="(item, i) in type"
          :key="i"
          class="type"
          :style="{
            background: activeIndex === i ? '#fff' : '',
            color: activeIndex === i ? '#141414' : ''
          }"
          @click="toggleVideos(i, item.limit)"
        >
          <img :src="activeIndex === i ? item.activeIcon : item.icon" />
          {{ item.value }}
        </div>
        <div class="setpage">
          <div class="type upPage">上一页</div>
          <div class="type nextPage">下一页</div>
        </div>
        <div class="type onlineCheck" @click="$router.push({ name: 'OnLine' })">
          在线考评
        </div>
        <div class="type close" @click="clearVideos">关闭全部</div>
      </div>
      <!-- 视频 -->
      <div class="videos">
        <template v-for="(item, i) in videosArr">
          <div
            v-if="item.url"
            :key="i"
            class="video"
            :style="{ width: videoSize[0], height: videoSize[1] }"
          >
            <video :src="item.url" controls></video>
          </div>
          <div
            v-else
            :key="i"
            class="video"
            :style="{ width: videoSize[0], height: videoSize[1] }"
          >
            <img :src="anyVideo" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullStar: require('@/assets/img/icon/fullIcon.png'),
      emptyStar: require('@/assets/img/icon/emptyIcon.png'),
      storeIcon: require('@/assets/img/icon/storeIcon.png'),
      type: [
        {
          value: '四宫格',
          limit: 4,
          icon: require('@/assets/img/icon/fourth.png'),
          activeIcon: require('@/assets/img/icon/activeFourth.png')
        },
        {
          value: '九宫格',
          limit: 9,
          icon: require('@/assets/img/icon/ninth.png'),
          activeIcon: require('@/assets/img/icon/activeNinth.png')
        },
        {
          value: '十六宫格',
          limit: 12,
          icon: require('@/assets/img/icon/sixteenth.png'),
          activeIcon: require('@/assets/img/icon/activeSixteenth.png')
        }
      ],
      activeIndex: 1,
      activeTab: 0,
      url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
      anyVideo: require('@/assets/img/icon/anyVideo.png'),
      filterText: '',
      storeData: [
        {
          label: '华中区',
          children: [
            {
              label: '广东',
              children: [
                {
                  label: '广州',
                  children: [
                    { label: '广州华为旗舰店', collect: false },
                    { label: '广州华为旗舰店', collect: false },
                    { label: '广州华为旗舰店', collect: true },
                    { label: '广州华为旗舰店', collect: true }
                  ]
                },
                {
                  label: '东莞',
                  children: [
                    { label: '东莞华为旗舰店', collect: true },
                    { label: '东莞华为旗舰店', collect: true },
                    { label: '东莞华为旗舰店', collect: true },
                    { label: '东莞华为旗舰店', collect: true }
                  ]
                },
                {
                  label: '深圳',
                  children: [
                    { label: '深圳华为旗舰店', collect: true },
                    { label: '深圳华为旗舰店', collect: true },
                    { label: '深圳华为旗舰店', collect: true },
                    { label: '深圳华为旗舰店', collect: true }
                  ]
                }
              ]
            },
            {
              label: '广西',
              children: [
                {
                  label: '南宁',
                  children: [
                    { label: '南宁华为旗舰店', collect: true },
                    { label: '南宁华为旗舰店', collect: true },
                    { label: '南宁华为旗舰店', collect: true },
                    { label: '南宁华为旗舰店', collect: true }
                  ]
                }
              ]
            }
          ]
        },
        {
          label: '华南区',
          children: [
            {
              id: 10,
              label: '广东',
              children: [
                {
                  id: 110,
                  label: '广州',
                  children: [
                    { id: 1111, label: '广州华为旗舰店', collect: true },
                    { label: '广州华为旗舰店', collect: true },
                    { label: '广州华为旗舰店', collect: true },
                    { label: '广州华为旗舰店', collect: true }
                  ]
                },
                {
                  label: '东莞',
                  children: [
                    { label: '东莞华为旗舰店', collect: true },
                    { label: '东莞华为旗舰店', collect: true },
                    { label: '东莞华为旗舰店', collect: true },
                    { label: '东莞华为旗舰店', collect: true }
                  ]
                },
                {
                  label: '深圳',
                  children: [
                    { label: '深圳华为旗舰店', collect: true },
                    { label: '深圳华为旗舰店', collect: true },
                    { label: '深圳华为旗舰店', collect: true },
                    { label: '深圳华为旗舰店', collect: true }
                  ]
                }
              ]
            },
            {
              label: '广西',
              children: [
                {
                  label: '南宁',
                  children: [
                    { label: '南宁华为旗舰店', collect: true },
                    { label: '南宁华为旗舰店', collect: true },
                    { label: '南宁华为旗舰店', collect: true },
                    { label: '南宁华为旗舰店', collect: true }
                  ]
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      videoLimit: 9,
      videosArr: [
        { url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' },
        { url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' },
        { url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' },
        { url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' },
        { url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' },
        { url: '' },
        { url: '' },
        { url: '' },
        { url: '' }
      ],
      videoSize: ['33.33%', '33.33%'],
      myCollection: []
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    }
  },
  methods: {
    handle(node) {
      console.log(node)
    },
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    toggleVideos(i, limit) {
      this.activeIndex = i
      this.videoLimit = limit
      // 发送请求获取视频
      if (limit === 4) {
        this.videoSize = ['50%', '50%']
        this.videosArr = [
          { url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' },
          { url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' },
          { url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' },
          { url: '' }
        ]
      } else if (limit === 9) {
        this.videoSize = ['33.33%', '33.33%']

        this.videosArr = [
          { url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' },
          { url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' },
          { url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' },
          { url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' },
          { url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' },
          { url: '' },
          { url: '' },
          { url: '' },
          { url: '' }
        ]
      } else {
        this.videoSize = ['25%', '25%']

        this.videosArr = [
          { url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' },
          { url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' },
          { url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' },
          { url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' },
          { url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' },
          { url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' },
          { url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' },
          { url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' },
          { url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' },
          { url: '' },
          { url: '' },
          { url: '' },
          { url: '' },
          { url: '' },
          { url: '' },
          { url: '' }
        ]
      }
    },
    toggleCollect(node, data) {
      data.collect = !data.collect
      if (data.collect) {
        this.myCollection.push(data)
      }
    },
    clearVideos() {
      for (let i = 0; i < this.videosArr.length; i++) {
        this.videosArr[i].url = ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.contain {
  display: flex;
  background-color: #f5f5f5;
  height: 100%;
  .aside {
    width: 322px;
    margin: 24px 0 24px 24px;
    border-radius: 10px;
    background-color: #fff;
    overflow: auto;
    .tabs {
      position: relative;
      height: 80px;
      font-size: 14px;
      font-weight: bold;
      color: #141414;
      .list,
      .task {
        position: absolute;
        top: 18px;
        height: 29px;
        line-height: 29px;
        width: 64px;
        text-align: center;
        border-bottom: 2px solid #4a92ff;
      }
      .list {
        left: 54px;
      }
      .task {
        right: 54px;
      }
    }
    .search {
      position: relative;
      width: 293px;
      height: 40px;
      margin-left: 15px;
      border-radius: 5px;
      .el-button {
        position: absolute;
        right: 0;
        top: 0;
        width: 47px;
        height: 40px;
        padding: 0;
        margin: 0;
      }
    }
    .el-tree {
      padding-left: 15px;
      margin-top: 28px;
      img {
        margin-left: 8px;
        transform: translateY(1px);
      }
    }
    .storeCell {
      position: relative;
      height: 22px;
      font-size: 16px;
      color: #141414;
      padding-left: 49px;
      margin-top: 18px;
      img {
        position: absolute;
        top: 4px;
        right: 23px;
        &:first-child {
          top: 1px;
          left: 22px;
        }
        &:last-child {
          cursor: pointer;
        }
      }
    }
  }
  .main {
    flex: 1;
    margin: 24px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
    .control {
      position: relative;
      height: 62px;
      background-color: #606060;
      .type {
        display: inline-block;
        margin-top: 10px;
        width: 92px;
        height: 42px;
        line-height: 42px;
        font-size: 14px;
        border-radius: 5px;
        color: #fff;
        text-align: center;
        cursor: pointer;
        img {
          transform: translateY(2px);
        }
      }
      .setpage {
        position: absolute;
        left: 50%;
        top: 0px;
        transform: translateX(-50%);
        height: 42px;
      }
      .upPage {
        margin-right: 18px;
      }
      .nextPage,
      .upPage {
        border: 1px solid #d8d8d8;
      }
      .close {
        position: absolute;
        right: 8px;
        top: 0;
        background-color: #ff4e4e;
        cursor: pointer;
      }
      .onlineCheck {
        position: absolute;
        right: 108px;
        top: 0;
        background-color: #4a92ff;
      }
    }
    .videos {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 900px;
      flex-wrap: wrap;
      // 设置一行显示x个视频
      .video {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 33.33%;
        height: 33.33%;
        margin: 0;
        padding: 0;
        background-color: #373737;
        border: 1px solid #fff;
        video {
          width: 100%;
          height: 100%;
          border: none;
          padding: 0;
          margin: 0;
          border: 1px solid #fff;
        }
      }
    }
  }
}
</style>
