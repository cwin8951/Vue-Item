<template>
  <div class="tmpl">
    <!-- 面包屑 -->
    <div class="abread bt-line">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <span @click="back" style='cursor:pointer;'>返回上一层</span>
        </el-breadcrumb-item>
        <el-breadcrumb-item>购物商城</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>新增商品</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <div class="title">
        <el-row>
          <el-col :span="20">
            <el-form-item label="内容标题" prop="title">
              <el-input v-model="ruleForm.title"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </div>
      <el-row>
        <el-col :span="8">
          <el-form-item label="所属类型" prop="category_id">
            <el-select v-model="ruleForm.category_id" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="是否发布">
            <el-switch v-model="ruleForm.status" :width="58" active-text="是" inactive-text="否" active-color="#20a0ff" inactive-color="#bfcbd9">
            </el-switch>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="推荐类型">
            <el-switch v-model="ruleForm.is_slide" :width="65" active-text="轮播图" inactive-text="轮播图" active-color="#20a0ff" inactive-color="#bfcbd9">
            </el-switch>
            <el-switch v-model="ruleForm.is_top" :width="65" active-text="置顶" inactive-text="置顶" active-color="#20a0ff" inactive-color="#bfcbd9">
            </el-switch>
            <el-switch v-model="ruleForm.is_hot" :width="65" active-text="推荐" inactive-text="推荐" active-color="#20a0ff" inactive-color="#bfcbd9">
            </el-switch>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          title: '',
          category_id: '',
        },
        rules: {
          title: [{
            required: true,
            message: '请输入内容标题',
            trigger: 'blur'
          }],
        }

      }
    },
    methods: {
      back() {
        //返回上一步
        this.$router.go(-1);
      },
      submitForm() {

      },
      resetForm() {

      }
    }
  }

</script>
<style scoped>
  .title {
    margin-top: 10px;
  }

</style>
