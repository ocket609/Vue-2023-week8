<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="./index.html"><img src="../../public/soap.png" alt="LOGO"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <RouterLink class="nav-item nav-link nav-link-hover text-center me-4 active" to="/">Home
          <!--<span class="sr-only">(current)</span>-->
        </RouterLink>
        <RouterLink class="nav-item nav-link nav-link-hover text-center me-4" to="/products">產品</RouterLink>
        <RouterLink class="nav-item nav-link nav-link-hover text-center me-4" to="/about">About</RouterLink>
        <RouterLink class="nav-item nav-link nav-link-hover btn position-relative" to="/cart">
          <i class="bi bi-cart4"></i>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {{ this.carts?.length }}
            <span class="visually-hidden">unread messages</span>
          </span>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script>
// eslint-disable-next-line no-unused-vars
// import axios from 'axios' // cartStore 內有帶入
import { mapActions, mapState } from 'pinia' // 拉出來
// 把建好的 Store 拉進來
import cartStore from '../stores/cartStore'

// eslint-disable-next-line no-unused-vars
// const { VITE_URL, VITE_NAME } = import.meta.env // cartStore 內有帶入

export default {
  // 因使用 pinia 所以 data 目前用不到
  // data () {
  //   return {
  //     card: {}
  //   }
  // },
  computed: {
    ...mapState(cartStore, ['carts'])
  },
  methods: {
    // 這邊不用JS，使用 mapActions 把 cartStore 帶過來
    // 加入要取得哪個方法，這邊是使用 ['getCart']
    ...mapActions(cartStore, ['getCart'])

    // 使用 pinia 方法取得，這邊 getCart () 取消
  //   getCart () {
  //     const url = `${VITE_URL}/api/${VITE_NAME}/cart`
  //     axios
  //       .get(url)
  //       .then((res) => {
  //         // console.log(res)
  //         console.log('cart', res.data.data.carts)
  //         console.log('cart', res.data.data)
  //         this.cart = res.data.data
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //         alert(err.response.data.message)
  //       })
  //   }
  },
  // 取得購物車品項內容
  mounted () {
    this.getCart()
  }
}
</script>
