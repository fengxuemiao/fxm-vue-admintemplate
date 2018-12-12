<template>
  <el-row class="container">
    <el-col :span="24" class="main">
      <div class="aside">
        <a href="/" class="introduce" :class="collapsed?'iscollapsed':''">
          <!-- <img src="/images/capture_128.png"  /> -->
          <span class="el-icon-printer" style="font-size: 32px;color: #00ba82;"></span>
          <p>测试demo</p>
        </a>
        <template v-if="menuList.length>=1">
          <el-menu
            router
            :default-active="this.$route.path"
            class="my-aside-menu"
            :collapse="collapsed"
            text-color="#fff"
            active-text-color="rgb(45, 140, 240)"
          >
            <template v-for="(res,index) in menuList">
              <template v-if="res.children&&res.children.length>=1">
                <el-submenu :key="index" :index="res.path" class="my-el-submenu">
                  <template slot="title">
                    <i :class="res.icon"></i>
                    <span>{{res.name}}</span>
                  </template>
                  <el-menu-item
                    :index="cRes.path"
                    v-for="(cRes,cIndex) in res.children"
                    :key="cIndex"
                  >
                    <i :class="cRes.icon"></i>
                    <span>{{cRes.name}}</span>
                  </el-menu-item>
                </el-submenu>
              </template>
              <template v-else>
                <el-menu-item :index="res.path" :key="index">
                  <i :class="res.icon"></i>
                  <span slot="title">{{res.name}}</span>
                </el-menu-item>
              </template>
            </template>
          </el-menu>
        </template>
      </div>
      <section class="content-container">
        <el-col :span="24" class="breadcrumb-container">
          <!-- <i class="icon" :class="icon"/> -->
          <div class="breadcrumb-left">
            <img
              @click="changeColl"
              class="menu-icon"
              :class="collapsed?'menu-coll':''"
              src="../assets/images/menu.png"
            >
            <span class="title">{{$route.meta.title}}</span>
          </div>
          <el-col :span="8" class="userinfo">
            <span class="userinfo-inner">
              欢迎
              <label class="icon-user">{{username}}</label>，
            </span>
            <span @click="logout" class="logout">
              <i class="icon-exit"></i>退出
            </span>
          </el-col>
        </el-col>
        <el-col :span="24" class="content-wrapper">
          <transition name="slide-fade">
            <router-view></router-view>
          </transition>
        </el-col>
      </section>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      collapsed: true,
      username: "demo",
    };
  },
  beforeMount() {
    if (this.getWindowsHeight() <= 1000) {
      this.collapsed = true;
    } else {
      this.collapsed = false;
    }
    let self = this;
    window.onresize = function () {
      if (self.getWindowsHeight() <= 1000) {
        self.collapsed = true;
      }
    };
  },

  computed: {
    menuList() {
      return this.$store.state.menuList;
    }
  },
  methods: {
    logout() {
      this.$axios.post("/user/logout").then(() => {
        window.location.replace("/");
      });
    },
    changeColl() {
      this.collapsed = !this.collapsed;
    },
    getWindowsHeight() {
      var w = document.documentElement.clientWidth || document.body.clientWidth;
      return w;
    }
  },
  mounted() {
    this.$axios.get("/user/info").then(res => {
      if (res) {
        for (let key in res.data) {
          if (key == "nickname") {
            this.username = res.data[key];
          }
        }
      }
    });
  }
};
</script>

<style scoped>
.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  background: #234;
  color: rgb(81, 90, 110);
}

.container .main {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0px;
  left: 0;
  overflow: hidden;
}

.container .main .aside {
  height: 100%;

  /* border-right: solid 1px #252a2f; */
}

.container .main .aside .introduce {
  display: block;
  cursor: pointer;
  text-align: center;
  font-size: 15px;
  padding: 20px 5px;
  letter-spacing: 2px;
  color: #fff;
  box-sizing: border-box;
  white-space: normal;
  word-break: break-all;
  width: 180px;
  text-decoration: none;
}

.container .main .aside .introduce.iscollapsed {
  height: 67px;
  width: 64px;
  text-align: center;
}

.container .main .aside .introduce.iscollapsed p {
  display: none;
}

.container .main .aside .introduce img {
  width: 40%;
}

.el-menu {
  width: 180px;
  text-align: left;
  border-right: none;
  background: transparent;
}

.el-menu .el-menu-item.is-active {
  background: #fff;
}

.el-menu .el-menu-item span,
.el-submenu span {
  margin-left: 5px;
}

.el-menu .el-menu-item.is-active::after {
  /* content: "";
  position: absolute;
  right: -0;
  width: 2px;
  height: 100%;
  background: #234;
  color: red !important; */
}

.el-menu--collapse {
  width: 64px;
}

.content-container {
  flex: 1;
  overflow-y: scroll;
  background: #fff;
  color: #333;
  display: flex;
  flex-direction: column;
  position: relative;
}

.content-container .breadcrumb-container {
  background: #234;
  color: #fff;
  padding: 19.5px;
  border-left: 1px solid #456;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.content-container .breadcrumb-container .menu-icon {
  width: 28px;
  margin-right: 15px;
  cursor: pointer;
  transition: all 0.2s ease-in;
}

.content-container .breadcrumb-container .breadcrumb-left {
  display: flex;
  align-items: center;
}

.container .breadcrumb-container .breadcrumb-left .menu-icon.menu-coll {
  transform: rotate(90deg);
}

.content-container .breadcrumb-container .icon {
  color: rgb(45, 140, 240);
  margin-right: 5px;
}

.content-container .breadcrumb-container span {
  text-align: left;
  font-size: 18px;
}

.content-container .breadcrumb-container .userinfo {
  cursor: pointer;
  float: right;
  text-align: right;
}

.content-container .breadcrumb-container .userinfo .icon-user {
  cursor: pointer;
}

.content-container .breadcrumb-container .userinfo span {
  font-size: 14px !important;
}

.content-container .breadcrumb-container .userinfo .logout {
  color: #fff;
  cursor: pointer;
}

.content-container .breadcrumb-container .userinfo .icon-exit {
  cursor: pointer;
  vertical-align: middle;
}

.content-container .breadcrumb-container .breadcrumb-inner {
  float: right;
}

.content-container .breadcrumb-container .breadcrumb-inner span {
  font-size: 13px;
}

.content-wrapper {
  position: absolute;
  top: 67px;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 20px;
  overflow: auto;
}

.slide-fade-enter-active {
  transition: all 0.4s 0.2s;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-in-out;
}

.slide-fade-enter {
  opacity: 0;
  transform: translateX(-10px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
<style>
.my-aside-menu .el-submenu__title:hover {
  background: rgb(67, 74, 80);
}

.aside .el-menu--collapse .my-el-submenu .el-submenu__title {
  text-align: center;
}

.aside .el-menu--collapse .my-el-submenu .el-submenu__title span {
  display: none;
}

.aside .el-tooltip {
  text-align: center;
}

.el-menu--popup-right-start {
  background: #234 !important;
}
</style>
