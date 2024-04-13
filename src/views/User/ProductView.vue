<template>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-7">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img :src="product.imageUrl" class="object-fit-cover" width="650" height="500" alt="主視圖">
              </div>
              <template v-for="item in product.imagesUrl" :key="item.imagesUrl">
                <div class="carousel-item">
                  <img :src="item" class="object-fit-cover" width="650" alt="配圖">
                </div>
              </template>
              <!--<div class="carousel-item active">
                  <img :src="product.imageUrl" class="object-fit-cover" width="800" height="600" alt="...">
                </div>
                <div class="carousel-item">
                  <img :src="product.imagesUrl" alt="...">
                </div>
                <div class="carousel-item">
                  <img :src="product.imagesUrl" alt="...">
                </div>-->
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col-md-5">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white px-0 mb-0 py-3">
              <li class="breadcrumb-item"><RouterLink class="text-muted" to="/">Home</RouterLink></li>
              <li class="breadcrumb-item"><RouterLink class="text-muted" to="/products">產品</RouterLink></li>
              <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
            </ol>
          </nav>
          <h2 class="fw-bold h1 mb-1">{{ product.title }}</h2>
          <p class="mb-0 text-muted text-end"><del>NT${{ product.origin_price }}</del></p>
          <p class="h4 fw-bold text-end">NT${{ product.price }}</p>
          <div class="row align-items-center">
            <div class="col-6">
              <div class="input-group my-3 bg-light rounded">
                <div class="input-group-prepend">
                  <!-- 數量-- (數量大於1 出現加號) -->
                  <button
                    class="btn btn-outline-dark border-0 py-2"
                    type="button"
                    id="button-addon1"
                    @click="qty--"
                    :disabled="qty === 1">
                    <i class="bi bi-dash"></i>
                  </button>
                </div>
                <input
                  type="text"
                  class="form-control border-0 text-center my-auto shadow-none bg-light"
                  placeholder=""
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                  value="1"
                  v-model="qty">
                <div class="input-group-append">
                  <!-- 數量++ -->
                  <button
                    class="btn btn-outline-dark border-0 py-2"
                    type="button"
                    id="button-addon2"
                    @click="qty++">
                    <i class="bi bi-plus"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-6">
              <a href="./checkout.html"
                class="text-nowrap btn btn-dark w-100 py-2"
                @click.prevent="addToCart(product.id, qty)"
              >加入購物車</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-5">
        <div class="col-md-4">
          <p>{{ product.description }}</p>
        </div>
        <div class="col-md-3">
          <p class="text-muted">{{ product.content }}</p>
        </div>
      </div>
      <!-- swiper -->
      <h3 class="fw-bold"></h3>
      <!--<div class="swiper-container mt-4 mb-5">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
              <a href="#" class="text-dark">
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="card-text mb-0">NT$1,080 <span class="text-muted "><del>NT$1,200</del></span></p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
              <a href="#" class="text-dark">
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="card-text mb-0">NT$1,080 <span class="text-muted "><del>NT$1,200</del></span></p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
              <a href="#" class="text-dark">
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="card-text mb-0">NT$1,080 <span class="text-muted "><del>NT$1,200</del></span></p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
              <a href="#" class="text-dark">
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="card-text mb-0">NT$1,080 <span class="text-muted "><del>NT$1,200</del></span></p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
              <a href="#" class="text-dark">
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="card-text mb-0">NT$1,080 <span class="text-muted "><del>NT$1,200</del></span></p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
        </div>
      </div>-->
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from 'axios'

import { mapActions } from 'pinia'
import cartStore from '@/stores/cartStore'

// eslint-disable-next-line no-unused-vars
const { VITE_URL, VITE_NAME } = import.meta.env

export default {
  data () {
    return {
      // 單一資料 {}
      product: {},
      qty: 1
    }
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      const url = `${VITE_URL}/api/${VITE_NAME}/product/${id}`
      axios
        .get(url)
        .then((res) => {
          console.log(res)
          console.log(res.data.product)
          this.product = res.data.product
        })
        .catch((err) => {
          console.log(err)
          alert(err.response.data.message)
        })
    },
    ...mapActions(cartStore, ['addToCart'])
    // addToCart (id) {
    //   const url = `${VITE_URL}/api/${VITE_NAME}/cart`
    //   const order = {
    //     product_id: this.product.id,
    //     qty: 1
    //   }
    //   axios
    //     .post(url, { data: order })
    //     .then((res) => {
    //       console.log(res.data)
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //       alert(err.response.data.message)
    //     })
    // }
  },
  mounted () {
    console.log(this.$route)
    this.getProduct()
  }
}
</script>
