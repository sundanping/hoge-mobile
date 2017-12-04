<template>
<div>
  <header align="center">
    <div style="overflow: hidden;padding:0 1rem;white-space: nowrap;text-overflow: ellipsis">{{title}}</div>
    <span @click="$router.go(-1)" ><img src="./../assets/images/public/left.jpg" alt="" title="back"></span>
  </header>
  <div class="content" style="" ref="content"  v-html="content"></div>
</div>
</template>
<script>
  export default {
    name: 'details',
    data () {
      return {
        data: this.$route.query.name,
        message: '',
        title: '加载中...',
        content: ''
      }
    },
    mounted () {
      let _this = this
      let imgWidth =  _this.$el.clientWidth*.8
      let id = this.data
      this.$http.get('http://www.hoge.cn/m2o/pub/content.php?id=' + id)
        .then(function (response) {
        _this.title = response.data[0].title
        _this.content = response.data[0].content
        _this.content = _this.content.replace(/<img/ig, "<img  width=" + imgWidth)
        _this.content = _this.content.replace(/<a/ig, "<a style='word-break:break-all' ")
        _this.content = _this.content.replace(/<video/ig, "<video margin:auto; width=" + imgWidth)
        _this.content = _this.content.replace(/imageid="2012"/ig, "id='width-50'" )
        _this.content = _this.content.replace(/imageid="2011"/ig, "id='width-50'" )
        _this.content = _this.content.replace(/<p/ig, '<p  style="margin-bottom:10px;line-height:20px;"')
          if( _this.data == 676 ){
            let erweima =  _this.content.lastIndexOf('<img')
            _this.content = _this.content.substring(0,erweima) + '<img id="width-25"' + _this.content.substring(erweima)
          }
//          console.log(response)

        })
        .catch(function (err) {
          console.log(err)
        })
    }

  }
</script>
<style scoped >
  header {
    height: .88rem;
    width: 100%;
    font-size: .36rem;
    text-align: center;
  }

  header > div{
    position: relative;
    top: .26rem;
    height: .36rem;
    font-size: .36rem;
    line-height: .36rem;
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
  .content{
    width:100%;
    height:3rem;
    text-align: left;
    font-size: .26rem;
    padding:.5rem;
    text-indent: .4rem;
  }
  .content p{
    padding-bottom: 12px!important;
  }
  .content img{
    width: 3rem!important;
    height:2rem!important;
  }
</style>
<style>
  #width-50{
    width: 45%!important;
  }
  #width-25{
    width: 90px;
    height: 90px;
    margin-left:calc(45% - 45px);
  }
</style>
