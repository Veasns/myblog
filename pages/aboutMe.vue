<style scoped>
  .aboutme{
    height: 100vh;
    width: 100%;
    background: url('../assets/img/11.jpg') no-repeat center center;
    background-size: cover
  }
  .back-home{
    text-decoration: none;
    padding-top: 2rem;
    padding-left: 2rem;
  }
  .back-home a{
    color: #e4e4e4;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 1.2px;
    font-weight: 600;
  }
  .about-main{
    position: relative;
    top: 10%;
  }
  .about-main-name{
    text-transform: uppercase;
    color: #fff;
    font-weight: 700;
    font-size: 3rem;
  }
  .about-main-title{
    font-size: 1.3rem
  }
  p{
    line-height: 36px;
  }
</style>
<template>
  <div class="aboutme">
    <div class="back-home">
      <a href="/">
        <i class="fa fa-long-arrow-left"></i>
        BACK TO HOME
      </a>
    </div>
    <div class="container about-main text-center">
      <div class="row">
        <div class="col-lg-7 col-12">
          <div class="row">
            <div class="col-12">
              <h2 class="about-main-name text-left">David Walmart</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h4 class="about-main-title text-left text-uppercase text-white">Artist,Blogger</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-10">
              <p class="mt-2 text-left text-white" style="font-size:1rem">Hi, I am David Walmart. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.....</p>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-12">
              <ul class="mb-2 clearfix pl-0">
                <li class="float-left mr-5"><a href="#"><i class="fa fa-github" style="font-size:1.5rem;color:#fff;"></i></a></li>
                <li class="float-left mr-5"><a href="#"><i class="fa fa-dribbble" style="font-size:1.5rem;color:#fff;"></i></a></li>
                <li class="float-left mr-5"><a href="#"><i class="fa fa-vimeo" style="font-size:1.5rem;color:#fff;"></i></a></li>
                <li class="float-left mr-5"><a href="#"><i class="fa fa-twitter" style="font-size:1.5rem;color:#fff;"></i></a></li>
                <li class="float-left mr-5"><a href="#"><i class="fa fa-google-plus" style="font-size:1.5rem;color:#fff;"></i></a></li>
                <li class="float-left mr-5"><a href="#"><i class="fa fa-pinterest-square" style="font-size:1.5rem;color:#fff;"></i></a></li>
                <li class="float-left mr-5"><a href="#"><i class="fa fa-at" style="font-size:1.5rem;color:#fff;"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout:'me'
}
</script>