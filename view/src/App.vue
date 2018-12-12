<template>
  <div
    id="app"
    v-loading="homeLoading"
    element-loading-text="初始化中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <router-view v-if="show"/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      homeLoading: true,
      show: false
    };
  },
  created() {
    this.homeLoading = true;
    this.show = false;
    let menuList = [{
      icon: "el-icon-info",
      path: "/about",
      name: "关于"
    }, {
      icon: "el-icon-info",
      path: "/about",
      name: "测试版",
      children: [{
        icon: "el-icon-warning",
        path: "/login",
        name: "登陆"
      }]
    }]
    this.$store.commit("CHANGE_MENULIST", menuList);
    this.homeLoading = false;
    this.show = true;


  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}

.el-button span {
  color: #fff;
}

.el-button--default span {
  color: #409eff;
}

.el-button--primary span {
  color: #fff;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

r {
  color: red !important;
}

.text-success {
  color: #67c23a !important;
}

.text-error {
  color: #f56c6c !important;
}

.aside {
  overflow: auto;
}

.el-input-group__append {
  cursor: pointer;
}

.el-table,
.el-table__expanded-cell {
  background: transparent;
}

/* .el-table th,
.el-table tr {
  background: transparent;
} */

.el-table--striped .el-table__body tr.el-table__row--striped td {
  background: transparent;
}

.el-menu-item:focus,
.el-menu-item:hover {
  cursor: pointer;
  background: #192129;
  color: rgb(45, 140, 240) !important;
}

.el-submenu .el-menu-item {
  width: 180px;
}

.el-submenu .el-menu {
  overflow: hidden;
}

.el-dialog__body {
  padding: 20px !important;
}

.text-success {
  color: #67c23a;
}

.text-danger {
  color: #f56c6c;
}

.el-dialog__header {
  padding: 20px 10px !important;
  padding-bottom: 0 !important;
}

.el-menu,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background: transparent !important;
}

.table_a {
  /* text-decoration: none; */
  color: #333;
  cursor: pointer;
  text-decoration: underline;
}

.table_a:hover {
  text-decoration: underline;
}

.search .el-input__prefix {
  display: none;
}

.search .el-date-editor--datetime .el-input__inner,
.search .el-date-editor--date .el-input__inner {
  padding: 0 15px !important;
}

.search .el-date-editor--datetime,
.search .el-date-editor--date {
  width: 100% !important;
}

.el-pagination {
  white-space: normal !important;
}

.active-tr {
  cursor: pointer;
}

.active-tr i {
  margin-left: 4px;
}

.my-pagination {
  text-align: center;
  white-space: normal;
  margin-top: 10px;
}

.my-op i {
  margin: 0 5px;
  cursor: pointer;
  font-weight: bold;
  outline: none;
}
*::-webkit-scrollbar {
  display: none;
}

/* .el-table a {
  color: #fff !important;
} */
</style>
