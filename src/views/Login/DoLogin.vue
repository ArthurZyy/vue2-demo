<template>
  <div class="do-login">
    <el-form
      :model="loginForm"
      ref="loginForm"
      :rules="loginRules"
      @submit.native.prevent
    >
      <el-form-item label="工号" :label-width="labelWidth" prop="staffid">
        <el-input
          v-model="loginForm.staffid"
          autocomplete="off"
          @keyup.enter.native="loginValidate"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" :label-width="labelWidth" prop="password">
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
      loginRules: {
        staffid: [
          { required: true, message: "请输入工号", trigger: "blur" },
          { min: 5, max: 6, message: "长度在5到6个字符", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    back() {
      this.$emit("changeQuery");
    },
    loginValidate() {
      this.$refs["loginForm"].validate((valid) => {
        if (valid) {
          // alert('开启图片验证')
          // this.showSlide = true
          this.login();
        } else {
          return;
        }
      });
    },
    login() {
      this.$store
        .dispatch("user/_login", this.loginForm)
        .then((res) => {
          if (!res.data.success) {
            this.loginForm.password = "";
          } else {
            setTimeout(() => {
              this.$router.push(this.$route.query.redirect);
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