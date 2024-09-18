<template>
<div>
	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20240305/e457456d29994b099927c39c8d5bec96.jpg)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
		<el-form ref="loginForm" :model="loginForm" :style='{"border":"4px groove #333","padding":"40px 20px 30px 20px","boxShadow":"0px 26px 26px -30px #333","margin":"0 auto","textAlign":"center","display":"block","minWidth":"600px","minHeight":"500px","borderRadius":"20px","background":"rgba(255,255,255,.9)","width":"auto","position":"relative","height":"auto"}' :rules="rules">
			<div v-if="false" :style='{"width":"100%","margin":"0 0 10px 0","lineHeight":"44px","fontSize":"18px","color":"#333","textAlign":"center"}'>USER / LOGIN</div>
			<div v-if="true" :style='{"margin":"0 auto 20px","-webkit-text-stroke":"6px transparent","color":"#fff","textAlign":"center","background":"#000","-webkitTextFillColor":"#ffffff","width":"100%","letterSpacing":"6px","lineHeight":"44px","fontSize":"24px","fontWeight":"500","-webkitBackgroundClip":"text"}'>基于Python的农产品销售系统的设计与实现登录</div>
			<el-form-item v-if="loginType==1" class="list-item" :style='{"width":"100%","margin":"0 auto 30px"}' prop="username">
				<div v-if="true" :style='{"color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"120px","lineHeight":"36px","fontSize":"14px","minWidth":"100px"}'>账号：</div>
				<input :style='{"padding":"0 10px","borderColor":"#ddd","color":"#666","borderRadius":"0px","borderWidth":"0 0 1px","background":"rgba(255,255,255,.9)","width":"calc(100% - 150px)","fontSize":"14px","minWidth":"300px","borderStyle":"dashed","height":"40px"}' v-model="loginForm.username" placeholder="请输入账户">
			</el-form-item>
			<el-form-item v-if="loginType==1" class="list-item" :style='{"width":"100%","margin":"0 auto 30px"}' prop="password">
				<div v-if="true" :style='{"color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"120px","lineHeight":"36px","fontSize":"14px","minWidth":"100px"}'>密码：</div>
				<input :style='{"padding":"0 10px","borderColor":"#ddd","color":"#666","borderRadius":"0px","borderWidth":"0 0 1px","background":"rgba(255,255,255,.9)","width":"calc(100% - 150px)","fontSize":"14px","minWidth":"300px","borderStyle":"dashed","height":"40px"}' v-model="loginForm.password" placeholder="请输入密码" type="password">
			</el-form-item>

			<el-form-item v-if="roles.length>1" class="list-type" :style='{"width":"100%","margin":"0 0 30px"}' prop="role">
				<el-radio v-model="loginForm.tableName" :label="item.tableName" v-for="(item, index) in roles" :key="index" @change.native="getCurrentRow(item)">{{item.roleName}}</el-radio>
			</el-form-item>

			
			<el-form-item class="list-btn" :style='{"width":"auto","margin":"0","display":"inline-block"}'>
				<el-button v-if="loginType==1" :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"0 5px","color":"#fff","borderRadius":"4px","background":"#b4a078","display":"inline-block","width":"auto","letterSpacing":"4px","fontSize":"16px","height":"36px"}' @click="submitForm('loginForm')">登录</el-button>
				<el-button v-if="loginType==1" :style='{"border":"0","cursor":"pointer","padding":"0 24px","boxShadow":"0px 4px 0px #075c06","margin":"0 5px","color":"#fff","textAlign":"right","display":"none","letterSpacing":"4px","borderRadius":"4px","background":"#49c549","width":"auto","fontSize":"14px","height":"40px"}' @click="resetForm('loginForm')">重置</el-button>
			</el-form-item>
			<div :style='{"width":"auto","display":"inline-block"}'>
			<router-link :style='{"cursor":"pointer","border":"0px solid #ddd","padding":"0 10px","margin":"0 5px","color":"#fff","borderRadius":"4px","background":"#b4a078","display":"inline-block","width":"auto","fontSize":"14px","lineHeight":"36px","height":"36px"}' :to="{path: '/register', query: {role: item.tableName,pageFlag:'register'}}" v-if="item.hasFrontRegister=='是'" v-for="(item, index) in roles" :key="index">注册{{item.roleName.replace('注册','')}}</router-link>
			</div>
			<div class="idea1" :style='{"width":"100%","background":"red","display":"none","height":"40px"}'></div>
			<div class="idea2" :style='{"width":"100%","background":"blue","display":"none","height":"40px"}'></div>
		</el-form>
    </div>
</div>
</template>

<script>
import menu from '@/config/menu'
export default {
	//数据集合
	data() {
		return {
            baseUrl: this.$config.baseUrl,
            loginType: 1,
			roleMenus: [],
			loginForm: {
				username: '',
				password: '',
				tableName: '',
				code: '',
			},
			role: '',
            roles: [],
			rules: {
				username: [
					{ required: true, message: '请输入账户', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' }
				]
			},
			codes: [{
				num: 1,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 2,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 3,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 4,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}],
			flag: false,
			verifyCheck2: false,
		}
	},
  components: {
  },
	created() {
		this.roleMenus = menu.list()
		for(let item in this.roleMenus) {
		    if(this.roleMenus[item].hasFrontLogin=='是') {
		        this.roles.push(this.roleMenus[item]);
		    }
		}
		
	},
	mounted() {
	},
    //方法集合
    methods: {
		randomString() {
			var len = 4;
			var chars = [
			  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
			  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
			  'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
			  'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
			  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2',
			  '3', '4', '5', '6', '7', '8', '9'
			]
			var colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
			var sizes = ['14', '15', '16', '17', '18']
			
			var output = []
			for (var i = 0; i < len; i++) {
			  // 随机验证码
			  var key = Math.floor(Math.random() * chars.length)
			  this.codes[i].num = chars[key]
			  // 随机验证码颜色
			  var code = '#'
			  for (var j = 0; j < 6; j++) {
			    var key = Math.floor(Math.random() * colors.length)
			    code += colors[key]
			  }
			  this.codes[i].color = code
			  // 随机验证码方向
			  var rotate = Math.floor(Math.random() * 45)
			  var plus = Math.floor(Math.random() * 2)
			  if (plus == 1) rotate = '-' + rotate
			  this.codes[i].rotate = 'rotate(' + rotate + 'deg)'
			  // 随机验证码字体大小
			  var size = Math.floor(Math.random() * sizes.length)
			  this.codes[i].size = sizes[size] + 'px'
			}
		},
      getCurrentRow(row) {
        this.role = row.roleName;
      },
      submitForm(formName) {
        if (this.roles.length!=1) {
            if (!this.role) {
                this.$message.error("请选择登录用户类型");
                return false;
            }
        } else {
            this.role = this.roles[0].roleName;
            this.loginForm.tableName = this.roles[0].tableName;
        }

		this.loginPost(formName)
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
	  loginPost(formName) {
		this.$refs[formName].validate((valid) => {
		  if (valid) {
		    this.$http.get(`${this.loginForm.tableName}/login`, {params: this.loginForm}).then(res => {
		      if (res.data.code === 0) {
		        localStorage.setItem('frontToken', res.data.token);
		        localStorage.setItem('UserTableName', this.loginForm.tableName);
		        localStorage.setItem('username', this.loginForm.username);
		        localStorage.setItem('adminName', this.loginForm.username);
		        localStorage.setItem('frontSessionTable', this.loginForm.tableName);
		        localStorage.setItem('frontRole', this.role);
		        localStorage.setItem('keyPath', 0);
		        this.$router.push('/');
		        this.$message({
		          message: '登录成功',
		          type: 'success',
		          duration: 1500,
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
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20240305/e457456d29994b099927c39c8d5bec96.jpg);
		
		.el-form-item {
		  & /deep/ .el-form-item__content {
		    width: 100%;
		  }
		}
		
		.list-item /deep/ .el-form-item__content {
			display: flex;
			width: 100%;
		}

		.list-code /deep/ .el-form-item__content {
			display: flex;
			width: 100%;
		}

		.list-type /deep/ .el-form-item__content {
			padding: 0 0 0 120px;
			margin: 20px 0 0;
			display: flex;
		}

		.list-btn /deep/ .el-form-item__content {
			display: inline-block;
			justify-content: center;
			flex-wrap: wrap;
		}
		
		.list-item /deep/ .el-input .el-input__inner {
			border-radius: 0px;
			padding: 0 10px;
			color: #666;
			background: rgba(255,255,255,.9);
			width: calc(100% - 150px);
			font-size: 14px;
			border-color: #ddd;
			border-width: 0 0 1px;
			border-style: dashed;
			min-width: 300px;
			height: 40px;
		}
		
		.list-code /deep/ .el-input .el-input__inner {
			border-radius: 0px;
			padding: 0 10px;
			color: #666;
			background: rgba(255,255,255,.9);
			display: inline-block;
			vertical-align: middle;
			width: calc(100% - 260px);
			font-size: 14px;
			border-color: #ddd;
			border-width: 0 0 1px;
			border-style: dashed;
			height: 40px;
		}

		.list-type /deep/ .el-radio__input .el-radio__inner {
			background: rgba(255,255,255,.5);
			border-color: #666;
		}
		.list-type /deep/ .el-radio__input.is-checked .el-radio__inner {
			background: #b4a078;
			border-color: #b4a078;
		}
		.list-type /deep/ .el-radio__label {
			color: #333;
			font-size: 14px;
		}
		.list-type /deep/ .el-radio__input.is-checked+.el-radio__label {
			color: #b4a078;
			font-size: 14px;
		}
	}

</style>
