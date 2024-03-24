<template>
    <div class="position-relative d-flex align-items-center justify-content-center" style="min-height: 200px;">
      <div class="position-absolute" style="top:0; bottom: 0; left: 0; right: 0; background-image: url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80); background-position: center center; opacity: 0.1;"></div>
      <h2 class="fw-bold">Lorem ipsum.</h2>
    </div>
    <div class="container mt-md-5 mt-3 mb-7">
      <div class="row">
        <div class="col-md-4">
          <div class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3" id="accordionExample">
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0" id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                <div class="d-flex justify-content-between align-items-center pe-1">
                  <h4 class="mb-0">
                    Lorem ipsum
                  </h4>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li>
                      <RouterLink class="py-2 d-block text-muted"
                        to="/products">全部</RouterLink>
                    </li>
                    <li v-for="item in categories" :key="item">
                      <RouterLink class="py-2 d-block text-muted"
                        :to="`/products?category=${item}`">{{ item }}</RouterLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6" v-for="item in products" :key="item.id">
              <div class="card border-0 mb-4 position-relative position-relative">
                <img :src="item.imageUrl" class="card-img-top rounded-0 object-fit-cover" height="300" alt="...">
                <a href="#" class="text-dark">
                  <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i>
                </a>
                <div class="card-body p-0">
                  <!-- 連結到單一產品頁面 -->
                  <h4 class="mb-0 mt-3"><RouterLink :to="`/product/${item.id}`">{{ item.title }}</RouterLink></h4>
                  <p class="card-text mb-0">NT${{ item.price }} <span class="text-muted "><del>NT${{ item.origin_price }}</del></span></p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
          </div>
          <!-- 分頁 -->
          <nav class="d-flex justify-content-center">
            <PaginationComponent
              :pages = "pages"
              :get-products = "getProducts"
            ></PaginationComponent>
          </nav>
        </div>
      </div>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import PaginationComponent from '../../components/PaginationComponent.vue'

// console.log(import.meta.env.VITE_URL, import.meta.env.VITE_NAME)
// eslint-disable-next-line no-unused-vars
const { VITE_URL, VITE_NAME } = import.meta.env

export default {
  data () {
    return {
      products: [],
      categories: ['草本木質調', '花香', '其他'],
      pages: {}
    }
  },
  watch: {
    '$route.query': {
      handler () {
        this.getProducts()
      },
      deep: true
    }
  },
  methods: {
    // 取得產品資料
    // 參數預設值 page = 1
    getProducts (page = 1) {
      console.log(this.$route)
      const { category = '' } = this.$route.query
      const url = `${VITE_URL}/api/${VITE_NAME}/products?category=${category}&page=${page}`
      // console.log(url)
      axios
        .get(url)
        .then((res) => {
          // console.log(res.data)
          // 把取到的資料存起來
          this.products = res.data.products
          this.pages = res.data.pagination // 取到 data 分頁
        })
        .catch((err) => {
          console.log(err)
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    // 觸發
    this.getProducts()
  },
  // 區域元件
  components: {
    PaginationComponent
  }
}
</script>
