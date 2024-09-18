<template>
<div>
	<div :style='{"padding":"20px","margin":"0px auto","borderColor":"#d3d3d3","borderRadius":"0px","background":"#fff","borderWidth":"0px","width":"1200px","borderStyle":"solid"}' class="breadcrumb-preview">
		<el-breadcrumb :separator="'＞'" :style='{"fontSize":"14px","lineHeight":"1","justifyContent":"flex-start","display":"flex"}'>
			<el-breadcrumb-item class="item1" to="/"><a>首页</a></el-breadcrumb-item>
			<el-breadcrumb-item class="item2" v-for="(item, index) in breadcrumbItem" :key="index" to="/index/discussnongchanpin"><a>{{item.name}}</a></el-breadcrumb-item>
			<el-breadcrumb-item class="item3"><a href="javascript:void(0);">详情</a></el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	<div :style='{"padding":"20px","margin":"0px auto","borderColor":"#d3d3d3","borderRadius":"0px","background":"#fff","borderWidth":"0px","width":"1200px","borderStyle":"solid"}'>
		<el-button size="mini" @click="backClick">返回</el-button>
	</div>
	<div class="detail-preview" :style='{"padding":"0 20px 20px","margin":"0 auto","borderColor":"#d3d3d3","alignItems":"flex-start","flexWrap":"wrap","background":"#fff","borderWidth":"0 0px","display":"flex","width":"1200px","position":"relative","borderStyle":"solid","justifyContent":"space-between"}'>
		<div class="attr" :style='{"padding":"0","margin":"0","flexWrap":"wrap","background":"none","flex":"1","display":"flex","width":"calc(100% - 310px)","position":"relative","justifyContent":"space-between","order":"2"}'>

			<div class="info" :style='{"padding":"0 0 10px","margin":"0","borderColor":"#eee","borderRadius":"0px","flexWrap":"wrap","background":"#fff","borderWidth":"0 0 1px","display":"flex","width":"100%","borderStyle":"solid","justifyContent":"space-between","order":"2"}'>
				<div class="item" :style='{"padding":"0","margin":"0 0 10px 0","borderColor":"#eee","alignItems":"center","display":"flex","justifyContent":"space-between","overflow":"hidden","borderRadius":"0px","background":"none","borderWidth":"0 0 1px","width":"100%","lineHeight":"auto","borderStyle":"solid","height":"44px"}'>
					<div :style='{"padding":"0px","color":"#535353","flex":"1","display":"block","width":"calc(100% - 100px)","fontSize":"18px","lineHeight":"1"}'>
                    </div>
				</div>
				<div class="item" :style='{"padding":"0 0px","margin":"0 0 4px 0","borderColor":"#28890b10","background":"#fff","borderWidth":"0px","display":"flex","width":"49%","borderStyle":"solid","justifyContent":"spaceBetween"}'>
					<div class="lable" :style='{"padding":"0 5px 0 0","color":"#333","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"24px","fontWeight":"500","height":"24px"}'>关联表id</div>
					<div  :style='{"padding":"0px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#999","flex":"1","height":"auto"}'>{{detail.refid}}</div>
				</div>
				<div class="item" :style='{"padding":"0 0px","margin":"0 0 4px 0","borderColor":"#28890b10","background":"#fff","borderWidth":"0px","display":"flex","width":"49%","borderStyle":"solid","justifyContent":"spaceBetween"}'>
					<div class="lable" :style='{"padding":"0 5px 0 0","color":"#333","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"24px","fontWeight":"500","height":"24px"}'>用户名</div>
					<div  :style='{"padding":"0px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#999","flex":"1","height":"auto"}'>{{detail.nickname}}</div>
				</div>
				<div class="item" :style='{"padding":"0 0px","margin":"0 0 4px 0","borderColor":"#28890b10","background":"#fff","borderWidth":"0px","display":"flex","width":"49%","borderStyle":"solid","justifyContent":"spaceBetween"}'>
					<div class="lable" :style='{"padding":"0 5px 0 0","color":"#333","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"24px","fontWeight":"500","height":"24px"}'>评论内容</div>
					<div  :style='{"padding":"0px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#999","flex":"1","height":"auto"}'>{{detail.content}}</div>
				</div>
				<div class="item" :style='{"padding":"0 0px","margin":"0 0 4px 0","borderColor":"#28890b10","background":"#fff","borderWidth":"0px","display":"flex","width":"49%","borderStyle":"solid","justifyContent":"spaceBetween"}'>
					<div class="lable" :style='{"padding":"0 5px 0 0","color":"#333","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"24px","fontWeight":"500","height":"24px"}'>回复内容</div>
					<div  :style='{"padding":"0px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#999","flex":"1","height":"auto"}'>{{detail.reply}}</div>
				</div>
				<div class="btn" :style='{"width":"100%","padding":"10px 0","flexWrap":"wrap","display":"flex"}'>
					<el-button :style='{"border":"0px solid #009cf530","cursor":"pointer","padding":"0 10px","margin":"0 10px 0 0","color":"#fff","borderRadius":"0px","background":"#b4a078","width":"auto","lineHeight":"34px","fontSize":"14px","height":"34px"}' v-if="btnAuth('discussnongchanpin','修改')" @click="editClick">修改</el-button>
					<el-button :style='{"border":"0px solid #f5340030","cursor":"pointer","padding":"0 10px","margin":"0 10px 0 0","color":"#fff","borderRadius":"0px","background":"#b4a078","width":"auto","lineHeight":"34px","fontSize":"14px","height":"34px"}' v-if="btnAuth('discussnongchanpin','删除')" @click="delClick">删除</el-button>
					<!-- hasChat $hasChat -->
				</div>
			</div>
		</div>
		
			<el-carousel v-if="detailBanner.length" :style='{"width":"250px","margin":"0 60px 0 0","height":"100%"}' trigger="click" indicator-position="none" arrow="always" type="default" direction="horizontal" height="250px" :autoplay="false" :interval="3000" :loop="true">
				<el-carousel-item :style='{"borderRadius":"0px","width":"100%","height":"100%"}' v-for="item in detailBanner" :key="item.id">
					<img :style='{"border":"0px solid #ccc","width":"100%","padding":"0px","objectFit":"cover","height":"100%"}' :preview-src-list="[item]" v-if="item.substr(0,4)=='http'" :src="item" class="image">
					<img :style='{"border":"0px solid #ccc","width":"100%","padding":"0px","objectFit":"cover","height":"100%"}' :preview-src-list="[baseUrl + item]" v-else :src="baseUrl + item" class="image">
				</el-carousel-item>
			</el-carousel>


		

		
		<el-tabs class="detail" :style='{"border":"1px solid #eee","boxShadow":"none","padding":"0","margin":"0px auto","borderRadius":"0px","background":"#fff","display":"block","width":"100%","order":"40"}' v-model="activeName" type="border-card">
									<el-tab-pane label="评论" name="second">
				<el-form class="add comment" :style='{"padding":"15px","margin":"0 0 20px"}' :model="form" :rules="rules" ref="form">
					<el-form-item class="item" :style='{"width":"100%","display":"flex","height":"auto"}' label="评论" prop="content">
						<editor
						    :style='{"minHeight":"200px","border":"0","outline":"none","color":"#333","borderRadius":"4px","width":"100%","lineHeight":"32px","fontSize":"14px"}'
						    v-model="form.content" 
						    class="editor" 
						    action="file/upload">
						</editor>
					</el-form-item>
					<el-form-item class="btn" :style='{"width":"100%","padding":"0 0 0 80px","margin":"10px 0 0","height":"auto"}'>
						<el-button :style='{"border":"0px solid #f5340030","cursor":"pointer","padding":"0","margin":"0 20px 0 0","color":"#fff","borderRadius":"0px","background":"#b4a078","width":"110px","lineHeight":"40px","fontSize":"14px","height":"40px"}' type="primary" @click="submitForm('form')">立即提交</el-button>
						<el-button :style='{"border":"0px solid #bbb","cursor":"pointer","padding":"0","margin":"0 20px 0 0","color":"#000","borderRadius":"0px","background":"#ccc","width":"110px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="resetForm('form')">重置</el-button>
					</el-form-item>
				</el-form>
				
				<div v-if="infoList.length" :style='{"padding":"15px"}' class="comment">
					<div :style='{"padding":"8px 20px","margin":"0 0 20px","borderColor":"#28890b10","alignItems":"center","borderWidth":"0px","background":"none","width":"100%","borderStyle":"solid","height":"auto"}' v-for="item in infoList" :key="item.id" @mouseenter="discussEnter(item.id)"
						@mouseleave="discussLeave">
						<div class="user" :style='{"width":"100%","alignItems":"center","display":"flex","height":"auto"}'>
							<el-image v-if="item.avatarurl" :style='{"width":"40px","margin":"0 10px 0 0","borderRadius":"100%","objectFit":"cover","height":"40px"}' :size="50" :src="baseUrl + item.avatarurl"></el-image>
							<el-image v-if="!item.avatarurl" :style='{"width":"40px","margin":"0 10px 0 0","borderRadius":"100%","objectFit":"cover","height":"40px"}' :size="50" :src="require('@/assets/touxiang.png')"></el-image>
							<div :style='{"color":"#333","fontSize":"16px"}' class="name">{{item.nickname}}</div>
						</div>
						<div :style='{"padding":"0px","margin":"10px 0px 0px","color":"#333","borderRadius":"4px","background":"none","wordWrap":"break-word","lineHeight":"30px","fontSize":"14px"}' class="content-block-ask">
							<div v-html="item.content"></div>
							<div class="btn" :style='{"width":"100%","margin":"8px 0 0 0","alignItems":"center","justifyContent":"flex-end","display":"flex","height":"40px"}'>
							  <!-- <el-button :style='{"border":"0px solid #f5340030","cursor":"pointer","padding":"0 20px","margin":"0 10px","outline":"none","color":"#fff","borderRadius":"0px","background":"#b4a078","width":"auto","lineHeight":"32px","fontSize":"14px","height":"32px"}'>回复</el-button> -->
							  <el-button v-if="showIndex==item.id&&userid==item.userid" @click="discussDel(item.id)" :style='{"border":"0px solid #ccc","cursor":"pointer","padding":"0 20px","margin":"0 10px","color":"#333","borderRadius":"0px","background":"#ccc","width":"auto","lineHeight":"32px","fontSize":"14px","height":"32px"}'>删除</el-button>
							</div>
						</div>
						<div :style='{"padding":"0px","margin":"10px 0px 0px","color":"#333","borderRadius":"4px","background":"none","wordWrap":"break-word","lineHeight":"30px","fontSize":"14px"}' class="content-block-reply" v-if="item.reply">
							回复：<span v-html="item.reply"></span>
						</div>
					</div>
				</div>
				
				<el-pagination
				  background
				  id="pagination" class="pagination"
				  :pager-count="7"
				  :page-size="pageSize"
				  :page-sizes="pageSizes"
				  prev-text="<"
				  next-text=">"
				  :hide-on-single-page="false"
				  :layout='["total","prev","pager","next","sizes"].join()'
				  :total="total"
				  :style='{"padding":"0","margin":"10px auto","color":"#333","textAlign":"center","width":"100%","lineHeight":"40px","float":"left","fontWeight":"500","height":"40px","order":"50"}'
				  @current-change="curChange"
				  @prev-click="prevClick"
				  @next-click="nextClick"
				></el-pagination>
			</el-tab-pane>
		</el-tabs>
	</div>
</div>
</template>

<script>
  import CountDown from '@/components/CountDown';
  import axios from 'axios'
  import Swiper from "swiper";
  
  export default {
    //数据集合
    data() {
      return {
        tablename: 'discussnongchanpin',
        baseUrl: '',
        breadcrumbItem: [
          {
            name: '农产品评论表'
          }
        ],
        title: '',
        detailBanner: [],
		userid: localStorage.getItem('frontUserid'),
		id: 0,
        detail: {},
        activeName: 'second',
        form: {
          content: '',
          userid: localStorage.getItem('frontUserid'),
          nickname: localStorage.getItem('username'),
          avatarurl: '',
        },
		showIndex: -1,
        infoList: [],
        rules: {
          content: [
            { required: true, message: '请输入内容', trigger: 'blur' }
          ],
        },
        total: 1,
        pageSize: 5,
		pageSizes: [10,20,30,50],
        totalPage: 1,
        buynumber: 1,
		centerType: false,
      }
    },
    created() {
		if(this.$route.query.centerType) {
			this.centerType = true
		}
		
        this.init();
    },
	mounted() {
	},
    //方法集合
    methods: {
        init() {
		  this.id = this.$route.query.id
          this.baseUrl = this.$config.baseUrl;
          this.$http.get(this.tablename + '/detail/'  + this.id, {}).then(res => {
            if (res.data.code == 0) {
              this.detail = res.data.data;
              this.$forceUpdate();

			  this.getDiscussList(1);
				if(localStorage.getItem('frontToken')){
				}

            }
          });
        },
      curChange(page) {
        this.getDiscussList(page);
      },
      prevClick(page) {
        this.getDiscussList(page);
      },
      nextClick(page) {
        this.getDiscussList(page);
      },
		// 返回按钮
		backClick(){
			history.back()
		},
		// 下载
		download(file){
			if(!file) {
				this.$message({
				  type: 'error',
				  message: '文件不存在',
				  duration: 1500,
				});
				return;
			}
		  let arr = file.replace(new RegExp('upload/', "g"), "")
		  axios.get(this.baseUrl + '/file/download?fileName=' + arr, {
		  	headers: {
		  		token: localStorage.getItem("frontToken")
		  	},
		  	responseType: "blob"
		  }).then(({
		  	data
		  }) => {
		  	const binaryData = [];
		  	binaryData.push(data);
		  	const objectUrl = window.URL.createObjectURL(new Blob(binaryData, {
		  		type: 'application/pdf;chartset=UTF-8'
		  	}))
		  	const a = document.createElement('a')
		  	a.href = objectUrl
		  	a.download = arr
		  	// a.click()
		  	// 下面这个写法兼容火狐
		  	a.dispatchEvent(new MouseEvent('click', {
		  		bubbles: true,
		  		cancelable: true,
		  		view: window
		  	}))
		  	window.URL.revokeObjectURL(data)
		  },err=>{
			  axios.get((location.href.split(this.$config.name).length>1 ? location.href.split(this.$config.name)[0] :'') + this.$config.name + '/file/download?fileName=' + arr, {
			  	headers: {
			  		token: localStorage.getItem("frontToken")
			  	},
			  	responseType: "blob"
			  }).then(({
			  	data
			  }) => {
			  	const binaryData = [];
			  	binaryData.push(data);
			  	const objectUrl = window.URL.createObjectURL(new Blob(binaryData, {
			  		type: 'application/pdf;chartset=UTF-8'
			  	}))
			  	const a = document.createElement('a')
			  	a.href = objectUrl
			  	a.download = arr
			  	// a.click()
			  	// 下面这个写法兼容火狐
			  	a.dispatchEvent(new MouseEvent('click', {
			  		bubbles: true,
			  		cancelable: true,
			  		view: window
			  	}))
			  	window.URL.revokeObjectURL(data)
			  })
		  })
      },
      getDiscussList(page) {
        this.$http.get('discussdiscussnongchanpin/list', {params: {page, limit: this.pageSize, refid: this.detail.id}}).then(res => {
          if (res.data.code == 0) {
            this.infoList = res.data.data.list;
            this.total = res.data.data.total;
            this.pageSize = res.data.data.pageSize;this.pageSizes = [this.pageSize, this.pageSize*2, this.pageSize*3, this.pageSize*5];
            this.totalPage = res.data.data.totalPage;
          }
        });
      },
	  discussEnter(index){
		  this.showIndex = index
	  },
	  discussLeave(){
		  this.showIndex = -1
	  },
	  discussDel(id){
		  this.$confirm('是否删除此评论？')
		    .then(_ => {
		      this.$http.post('discussdiscussnongchanpin/delete',[id]).then(res=>{
				  if(res.data&&res.data.code==0){
					  this.addDiscussNum(1)
					  this.$message({
					    type: 'success',
					    message: '删除成功!',
					    duration: 1500,
						onClose: () => {
							this.getDiscussList(1);
						}
					  });
				  }
			  })
		    }).catch(_ => {});
	  },
      submitForm(formName) {
        let sensitiveWords = "";
        let sensitiveWordsArr = [];
        if(sensitiveWords) {
            sensitiveWordsArr = sensitiveWords.split(",");
        }
        for(var i=0; i<sensitiveWordsArr.length; i++){
            //全局替换
            var reg = new RegExp(sensitiveWordsArr[i],"g");
            //判断内容中是否包括敏感词
            if (this.form.content.indexOf(sensitiveWordsArr[i]) > -1) {
                // 将敏感词替换为 **
                this.form.content = this.form.content.replace(reg,"**");
            }
        }
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.form.refid = this.detail.id;
            this.form.avatarurl = localStorage.getItem('frontHeadportrait')?localStorage.getItem('frontHeadportrait'):'';
            this.$http.post('discussdiscussnongchanpin/add', this.form).then(res => {
              if (res.data.code == 0) {
                this.form.content = '';
				this.addDiscussNum(2)
                this.getDiscussList(1);
                this.$message({
                  type: 'success',
                  message: '评论成功!',
                  duration: 1500,
                });
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
	  addDiscussNum(type){
		  if(type==2){
			  this.detail.discussnum++
		  }else if(type==1){
			  if(this.detail.discussnum!=0){
				  this.detail.discussnum--
			  }else{
				  this.detail.discussnum = 0
			  }
		  }
		  this.$http.post('discussnongchanpin/update',this.detail).then(res=>{
			  
		  })
	  },


		// 权限判断
		btnAuth(tableName,key){
			if(this.centerType){
				return this.isBackAuth(tableName,key)
			}else{
				return this.isAuth(tableName,key)
			}
		},
		// 修改
		editClick(){
			this.$router.push(`/index/discussnongchanpinAdd?type=edit&&id=${this.detail.id}`);
		},
		// 删除
		delClick(){
			this.$confirm('是否删除此农产品评论表？')
			  .then(_ => {
			    this.$http.post('discussnongchanpin/delete', [this.detail.id]).then(res => {
			      if (res.data.code == 0) {
			        this.$message({
			          type: 'success',
			          message: '删除成功!',
			          duration: 1500,
					  onClose: () => {
						  history.back()
					  }
			        });
			      }
			    });
			  }).catch(_ => {});
		},
    },
    components: {
      CountDown
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.editor /deep/ .avatar-uploader {
		height: 0;
		line-height: 0;
	}
	
	.detail-preview {
	
	  .attr {
	    .el-carousel /deep/ .el-carousel__indicator button {
	      width: 0;
	      height: 0;
	      display: none;
	    }
	
	    .el-input-number__decrease:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled), .el-input-number__increase:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled) {
	      border-color: none;
	    }
	  }
	
	  .detail {
	    & /deep/ .el-tabs__header .el-tabs__nav-wrap {
	      margin-bottom: 0;
	    }
	
	    & .add .el-textarea {
	      width: auto;
	    }
	  }
	}
	
	.attr .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.attr .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left:hover {
		background: red;
	}
	
	.attr .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.attr .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right:hover {
		background: red;
	}

	.attr .el-carousel /deep/ .el-carousel__indicators {
		padding: 0;
		margin: 0;
		z-index: 2;
		position: absolute;
		list-style: none;
	}
	
	.attr .el-carousel /deep/ .el-carousel__indicators li {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 12px;
		opacity: 0.4;
		transition: 0.3s;
		height: 12px;
	}
	
	.attr .el-carousel /deep/ .el-carousel__indicators li:hover {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 24px;
		opacity: 0.7;
		height: 12px;
	}
	
	.attr .el-carousel /deep/ .el-carousel__indicators li.is-active {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 24px;
		opacity: 1;
		height: 12px;
	}
	
	.attr .el-input-number /deep/ .el-input-number__decrease {
		cursor: pointer;
		z-index: 1;
		display: flex;
		border-color: #DCDFE6;
		border-radius: 0px 0 0 0px;
		top: 2px;
		left: 1px;
		background: #fff;
		width: 40px;
		justify-content: center;
		border-width: 0 1px 0 0;
		align-items: center;
		position: absolute;
		border-style: solid;
		text-align: center;
		height: 32px;
	}
	
	.attr .el-input-number /deep/ .el-input-number__decrease i {
		color: #666;
		font-size: 14px;
	}

	.attr .el-input-number /deep/ .el-input-number__increase {
		cursor: pointer;
		z-index: 1;
		display: flex;
		border-color: #DCDFE6;
		right: 1px;
		border-radius: 0 0px 0px 0;
		top: 2px;
		background: #fff;
		width: 40px;
		justify-content: center;
		border-width: 0 0 0 1px;
		align-items: center;
		position: absolute;
		border-style: solid;
		text-align: center;
		height: 32px;
	}
	
	.attr .el-input-number /deep/ .el-input-number__increase i {
		color: #666;
		font-size: 14px;
	}
	
	.attr .el-input-number /deep/ .el-input .el-input__inner {
		border: 1px solid #DCDFE6;
		border-radius: 0px;
		padding: 0 10px;
		outline: none;
		color: #666;
		background: #fff;
		display: inline-block;
		width: 100%;
		font-size: 14px;
		line-height: 34px;
		text-align: center;
		height: 34px;
	}
	
	.detail-preview .detail.el-tabs /deep/ .el-tabs__header {
		padding: 0;
		margin: 0;
		background: #fff;
		border-color: #eee;
		border-width: 0 0 1px 0;
		border-style: solid;
	}
	
	.detail-preview .detail.el-tabs /deep/ .el-tabs__header .el-tabs__item {
		padding: 0 0px;
		margin: 0;
		color: #535353;
		font-weight: 500;
		display: inline-block;
		font-size: 16px;
		border-color: #fff #eee;
		line-height: 40px;
		transition: all 0s;
		background: none;
		border-width: 3px 1px 0 0;
		position: relative;
		border-style: solid;
		list-style: none;
		text-align: center;
		min-width: 100px;
		height: 40px;
	}
	
	.detail-preview .detail.el-tabs /deep/ .el-tabs__header .el-tabs__item:hover {
		border: 0;
		border-radius: 0;
		color: #333;
		background: none;
		font-size: 16px;
		border-color: #048bcd #eee;
		border-width: 3px 1px 0 0;
		border-style: solid;
		text-align: center;
		min-width: 100px;
	}
	
	.detail-preview .detail.el-tabs /deep/ .el-tabs__header .el-tabs__item.is-active {
		border: 0;
		border-radius: 0;
		padding: 0;
		margin: 0;
		color: #333;
		background: none;
		font-size: 16px;
		border-color: #048bcd #eee;
		border-width: 3px 1px 0 0;
		border-style: solid;
		text-align: center;
		min-width: 100px;
	}
	
	.detail-preview .detail.el-tabs /deep/ .el-tabs__content {
		padding: 15px;
	}
	
	.detail-preview .detail.el-tabs .add /deep/ .el-form-item__label {
		padding: 0 10px 0 0;
		color: #666;
		width: 80px;
		font-size: 14px;
		line-height: 40px;
		text-align: right;
	}
	
	.detail-preview .detail.el-tabs .add /deep/ .el-textarea__inner {
	}
	
	.breadcrumb-preview .el-breadcrumb /deep/ .el-breadcrumb__separator {
		margin: 0 5px;
		color: #ccc;
		font-weight: 500;
	}
	
	.breadcrumb-preview .el-breadcrumb .item1 /deep/ .el-breadcrumb__inner a {
		color: #333;
		display: inline-block;
	}
	
	.breadcrumb-preview .el-breadcrumb .item2 /deep/ .el-breadcrumb__inner a {
		color: #666;
		display: inline-block;
	}
		
	.breadcrumb-preview .el-breadcrumb .item3 /deep/ .el-breadcrumb__inner a {
		color: #999;
		display: inline-block;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__total {
		margin: 0 5px 0 0;
		color: #666;
		font-weight: 400;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 22px;
		height: 22px;
	}
	
	#pagination.el-pagination /deep/ .btn-prev {
		border: 1px solid #ccc;
		border-radius: 2px;
		padding: 0;
		margin: 0 0px;
		color: #666;
		background: #fff;
		display: inline-block;
		vertical-align: top;
		font-size: 12px;
		line-height: 20px;
		min-width: 16px;
		height: 24px;
	}
	
	#pagination.el-pagination /deep/ .btn-next {
		border: 1px solid #ccc;
		border-radius: 2px;
		padding: 0 0px;
		margin: 0 0px;
		color: #666;
		background: #fff;
		display: inline-block;
		vertical-align: top;
		font-size: 12px;
		line-height: 20px;
		min-width: 16px;
		height: 24px;
	}
	
	#pagination.el-pagination /deep/ .btn-prev:disabled {
		border: 1px solid #ccc;
		cursor: not-allowed;
		border-radius: 2px;
		padding: 0 0px;
		margin: 0 5px;
		color: #ccc;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 12px;
		line-height: 22px;
		height: 24px;
	}
	
	#pagination.el-pagination /deep/ .btn-next:disabled {
		border: 1px solid #ccc;
		cursor: not-allowed;
		border-radius: 2px;
		padding: 0 0px;
		margin: 0 5px;
		color: #ccc;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 12px;
		line-height: 22px;
		height: 24px;
	}
	
	#pagination.el-pagination /deep/ .el-pager {
		padding: 0;
		margin: 0;
		display: inline-block;
		vertical-align: top;
	}
	
	#pagination.el-pagination /deep/ .el-pager .number {
		cursor: pointer;
		border: 1px solid #ccc;
		padding: 0 6px;
		margin: 0 5px;
		color: #666;
		display: inline-block;
		vertical-align: top;
		font-size: 12px;
		line-height: 24px;
		border-radius: 2px;
		background: #fff;
		text-align: center;
		min-width: 25px;
		height: 24px;
	}
	
	#pagination.el-pagination /deep/ .el-pager .number:hover {
		cursor: pointer;
		border: 1px solid #666;
		padding: 0 4px;
		margin: 0 5px;
		color: #fff;
		display: inline-block;
		vertical-align: top;
		font-size: 12px;
		line-height: 24px;
		border-radius: 2px;
		background: #000;
		text-align: center;
		min-width: 25px;
		height: 24px;
}

#pagination.el-pagination /deep/ .el-pager .number.active {
		cursor: default;
		border: 0px solid #A2161B;
		padding: 0 4px;
		margin: 0 5px;
		color: #fff;
		display: inline-block;
		vertical-align: top;
		font-size: 12px;
		line-height: 24px;
		border-radius: 2px;
		background: #000;
		text-align: center;
		min-width: 25px;
		height: 24px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes {
		display: inline-block;
		vertical-align: top;
		font-size: 12px;
		line-height: 22px;
		height: 22px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input {
		border: 1px solid #ccc;
		border-radius: 2px;
		margin: 0 5px;
		width: 80px;
		position: relative;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__inner {
		border: 0px solid #DCDFE6;
		cursor: pointer;
		border-radius: 3px;
		padding: 0 25px 0 8px;
		color: #606266;
		background: #FFF;
		display: inline-block;
		width: 100%;
		font-size: 12px;
		line-height: 20px;
		text-align: center;
		height: 24px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input span.el-input__suffix {
		top: 0;
		position: absolute;
		right: 0;
		height: 100%;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
		cursor: pointer;
		color: #C0C4CC;
		width: 25px;
		font-size: 14px;
		line-height: 22px;
		text-align: center;
	}

	#pagination.el-pagination /deep/ .el-pagination__jump {
		margin: 0 0 0 24px;
		color: #606266;
		display: inline-block;
		vertical-align: top;
		font-size: 12px;
		line-height: 22px;
		height: 22px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__jump .el-input {
		border-radius: 3px;
		padding: 0 2px;
		margin: 0 2px;
		display: inline-block;
		width: 50px;
		font-size: 14px;
		line-height: 18px;
		position: relative;
		text-align: center;
		height: 22px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__jump .el-input .el-input__inner {
		border: 1px solid #DCDFE6;
		cursor: pointer;
		padding: 0 3px;
		color: #606266;
		display: inline-block;
		font-size: 14px;
		line-height: 22px;
		border-radius: 3px;
		outline: 0;
		background: #FFF;
		width: 100%;
		text-align: center;
		height: 22px;
	}


	.detail-preview .el-rate /deep/ .el-rate__item {
				cursor: pointer;
				display: inline-block;
				vertical-align: middle;
				font-size: 0;
				position: relative;
			}
	
	.detail-preview .el-rate /deep/ .el-rate__item .el-rate__icon {
				margin: 0 3px;
				display: block;
				font-size: 18px;
				position: relative;
				transition: .3s;
			}
</style>
