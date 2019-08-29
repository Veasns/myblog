<style lang="css">

</style>
<template>
  <div class="layout">
    <header class="border-bottom">
      <div class="container">
        <b-navbar toggleable="xl">
          <b-navbar-brand href="#">~患者~</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item class="my-nav" href="/">首页</b-nav-item>
              <b-nav-item class="my-nav current" href="/love">爱情</b-nav-item>
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
      <div class="container">
        <div class="row mt-5">
          <div class="col-12 col-lg-8">
            <nuxt />
          </div>
          <div class="col-12 col-lg-4">
            <section class="p-3 bg-white overflow-hidden">
              <h6 class="text-left mb-4 px-4 aboutme-title position-relative">关于我</h6>
              <img src="../assets/img/1 (1).jpg" alt="">
              <p class="text-left mt-4 p-1">Hi, I am David Walmart. As for now I'm only focusing my attention on enjoyment. I'm being my true self with the values, dreams and goals that I have....</p>
            </section>
            <section class="p-3 mt-4 bg-white">
              <h6 class="text-left mb-4 px-4 aboutme-title position-relative">类型</h6>
              <ul class="text-left pl-0" style="font-size:14px">
                <li class="py-2 border-bottom"><a href="#" class="text-secondary w-100 h-100 d-inline-block">Web Design</a></li>
                <li class="py-2 border-bottom"><a href="#" class="text-secondary w-100 h-100 d-inline-block">Fashion</a></li>
                <li class="py-2 border-bottom"><a href="#" class="text-secondary w-100 h-100 d-inline-block">Graphic Design</a></li>
                <li class="py-2 border-bottom"><a href="#" class="text-secondary w-100 h-100 d-inline-block">News and Events</a></li>
                <li class="py-2 border-bottom"><a href="#" class="text-secondary w-100 h-100 d-inline-block">Personal</a></li>
                <li class="py-2 border-bottom"><a href="#" class="text-secondary w-100 h-100 d-inline-block">Branding Agency</a></li>
                <li class="py-2 border-bottom"><a href="#" class="text-secondary w-100 h-100 d-inline-block">Lifestyle</a></li>
                <li class="py-2 border-bottom"><a href="#" class="text-secondary w-100 h-100 d-inline-block">Travel</a></li>
              </ul>
            </section>
            <section class="p-3 mt-4 bg-white">
              <h6 class="text-left mb-4 px-4 aboutme-title position-relative">热点文章</h6>
              <div class="clearfix">
                <img src="../assets/img/5.jpg" alt="" class="float-left">
                <div class="float-left ml-2">
                  <h6 style="font-size:14px;" class="font-weight-bold text-left">New Benefits For Small</br> Business</h6>
                  <ul class="clearfix pl-0 text-monospace" style="font-size:14px">
                    <li class="float-left bg-danger px-2">
                      <a href="#" class="text-white">LIFESTYLE</a>
                    </li>
                    <li class="float-left text-center px-2">
                      <a href="#" class="text-black-50">16 MARCH</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="clearfix mt-1">
                <img src="../assets/img/6.jpg" alt="" class="float-left">
                <div class="float-left ml-2">
                  <h6 style="font-size:14px;" class="font-weight-bold text-left">New Benefits For Small</br> Business</h6>
                  <ul class="clearfix pl-0 text-monospace" style="font-size:14px">
                    <li class="float-left bg-danger px-2">
                      <a href="#" class="text-white">ART</a>
                    </li>
                    <li class="float-left text-center px-2">
                      <a href="#" class="text-black-50">15 MARCH</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="clearfix mt-1">
                <img src="../assets/img/7.jpg" alt="" class="float-left">
                <div class="float-left ml-2">
                  <h6 style="font-size:14px;" class="font-weight-bold text-left">New Benefits For Small</br> Business</h6>
                  <ul class="clearfix pl-0 text-monospace" style="font-size:14px">
                    <li class="float-left bg-danger px-2">
                      <a href="#" class="text-white">TRAVEL</a>
                    </li>
                    <li class="float-left text-center px-2">
                      <a href="#" class="text-black-50">13 MARCH</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="clearfix mt-1">
                <img src="../assets/img/8.jpg" alt="" class="float-left">
                <div class="float-left ml-2">
                  <h6 style="font-size:14px;" class="font-weight-bold text-left">New Benefits For Small</br> Business</h6>
                  <ul class="clearfix pl-0 text-monospace" style="font-size:14px">
                    <li class="float-left bg-danger px-2">
                      <a href="#" class="text-white">LIFE</a>
                    </li>
                    <li class="float-left text-center px-2">
                      <a href="#" class="text-black-50">10 MARCH</a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section class="p-3 mt-4 bg-white">
              <h6 class="text-left mb-4 px-4 aboutme-title position-relative">档案馆</h6>
              <ul class="text-left pl-0" style="font-size:14px">
                <li class="py-2 border-bottom"><a href="#" class="text-secondary w-100 h-100 d-inline-block">May 2018</a></li>
                <li class="py-2 border-bottom"><a href="#" class="text-secondary w-100 h-100 d-inline-block">April 2018</a></li>
                <li class="py-2 border-bottom"><a href="#" class="text-secondary w-100 h-100 d-inline-block">March 2018</a></li>
                <li class="py-2 border-bottom"><a href="#" class="text-secondary w-100 h-100 d-inline-block">February 2018</a></li>
                <li class="py-2 border-bottom"><a href="#" class="text-secondary w-100 h-100 d-inline-block">January 2018</a></li>
                <li class="py-2 border-bottom"><a href="#" class="text-secondary w-100 h-100 d-inline-block">December 2107</a></li>
                <li class="py-2 border-bottom"><a href="#" class="text-secondary w-100 h-100 d-inline-block">November 2017</a></li>
                <li class="py-2 border-bottom"><a href="#" class="text-secondary w-100 h-100 d-inline-block">October 2017</a></li>
              </ul>
            </section>
            <section class="p-3 mt-4 bg-white">
              <h6 class="text-left mb-4 px-4 aboutme-title position-relative">标签</h6>
              <ul class="text-left pl-0 d-flex flex-wrap" style="font-size:13px">
                <li class="mx-2 mb-2"><a href="#" class="text-secondary d-inline-block h-100 py-1 px-2 border">DESIGN</a></li>
                <li class="mx-2 mb-2"><a href="#" class="text-secondary d-inline-block h-100 py-1 px-2 border">FASHION</a></li>
                <li class="mx-2 mb-2"><a href="#" class="text-secondary d-inline-block h-100 py-1 px-2 border">GRAPHIC </a></li>
                <li class="mx-2 mb-2"><a href="#" class="text-secondary d-inline-block h-100 py-1 px-2 border">NEWS</a></li>
                <li class="mx-2 mb-2"><a href="#" class="text-secondary d-inline-block h-100 py-1 px-2 border">PERSONAL</a></li>
                <li class="mx-2 mb-2"><a href="#" class="text-secondary d-inline-block h-100 py-1 px-2 border">BRANDING</a></li>
                <li class="mx-2 mb-2"><a href="#" class="text-secondary d-inline-block h-100 py-1 px-2 border">LIFESTYLE</a></li>
                <li class="mx-2 mb-2"><a href="#" class="text-secondary d-inline-block h-100 py-1 px-2 border">TRAVEL</a></li>
              </ul>
            </section>
            <section class="p-3 mt-4 bg-white">
              <h6 class="text-left mb-4 px-4 aboutme-title position-relative">友情链接</h6>
              <ul class="text-left pl-0 d-flex flex-wrap" style="font-size:13px">
                <li class="mx-2 mb-2"><a href="#" class="text-secondary d-inline-block h-100 py-1 px-2 border">DESIGN</a></li>
                <li class="mx-2 mb-2"><a href="#" class="text-secondary d-inline-block h-100 py-1 px-2 border">FASHION</a></li>
                <li class="mx-2 mb-2"><a href="#" class="text-secondary d-inline-block h-100 py-1 px-2 border">GRAPHIC </a></li>
                <li class="mx-2 mb-2"><a href="#" class="text-secondary d-inline-block h-100 py-1 px-2 border">NEWS</a></li>
                <li class="mx-2 mb-2"><a href="#" class="text-secondary d-inline-block h-100 py-1 px-2 border">PERSONAL</a></li>
                <li class="mx-2 mb-2"><a href="#" class="text-secondary d-inline-block h-100 py-1 px-2 border">BRANDING</a></li>
                <li class="mx-2 mb-2"><a href="#" class="text-secondary d-inline-block h-100 py-1 px-2 border">LIFESTYLE</a></li>
                <li class="mx-2 mb-2"><a href="#" class="text-secondary d-inline-block h-100 py-1 px-2 border">TRAVEL</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <p class="text-secondary mt-5 bg-white py-5 text-center" style="font-size:13px;">Copyright © 2018.Company name All rights reserved.</p>
    </footer>
  </div>
</template>
