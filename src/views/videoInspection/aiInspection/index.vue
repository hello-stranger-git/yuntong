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
        <div v-if="i === 3" class="tip">
          <span>时间间隔：60分钟/次</span>
          <span>抓拍时间段：09:00-18:00</span>
        </div>
      </div>
    </div>
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
      ]
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
</style>
