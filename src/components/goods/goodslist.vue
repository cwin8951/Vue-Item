<template>
  <div class="arttmpl">
    <!-- 面包屑 -->
    <div class="abread bt-line">
      <el-row>
        <el-col :span="24">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>购物商城</el-breadcrumb-item>
            <el-breadcrumb-item>内容管理</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
    </div>
    <!-- 按钮搜索区 -->
    <div class="operation">
      <el-row>
        <el-col :span="6">
          <router-link to="/admin/goodsadd">
            <el-button size="small" icon="el-icon-plus">新增</el-button>
          </router-link>
          <el-button size="small" icon="el-icon-check">全选</el-button>
          <el-button size="small" icon="el-icon-delete">删除</el-button>
        </el-col>
        <el-col :offset="14" :span="4">
          <el-input placeholder="请输入搜索内容" prefix-icon="el-icon-search" v-model="searchValue" @change="getList"></el-input>
        </el-col>
      </el-row>
    </div>
    <!-- 表格 -->
    <el-row>
      <el-col :span="24">
        <el-table ref="multipleTable" :data="list" border tooltip-effect="dark" style="width: 100%">
          <!-- 多选框 -->
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="标题">
            <template slot-scope="scope">
              <el-tooltip class="item" effect="dark" placement="right">
                <div slot="content">
                  商品货号：{{scope.row.goods_no}}
                  <br> 图片：
                  <br>
                  <img :src="scope.row.imgurl" width="180" height="150">
                </div>
                <a href="javascript:;">{{scope.row.title}}</a>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column prop="categoryname" label="所属类型" width="120"></el-table-column>
          <el-table-column prop="stock_quantity" label="库存" width="100"></el-table-column>
          <el-table-column prop="market_price" label="市场价" width="100"></el-table-column>
          <el-table-column prop="sell_price" label="销售价" width="100"></el-table-column>
          <el-table-column label="属性" width="120">
            <template slot-scope="scope">
              <i v-bind="{class:'el-icon-picture '+(scope.row.is_slide==1?'':'unlinght') }"></i>
              <i v-bind="{class:'el-icon-upload '+(scope.row.is_top==1?'':'unlinght') }"></i>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="90">
            <template slot-scope="scope">
              <a href="#">修改</a>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <!-- 分页 -->
    <el-row>
      <el-col :span="24">
        <el-pagination @size-change="pageSizeChange" @current-change="pageIndexChange" :current-page="pageIndex" :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="totalCount">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        totalCount: 0,
        pageIndex: 1,
        //每页显示多少条数
        pageSize: 10,
        searchValue: "",
        list: []
      };
    },
    methods: {
      getList() {
        // console.log(val);
        var url = "/admin/goods/getlist?pageIndex=" + this.pageIndex + "&pageSize=" + this.pageSize + "&searchvalue=" +
          this.searchValue;
        this.$ajax.get(url).then(res => {
          this.list = res.data.message;
          // console.log(res.data);
          // 将商品的总数据条数赋值
          this.totalCount = res.data.totalcount;
        })
      },
      pageSizeChange(size) {
        this.pageSize = size;
        this.getList();
      },
      pageIndexChange(currentPage) {
        this.pageIndex = currentPage;
        this.getList();
      }
    },
    mounted() {
      this.getList()
    }
  };

</script>
<style slot-scope>
  .unlinght {
    color: rgba(0, 0, 0, 0.3);
  }

</style>
