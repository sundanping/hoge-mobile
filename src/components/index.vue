<template>
  <div class="">
    <header align="center" :style="background">
      <!--<img src="./../assets/images/index/logo.png" >-->
    </header>
    <div id="banner" class="banner">

      <yd-slider autoplay="3000" index ='1' style="height:3rem;margin:0;padding:0;" >
        <yd-slider-item style=" height:3rem;margin:0;padding:0;">
          <router-link :to="{path:'/details',query: {name: 816}}">
            <img src="./../assets/resource/banner/banner-6.jpg">
          </router-link>
        </yd-slider-item>
        <yd-slider-item >
          <router-link :to="{path:'/details',query: {name: 805}}">
            <img src="./../assets/resource/banner/banner-3.jpg">
          </router-link>
        </yd-slider-item>

        <yd-slider-item >
          <router-link :to="{path:'/details',query: {name: 727}}">
            <img src="./../assets/resource/banner/banner-2.jpg">
          </router-link>
        </yd-slider-item>

        <yd-slider-item >
          <router-link :to="{path:'/details',query: {name: 740}}">
            <img src="./../assets/resource/banner/banner-4.jpg">
          </router-link>
        </yd-slider-item>
        <yd-slider-item >
          <router-link :to="{path:'/details',query: {name: 799}}">
            <img src="./../assets/resource/banner/banner-5.jpg">
          </router-link>
        </yd-slider-item>
      </yd-slider>
    </div>
    <!--公司介绍 加入我们-->
    <div  class="plate-4">
      <div class="flex-1">
        <router-link to="company" class="flex-router">
        <figure>
          <img src="./../assets/images/index/b_03.png" alt="">
          <div >公司介绍</div>
        </figure>
        </router-link>
      </div>
      <div  class="flex-1">
        <router-link to="customer" class="flex-router">
        <figure>
        <img src="./../assets/images/index/c_03.png" alt="">
        <div>行业客户</div>
        </figure>
        </router-link>
      </div>
      <div class="flex-1">
        <router-link to="joinUS" class="flex-router">
        <figure>
      <img src="./../assets/images/index/d_03.png" alt="">
        <div>加入我们</div>
        </figure>
        </router-link>
      </div>
      <div class="flex-1">
        <router-link to="cooperation" class="flex-router">
        <figure>
        <img src="./../assets/images/index/e_03.png" alt="">
        <div>商务合作</div>
        </figure>
        </router-link>
      </div>
    </div>
    <div style="width: 90%;height: 1px;background-color: #f4f5f6;margin-left:5%"></div>
    <!--company honor-->
    <yd-rollnotice class="box_roll" autoplay="2000" style="margin-top:.1rem;">
      <yd-rollnotice-item >

        <div class="roll-notice">
          <div class="honor-company" style="height: .94rem;transform:translateY(-.21rem);padding-left:.24rem;">
            <div class="honor-circle"></div>
            <div class="honor-title">公司荣誉</div>
            <div  class="honor-brief">2016年广播电视科技创新产品奖</div>
            <div class="honor-line"></div>
            <div class="honor-image"><img src="./../assets/resource/honor/trophy-1.png" alt=""></div>
          </div>

        </div>

      </yd-rollnotice-item>
      <yd-rollnotice-item >
        <div class="roll-notice">
          <div class="honor-company" style="height: .94rem;transform:translateY(-.21rem);padding-left:.24rem;">
            <div class="honor-circle"></div>
            <div class="honor-title">公司荣誉</div>
            <div class="honor-brief">2016年广播电视科技创新产品奖</div>
            <div class="honor-line"></div>
            <div class="honor-image"><img src="./../assets/resource/honor/trophy-2.png" alt=""></div>
          </div>
        </div>
      </yd-rollnotice-item>
      <yd-rollnotice-item >
        <div class="roll-notice">
        <div class="honor-company" style="height: .94rem;transform:translateY(-.21rem);padding-left:.24rem;">
          <div class="honor-circle"></div>
          <div class="honor-title">公司荣誉</div>
          <div style="" class="honor-brief">第九届中国电影电视技术学会科学技术奖</div>
          <div class="honor-line"></div>
          <div class="honor-image"><img src="./../assets/resource/honor/trophy-3.png" alt=""></div>
        </div>
      </div>
      </yd-rollnotice-item>
    </yd-rollnotice>
    <div style="transform: translateY(.1rem)" class="line"></div>
    <!--&lt;!&ndash;四大解决方案&ndash;&gt;-->

    <div class="swiper-container  ">
      <div class="swiper-wrapper">
        <div class="swiper-slide scale">
          <div class="media">
           <router-link :to="{path:'/Solution',query: {type:0}}">
              <div class="solution-content">
                <h1>媒体解决方案</h1>
                <p class="over-2line-hidden">主流门户网站、海量新闻网站、网络广播网站三大方向解决方案，全面覆盖广电媒体网站建设需求。</p>
              </div>
             <img :class="tempNum === 56?'img-animation':''"  src="../assets/images/solution/media/t_1.png" alt="">
          </router-link>
        </div>
        </div>
        <div class="swiper-slide">
          <div class="mobile">
          <router-link :to="{path:'/Solution',query: {type:1}}">
            <div class="solution-content">
              <h1>移动解决方案</h1>
              <p class="over-2line-hidden">移动端媒体融合策略，地方手机台、国家智慧城市、小程序解决方案影响亿万人口城市生活。</p>
            </div>
            <img :class="tempNum === 57?'img-animation':''"   src="../assets/images/solution/mobile/t_1.png" alt="">
          </router-link>
        </div>
        </div>
        <div class="swiper-slide ">
          <div class="melding "><router-link :to="{path:'/Solution',query: {type:3}}">
            <div class="solution-content">
              <h1>运营解决方案</h1>
              <p class="over-2line-hidden">打通渠道和信息闭塞的现象，使整个广电行业的运营发展能够做到技术与资源贯通，不断探索多元化产品。</p>
            </div>
            <img  :class="tempNum === 58?'img-animation':''"  src="../assets/images/solution/melding/t_1.png" alt="">
          </router-link></div></div>
        <div class="swiper-slide">
          <div class="operation"><router-link :to="{path:'/Solution',query: {type:2}}">
            <div class="solution-content">
              <h1>融合解决方案</h1>
              <p class="over-2line-hidden">MXU、M2O、阿米协同、阿米微运营为广电媒体融合发展保驾护航。</p>
            </div>
            <img :class="tempNum === 59?'img-animation':''"   src="../assets/images/solution/operation/t_1.png" alt="">
          </router-link></div></div>
      </div>
    </div>
    <div class="container">
      <div style="position: relative;overflow-x: auto; padding:0;margin:0;">
      <div class="wrape">
        <div class="roles" v-for="val in solutionList" >
          <router-link :to="{path:'/details',query: {name: val.id}}">
          <div>
            <img style="width: 100%;height: 100%;" :src="val.indexpic.host+val.indexpic.dir+val.indexpic.filepath+val.indexpic.filename" alt="">
          </div>
          <!--<div>{{val.subtitle | discount}}</div>-->
            <div></div>
          </router-link>
        </div>
      </div>
      </div>
    </div>
    <div class="line"></div>
    <!--公司资讯-->
    <section class="company-information">
      <div :style="backgroundCompanyInformation" class="company-information-title">公司资讯</div>
      <!--information-list-->
      <div class="information-list" v-for="item in informationList">
        <router-link :to="{path:'/details',query: {name: item.id}}">
        <!--img-->
        <div class="information-img"><img :src="item.indexpic.host+item.indexpic.dir+item.indexpic.filepath+item.indexpic.filename" alt=""></div>
        <div class="information-title-time">
          <!--title & time-->
          <div>{{item.title}}</div>
          <div>{{item.create_time}}</div>
        </div>
        </router-link>
      </div>
      <div class="load-more" @click="getInformation">加载更多</div>
    </section>

  </div>
</template>

<script>
//  import Swiper from './../static/swiper-3.3.1.min.js'
//  require ('./../static/swiper-3.3.1.min.css')
  export default {
    name: 'index',
    data () {
      return {
        msg: '厚建',
        count: 3,
        offset: 0,
        pagexStart: 0,
        pagexEnd: 0,
//        for change four solution   media melding operation mobile
        tempNum: 55,
        statusNumber: 1,
        direction: 'left',
        informationList: [],
        solutionList: [],
        background: {
          marginBottom: '.2rem',
          backgroundImage: 'url(' + require('../assets/images/index/logo.jpg') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '1.6rem .5rem'
        },
        backgroundCompanyInformation: {
          backgroundImage: 'url(' + require('../assets/images/index/f_03.png') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '.34rem .34rem'

        }
      }
    },
    mounted () {
      let this_ = this
      var mySwiper = new Swiper('.swiper-container', {
        speed:500,
        autoplayDisableOnInteraction : false,
        loop:true,
        centeredSlides : true,
        slidesPerView:1.16,
        spaceBetween: 10,
        onSlidePrevStart: function(swiper){
          if(this_.tempNum === 56){
            this_.tempNum = 59
          }else{
            this_.tempNum--
          }
          this_.getSolution()
//          console.log(this_.tempNum)
        },
        onSlideNextEnd: function(swiper){
          if( this_.tempNum === 59) {
            this_.tempNum = 56
          }else{
            this_.tempNum++
          }
          this_.getSolution()
        }
      })
      this.getInformation()
//      this.getSolution()
    },
    methods: {
      getInformation () {
        let that = this
        this.$http.get('http://www.hoge.cn/m2o/pub/pub.php?column_id=1&count=' + this.count + '&offset=' + this.offset)
          .then(function (response) {
            that.count += 3
            that.offset = 0
            that.informationList.length = 0
//            Array.prototype.push.apply(that.informationList, response.data)
            that.informationList = response.data
          })
          .catch(function (err) {
            console.log(err)
          })
      },
      getSolution () {
        let _that = this
        this.$http.get('http://www.hoge.cn/m2o/pub/pub.php?column_id=' + _that.tempNum + '&count=12&offset=0')
          .then(function (response) {
            _that.solutionList = response.data
          })
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  body {
    background-color: #ffffff;
    font-size: .26rem;
  }

  header {
    margin: .2rem;
    height: .5rem;
  }

.banner{
  width: 100%;
  height:3rem;
  background-color: aquamarine;
}
.banner>img{
  width: 100%;
  height:100%
}  .plate-4{
   padding: 12px 0;
   display: flex;
   width: 100%;
   height:1.6rem;
   font-size: .24rem;
  margin-bottom:-7px;
 }
  .plate-4> .flex-1{
    flex: 1;
    text-align: center;
    background-color: #fff;
  }
  .plate-4> .flex-1>.flex-router>div{
    display: inline-block;
  }
  .plate-4> .flex-1>.flex-router>div:first-child{
    height: 70%;
  }
  .plate-4> .flex-1>.flex-router>div:last-child{
    height: 30%;

  }
  .plate-4> .flex-1>.flex-router>figure>img{
    width:.6rem;
    height:.6rem;
  }
  figure{
    height:1.6rem;
  }
  /*company honor*/
 .roll-notice{
   clear: both;
   content: "";
   height: .96rem;
   padding-top: .3rem;
   font-size: .16rem;
   height: .75rem;
   line-height: .96rem;
  overflow: hidden;
 }
 /* company honor BEGIN*/
  .roll-notice>div{
    overflow: hidden;
  }
.honor-circle{
  width: 6px;height: 6px;
  background-color: #4FC2F8 ;
  border-radius: 50%;

  /*-webkit-border-radius: 999px;*/
  float:left;
  transform: translateY(.22rem);

}
.honor-title{
  width: 1.12rem!important;
  height: .34rem;
  transform: translateY(.12rem);
  font-size: .22rem;
  color:#E57373;
  float:left;
  overflow: hidden;
  text-align: center;
  margin:0 .12rem;
}
.honor-brief{
  font-size: .24rem;
  transform: translateY(-.16rem);
  width: 3.46rem;
  height: .30rem;
  /*overflow: hidden;*/
  /*white-space: nowrap;*/
  /*text-overflow: ellipsis;*/

}
.honor-line{
  width: 1px;
  height:.54rem ;
  margin-left:.6rem;
  flost:left;
  background-color: #e6e6e6;

}
.honor-image{
  width: .77rem;
  height: .54rem;
  margin-left: .3rem;
}
  .honor-image>img{
    width: 100%;
    height: 100%;
  }
  .honor-company>div{
    display: inline-block;
    float: left;
  }
  .honor-title{
    border: 1px solid #e47272;
    color:#e47272;
    height: .35rem;
    width: 90%;
    line-height: .35rem;
    /*padding:5px 10px;*/
    box-sizing: border-box;
    border-radius: 3px ;
    /*-moz-border-radius: 3px ;*/
    display: inline-block;
  }
  /* company honor END*/

  /*.roll-notice>div:last-child{*/
    /*width:21.3%;*/
    /*height:.5rem;*/
    /*padding-left: .2rem;*/
    /*margin-left:.2rem;*/
  /*}*/
  /*.roll-notice>div:last-child>div{*/
    /*width:.6rem;*/
    /*height:.6rem;*/
    /*margin-top:.1rem;*/
    /*float: right;*/
  /*}*/
  /*.roll-notice>div:last-child>div>img{*/
    /*width:100%;*/
    /*height:100%;*/
  /*}*/
  .line{
    width: 100%;
    height:.2rem;
    background-color: #f3f4f5;
  }
  /*四大解决方案*/
  .four-solution{
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 2rem;
    background-color: #a3a3a3;
    margin-top:.1rem;
    line-height: 2rem;
  }
  .four-solution-div{
    height: 2rem;
  }
  .four-solution-div>div{
    display: inline-block;
    padding:0;
    margin:0;
    position: relative;
    top:.1rem;
    border-radius: .06rem;
    /*-moz-border-radius: .06rem;*/
    width: 80%;
    padding:.43rem .15rem .45rem .24rem;
    /*margin-left:.1rem!important;*/

  }
  .media{
    padding-left: .27rem ;
    background-color: #f2d262;
    text-align: left;
  }
  .mobile{
    background-color: #80c87f;

  }
  .melding{
     /*margin:.1rem 2%;*/
    background-color: #48b1e3;

  }
  .operation{
    /*margin:.1rem 2%;*/
    background-color: #e37474;
  }
  .text{
    font-size: .16rem;
  }
  .text>h1{
    height: .46rem;
    display: inline-block;
    font-size: .45rem;
    color:#ffffff!important;
    text-align:left;
    position: relative;
  }
  .text>div{
    position: relative;

  }
  /*.media>section >div{*/
    /*display: inline-block;*/
    /*padding:.47rem .15rem .47rem .24rem;*/
  /*}*/
  /*.media>section >div:first-child{*/

  /*}*/
  .company-information{
    padding: .3rem .24rem 0 .24rem;
  }
  .company-information-title{
    font-size: .24rem;
    color:#333;
    text-indent:.43rem ;
    height: .34rem;
    line-height: .34rem;
    text-align: left;
   /*font-family: ' FZLTHK--GBK1-0';*/
  }
  .information-list{
    height: 1.5rem;
    display: block;
    padding-bottom: 1.8rem;
    /**/
    margin-top:.3rem;
    border-bottom: 1px solid rgba(180, 180, 180,.6);
  }
  .information-list:after{
    content: '';
    clear: both;
    display: block;
  }
  .information-list div{
    float: left;
  }
  .information-img{
    width: 2.3rem;
    height: 1.5rem;
    margin-right:.2rem;
  }
  .information-img>img{
    width: 100%;
    height: 100%;
  }
  .information-title-time{
    padding-top: .14rem;
    font-size: .28rem;
    overflow: hidden;
    width: 4.3rem;
    word-spacing: normal;
    text-align: left;
  }
  .information-title-time>div:first-child{
    padding-bottom: .18rem;
  }
  .information-title-time>div:last-child{
    color:#999;
  }
  .load-more{
    font-size: .28rem;
    margin:.25rem;
    color:#333
  }
  .container{
    position: relative;
    width: 100%;
    height: .9rem;
    /*overflow: hidden;*/
    margin:.2rem 0;
  }
  .wrape{
    position: relative;
    /*top:-.01rem;*/
    white-space: nowrap;
    display: block;
    height: 100%;
    text-align: left;
  }
  .wrape>div:first-child{
    margin-left: .3rem;
    text-align:center;
  }
  .roles{
    height: 1.1rem;
    width: 1rem;
    font-size: .2rem;
    display: inline-block;
    margin-left: .32rem;
    /*background-color: #007aff;*/
  }

  .roles div:first-child{
    margin-left:.25rem;
    width: .5rem;
    height: .5rem;
    border-radius: 50%;
    /*-moz-border-radius: 50%;*/
  }

  .roles div:first-child>img{
    border-radius: 50%;
    /*-moz-border-radius: 50%;*/

    margin-bottom: .2rem;
  }
  .roles div:last-child{
    overflow: hidden!important;
    text-align: center;
    margin-top:.2rem;
  }
/*四大解决方案*/
  .media .solution-content,.mobile .solution-content, .melding .solution-content, .operation .solution-content{
    display: inline-block;
    font-size: .16rem;
    color:#fff;
    padding-top:-.2rem;

  }
  .media h1,.mobile h1,.operation h1,.melding h1{
    font-size: .4rem;
    color:#fff;
    text-align: left;
    position: relative;
    top:0rem;
  }
  .media p,.mobile p,.operation p,.melding p{
    width: 4rem;
    color:#fff;
    font-size: .16rem;
    text-align: left;


  }
  .media img, .mobile img,.operation img,.melding img{
    width: 1.68rem;
    height: 1.34rem;
    position: relative;
    top:.2rem;
  }
  @media screen and (max-width: 668px) {
    .swiper-container {
      margin: 20px 0 15px;
    }
  }

  .swiper-slide {
    -webkit-transition: transform 2.0s;
    -moz-transition: transform 2.0s;
    -ms-transition: transform 1.0s;
    -o-transition: transform 1.0s;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }

  @media screen and (max-width: 668px) {
    .swiper-slide {
      -webkit-transform: scale(0.97);
      transform: scale(0.97);
    }
  }

  .swiper-slide-active,.swiper-slide-duplicate-active {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .swiper-container{
    margin-top:.2rem;
  }
  .swiper-slide{
    border-radius: 6px!important;
  }
  .swiper-slide >div{
    border-radius: 6px!important;

  }
  /*.scale{*/
    /*transform: translate3D(0,0,230px);*/
    /*-webkit-transform:  translate3D(0,0,230px);*/

  /*}*/
  .img-animation
  {
    animation:myfirst 5s;
    -moz-animation:myfirst 5s; /* Firefox */
    -webkit-animation:myfirst 5s; /* Safari and Chrome */
    -o-animation:myfirst 5s; /* Opera */
  }

  @keyframes myfirst
  {
    0%   {top:.25rem;}
    25%  {top:0rem;}
    50%  {top:-0.2rem;}
    100% {top:.2rem;}
  }
/*两行超出省略*/
  .over-2line-hidden {
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .honor-mycompany-brief{
    width: 3.46rem;
    height:.24rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
