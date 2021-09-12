import Vue from "vue";
import Router from "vue-router";
import Welcome from "./views/Welcome.vue";
import Home from "./views/Home.vue";
import Index from "./views/Index.vue";
import PartyBranch from "./views/PartyBranch.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import Prevention from "./views/Prevention.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      },
      redirect: "/home"
    },
    {
      path: "/welcome",
      name: "welcome",
      components: { default: Welcome }
    },
    {
      path: "/home",
      name: "home",
      components: { default: Home }
    },
    {
      path: "/partyBranch",
      name: "PartyBranch",
      components: { default: PartyBranch, header: MainNavbar },
      props: {
        header: { colorOnScroll: 300, title: "小区党支部" }
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: { default: Profile, header: MainNavbar },
      props: {
        header: { colorOnScroll: 300, title: "小区简介" }
      }
    },
    {
      path: "/prevention",
      name: "prevention",
      components: { default: Prevention, header: MainNavbar },
      props: {
        header: { colorOnScroll: 300, title: "防疫工作" }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
