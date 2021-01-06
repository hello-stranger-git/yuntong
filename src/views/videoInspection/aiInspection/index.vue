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
        <div class="openServe">启用此项</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon1: require('@/assets/img/icon/aiIcon1.png'),
      icon2: require('@/assets/img/icon/aiIcon1.png'),
      icon3: require('@/assets/img/icon/aiIcon1.png'),
      icon4: require('@/assets/img/icon/aiIcon1.png'),
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
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.contain {
  // height: 800px;
  // background-color: pink;
  margin: 24px;
  // border-radius: 10px;
  // overflow: hidden;
  .title {
    padding-left: 15px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #141414;
    font-weight: bold;
    border-radius: 5px;
    background-color: #fff;
  }
  .serve {
    height: 600px;
    background-color: #fff;
    border-radius: 10px;
    margin-top: 24px;
    padding: 15px;
    .item {
      position: relative;
      height: 125px;
      padding-left: 120px;
      border: 1px solid #e2e2e2;
      border-radius: 23px;
      margin-top: 20px;
      &:first-child {
        margin-top: 0;
      }
      .icon {
        position: absolute;
        left: 40px;
        top: 30px;
        width: 60px;
        height: 60px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .type {
        font-size: 18px;
        margin-top: 35px;
        font-weight: bold;
        span {
          display: inline-block;
          font-size: 14px;
          color: #3ac47d;
        }
      }
      .value {
        margin-top: 10px;
        font-size: 14px;
        color: #141414;
      }
      .openServe {
        position: absolute;
        right: 30px;
        top: 46%;
        font-size: 14px;
        font-weight: bold;
        color: #409eff;
        cursor: pointer;
        &:hover {
          color: paleturquoise;
        }
      }
    }
  }
}
</style>
