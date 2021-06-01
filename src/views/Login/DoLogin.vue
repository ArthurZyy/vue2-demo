<template>
  <div class="do-login">
    <el-form :model="loginForm" ref="loginForm" :rules="rules" @submit.native.prevent>
      <el-form-item label="工号" :label-width="labelWidth">
        <el-input
          v-model="loginForm.staffid"
          autocomplete="off"
          @keyup.enter.native="loginValidate"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" :label-width="labelWidth">
        <el-input
          v-model="loginForm.password"
          autocomplete="off"
          show-password="show-password"
          @keyup.enter.native="loginValidate"
        ></el-input>
      </el-form-item>
    </el-form>
    

    <div class="dialog-footer" slot="footer">
      <el-button type="text" @click="back">忘记工号</el-button>
      <el-button type="primary" @click="loginValidate" native-type="submit"
        >登 录</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelWidth: this.$parent.labelWidth,
      loginForm: {
        staffid: "",
        password: "",
      },
      rules: {
        staffid: [
          { required: true, message: '请输入工号', trigger: 'blur' },
          { min: 5, max: 6, message: '长度在5到6个字符', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    };
  },
  methods: {
    back() {
      this.$emit("changeQuery");
    },
    loginValidate(form = this.loginForm){
      this.$refs[form].validate(valid => {
        if(valid){
          alert('开启图片验证')
          // this.showSlide = true
        } else {
          return
        } 
      })
    },
    login() {
      this.$store.dispatch('user/_login', this.loginForm)
        .then((res) => {
          if (!res.data.ok) {
            this.loginForm.password = "";
            this.$message.error("登录失败 " + res.data.msg);
          } else {
            this.$message.success("登录成功");
            setTimeout(function () {
              window.open("/home", "_self");
            }, 500);
          }
        })
        .catch((error) => {
          this.$message.error(error);
        });
    },
  },
};
</script>