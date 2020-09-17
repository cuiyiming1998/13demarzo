<template>
  <div class='home'>
    <h1 class='topics'>{{ topText }}</h1>
    <el-button class='btn'>即刻探索</el-button>
    <el-carousel height="900px" style="width: 90%; text-align: center">
      <el-carousel-item v-for='item in imgs' :key='item.index'>
        <img :src='item.path' alt='资源请求失败，请刷新网页' class='img'/>
      </el-carousel-item>
    </el-carousel>
    <div class='goods' v-for='(item, index) in goods' :key='index'>
      <div v-if="index % 2 === 0" class="goods">
        <img :src='item.path' alt='资源请求失败，请刷新网页' />
        <div class='goods-detail'>
          <div class='name'>{{ item.name }}</div>
          <div class='description'>{{ item.description }}</div>
          <el-button class='btn'>即刻享购</el-button>
        </div>
      </div>
      <div v-else class="goods">
        <div class='goods-detail'>
          <div class='name'>{{ item.name }}</div>
          <div class='description'>{{ item.description }}</div>
          <el-button class='btn'>即刻享购</el-button>
        </div>
        <img :src='item.path' alt='资源请求失败，请刷新网页' />
      </div>
    </div>
    <el-backtop style='color: black'></el-backtop>
  </div>
</template>

<script>
export default {
  data () {
    return {
      topText: '玩偶  系列',
      imgs: [
        {
          path: 'http://23679700.s21i.faiusr.com/2/1/ABUIABACGAAgwdGX_gUozcP21AcwwDQ43B8!1500x1500.jpg.webp',
          index: 1
        },
        {
          path: 'http://23679700.s21i.faiusr.com/2/1/ABUIABACGAAgwdGX_gUozcP21AcwwDQ43B8!1500x1500.jpg.webp',
          index: 2
        },
        {
          path: 'http://23679700.s21i.faiusr.com/2/1/ABUIABACGAAgwdGX_gUozcP21AcwwDQ43B8!1500x1500.jpg.webp',
          index: 3
        }
      ],
      goods: [
        {
          path: 'http://23679700.s21i.faiusr.com/2/1/ABUIABACGAAg7O2X_gUo3J388wYwgCM4wDQ!700x700.jpg.webp',
          name: '玩偶 系列',
          description: 'Multiple Teddy Bear Random Limited Edition'
        },
        {
          path: 'http://23679700.s21i.faiusr.com/2/1/ABUIABACGAAg7O2X_gUo3J388wYwgCM4wDQ!700x700.jpg.webp',
          name: '玩偶 系列',
          description: 'Multiple Teddy Bear Random Limited Edition'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  margin-top: 10px;
  padding: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .topics {
    color: black;
    font-size: 2.5rem;
  }
  .btn {
    margin: 20px 0;
    border-radius: 4px;
    background-color: black;
    border-color: black;
  }
  .img {
    cursor: pointer;
  }
  .goods {
    width: 90%;
    display: flex;
    .goods-detail {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: black;
      .name {
        width: 80%;
        text-align: center;
        font-size: 2rem;
        font-weight: bold;
      }
      .description {
        width: 80%;
        font-size: 3rem;
        color: #8e8e8e
      }
    }
  }
}
</style>
