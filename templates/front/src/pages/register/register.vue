<template>
	<div>

	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20240305/e457456d29994b099927c39c8d5bec96.jpg)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
		<el-form class='rgs-form' v-if="pageFlag=='register'" :style='{"border":"4px groove #333","padding":"30px 20px 30px 20px","boxShadow":"0px 26px 26px -30px #333","margin":"0 auto","alignItems":"center","textAlign":"center","flexDirection":"column","display":"flex","justifyContent":"center","minHeight":"500px","borderRadius":"20px","flexWrap":"wrap","background":"rgba(255,255,255,.9)","width":"600px","position":"relative","height":"auto"}' ref="registerForm" :model="registerForm" :rules="rules">
			<div v-if="false" :style='{"width":"100%","margin":"0 0 10px 0","lineHeight":"44px","fontSize":"20px","color":"rgba(64, 158, 255, 1)","textAlign":"center"}'>USER / REGISTER</div>
			<div v-if="true" :style='{"margin":"0px auto 10px","-webkit-text-stroke":"6px transparent","color":"#fff","textAlign":"center","background":"#000","-webkitTextFillColor":"#ffffff","width":"100%","letterSpacing":"6px","lineHeight":"44px","fontSize":"24px","-webkitBackgroundClip":"text"}'>基于Python的农产品销售系统的设计与实现注册</p></div>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 auto 15px","textAlign":"left","height":"auto"}' v-if="tableName=='yonghu'" prop="zhanghao">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('zhanghao')?'required':''">账号：</div>
				<el-input v-model="registerForm.zhanghao"  placeholder="请输入账号" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 auto 15px","textAlign":"left","height":"auto"}' v-if="tableName=='yonghu'" prop="mima">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 auto 15px","textAlign":"left","height":"auto"}' v-if="tableName=='yonghu'" prop="mima2">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 auto 15px","textAlign":"left","height":"auto"}' v-if="tableName=='yonghu'" prop="xingming">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('xingming')?'required':''">姓名：</div>
				<el-input v-model="registerForm.xingming"  placeholder="请输入姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 auto 15px","textAlign":"left","height":"auto"}' v-if="tableName=='yonghu'" prop="xingbie">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in yonghuxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 auto 15px","textAlign":"left","height":"auto"}' v-if="tableName=='yonghu'" prop="shouji">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('shouji')?'required':''">手机：</div>
				<el-input v-model="registerForm.shouji"  placeholder="请输入手机" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 auto 15px","textAlign":"left","height":"auto"}' v-if="tableName=='yonghu'" prop="touxiang">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('touxiang')?'required':''">头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="yonghutouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 auto 15px","textAlign":"left","height":"auto"}' v-if="tableName=='shangjia'" prop="shangjiahao">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('shangjiahao')?'required':''">商家号：</div>
				<el-input v-model="registerForm.shangjiahao"  placeholder="请输入商家号" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 auto 15px","textAlign":"left","height":"auto"}' v-if="tableName=='shangjia'" prop="mima">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 auto 15px","textAlign":"left","height":"auto"}' v-if="tableName=='shangjia'" prop="mima2">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 auto 15px","textAlign":"left","height":"auto"}' v-if="tableName=='shangjia'" prop="shangjiamingcheng">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('shangjiamingcheng')?'required':''">商家名称：</div>
				<el-input v-model="registerForm.shangjiamingcheng"  placeholder="请输入商家名称" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 auto 15px","textAlign":"left","height":"auto"}' v-if="tableName=='shangjia'" prop="dianhua">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('dianhua')?'required':''">电话：</div>
				<el-input v-model="registerForm.dianhua"  placeholder="请输入电话" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 auto 15px","textAlign":"left","height":"auto"}' v-if="tableName=='shangjia'" prop="youxiang">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('youxiang')?'required':''">邮箱：</div>
				<el-input v-model="registerForm.youxiang"  placeholder="请输入邮箱" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 auto 15px","textAlign":"left","height":"auto"}' v-if="tableName=='shangjia'" prop="shangjiadizhi">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('shangjiadizhi')?'required':''">商家地址：</div>
				<el-input v-model="registerForm.shangjiadizhi"  placeholder="请输入商家地址" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 auto 15px","textAlign":"left","height":"auto"}' v-if="tableName=='shangjia'" prop="dianputupian">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('dianputupian')?'required':''">店铺图片：</div>
                <file-upload
					tip="点击上传店铺图片"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.dianputupian?registerForm.dianputupian:''"
					@change="shangjiadianputupianUploadChange"
				></file-upload>
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"20px 0px 20px 0","color":"#fff","borderRadius":"4px","background":"#b4a078","display":"inline-block","width":"100px","letterSpacing":"4px","fontSize":"16px","height":"36px"}' type="primary" @click="submitForm('registerForm')">注册</el-button>
			<el-button :style='{"border":"1px solid #fff","cursor":"pointer","padding":"0 24px","margin":"0","color":"#666","textAlign":"center","display":"inline-block","letterSpacing":"4px","textDecoration":"underline","borderRadius":"4px","background":"rgba(255,255,255,.5)","width":"100px","fontSize":"16px","height":"36px"}' @click="resetForm('registerForm')">重置</el-button>
			<router-link :style='{"cursor":"pointer","padding":"0px 8px","margin":"0px 0 0 0","color":"#666","borderRadius":"4px","textAlign":"right","background":"none","display":"inline-block","width":"100%","lineHeight":"20px","fontSize":"14px","textDecoration":"underline"}' to="/login">已有账户登录</router-link>
			<div class="idea1" :style='{"width":"100%","background":"red","display":"none","height":"40px"}'></div>
			<div class="idea2" :style='{"width":"100%","background":"blue","display":"none","height":"40px"}'></div>
		</el-form>
    </div>
  </div>
</div>
</template>

<script>

export default {
    //数据集合
    data() {
		return {
            pageFlag : '',
			tableName: '',
			registerForm: {},
			forgetForm: {},
			rules: {},
			requiredRules: {},
            yonghuxingbieOptions: [],
		}
    },
	mounted() {
		if(this.$route.query.pageFlag=='register'){
			this.tableName = this.$route.query.role;
			if(this.tableName=='yonghu'){
				this.registerForm = {
					zhanghao: '',
					mima: '',
					mima2: '',
					xingming: '',
					xingbie: '',
					shouji: '',
					touxiang: '',
					money: '',
				}
			}
			if(this.tableName=='shangjia'){
				this.registerForm = {
					shangjiahao: '',
					mima: '',
					mima2: '',
					shangjiamingcheng: '',
					dianhua: '',
					youxiang: '',
					shangjiadizhi: '',
					dianputupian: '',
					money: '',
				}
			}
			if ('yonghu' == this.tableName) {
				this.requiredRules.zhanghao = [{ required: true, message: '请输入账号', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('shangjia' == this.tableName) {
				this.requiredRules.shangjiahao = [{ required: true, message: '请输入商家号', trigger: 'blur' }]
			}
			if ('shangjia' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('shangjia' == this.tableName) {
				this.requiredRules.shangjiamingcheng = [{ required: true, message: '请输入商家名称', trigger: 'blur' }]
			}
			if ('shangjia' == this.tableName) {
				this.requiredRules.shangjiadizhi = [{ required: true, message: '请输入商家地址', trigger: 'blur' }]
			}
		}
	},
    created() {
		this.pageFlag = this.$route.query.pageFlag;
		if(this.$route.query.pageFlag=='register'){
		  if ('yonghu' == this.tableName) {
			this.rules.zhanghao = [{ required: true, message: '请输入账号', trigger: 'blur' }];
		  }
		  if ('yonghu' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
			this.yonghuxingbieOptions = "男,女".split(',');
		  if ('yonghu' == this.tableName) {
			this.rules.shouji = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
		  }
		  if ('yonghu' == this.tableName) {
			this.rules.money = [{ required: true, validator: this.$validate.isNumber, trigger: 'blur' }];
		  }
		  if ('shangjia' == this.tableName) {
			this.rules.shangjiahao = [{ required: true, message: '请输入商家号', trigger: 'blur' }];
		  }
		  if ('shangjia' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
		  if ('shangjia' == this.tableName) {
			this.rules.shangjiamingcheng = [{ required: true, message: '请输入商家名称', trigger: 'blur' }];
		  }
		  if ('shangjia' == this.tableName) {
			this.rules.dianhua = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
		  }
		  if ('shangjia' == this.tableName) {
			this.rules.youxiang = [{ required: true, validator: this.$validate.isEmail, trigger: 'blur' }];
		  }
		  if ('shangjia' == this.tableName) {
			this.rules.shangjiadizhi = [{ required: true, message: '请输入商家地址', trigger: 'blur' }];
		  }
		  if ('shangjia' == this.tableName) {
			this.rules.money = [{ required: true, validator: this.$validate.isNumber, trigger: 'blur' }];
		  }
		}
    },
    //方法集合
    methods: {
		changeRules(name){
			if(this.requiredRules[name]){
				return true
			}
			return false
		},
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
        // 下二随
      yonghutouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
      shangjiadianputupianUploadChange(fileUrls) {
          this.registerForm.dianputupian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },

        // 多级联动参数


      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url=this.tableName+"/register";
				if((!this.registerForm.zhanghao) && `yonghu` == this.tableName){
					this.$message.error(`账号不能为空`);
					return
				}
               if(`yonghu` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `yonghu` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
					if(`yonghu` == this.tableName && this.registerForm.shouji &&(!this.$validate.isMobile2(this.registerForm.shouji))){
						this.$message.error(`手机应输入手机格式`);
						return
					}
				if((!this.registerForm.shangjiahao) && `shangjia` == this.tableName){
					this.$message.error(`商家号不能为空`);
					return
				}
               if(`shangjia` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `shangjia` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
				if((!this.registerForm.shangjiamingcheng) && `shangjia` == this.tableName){
					this.$message.error(`商家名称不能为空`);
					return
				}
					if(`shangjia` == this.tableName && this.registerForm.dianhua &&(!this.$validate.isMobile2(this.registerForm.dianhua))){
						this.$message.error(`电话应输入手机格式`);
						return
					}
					if(`shangjia` == this.tableName && this.registerForm.youxiang &&(!this.$validate.isEmail2(this.registerForm.youxiang))){
						this.$message.error(`邮箱应输入邮件格式`);
						return
					}
				if((!this.registerForm.shangjiadizhi) && `shangjia` == this.tableName){
					this.$message.error(`商家地址不能为空`);
					return
				}
            this.$http.post(url, this.registerForm).then(res => {
              if (res.data.code === 0) {
                this.$message({
                  message: '注册成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.$router.push('/login');
                  }
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20240305/e457456d29994b099927c39c8d5bec96.jpg);
		
		.el-input {
		  width: auto;
		}
		
		.el-date-editor.el-input {
			width: auto;
		}
		
		.el-form-item /deep/ .el-form-item__content {
						display: flex;
						flex-wrap: wrap;
					}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px;
						color: #666;
						background: rgba(255,255,255,.9);
						width: 100%;
						font-size: 14px;
						border-color: #ddd;
						border-width: 0 0 1px;
						border-style: dashed;
						min-width: 300px;
						height: 40px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px;
						color: #666;
						background: rgba(255,255,255,.9);
						width: auto;
						font-size: 14px;
						border-color: #ddd;
						border-width: 0 0 1px;
						border-style: dashed;
						min-width: 300px;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px 0 30px;
						color: #666;
						background: rgba(255,255,255,.9);
						width: auto;
						font-size: 14px;
						border-color: #ddd;
						border-width: 0 0 1px;
						border-style: dashed;
						min-width: 300px;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px 0 30px;
						color: #666;
						background: rgba(255,255,255,.9);
						width: auto;
						font-size: 14px;
						border-color: #ddd;
						border-width: 0 0 1px;
						border-style: dashed;
						min-width: 300px;
						height: 40px;
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
		  		  cursor: pointer;
		  		  border-radius: 0px;
		  		  color: #999;
		  		  background: rgba(255,255,255,.9);
		  		  width: 100px;
		  		  font-size: 24px;
		  		  border-color: #ddd;
		  		  border-width: 1px;
		  		  line-height: 60px;
		  		  border-style: dashed;
		  		  text-align: center;
		  		  height: 60px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  cursor: pointer;
		  		  border-radius: 0px;
		  		  color: #999;
		  		  background: rgba(255,255,255,.9);
		  		  width: 100px;
		  		  font-size: 24px;
		  		  border-color: #ddd;
		  		  border-width: 1px;
		  		  line-height: 60px;
		  		  border-style: dashed;
		  		  text-align: center;
		  		  height: 60px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  cursor: pointer;
		  		  border-radius: 0px;
		  		  color: #999;
		  		  background: rgba(255,255,255,.9);
		  		  width: 100px;
		  		  font-size: 24px;
		  		  border-color: #ddd;
		  		  border-width: 1px;
		  		  line-height: 60px;
		  		  border-style: dashed;
		  		  text-align: center;
		  		  height: 60px;
		  		}
	}
	.required {
		position: relative;
	}
	.required::after{
				color: red;
				left: 138px;
				position: absolute;
				content: "*";
				order: 2;
			}
</style>
