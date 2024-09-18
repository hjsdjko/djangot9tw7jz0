<template>
<div>
	<div :style='{"padding":"20px","margin":"0px auto","borderColor":"#d3d3d3","borderRadius":"0px","background":"#fff","borderWidth":"0px","width":"1200px","borderStyle":"solid"}' class="breadcrumb-preview">
		<el-breadcrumb :separator="'＞'" :style='{"fontSize":"14px","lineHeight":"1","justifyContent":"flex-start","display":"flex"}'>
			<el-breadcrumb-item class="item1" to="/"><a>首页</a></el-breadcrumb-item>
			<el-breadcrumb-item class="item2" v-for="(item, index) in breadcrumbItem" :key="index"><a>{{item.name}}</a></el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	<div v-if="centerType" :style='{"padding":"20px","margin":"0px auto","borderColor":"#d3d3d3","borderRadius":"0px","background":"#fff","borderWidth":"0px","width":"1200px","borderStyle":"solid"}'>
		<el-button size="mini" @click="backClick">返回</el-button>
	</div>
	<div class="list-preview" :style='{"padding":"0 20px 20px","margin":"0px auto","borderColor":"#d3d3d3","alignItems":"flex-start","flexWrap":"wrap","background":"#fff","borderWidth":"0px","display":"flex","width":"1200px","position":"relative","borderStyle":"solid","justifyContent":"space-between"}'>
		

	
    <el-form :inline="true" :model="formSearch" class="list-form-pv" :style='{"padding":"0 0 0px","margin":"10px 0 0","borderColor":"#ddd","alignItems":"center","display":"flex","clear":"both","justifyContent":"","flexWrap":"wrap","background":"none","borderWidth":"0 0 0px","width":"100%","borderStyle":"solid","height":"auto","order":"1"}'>
      <el-form-item :style='{"margin":"0 5px 0 0"}'>
	    <div class="lable" v-if="true" :style='{"width":"auto","padding":"0 0 0 0px","lineHeight":"42px","textAlign":"right","display":"inline-block"}'>用户名：</div>
        <el-input v-model="formSearch.username" placeholder="用户名" @keydown.enter.native="getList(1, curFenlei)" clearable></el-input>
      </el-form-item>
	  <el-button v-if=" true " :style='{"cursor":"pointer","border":"1px solid #ccc","padding":"0px 8px","margin":"0px 10px 0 10px","color":"#333","borderRadius":"0px","background":"none","display":"inline-block","width":"auto","fontSize":"14px","lineHeight":"36px","height":"36px"}' type="primary" @click="getList(1, curFenlei)"><i v-if="true" :style='{"color":"#333","margin":"0 2px 0 0","fontSize":"14px"}' class="el-icon-search"></i>查询</el-button>
	  <el-button v-if="btnAuth('users','新增')" :style='{"cursor":"pointer","border":"1px solid #ccc","padding":"0px 8px","margin":"0px 10px 0 0","color":"#666","borderRadius":"0px","background":"none","display":"inline-block","width":"auto","fontSize":"14px","lineHeight":"36px","height":"36px"}' type="primary" @click="add('/index/usersAdd')"><i v-if="true" :style='{"color":"#666","margin":"0 2px 0 0","fontSize":"14px"}' class="el-icon-circle-plus-outline"></i>添加</el-button>
    </el-form>
	<div class="select2" :style='{"width":"100%","padding":"0","margin":"10px 0 0","background":"none","height":"auto","order":"2"}'>
	  <div :style='{"padding":"0px","margin":"8px 0","borderColor":"#eee","background":"none","borderWidth":"1px","width":"100%","position":"relative","borderStyle":"solid","height":"auto"}' class="list" v-for="(item,index) in selectOptionsList" :key="item">
	    <div :style='{"padding":"0 5px","color":"#555","textAlign":"right","display":"inline-block","width":"auto","lineHeight":"32px","fontSize":"14px"}' class="label">{{item.name}}：</div>
	    <div :style='{"width":"auto","display":"inline-block","height":"auto"}' class="item-body">
	      <div class="item" @click="selectClick2(item,-1)" :class="item.check ==-1 ? 'active' : ''">全部</div>
	      <div class="item" @click="selectClick2(item,index1)" :class="item.check == index1 ? 'active' : ''" v-for="item1,index1 in item.list" :key="item1">{{item1}}</div>
	    </div>
	  </div>
	</div>
	<div class="sort_view" :style='{"border":"1px solid #ddd","padding":"10px 20px","margin":"10px 0 0","overflow":"hidden","textAlign":"right","background":"none","width":"100%","order":"4"}'>
		<el-button :style='{"border":"0px solid #ddd","padding":"2px 0px","margin":"0 5px","borderRadius":"0px","background":"none"}' @click="sortClick('clicknum')">
			<span :style='{"margin":"0 2px 0 0","lineHeight":"20px","fontSize":"14px","color":"#999"}' class="icon iconfont icon-xiaoliang17" v-if="sortType!='clicknum'"></span>
			<span :style='{"margin":"0 2px 0 0","lineHeight":"20px","fontSize":"14px","color":"#999"}' class="icon iconfont icon-jiantou23" v-else-if="sortType=='clicknum'&&sortOrder=='desc'"></span>
			<span :style='{"margin":"0 2px 0 0","lineHeight":"20px","fontSize":"14px","color":"#999"}' class="icon iconfont icon-jiantou24" v-else-if="sortType=='clicknum'&&sortOrder=='asc'"></span>
			<span :style='{"color":"#333","lineHeight":"20px","fontSize":"14px"}'>点击量</span>
		</el-button>
	</div>
	<div class="list" :style='{"width":"calc(100% - 0px)","padding":"20px 0 0 0","margin":"0","background":"none","flex":"1","order":"6"}'>
		<!-- 样式一 -->
		<div class="list1 index-pv1" :style='{"padding":"0 0 0 5px","margin":"10px 0 0","overflow":"hidden","color":"#666","alignItems":"flex-start","flexWrap":"wrap","background":"none","display":"flex","width":"100%","fontSize":"14px","height":"auto"}'>
			<div :style='{"border":"0px solid #ddd","cursor":"pointer","padding":"0","margin":"0 30px 30px 0","overflow":"hidden","flexWrap":"wrap","background":"#fff","display":"flex","width":"calc(25% - 30px)","position":"relative","justifyContent":"center","height":"auto"}' v-for="(item, index) in dataList" :key="index" @click.stop="toDetail(item)" class="list-item animation-box">
				<div v-if="item.price" :style='{"padding":"0 10px","borderColor":"#eee","margin":"0 0 10px","color":"#f00","textAlign":"center","borderWidth":"0 0 1px","width":"100%","lineHeight":"30px","fontSize":"18px","borderStyle":"solid","order":"2"}' class="price"><span :style='{"fontSize":"12px"}'>￥</span>{{item.price}}</div>
				<div :style='{"width":"100%","padding":"0 10px","textAlign":"right","display":"none"}'>
				  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"24px","fontSize":"inherit","color":"inherit"}'></span>
				  <span class="text" :style='{"color":"#999","lineHeight":"32px","fontSize":"inherit"}'>{{item.addtime}}</span>
				</div>
			</div>
		</div>
		
	</div>

	
	<el-pagination
	  background
	  id="pagination"
	  class="pagination"
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
      @size-change="sizeChange"
	  @prev-click="prevClick"
	  @next-click="nextClick"
	></el-pagination>

  </div>
  <el-dialog title="预览图" :visible.sync="previewVisible" width="50%">
  	<img :src="previewImg" alt="" style="width: 100%;">
  </el-dialog>
</div>
</template>

<script>
  export default {
    //数据集合
    data() {
      return {
		selectIndex2: 0,
		selectOptionsList: [],
	    layouts: '',
		swiperIndex: -1,
        baseUrl: '',
        breadcrumbItem: [
          {
            name: '管理员'
          }
        ],
        formSearch: {
          username: '',
        },
        fenlei: [],
		feileiColumn: '',
        dataList: [],
        total: 1,
        pageSize: 12,
		pageSizes: [10,20,30,50],
        totalPage: 1,
        curFenlei: '全部',
        isPlain: false,
        indexQueryCondition: '',
        timeRange: [],
		centerType:false,
		previewImg: '',
		previewVisible: false,
		sortType: 'id',
		sortOrder: 'desc',
      }
    },
    created() {
		if(this.$route.query.centerType){
			this.centerType = true
		}
		this.baseUrl = this.$config.baseUrl;
      this.getFenlei();
      this.getList(1, '全部');
    },
    //方法集合
    methods: {
		selectClick2(row,index) {
			row.check = index
			if(index == -1){
				this.formSearch[row.tableName] = ''
			}else {
				this.formSearch[row.tableName] = row.list[index]
			}
			this.getList()
		},
		add(path) {
			let query = {}
			if(this.centerType){
				query.centerType = 1
			}
			this.$router.push({path: path,query:query});
		},
      getFenlei() {
      },
      getList(page, fenlei, ref = '') {
        let params = {page, limit: this.pageSize};
        let searchWhere = {};
        if (this.formSearch.username != '') searchWhere.username = '%' + this.formSearch.username + '%';
			let user = JSON.parse(localStorage.getItem('sessionForm'))
		if (this.sortType) searchWhere.sort = this.sortType
		if (this.sortOrder) searchWhere.order = this.sortOrder
        this.$http.get(`users/${this.centerType?'page':'list'}`, {params: Object.assign(params, searchWhere)}).then(res => {
          if (res.data.code == 0) {
            this.dataList = res.data.data.list;
            this.total = Number(res.data.data.total);
            this.pageSize = Number(res.data.data.pageSize);
            this.totalPage = res.data.data.totalPage;
			
			this.pageSizes = [this.pageSize, this.pageSize*2, this.pageSize*3, this.pageSize*5];
          }
        });
      },
	  sortClick(type){
		  if(this.sortType==type){
			  if(this.sortOrder == 'desc'){
				  this.sortOrder = 'asc'
			  }else{
				  this.sortOrder = 'desc'
			  }
		  }else{
			  this.sortType = type
			  this.sortOrder = 'desc'
		  }
		  this.getList(1, '全部')
	  },
      curChange(page) {
        this.getList(page);
      },
      prevClick(page) {
        this.getList(page);
      },
      sizeChange(size){
        this.pageSize = size
        this.getList(1);
      },
      nextClick(page) {
        this.getList(page);
      },
	  imgPreView(url){
		  this.previewImg = url
		  this.previewVisible = true
	  },
      toDetail(item) {
		  let params = {
			  id: item.id
		  }
		  if(this.centerType){
			  params.centerType = 1
		  }
        this.$router.push({path: '/index/usersDetail', query: params});
      },
	btnAuth(tableName,key){
		if(this.centerType){
			return this.isBackAuth(tableName,key)
		}else{
			return this.isAuth(tableName,key)
		}
	},
	backClick() {
		this.$router.push({path: '/index/center'});
	},
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.list-preview .list-form-pv .el-input {
		width: auto;
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
	
	.category-1 .item {
		cursor: pointer;
		border: 0px solid #ddd;
		padding: 0 0px;
		margin: 0;
		color: #f9f3d0;
		display: inline-block;
		font-size: 18px;
		line-height: 50px;
		transition: 400ms;
		border-radius: 0px;
		background: none;
		width: 100%;
		text-align: left;
	}
	
	.category-1 .item:hover {
		cursor: pointer;
		border: 0px solid #28890b;
		margin: 0;
		color: #fff;
		background: none;
		width: 100%;
		font-size: 22px;
		line-height: 50px;
		text-align: left;
	}
	
	.category-1 .item.active {
		border: 0px solid #28890b;
		border-radius: 0px;
		margin: 0;
		color: #fff;
		background: none;
		width: 100%;
		font-size: 22px;
		line-height: 50px;
	}
	
	.category-2 .item {
		cursor: pointer;
		border-radius: 4px;
		margin: 0 0 10px 0;
		color: #999;
		background: #efefef;
		width: 100%;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-2 .item:hover {
		cursor: pointer;
		border-radius: 4px;
		margin: 0 0 10px 0;
		color: #999;
		background: #efefef;
		width: 100%;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-2 .item.active {
		cursor: pointer;
		border-radius: 4px;
		margin: 0 0 10px 0;
		color: #999;
		background: #efefef;
		width: 100%;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-3 .item {
		cursor: pointer;
		padding: 0 5px;
		margin: 0 0px 5px;
		color: #333;
		font-weight: 500;
		display: inline-block;
		font-size: 14px;
		border-color: #ddd;
		line-height: auto;
		transition: all 0s;
		border-radius: 0px;
		background: none;
		width: auto;
		border-width: 0 0 0 1px;
		border-style: solid;
		text-align: left;
		height: auto;
	}
	
	.category-3 .item:hover {
		border-radius: 0px;
		padding: 0 5px;
		margin: 0 0px 5px;
		color: #333;
		background: none;
		width: auto;
		font-size: 14px;
		line-height: auto;
	}
	
	.category-3 .item.active {
		border: none;
		border-radius: 0px;
		padding: 0 5px;
		margin: 0 0px 5px;
		color: #333;
		background: none;
		font-weight: 600;
		width: auto;
		font-size: 14px;
		line-height: auto;
		text-align: center;
		height: auto;
	}
	
	.list-form-pv .el-input /deep/ .el-input__inner {
		border-radius: 0px;
		padding: 0 10px;
		margin: 0;
		color: #333;
		background: #fff;
		width: 200px;
		font-size: 14px;
		border-color: #ddd;
		border-width: 1px;
		line-height: 36px;
		border-style: solid;
		height: 36px;
	}
	
	.list-form-pv .el-select /deep/ .el-input__inner {
	}
	
	.list-form-pv .el-date-editor /deep/ .el-input__inner {
		padding: 0 30px;
		margin: 0;
		color: #333;
		display: inline-block;
		font-size: 14px;
		border-color: #ddd;
		line-height: 36px;
		border-radius: 0px;
		background: #fff;
		width: 200px;
		border-width: 1px;
		border-style: solid;
		height: 36px;
	}
	
	.list .index-pv1 .animation-box {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
		z-index: initial;
	}
	
	.list .index-pv1 .animation-box:hover {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
		-webkit-perspective: 1000px;
		perspective: 1000px;
		transition: 0.3s;
		z-index: 1;
	}
	
	.list .index-pv1 .animation-box img {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
	}
	
	.list .index-pv1 .animation-box img:hover {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
		-webkit-perspective: 1000px;
		perspective: 1000px;
		transition: 0.3s;
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

	
	.select2 .list .item-body .item {
				cursor: pointer;
				padding: 0 5px;
				color: #666;
				display: inline-block;
				font-size: 14px;
				line-height: 32px;
			}
	.select2 .list .item-body .item:hover {
				color: #b4a078;
				background: none;
			}
	.select2 .list .item-body .item.active {
				color: #b4a078;
				background: none;
			}
</style>
