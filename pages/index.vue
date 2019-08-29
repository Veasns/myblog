<template>
  <div>
    <div class="mycarousel overflow-hidden">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd">
        <!-- Text slides with image -->
        <b-carousel-slide
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="../assets/img/panaroma1.jpg">
        </b-carousel-slide>
        <!-- Slides with custom text -->
        <b-carousel-slide 
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="../assets/img/panaroma2.jpg">
        </b-carousel-slide>
      </b-carousel>
    </div>
    <div class="container">
      <section class="mt-4">
        <div class="row">
          <div class="col-12 col-lg-5">
            <b-img v-bind="mainProps" center src="../assets/img/img36.jpg" rounded="circle" alt=""></b-img>
            <h5 class="mt-2 my-name">杨怼怼</h5>
            <p class="text-center mt-1">人如果没有梦想，那和咸鱼有什么分别 ？</p>
          </div>
          <div class="col-12 col-lg-2 d-flex align-items-end justify-content-center">
            <img src="../assets/img/blog_heart.png" alt="">
          </div>
          <div class="col-12 col-lg-5">
            <b-img v-bind="mainProps" center src="../assets/img/img31.jpg" rounded="circle" alt=""></b-img>
            <h5 class="mt-2 my-name">胡小胖</h5>
            <p class="text-center mt-1">往后余生，暴富是我，精致是我。拥有一切美好，还是我。</p>
          </div>
        </div>
      </section>
      <div class="row mt-5 position-relative">
        <div class="col-12 col-lg-6">
          <section>
            <div class="imgbox overflow-hidden d-flex align-items-center justify-content-center">
              <img src="../assets/img/1.jpg" alt="" class="w-100">
            </div>
            <div class="life-inner p-3 bg-white">
              <ul class="clearfix pl-0 text-monospace" style="font-size:14px">
                <li class="float-left bg-danger py-1 px-2">
                  <a href="#" class="text-white">LIFESTYLE</a>
                </li>
                <li class="float-left text-center px-2 py-1">
                  <a href="#" class="text-black-50">15 MAY , 2018</a>
                </li>
              </ul>
              <h5 class="text-left">THIS IS A STANDARD POST WITH AN IMAGE</h5>
              <ul class="clearfix pl-0 text-monospace" style="font-size:14px">
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-cloud"></span>
                  <a href="#" class="text-secondary">COMMENTS (04)</a>
                </li>
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-heart-empty mr-2"></span>
                  <a href="#" class="text-secondary">LIKES (04)</a>
                </li>
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-retweet"></span>
                  <a href="#" class="text-secondary">SHARE</a>
                </li>
              </ul>
              <p class="text-left text-black " style="font-size:14px">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
            </div>
          </section>
          <section class="mt-5">
            <div class="imgbox overflow-hidden d-flex align-items-center justify-content-center">
              <img src="../assets/img/3.jpg" alt="" class="w-100">
            </div>
            <div class="life-inner p-3 bg-white">
              <ul class="clearfix pl-0 text-monospace" style="font-size:14px">
                <li class="float-left bg-danger py-1 px-2">
                  <a href="#" class="text-white">TRAVEL</a>
                </li>
                <li class="float-left text-center px-2 py-1">
                  <a href="#" class="text-black-50">14 MAY , 2018</a>
                </li>
              </ul>
              <h5 class="text-left">THIS IS A STANDARD POST WITH AN IMAGE</h5>
              <ul class="clearfix pl-0 text-monospace" style="font-size:14px">
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-cloud"></span>
                  <a href="#" class="text-secondary">COMMENTS (03)</a>
                </li>
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-heart-empty mr-2"></span>
                  <a href="#" class="text-secondary">LIKES (05)</a>
                </li>
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-retweet"></span>
                  <a href="#" class="text-secondary">SHARE</a>
                </li>
              </ul>
              <p class="text-left text-black " style="font-size:14px">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
            </div>
          </section>
          <section class="mt-5">
            <div class="imgbox overflow-hidden d-flex align-items-center justify-content-center">
              <img src="../assets/img/4.jpg" alt="" class="w-100">
            </div>
            <div class="life-inner p-3 bg-white">
              <ul class="clearfix pl-0 text-monospace" style="font-size:14px">
                <li class="float-left bg-danger py-1 px-2">
                  <a href="#" class="text-white">LIFESTYLE</a>
                </li>
                <li class="float-left text-center px-2 py-1">
                  <a href="#" class="text-black-50">10 MAY , 2018</a>
                </li>
              </ul>
              <h5 class="text-left">THIS IS A STANDARD POST WITH AN IMAGE</h5>
              <ul class="clearfix pl-0 text-monospace" style="font-size:14px">
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-cloud"></span>
                  <a href="#" class="text-secondary">COMMENTS (07)</a>
                </li>
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-heart-empty mr-2"></span>
                  <a href="#" class="text-secondary">LIKES (10)</a>
                </li>
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-retweet"></span>
                  <a href="#" class="text-secondary">(10)SHARE</a>
                </li>
              </ul>
              <p class="text-left text-black " style="font-size:14px">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
            </div>
          </section>
          <section class="mt-5">
            <div class="imgbox overflow-hidden d-flex align-items-center justify-content-center">
              <img src="../assets/img/9.jpg" alt="" class="w-100">
            </div>
            <div class="life-inner p-3 bg-white">
              <ul class="clearfix pl-0 text-monospace" style="font-size:14px">
                <li class="float-left bg-danger py-1 px-2">
                  <a href="#" class="text-white">ART</a>
                </li>
                <li class="float-left text-center px-2 py-1">
                  <a href="#" class="text-black-50">10 MAY , 2018</a>
                </li>
              </ul>
              <h5 class="text-left">THIS IS A STANDARD POST WITH AN IMAGE</h5>
              <ul class="clearfix pl-0 text-monospace" style="font-size:14px">
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-cloud"></span>
                  <a href="#" class="text-secondary">COMMENTS (02)</a>
                </li>
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-heart-empty mr-2"></span>
                  <a href="#" class="text-secondary">LIKES (01)</a>
                </li>
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-retweet"></span>
                  <a href="#" class="text-secondary">(02)SHARE</a>
                </li>
              </ul>
              <p class="text-left text-black " style="font-size:14px">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
            </div>
          </section>
          <section class="mt-5">
            <div class="imgbox overflow-hidden d-flex align-items-center justify-content-center">
              <img src="../assets/img/10.jpg" alt="" class="w-100">
            </div>
            <div class="life-inner p-3 bg-white">
              <ul class="clearfix pl-0 text-monospace" style="font-size:14px">
                <li class="float-left bg-danger py-1 px-2">
                  <a href="#" class="text-white">LIFESTYLE</a>
                </li>
                <li class="float-left text-center px-2 py-1">
                  <a href="#" class="text-black-50">05 MAY , 2018</a>
                </li>
              </ul>
              <h5 class="text-left">THIS IS A STANDARD POST WITH AN IMAGE</h5>
              <ul class="clearfix pl-0 text-monospace" style="font-size:14px">
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-cloud"></span>
                  <a href="#" class="text-secondary">COMMENTS (10)</a>
                </li>
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-heart-empty mr-2"></span>
                  <a href="#" class="text-secondary">LIKES (15)</a>
                </li>
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-retweet"></span>
                  <a href="#" class="text-secondary">(05)SHARE</a>
                </li>
              </ul>
              <p class="text-left text-black " style="font-size:14px">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
            </div>
          </section>
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center mt-5">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item active"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="position-absolute my-line"></div>
        <!-- <div class="col-12 col-lg-2"></div> -->
        <div class="col-12 col-lg-6">
          <section>
            <div class="imgbox overflow-hidden d-flex align-items-center justify-content-center">
              <img src="../assets/img/1.jpg" alt="" class="w-100">
            </div>
            <div class="life-inner p-3 bg-white">
              <ul class="clearfix pl-0 text-monospace" style="font-size:14px">
                <li class="float-left bg-danger py-1 px-2">
                  <a href="#" class="text-white">LIFESTYLE</a>
                </li>
                <li class="float-left text-center px-2 py-1">
                  <a href="#" class="text-black-50">15 MAY , 2018</a>
                </li>
              </ul>
              <h5 class="text-left">THIS IS A STANDARD POST WITH AN IMAGE</h5>
              <ul class="clearfix pl-0 text-monospace" style="font-size:14px">
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-cloud"></span>
                  <a href="#" class="text-secondary">COMMENTS (04)</a>
                </li>
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-heart-empty mr-2"></span>
                  <a href="#" class="text-secondary">LIKES (04)</a>
                </li>
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-retweet"></span>
                  <a href="#" class="text-secondary">SHARE</a>
                </li>
              </ul>
              <p class="text-left text-black " style="font-size:14px">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
            </div>
          </section>
          <section class="mt-5">
            <div class="imgbox overflow-hidden d-flex align-items-center justify-content-center">
              <img src="../assets/img/3.jpg" alt="" class="w-100">
            </div>
            <div class="life-inner p-3 bg-white">
              <ul class="clearfix pl-0 text-monospace" style="font-size:14px">
                <li class="float-left bg-danger py-1 px-2">
                  <a href="#" class="text-white">TRAVEL</a>
                </li>
                <li class="float-left text-center px-2 py-1">
                  <a href="#" class="text-black-50">14 MAY , 2018</a>
                </li>
              </ul>
              <h5 class="text-left">THIS IS A STANDARD POST WITH AN IMAGE</h5>
              <ul class="clearfix pl-0 text-monospace" style="font-size:14px">
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-cloud"></span>
                  <a href="#" class="text-secondary">COMMENTS (03)</a>
                </li>
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-heart-empty mr-2"></span>
                  <a href="#" class="text-secondary">LIKES (05)</a>
                </li>
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-retweet"></span>
                  <a href="#" class="text-secondary">SHARE</a>
                </li>
              </ul>
              <p class="text-left text-black " style="font-size:14px">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
            </div>
          </section>
          <section class="mt-5">
            <div class="imgbox overflow-hidden d-flex align-items-center justify-content-center">
              <img src="../assets/img/4.jpg" alt="" class="w-100">
            </div>
            <div class="life-inner p-3 bg-white">
              <ul class="clearfix pl-0 text-monospace" style="font-size:14px">
                <li class="float-left bg-danger py-1 px-2">
                  <a href="#" class="text-white">LIFESTYLE</a>
                </li>
                <li class="float-left text-center px-2 py-1">
                  <a href="#" class="text-black-50">10 MAY , 2018</a>
                </li>
              </ul>
              <h5 class="text-left">THIS IS A STANDARD POST WITH AN IMAGE</h5>
              <ul class="clearfix pl-0 text-monospace" style="font-size:14px">
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-cloud"></span>
                  <a href="#" class="text-secondary">COMMENTS (07)</a>
                </li>
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-heart-empty mr-2"></span>
                  <a href="#" class="text-secondary">LIKES (10)</a>
                </li>
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-retweet"></span>
                  <a href="#" class="text-secondary">(10)SHARE</a>
                </li>
              </ul>
              <p class="text-left text-black " style="font-size:14px">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
            </div>
          </section>
          <section class="mt-5">
            <div class="imgbox overflow-hidden d-flex align-items-center justify-content-center">
              <img src="../assets/img/9.jpg" alt="" class="w-100">
            </div>
            <div class="life-inner p-3 bg-white">
              <ul class="clearfix pl-0 text-monospace" style="font-size:14px">
                <li class="float-left bg-danger py-1 px-2">
                  <a href="#" class="text-white">ART</a>
                </li>
                <li class="float-left text-center px-2 py-1">
                  <a href="#" class="text-black-50">10 MAY , 2018</a>
                </li>
              </ul>
              <h5 class="text-left">THIS IS A STANDARD POST WITH AN IMAGE</h5>
              <ul class="clearfix pl-0 text-monospace" style="font-size:14px">
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-cloud"></span>
                  <a href="#" class="text-secondary">COMMENTS (02)</a>
                </li>
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-heart-empty mr-2"></span>
                  <a href="#" class="text-secondary">LIKES (01)</a>
                </li>
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-retweet"></span>
                  <a href="#" class="text-secondary">(02)SHARE</a>
                </li>
              </ul>
              <p class="text-left text-black " style="font-size:14px">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
            </div>
          </section>
          <section class="mt-5">
            <div class="imgbox overflow-hidden d-flex align-items-center justify-content-center">
              <img src="../assets/img/10.jpg" alt="" class="w-100">
            </div>
            <div class="life-inner p-3 bg-white">
              <ul class="clearfix pl-0 text-monospace" style="font-size:14px">
                <li class="float-left bg-danger py-1 px-2">
                  <a href="#" class="text-white">LIFESTYLE</a>
                </li>
                <li class="float-left text-center px-2 py-1">
                  <a href="#" class="text-black-50">05 MAY , 2018</a>
                </li>
              </ul>
              <h5 class="text-left">THIS IS A STANDARD POST WITH AN IMAGE</h5>
              <ul class="clearfix pl-0 text-monospace" style="font-size:14px">
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-cloud"></span>
                  <a href="#" class="text-secondary">COMMENTS (10)</a>
                </li>
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-heart-empty mr-2"></span>
                  <a href="#" class="text-secondary">LIKES (15)</a>
                </li>
                <li class="float-left text-center pr-4 py-1">
                  <span class="glyphicon glyphicon-retweet"></span>
                  <a href="#" class="text-secondary">(05)SHARE</a>
                </li>
              </ul>
              <p class="text-left text-black " style="font-size:14px">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
            </div>
          </section>
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center mt-5">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item active"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- <div class="col-12 col-lg-4">
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
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      mainProps: { width: 150, height: 150 }
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>
