<template>
  <div style="width:400px">
    <el-form
      v-loading="isloading"
      ref="ruleForm"
      label-width="100px"
      :model="student"
      :rules="rules"
    >
      <el-form-item label="学生姓名" prop="name">
        <el-input v-model="student.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-switch
          v-model="student.gender"
          active-text="男"
          inactive-text="女"
          active-value="男"
          inactive-value="女"
          active-color="#13ce66"
          inactive-color="#ff4949"
        ></el-switch>
      </el-form-item>
      <el-form-item label="学生年龄" prop="age">
        <el-input type="number" v-model.number="student.age"></el-input>
      </el-form-item>
      <el-form-item label="电话号码" prop="phone">
        <el-input v-model.number="student.phone"></el-input>
      </el-form-item>
      <el-form-item label="家庭住址" prop="address">
        <el-input v-model.number="student.address"></el-input>
      </el-form-item>
      <el-form-item label="所属班级">
        <el-select v-model="student.class" placeholder="请选择班级" prop="class">
          <el-option v-for="item in classes" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所属课程">
        <el-select v-model="student.course" placeholder="请选择课程" prop="courses">
          <el-option v-for="item in courses" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">确定</el-button>
        <el-button @click="$router.push({name:'studentsList'})">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      student: {
        name: "",
        class: "",
        course: "",
        gender: "男",
        phone: "",
        age: "",
        address: ""
      },
      isloading: false,
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "change" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "change" }
        ],
        age: [{ required: true, message: "请输入年龄", trigger: "change" }],
        phone: [
          { required: true, message: "请输入电话号码", trigger: "change" },
          {
            validator: function(rule, value, callback) {
              if (/^1\d{10}$/.test(value)) {
                callback();
              } else {
                callback(new Error("请输入正确的电话号码"));
              }
            },
            trigger: "change"
          }
        ],
        address: [
          { required: true, message: "请输入家庭住址", trigger: "change" }
        ],
        class: [
          { required: true, message: "请选择所在班级", trigger: "change" }
        ],
        course: [
          { required: true, message: "请选择所属课程", trigger: "change" }
        ]
      }
    };
  },
  computed: {
    courses: {
      get() {
        return this.$store.state.course.data;
      },
      set(val) {
        this.$store.commit("course/setData", val);
      }
    },
    classes: {
      get() {
        return this.$store.state.class.data;
      },
      set(val) {
        this.$store.commit("class/setData", val);
      }
    }
  },
  async created() {
    this.isloading = true;
    if (this.id) {
      //读取学生对象
      let req = await fetch("/api/student/" + this.id);
      req = await req.json();
      console.log(req);
      this.student = req;
    }
    this.isloading = false;
    // let req = await fetch("/api/class");
    // req = await req.json();
    // this.classes = req.data;
    // req = await fetch("/api/course");
    // req = await req.json();
    // console.log(req);
    // this.courses = req.data;
    // this.isloading = false;
  },
  methods: {
    async handleSubmit() {
      try {
        await this.$refs.ruleForm.validate();
        //抛出事件
        this.$emit("submit", this.student);
      } catch {
        //验证失败
      }
    }
  }
};
</script>

<style scoped>
</style>