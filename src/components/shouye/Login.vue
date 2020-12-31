<template>
  <div>
    <el-dialog
      title="登录/注册"
      :visible.sync="dialogFormVisible"
      width="450px"
      :before-close="handleClose"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <div
        class="signIn"
        v-if="status == 1"
        style="width: 300px; margin: 0 auto"
      >
        <el-form
          :model="loginForm"
          :rules="loginRules"
          ref="loginForm"
          label-width="70px"
          key="login"
        >
          <el-form-item prop="username" label="用户名:">
            <el-input
              icon="el-icon-user-solid"
              v-model="loginForm.username"
              placeholder="请输入账号"
              ><i slot="prefix" class="el-icon-s-custom"></i
            ></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码:">
            <el-input
              type="password"
              v-model="loginForm.password"
              placeholder="请输入密码"
              ><i slot="prefix" class="el-icon-unlock"></i
            ></el-input>
          </el-form-item>
          <el-form-item prop="verificationCode" label="验证码:">
            <el-input
              type="text"
              placeholder="请填写验证码"
              class="inputText"
              v-model="loginForm.verificationCode"
              ><i slot="prefix" class="el-icon-edit"></i
            ></el-input>
            <el-row :gutter="30" style="margin-top: 20px">
              <el-col :span="8"
                ><div class="grid-content bg-purple" @click="changeCode">
                  <VerificationCode
                    :identifyCode="identifyCode"
                  ></VerificationCode></div
              ></el-col>
              <el-col :span="16"
                ><div class="grid-content bg-purple">
                  <a href="javascript:;" @click="changeCode">看不清?换一个</a>
                </div></el-col
              >
            </el-row>
          </el-form-item>
          <el-form-item label="记住我">
           <el-switch
  v-model="remindMe"
  active-color="#13ce66"
  inactive-color="gray" style="float:left;margin-top:10px">
</el-switch>
          </el-form-item>

          <el-button class="signBtn" type="primary" @click="signIn"
            >登录</el-button
          >
        </el-form>
        <a class="signText" @click="toSignUp">注册新账号</a>
      </div>
      <div class="signUp" v-else style="width: 300px; margin: 0 auto">
        <el-form
          :model="regForm"
          :rules="regRules"
          ref="regForm"
          label-width="70px"
          key="register"
        >
          <el-form-item prop="username" label="用户名:">
            <el-input
              v-model="regForm.username"
              placeholder="请输入账号"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码:">
            <el-input
              type="password"
              v-model="regForm.password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item prop="nickname" label="昵称:">
            <el-input
              v-model="regForm.nickname"
              placeholder="请输入昵称"
            ></el-input>
          </el-form-item>
          <el-form-item prop="verificationCode" label="验证码:">
            <el-input
              type="text"
              placeholder="请填写验证码"
              class="inputText"
              v-model="loginForm.verificationCode"
              ><i slot="prefix" class="el-icon-edit"></i
            ></el-input>
            <el-row :gutter="30" style="margin-top: 20px">
              <el-col :span="8"
                ><div class="grid-content bg-purple" @click="changeCode">
                  <VerificationCode
                    :identifyCode="identifyCode"
                  ></VerificationCode></div
              ></el-col>
              <el-col :span="16"
                ><div class="grid-content bg-purple">
                  <a href="javascript:;" @click="changeCode">看不清?换一个</a>
                </div></el-col
              >
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button class="signBtn" type="primary" @click="signUp"
              >注册</el-button
            >
          </el-form-item>
        </el-form>
        <a class="signText" @click="toSignIn">返回登录</a>
      </div>
      <div v-loading.fullscreen.lock="loading"></div>
      <div slot="footer" class="dialog-footer"></div>
    </el-dialog>
  </div>
</template>

<script>
import VerificationCode from "./VerificationCode";
/*  import Cookie from 'js-cookie' */
export default {
  components: {
    VerificationCode,
  },
  props: ["dialogFormVisible", "toClose"],
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  data() {
    return {
      remindMe: false,
      // 验证码初始值
      identifyCode: "m6a8",
      // 验证码的随机取值范围
      identifyCodes: "123456789abcdefghjkmnpqrstuvwxyz",
      loading: false,
      status: 1,
      loginForm: {
        username: "",
        password: "",
        verificationCode: "",
      },
      loginRules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        verificationCode: [
          { required: true, message: "请输入验证码", trigger: "blur" },
        ],
      },
      regForm: {
        username: "",
        password: "",
        nickname: "",
      },
      regRules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        nickname: [{ required: true, message: "请输入昵称", trigger: "blur" }],
        verificationCode: [
          { required: false, message: "请输入验证码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    //// 点击验证码刷新验证码
    changeCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    randomNum(min, max) {
      max = max + 1;
      return Math.floor(Math.random() * (max - min) + min);
    },
    //生成验证码
    makeCode(data, len) {
      for (let i = 0; i < len; i++) {
        this.identifyCode += data[this.randomNum(0, data.length - 1)];
      }
      console.log(this.identifyCode);
    },
    handleClose() {
      this.$emit("toClose", "");
    },
    signIn() {
      this.$refs["loginForm"].validate((valid) => {
        if (valid) {
         // this.loading = true;
          this.$axios.post("/api/user/login", this.loginForm).then((res) => {
            res = res.data;
            if (res.code === 0) {
                 this.$message({
                message: res.msg,
                type: "success",
              })
              this.handleClose();
               //Cookie.set("token", res.token);
              this.$store.commit("setToken", res.token);
               this.$store.commit("setUsername", this.loginForm.username);
            
                 this.$store.commit("changIsSignIn", 1); 
                  setTimeout(()=>{
                this.handleClose();
                  })
              /* setTimeout(() => {
                this.loading = false;
                this.$router.push({ name: "home" });
              }, 1500); */
            }else{
                this.$message.error(res.msg);
              }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
      
    },
    signUp() {
      this.$refs["regForm"].validate((valid) => {
        if (valid) {
          this.$axios.post("/api/user/register", this.regForm).then((res) => {
              res=res.data;
            if (res.code == -1) {
              this.$message.error(res.msg);
            } else {
              this.$message({
                message: res.msg,
                type: "success",
              });
              this.handleClose();
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    toSignUp() {
      this.status = 2;
    },
    toSignIn() {
      this.status = 1;
    },
  },
};
</script>

<style scoped>
.sign_box {
  width: 300px;
  margin: 200px auto 0;
  text-align: center;
}
.signText {
  color: #3b78dd;
  cursor: pointer;
}
.sign_box :hover {
  color: #1760d7;
}
/* .sign_box {
    width: 300px;
    margin: 200px auto 0;
    text-align: center;
    .signText {
        color: #3B78DD;
        cursor: pointer;
        &:hover{
            color: #1760D7;
        }
    }
} */
.signBtn {
  width: 100%;
  font-size: 18px;
}
</style>