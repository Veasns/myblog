<template>
  <div>
    <article class="mb-1">
      <div class="row bg-white py-2 border">
        <div class="col-4 text-right">
          <a href="#" class="d-block">
            <img src="../../assets/img/1-1F9161F413H6.jpg" alt="" width="200" height="150">
          </a>
        </div>
        <div class="col-8">
          <header>
            <h2>
              <a href="#">vue+echarts 动态绘制图表以及异步加载数据</a>
            </h2>
          </header>
          <p class="note">背景：vue写的后台管理，需要将表格数据绘制成图表（折线图，柱状图），图表数据都是通过接口请求回来的。...</p>
          <p>
            <span class="muted mr-4 take">
              <a href="#">
                <i class="fa fa-user"></i>
                杨怼怼
              </a>
            </span>
            <span class="muted mr-4">
              <i class="fa fa-clock-o"></i>
              2019-8-27
            </span>
            <span class="muted mr-4">
              <i class="fa fa-eye"></i>
              520次浏览
            </span>
            <span class="muted mr-4 take">
              <a href="#">
                <i class="fa fa-comments-o"></i>
                2评论
              </a>
            </span>
            <span class="muted love">
              <a href="#">
                <i class="fa fa-heart-o"></i>
                520喜欢
              </a>
            </span>
          </p>
        </div>
      </div>
    </article>
    <article>
      <div class="row bg-white py-2 border">
        <div class="col-4 text-right">
          <a href="#" class="d-block">
            <img src="../../assets/img/1-1F9161F413H6.jpg" alt="" width="200" height="150">
          </a>
        </div>
        <div class="col-8">
          <header>
            <h2>vue+echarts 动态绘制图表以及异步加载数据</h2>
          </header>
          <p class="note">背景：vue写的后台管理，需要将表格数据绘制成图表（折线图，柱状图），图表数据都是通过接口请求回来的。...</p>
          <p>
            <span class="muted mr-4 take">
              <a href="#">
                <i class="fa fa-user"></i>
                杨怼怼
              </a>
            </span>
            <span class="muted mr-4">
              <i class="fa fa-clock-o"></i>
              2019-8-27
            </span>
            <span class="muted mr-4">
              <i class="fa fa-eye"></i>
              520次浏览
            </span>
            <span class="muted mr-4 take">
              <a href="#">
                <i class="fa fa-comments-o"></i>
                2评论
              </a>
            </span>
            <span class="muted love">
              <a href="#">
                <i class="fa fa-heart-o"></i>
                520喜欢
              </a>
            </span>
          </p>
        </div>
      </div>
    </article>
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
</template>
<script>
export default {
  layout: 'base'
}
</script>