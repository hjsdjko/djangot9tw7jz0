<template>
	<div>
		<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20231210/0fee9409214b41bfb94d032d3e1d9dbc.webp)","display":"flex","width":"100%","backgroundSize":"100% 100%","backgroundPosition":"center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
			<el-form v-if="pageFlag=='register'" :style='{"border":"10px solid #39b6e2","padding":"90px 60px 40px","boxShadow":"0px 1px 9px #21667f80","margin":"60px 0 20px","borderRadius":"30px","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20231218/84c7bb0e65334a18b669a33041d75403.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20231218/83bfa299c46a43d48aade06fcb1d9431.png) no-repeat center bottom / 100% auto,url(http://codegen.caihongy.cn/20231218/67cb8922dcdb4603ae570289e0708697.png) repeat-y center 10px / 100% auto,#fff","display":"flex","width":"900px","position":"relative","height":"auto"}' ref="rgsForm" class="rgs-form" :model="rgsForm" :rules="rules">
				<div v-if="true" :style='{"margin":"0 auto","color":"#000000","top":"-33px","textAlign":"center","background":"url(http://codegen.caihongy.cn/20231218/a7b3487a278d4db6990f0207171527db.png) no-repeat center top / 100%  100% ","width":"800px","lineHeight":"90px","fontSize":"22px","position":"absolute","fontWeight":"600","height":"89px"}' class="title">基于Python的农产品销售系统的设计与实现注册</div>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('zhanghao')?'required':''">账号：</div>
					<el-input  v-model="ruleForm.zhanghao"  autocomplete="off" placeholder="账号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('mima')?'required':''">密码：</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('xingming')?'required':''">姓名：</div>
					<el-input  v-model="ruleForm.xingming"  autocomplete="off" placeholder="姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('xingbie')?'required':''">性别：</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in yonghuxingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('shouji')?'required':''">手机：</div>
					<el-input  v-model="ruleForm.shouji"  autocomplete="off" placeholder="手机"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('touxiang')?'required':''">头像：</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="yonghutouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shangjia'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('shangjiahao')?'required':''">商家号：</div>
					<el-input  v-model="ruleForm.shangjiahao"  autocomplete="off" placeholder="商家号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shangjia'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('mima')?'required':''">密码：</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shangjia'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shangjia'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('shangjiamingcheng')?'required':''">商家名称：</div>
					<el-input  v-model="ruleForm.shangjiamingcheng"  autocomplete="off" placeholder="商家名称"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shangjia'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('dianhua')?'required':''">电话：</div>
					<el-input  v-model="ruleForm.dianhua"  autocomplete="off" placeholder="电话"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shangjia'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('youxiang')?'required':''">邮箱：</div>
					<el-input  v-model="ruleForm.youxiang"  autocomplete="off" placeholder="邮箱"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shangjia'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('shangjiadizhi')?'required':''">商家地址：</div>
					<el-input  v-model="ruleForm.shangjiadizhi"  autocomplete="off" placeholder="商家地址"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shangjia'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('dianputupian')?'required':''">店铺图片：</div>
                    <file-upload
                        tip="点击上传店铺图片"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.dianputupian?ruleForm.dianputupian:''"
                        @change="shangjiadianputupianUploadChange"
                    ></file-upload>
				</el-form-item>
				<button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"20px auto 5px","outline":"none","color":"#fff","borderRadius":"8px","background":"#5CE5FB","display":"block","width":"60%","fontSize":"16px","height":"44px"}' type="button" class="r-btn" @click="login()">注册</button>
				<div :style='{"cursor":"pointer","padding":"0 10%","margin":"10px auto","color":"rgba(159, 159, 159, 1)","textAlign":"center","display":"inline-block","width":"60%","lineHeight":"1","fontSize":"12px"}' class="r-login" @click="close()">已有账号，直接登录</div>
			</el-form>
			
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ruleForm: {
			},
			forgetForm: {},
            pageFlag : '',
			tableName:"",
			rules: {},
            yonghuxingbieOptions: [],
		};
	},
	mounted(){
		this.pageFlag = this.$route.query.pageFlag
		if(this.$route.query.pageFlag=='register'){
			
			let table = this.$storage.get("loginTable");
			this.tableName = table;
			if(this.tableName=='yonghu'){
				this.ruleForm = {
					zhanghao: '',
					mima: '',
					xingming: '',
					xingbie: '',
					shouji: '',
					touxiang: '',
					money: '',
				}
			}
			if(this.tableName=='shangjia'){
				this.ruleForm = {
					shangjiahao: '',
					mima: '',
					shangjiamingcheng: '',
					dianhua: '',
					youxiang: '',
					shangjiadizhi: '',
					dianputupian: '',
					money: '',
				}
			}
			if ('yonghu' == this.tableName) {
				this.rules.zhanghao = [{ required: true, message: '请输入账号', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('shangjia' == this.tableName) {
				this.rules.shangjiahao = [{ required: true, message: '请输入商家号', trigger: 'blur' }]
			}
			if ('shangjia' == this.tableName) {
				this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('shangjia' == this.tableName) {
				this.rules.shangjiamingcheng = [{ required: true, message: '请输入商家名称', trigger: 'blur' }]
			}
			if ('shangjia' == this.tableName) {
				this.rules.shangjiadizhi = [{ required: true, message: '请输入商家地址', trigger: 'blur' }]
			}
			this.yonghuxingbieOptions = "男,女".split(',')
		}
	},
	created() {
	},
	destroyed() {
		  	},
	methods: {
		changeRules(name){
			if(this.rules[name]){
				return true
			}
			return false
		},
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		close(){
			this.$router.push({ path: "/login" });
		},
        yonghutouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },
        shangjiadianputupianUploadChange(fileUrls) {
            this.ruleForm.dianputupian = fileUrls;
        },

        // 多级联动参数


		// 注册
		login() {
			var url=this.tableName+"/register";
					if((!this.ruleForm.zhanghao) && `yonghu` == this.tableName){
						this.$message.error(`账号不能为空`);
						return
					}
					if((!this.ruleForm.mima) && `yonghu` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `yonghu` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if(`yonghu` == this.tableName && this.ruleForm.shouji &&(!this.$validate.isMobile(this.ruleForm.shouji))){
						this.$message.error(`手机应输入手机格式`);
						return
					}
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
					if((!this.ruleForm.shangjiahao) && `shangjia` == this.tableName){
						this.$message.error(`商家号不能为空`);
						return
					}
					if((!this.ruleForm.mima) && `shangjia` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `shangjia` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if((!this.ruleForm.shangjiamingcheng) && `shangjia` == this.tableName){
						this.$message.error(`商家名称不能为空`);
						return
					}
					if(`shangjia` == this.tableName && this.ruleForm.dianhua &&(!this.$validate.isMobile(this.ruleForm.dianhua))){
						this.$message.error(`电话应输入手机格式`);
						return
					}
					if(`shangjia` == this.tableName && this.ruleForm.youxiang &&(!this.$validate.isEmail(this.ruleForm.youxiang))){
						this.$message.error(`邮箱应输入邮件格式`);
						return
					}
					if((!this.ruleForm.shangjiadizhi) && `shangjia` == this.tableName){
						this.$message.error(`商家地址不能为空`);
						return
					}
            if(this.ruleForm.dianputupian!=null) {
                this.ruleForm.dianputupian = this.ruleForm.dianputupian.replace(new RegExp(this.$base.url,"g"),"");
            }
			this.$http({
				url: url,
				method: "post",
				data:this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "注册成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.$router.replace({ path: "/login" });
						}
					});
				} else {
					this.$message.error(data.msg);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
	.container {
	  position: relative;
	  background: url(http://codegen.caihongy.cn/20231210/0fee9409214b41bfb94d032d3e1d9dbc.webp);

		.el-date-editor.el-input {
		  width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border: 1px solid #D7D7D7;
						border-radius: 8px;
						padding: 0 10px;
						color: #818181;
						width: 250px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 1px solid #D7D7D7;
						border-radius: 8px;
						padding: 0 10px;
						color: #818181;
						width: 250px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 1px solid #D7D7D7;
						border-radius: 8px;
						padding: 0 10px 0 30px;
						color: #818181;
						width: 250px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 1px solid #D7D7D7;
						border-radius: 8px;
						padding: 0 10px 0 30px;
						color: #818181;
						width: 250px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 1px dashed #D7D7D7;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #aaa;
		  		  width: 100px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 1px dashed #D7D7D7;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #aaa;
		  		  width: 100px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 1px dashed #D7D7D7;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #aaa;
		  		  width: 100px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
	}
	.required {
		position: relative;
	}
	.required::after{
				color: red;
				top: 4px;
				position: absolute;
				right: 5px;
				content: "*";
			}
	.editor>.avatar-uploader {
		line-height: 0;
		height: 0;
	}
</style>
