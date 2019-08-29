
<template>
  <div class="layout">
    <header class="border-bottom">
      <div class="container">
        <b-navbar toggleable="xl">
          <b-navbar-brand href="#">~患者~</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item class="my-nav current" href="/" active>首页</b-nav-item>
              <b-nav-item class="my-nav" href="/love">爱情</b-nav-item>
              <b-nav-item class="my-nav" href="/technology">前端开发</b-nav-item>
              <b-nav-item class="my-nav" href="/study">学无止境</b-nav-item>
              <b-nav-item class="my-nav" href="life">慢生活</b-nav-item>
              <b-nav-item class="my-nav" href="/food">美味人生</b-nav-item>
              <b-nav-item class="my-nav" href="/travel">两个人的旅行</b-nav-item>
              <b-nav-item class="my-nav" href="/aboutMe">关于我</b-nav-item>
              <b-nav-item class="my-nav" href="/friendship">留言板</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="站内搜索"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0 my-seach" type="submit">搜索</b-button>
              </b-nav-form>
              <!-- <b-nav-item href="#" right>
                <b-button size="sm" variant="primary">登录</b-button>
              </b-nav-item> -->
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </header>
    <main>
      <nuxt />
    </main>
    <footer>
      <p class="text-secondary mt-5 bg-white py-5 text-center" style="font-size:13px;">Copyright © 2018.Company name All rights reserved.</p>
    </footer>
  </div>
</template>
