<template>
  <div>
    <header align="center">
      <div>{{title[type]}}</div>
      <span ><router-link to="index"><img src="./../assets/images/public/left.jpg" alt="" title="back"></router-link></span>
    </header>
    <div class="top-img" :style="background[type]">
      <div style="text-align: center;margin-left: .4rem;padding-top:.7rem;width:4rem;">
        <h2 class="animate-h1">{{title[type]}}</h2>
        <p style="margin: .1rem 0">{{topMessage[type]}}</p>
        <p></p>
      </div>
      <div :style="backgroundImage[type]"></div>
    </div>
    <div style="height: .2rem;background-color: #f5f5f5"></div>
    <!--媒体方案页面-->
    <section v-if="type == 0">
    <div v-for="(val,key) in information.media">
      <div class="left-img" >
        <img :src="val.img" alt="" style="width:100%;height:100%">
      </div>
      <div class="right-text">
        <h1><div class="number">{{key+1}}</div> {{val.title}}</h1>
        <p>{{val.text}}</p>
      </div>
    </div>
  </section>
    <!--移动方案页面-->
    <section v-else-if="type == 1">
      <div v-for="(val,key) in information.mobile">
        <div class="left-img" >
          <img :src="val.img" alt="" style="width:100%;height:100%">
        </div>
        <div class="right-text">
          <h1><div class="number">{{key+1}}</div> {{val.title}}</h1>
          <p>{{val.text}}</p>
        </div>
      </div>
    </section>
    <!--运营方案页面-->
    <section v-else-if="type == 2" >
      <div v-for="(val,key) in information.operation">
        <div class="left-img" >
          <img  :src="val.img" alt="" style="width:100%;height:100%">
        </div>
        <div class="right-text">
          <h1><div class="number">{{key+1}}</div> {{val.title}}</h1>
          <p>{{val.text}}</p>
        </div>
      </div>
    </section>
    <!--melding方案页面-->
    <section class="ami" v-else-if="type == 3">
      <div v-for="(val,key) in information.melding">
        <div class="left-img" >
          <img :src="val.img" alt="" style="width:100%;height:100%">
        </div>
        <div class="right-text">
          <h1><div class="number">{{key+1}}</div> {{val.title}}</h1>
          <div style="overflow: hidden;">
            <div style="overflow: hidden;width:45%;float:left;display: inline-block" v-for="v in val.text">
              <div style=""><div class="indent-radius"></div>{{v}}</div>
            </div>
          </div>
          <a :href="val.website[0]">{{val.website[1]}}</a>
        </div>
      </div>
    </section>
    <!--客户列表-->
    <article  >
      <header :style="background[type]" class="header"> <span>典型案例</span></header>
      <div v-if="type*1 === 1">
          <div class="case-mobile" v-for="val in solutionList">
            <router-link :to="{path:'/details',query: {name: val.id}}">
            <figure>
              <img :src="val.indexpic.host+val.indexpic.dir+val.indexpic.filepath+val.indexpic.filename" alt="">
         <div>{{val.subtitle }}</div>
          </figure>
            </router-link>
        </div>
      </div>
      <div v-if="type*1 != 1">
        <div class="case"  v-for="val in solutionList">
          <router-link :to="{path:'/details',query: {name: val.id}}">
          <div class="case-image" >
            <img :src="val.indexpic.host+val.indexpic.dir+val.indexpic.filepath+val.indexpic.filename" alt="">
          </div>
          <div class="case-title">
            <h1>{{val.subtitle}}</h1>
            <p>{{val.title }}</p>
          </div>
          </router-link>
        </div>
      </div>
    </article>
    </div>
</template>
<script>
  export default {
    name: 'Solution',
    data () {
      return {
        type: this.$route.query.type,
        title: ['媒体解决方案', '移动解决方案', '融合解决方案', '运营解决方案'],
        topMessage: ['主流门户网站、海量新闻网站、网络广播网站三大方向解决方案，全面覆盖广电媒体网站建设需求。', '移动端媒体融合策略，地方手机台、国家智慧城市、小程序解决方案影响亿万人口城市生活。', '打通渠道和信息闭塞的现象，使整个广电行业的运营发展能够做到技术与资源贯通，不断探索多元化产品。', 'MXU、M2O、阿米协同、阿米微运营为广电媒体融合发展保驾护航。'],
        typeName: 'media',
        tempNum: 56,
        count: 7,
        solutionList: [],
        background: [{
          backgroundColor: '#F4D161'
        },
        {
          backgroundColor: '#81C784'
        },
        {
          backgroundColor: '#E57373'
        },
        {
          backgroundColor: '#4FC3F7'
        }
        ],
        backgroundImage: [{
          backgroundImage: 'url(' + require('../assets/images/solution/media/t_1.png') + ')',
          backgroundSize: '2.07rem 1.14rem',
          backgroundRepeat: 'no-repeat'
        },
        {
          backgroundImage: 'url(' + require('../assets/images/solution/mobile/t_1.png') + ')',
          backgroundSize: '2.07rem 1.14rem',
          backgroundRepeat: 'no-repeat'
        },
        {
          backgroundImage: 'url(' + require('../assets/images/solution/operation/t_1.png') + ')',
          backgroundSize: '2.07rem 1.14rem',
          backgroundRepeat: 'no-repeat'
        },
        {
          backgroundImage: 'url(' + require('../assets/images/solution/melding/t_1.png') + ')',
          backgroundSize: '2.07rem 1.14rem',
          backgroundRepeat: 'no-repeat'
        }
        ],
        information: { media: [{
          img: require('../assets/images/solution/media/media-1.png'),
          title: '门户网站',
          text: '帮助客户快速实现功能强大、内容丰富的各类门户网站、官方网站、企业网站的建设。'
        },
        {
          img: require('../assets/images/solution/media/media-2.png'),
          title: '网络广播电视台',
          text: '满足广电媒体全面需求案，从图文视听等媒体核心内容管理入手，进行采编一体化媒体工作。'
        },
        {
          img: require('../assets/images/solution/media/media-3.png'),
          title: '新闻网站',
          text: '基于云计算架构，稳定的技术后台支撑，有效支持多终端、多应用新闻网站建设。'
        }
        ],
          mobile: [{
            img: require('../assets/images/solution/mobile/2_03.png'),
            title: '手机台',
            text: '以流媒体技术以及多项专有技术，最大限度的确保广电媒体在移动化时代的主流地位。'
          },
          {
            img: require('../assets/images/solution/mobile/3_03.png'),
            title: '智慧城市',
            text: '智慧城市APP应用，已经成功对接60多座城市智慧生态系统，成熟推出了100多种应用模块，影响3.2亿人的城市生活。'
          },
          {
            img: require('../assets/images/solution/mobile/4_03.png'),
            title: '小程序',
            text: '采用原生程序的嵌入开发与生成，并独创点播直播一体、电台直播、扫码进入直播等适用于媒体的功能模块。'
          }
          ],
          operation: [{
            img: require('../assets/images/solution/operation/2_03.png'),
            title: '星秀直播',
            text: '持续的礼物分成+具有活力的媒体生态'
          },
          {
            img: require('../assets/images/solution/operation/3_03.png'),
            title: '广告联盟',
            text: '平台主要收入来源广告。'
          },
          {
            img: require('../assets/images/solution/operation/5_03.png'),
            title: '闪购联盟',
            text: '闪购不等于普通电商。'
          },
          {
            img: require('../assets/images/solution/operation/6_03.png'),
            title: '运营培训指导',
            text: '成熟的运营方案+专业的运营团队。'
          }
          ],
          melding: [{
            img: require('../assets/images/solution/operation/2_03.png'),
            title: 'MXU融合媒体运营管理平台',
            text: ['快速部署', '7天交付', '4大版本选择', '性价比高'],
            website: ''
          },
          {
            img: require('../assets/images/solution/operation/3_03.png'),
            title: 'M2O新媒体综合运营平台',
            text: ['跨行业应用', '模块化拓展', '全功能服务', '纯定制实施'],
            website: ''
          },
          {
            img: require('../assets/images/solution/operation/5_03.png'),
            title: '阿米微运营',
            text: ['互动营销', '第三方对接', '矩阵化管理'],
            website: ['http://weixin.cloud.hoge.cn/qd/main/login', '进入官网了解更多']
          },
          {
            img: require('../assets/images/solution/operation/6_03.png'),
            title: '阿米协同生产平台',
            text: ['即时沟通工具', '移动化生产', '协同作业', '资源共享和管理', '多端分发'],
            website: ['http://team.hoge.cn/', '进入官网了解更多']
          }]
        }
      }
    },
    mounted () {
        let _that = this
        let column_id = 56
        if (this.type == 0) {
          column_id = 56
          _that.count = 7
        } else if (this.type == 1) {
          column_id = 57
          _that.count = 6
        } else if (this.type == 3) {
          column_id = 58
          _that.count = 7
        } else if (this.type == 2) {
          column_id = 59
          _that.count = 7
        }
//        console.log(column_id*10)
        this.$http.get('http://www.hoge.cn/m2o/pub/pub.php?column_id=' + column_id + '&count=' + _that.count +'&offset=0')
          .then(function (response) {
            _that.solutionList = response.data
            _that.solutionList.filter(function(item) {
              if( item.title.indexOf('——') > 0){
                item.title = item.title.split('——')[1]
              } else{
                item.title = item.title
              }
              return item.title;
            })
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
  .top-img {
    width: 100%;
    height: 3rem;
  }
  .top-img div{
    display: inline-block;
    float: left;
  }
  .top-img div:last-child{
    width: 2.07rem;
    height: 1.14rem;
    position: relative;
    top:.8rem;
    left:.27rem;
  }
  .top-img h2, .top-img p {
    color: #fff;
    font-weight: 600;
  }

  .top-img h2 {
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
    text-align: left;
    width: 3.8rem;
    font-size: .5rem;
  }

  .top-img p {
    text-shadow: 0 0 10px rgba(0, 0, 0, .1);
    text-align: left;
    width: 4rem;
    font-size: .22rem;
  }
  section{
    padding-right: .24rem;
    padding-left: .24rem;

  }
  section>div{
    height: 2rem;
    padding:.3rem 0;
    display: flex;
    border-bottom:1px solid #f2f2f2;
  }
  .left-img{
    flex:1;
    width: 2.4rem;
    height: 1.4rem;
    /*background-color: aqua;*/
  }
  .right-text{
    text-align: left;
    font-size: .24rem;
    flex:2;
    padding-left: .2rem;
  }
  .right-text>h1{
    font-size: .28rem;
    color:#F4D161;
    margin-bottom: .12rem;
  }
  .number{
    color:#fff;
    display: inline-block;
    width:14px;
    line-height: 16px!important;
    /*padding-top: 2px;*/
    height: 14px;
    text-align: center;
    margin:auto;
    border-radius: 7px;
    background-color: #F4D161;
  }
  section>div:nth-child(2)>.right-text>h1{
      color:#81C784;
  }
  section>div:nth-child(2)>.right-text>h1>div{
    background-color:#81C784;
  }
  section>div:nth-child(3)>.right-text>h1{
    color:#4FC3F7;
  }
  section>div:nth-child(3)>.right-text>h1>div{
    background-color:#4FC3F7;
  }
  section>div:nth-child(4)>.right-text>h1{
    color:#E57373;
  }
  section>div:nth-child(4)>.right-text>h1>div{
    background-color:#E57373;
  }
  .indent-radius{
    width: 6px;
    height: 6px;
    padding: 0;
    margin:0;
    background-color: #666;
    border-radius:3px;
    display: inline-block;
    position: relative;
    top:-.01rem;
    margin-right:.12rem;
  }
  section a{
    color:#2A97E0;
    position: relative;
    bottom: .1rem;
    float:right ;
  }
  .animate-h1{
    animation:mymove 1s 1;
    /*Safari and Chrome*/
    -webkit-animation:mymove 1s 1;
  }
  @keyframes mymove {
    from {font-size:0px;}
    to {left:.5rem;}
  }

  article{
    margin-top: .4rem;
    font-size: 16px;
  }
  article>header{
    text-align: left;
    padding:0 .4rem;
  }
  .case-mobile{
    margin-top:.2rem;
    overflow: hidden;
    width: 33%;
    float: left;
    font-size: 12px;
    margin-bottom: .2rem;
  }
  .case-mobile img{
    width: 1.2rem;
    height:1.2rem;
  }

  .header {
    height: .54rem!important;
    width: 96%;
    margin-left:2% ;
    padding:0;
    transform: skew(-20deg);
  }
  .header span{
    text-align: left;
    transform: skew(20deg);
    font-size: .36rem;
    height: .54rem;
    line-height: .54rem;
    width: 3rem;
    color:#fff;
    position: relative;
    top:0;
  }
  .case{
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid #f2f2f2;
    margin-top: .1rem;
    padding-left: .24rem;
    padding-bottom: .12rem;

  }

  .case > div{

    height: 1.5rem;
    overflow: hidden;
    margin-bottom: .2rem;
  }
  .case-image{
    display: inline-block;
    float: left;
    width: 1.5rem;
    height: 1.5rem;
    padding:.15rem;
  }
  .case-image>img{
    width: 100%;
    height: 100%;
  }
  .case-title{
    display: inline-block;
    float: left;
    text-align: left;
    padding-left: .24rem;
    padding-top:.3rem;
    width: calc(100% - 2rem);
  }
  .case-title>h1{
    font-size: 14px;
  }
  .case-title>p{
    padding-top:.1rem;
    font-size: 12px;
    word-break: break-all;
    color: #999;
    /*width: calc(100% - 1.8rem);*/
  }
</style>
