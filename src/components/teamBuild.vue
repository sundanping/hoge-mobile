<template>
  <div style="font-size: .2rem">
    <header align="center">
      <div>{{title}}</div>
      <span @click="$router.go(-1)"><img src="./../assets/images/public/left.jpg" alt="" title="back"></span>
    </header>
    <!--<div style="height: .3rem;"></div>-->
    <yd-lightbox  class="box" :num="list.length">
        <yd-lightbox-img   v-for="item in list"  :key="item.id" style="float:left;margin-left:.5%;padding:.5%;color:#fff;width:48%;height:180px;" :src="item.host+item.dir+item.filepath+item.filename" ></yd-lightbox-img>
      <yd-lightbox-txt>
        <h1 style="font-size: .2rem;color:white;" slot="top">{{title}}</h1>
        <div class="image-content" style="font-size: .2rem;color:white;" slot="content">
          <p>{{time}}</p>
        </div>
      </yd-lightbox-txt>
    </yd-lightbox>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        title: '加载中…',
        time: '',
        id: this.$route.query.id,
        list: []
      }
    },
    mounted () {
//      console.log(this.$el.clientWidth*.48)
      let that = this
      this.$http.get('http://www.hoge.cn/m2o/pub/content.php?id=' + this.id)
        .then(function (response) {
          that.title = response.data[0].title
          that.time = response.data[0].publish_time
          that.list.length = 0
          that.list = response.data[0].childs_data
//          Array.prototype.push.apply(that.list, response.data[0].childs_data)
//          console.log(that.list)
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  }
</script>
<style scoped>
  header {
    height: .88rem;
    width: 100%;
    font-size: .36rem;
    text-align: center;
  }

  header > div {
    padding-left:.7rem;
    padding-right:.7rem;
    position: relative;
    top: .26rem;
    height: .36rem;
    font-size: .36rem;
    line-height: .36rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  header > span {
    display: block;
    height: .36rem;
    width: .21rem;
    position: absolute;
    top: .26rem;
    left: .24rem;
  }

  header > span  img {
    width: 100%;
    height: 100%;
  }

</style>
<style>
  .box{
    /*width:48%;;*/
    height:180px
  }
  .yd-lightbox-head span ,.yd-lightbox-head a{
    color: #cdcdcd;
  }
</style>
