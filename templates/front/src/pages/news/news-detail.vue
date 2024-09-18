<template>
	<div :style='{"padding":"20px 20px 20px","margin":"0 auto","borderColor":"#d3d3d3","alignItems":"flex-start","flexWrap":"wrap","background":"#fff","borderWidth":"0 0px","display":"flex","width":"1200px","position":"relative","borderStyle":"solid","justifyContent":"space-between"}'>
	<el-button :style='{"border":"0px solid #1abc9e30","cursor":"pointer","padding":"0 10px","margin":"0 10px 0 0","color":"#fff","borderRadius":"0px","background":"#b4a078","width":"auto","lineHeight":"34px","fontSize":"14px","height":"34px"}' type="warning" size="mini" @click="backClick" class="el-icon-back">返回</el-button>
	<div :style='{"width":"100%","overflow":"hidden","flexWrap":"wrap","background":"#fff","justifyContent":"space-between","display":"flex"}'>
		<div :style='{"margin":"10px 0 0","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230921/eb4b56c7d55142c4b9339e032022bfb5.png) repeat-x center bottom","display":"none","width":"calc(100% - 0px)","lineHeight":"56px","height":"66px"}'>
			<div :style='{"margin":"0 auto","color":"#333","textAlign":"center","background":"none","display":"inline-block","width":"auto","fontSize":"20px","fontWeight":"500"}'>农产资讯</div>
		</div>
		<div :style='{"width":"calc(100% - 0px)","padding":"0px","position":"relative","background":"none","order":"1"}'>
			<div  :style='{"margin":"0 0 10px","lineHeight":"40px","fontSize":"16px","color":"#222","textAlign":"center","fontWeight":"600"}'>{{detail.title}}</div>
			
			<div :style='{"alignItems":"center","color":"#999","background":"none","display":"flex","width":"100%","fontSize":"14px","position":"relative","justifyContent":"center"}'>
			  <div :style='{"padding":"0","margin":"0 10px 0 0","position":"absolute","left":"0"}'>
			    <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
			    <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>发布时间：{{detail.addtime}}</span>
			  </div>
			  <div :style='{"padding":"0","margin":"0 10px 0 0"}'>
			    <span class="icon iconfont icon-geren17" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
			    <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{detail.name}}</span>
			  </div>
			  <div :style='{"padding":"0","margin":"0 10px 0 0"}'>
			    <span class="icon iconfont icon-zan07" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
			    <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{detail.thumbsupnum}}</span>
			  </div>
			  <div :style='{"padding":"0","margin":"0 10px 0 0"}'>
			    <span class="icon iconfont icon-cai15" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
			    <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{detail.storeupnum}}</span>
			  </div>
			  <div :style='{"padding":"0","margin":"0 10px 0 0"}'>
			    <span class="icon iconfont icon-liulan13" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
			    <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{detail.clicknum}}</span>
			  </div>
			</div>
			<div class="operate" :style='{"padding":"10px 0px","alignItems":"center","color":"#666","display":"flex","width":"100%","fontSize":"13px","justifyContent":"flex-end"}'>
				<div @click="zanClick" :style='{"padding":"0 15px","alignItems":"center","justifyContent":"center","display":"flex"}'>
					<span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"40px","fontSize":"inherit","color":"inherit"}'></span>
					<span :style='{"color":"inherit","lineHeight":"40px","fontSize":"inherit"}'>{{zanType?'取消赞':'点赞'}}</span>
				</div>
				<div @click="collectClick" :style='{"padding":"0 15px","alignItems":"center","justifyContent":"center","display":"flex"}'>
					<span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"40px","fontSize":"inherit","color":"inherit"}'></span>
					<span :style='{"color":"inherit","lineHeight":"40px","fontSize":"inherit"}'>{{collectType?'取消收藏':'收藏'}}</span>
				</div>
			</div>
			
			<div :style='{"border":"0px solid #eee","padding":"0","margin":"20px 0 0","color":"#888","width":"100%","fontSize":"14px","lineHeight":"1.8","textIndent":"2em","height":"auto"}' class="content-detail" v-html="detail.content"></div>
		</div>
		<!-- option -->
		<div :style='{"padding":"0 0px","margin":"20px 0","display":"flex","width":"calc(100% - 0px)","justifyContent":"center","height":"auto","order":"2"}'>
		  <div :style='{"margin":"0 50px 0 0","lineHeight":"40px","fontSize":"14px","color":"#999"}' @click="prepDetailClick">上一篇：prev</div>
		  <div :style='{"color":"#999","lineHeight":"40px","fontSize":"14px"}' @click="nextDetailClick">下一篇：next</div>
		</div>

		<!-- 热门文章 -->
		<div class="hot" :style='{"width":"100%","margin":"30px auto 0","background":"#fff","height":"auto","order":"13"}'>
		  <div :style='{"padding":"0px","borderColor":"#c20c0c","color":"#333","borderRadius":"0px","textAlign":"left","background":"none","borderWidth":"0 0 0px","width":"100%","lineHeight":"34px","fontSize":"28px","borderStyle":"solid","fontWeight":"600"}'>推荐文章</div>
		  <div :style='{"padding":"0 0 40px 0","margin":"20px 0 0","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
		    <div v-for="item in hotList" :key="item.id" :style='{"cursor":"pointer","width":"23%","padding":"0","background":"#fff","height":"auto"}' @click="toDetail(item.id)">
		      <img :style='{"objectFit":"cover","width":"100%","height":"150px"}' :src="baseUrl + item.picture" alt="">
		      <div :style='{"padding":"4px 10px 0","borderColor":"#eee","whiteSpace":"nowrap","color":"#333","textAlign":"center","overflow":"hidden","borderWidth":"0 0 0px","width":"100%","lineHeight":"24px","fontSize":"14px","textOverflow":"ellipsis","borderStyle":"solid","height":"auto"}'>{{ item.title }}</div>
		      <div :style='{"padding":"0 5px","lineHeight":"24px","fontSize":"14px","color":"#999","textAlign":"right","display":"none"}'>{{item.addtime}}</div>
		    </div>
		  </div>
		</div>
	</div>
	</div>
</template>

<script>
	export default {
		//数据集合
		data() {
			return {
				id: 0,
				detail: {},
				zanType: false,
				zanForm: {},
				collectType:false,
				collectForm: {},
				baseUrl:'',
				hotList: [],
				categoryList: [],
				currentIndex: 0,
				allList: []
			}
		},
		created() {
			this.id = this.$route.query.id
			this.baseUrl = this.$config.baseUrl;
			this.getCategoryList()
			this.getDetail()
			this.getNewsList()
			this.getHotList()
		},
		watch:{
			$route(newValue) {
				this.id = this.$route.query.id
			    this.getDetail()
			}
		},
		methods: {
			  backClick() {
				  history.back()
			  },
			getNewsList() {
				let params = {page:1, limit: 100,sort:'addtime',order:'desc'};
				this.$http.get('news/list', {params: params}).then(res => {
					if (res.data.code == 0) {
						for(let x in res.data.data.list){
							if(res.data.data.list[x].id == this.id){
								this.currentIndex = Number(x)
								break
							}
						}
						this.allList = res.data.data.list
					}
				});
			},
			// 上一篇
			prepDetailClick(){
				if(this.currentIndex == 0){
					this.$message.error('已经是第一篇了')
					return false
				}
				this.currentIndex--
				this.$router.push({path: '/index/newsDetail', query: {id: this.allList[this.currentIndex].id}});
			},
			// 下一篇
			nextDetailClick(){
				if(this.currentIndex == this.allList.length - 1){
					this.$message.error('已经是最后一篇了')
					return false
				}
				this.currentIndex++
				this.$router.push({path: '/index/newsDetail', query: {id: this.allList[this.currentIndex].id}});
			},
			getCategoryList(){
				this.$http.get('newstype/list', {}).then(res => {
					if (res.data.code == 0) {
						this.categoryList = res.data.data;
					}
				});
			},
			// 获取热门列表
			getHotList(){
				let params = {page:1, limit: 4,sort:'addtime',order:'desc'};
				this.$http.get('news/autoSort', {params: params}).then(res => {
					if (res.data.code == 0) {
						this.hotList = res.data.data.list;
					}
				});
			},
			// 跳转详情
			toDetail(id){
				this.$router.push({path: '/index/newsDetail', query: {id: id}});
			},
			getDetail(){
				this.$http.get(`news/detail/${this.id}`,{}).then(res=>{
					if(res.data&&res.data.code==0){
						this.detail = res.data.data
						window.scrollTo(0, 100)
						this.getZan()
						this.getCollect()
					}
				})
			},
			getZan() {
				this.$http.get('storeup/list', {
					params: {
						page: 1,
						limit: 1,
						type: 21,
						userid: localStorage.getItem('frontUserid'),
						tablename: 'news',
						refid: this.id
					}
				}).then(res=>{
					if(res.data&&res.data.code==0){
						if(res.data.data.list.length){
							this.zanType = true
							this.zanForm = res.data.data.list[0]
						}else{
							this.zanType = false
						}
					}
				})
			},
			getCollect(){
				this.$http.get('storeup/list', {
					params: {
						page: 1,
						limit: 1,
						type: 1,
						userid: localStorage.getItem('frontUserid'),
						tablename: 'news',
						refid: this.id
					}
				}).then(res=>{
					if(res.data&&res.data.code==0){
						if(res.data.data.list.length){
							this.collectType = true
							this.collectForm = res.data.data.list[0]
						}else{
							this.collectType = false
						}
					}
				})
			},
			zanClick() {
				if(this.zanType){
					this.$http.post('storeup/delete', [this.zanForm.id]).then(res => {
						if (res.data && res.data.code == 0) {
							this.$message.success('取消成功')
							this.detail.thumbsupnum--
							this.$http.post('news/update',this.detail).then(obj=>{})
							this.getZan()
						}
					})
				}else{
					let data = {
						name: this.detail.title,
						picture: this.detail.picture,
						refid: this.detail.id,
						type: 21,
						tablename: 'news',
						userid: localStorage.getItem('frontUserid')
					}
					this.$http.post('storeup/add', data).then(res => {
						if (res.data && res.data.code == 0) {
							this.$message.success('点赞成功')
							this.detail.thumbsupnum++
							this.$http.post('news/update',this.detail).then(obj=>{})
							this.getZan()
						}
					})
				}
			},
			collectClick(){
				if(this.collectType){
					this.$http.post('storeup/delete', [this.collectForm.id]).then(res => {
						if (res.data && res.data.code == 0) {
							this.$message.success('取消成功')
							this.detail.storeupnum--
							this.$http.post('news/update',this.detail).then(obj=>{})
							this.getCollect()
						}
					})
				}else{
					let data = {
						name: this.detail.title,
						picture: this.detail.picture,
						refid: this.detail.id,
						type: 1,
						tablename: 'news',
						userid: localStorage.getItem('frontUserid')
					}
					this.$http.post('storeup/add', data).then(res => {
						if (res.data && res.data.code == 0) {
							this.detail.storeupnum++
							this.$http.post('news/update',this.detail).then(obj=>{})
							this.$message.success('收藏成功')
							this.getCollect()
						}
					})
				}
			},
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.section {
		width: 900px;
		margin: 0 auto;
	}
	.editor /deep/ .avatar-uploader {
		height: 0;
		line-height: 0;
	}
	.section-content {
		margin-top: 30px;
	}
	.content-title {
		text-align: center;
		font-size: 22px;
		font-weight: bold;
	}
	.content-sub-title {
		text-align: center;
		margin-top: 20px;
		color: #888888;
		font-size: 14px;
	}
	.operate{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 40px;
	}
</style>