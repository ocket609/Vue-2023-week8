<template>
    <div class="container">
      <div class="mt-3">
        <h3 class="mt-3 mb-4">購物車</h3>
        <div class="row">
          <div class="col-md-8">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" class="border-0 ps-0">商品</th>
                  <th scope="col" class="border-0">數量</th>
                  <th scope="col" class="border-0">小計</th>
                  <th scope="col" class="border-0"></th>
                </tr>
              </thead>
              <tbody v-for="item in cart.carts" :key="item.id">
                <tr class="border-bottom border-top">
                  <th scope="row" class="border-0 px-0 font-weight-normal py-4">
                    <img :src="item.product.imageUrl" alt="" style="width: 72px; height: 72px; object-fit: cover;">
                    <p class="mb-0 fw-bold ms-3 d-inline-block">{{ item.product.title }}</p>
                  </th>
                  <!-- 購物車數量與調整 -->
                  <td class="border-0 align-middle" style="max-width: 160px;">
                    <div class="input-group pe-5">
                      <div class="input-group-prepend">
                        <!-- 數量-- (數量大於1 出現加號) -->
                        <button class="btn btn-outline-dark border-0 py-2"
                            type="button"
                            id="button-addon1"
                            @click="item.qty--; adjustCartQty(item, item.qty)" :disabled="item.qty === 1" v-if="item.qty > 1">
                            <i class="bi bi-dash"></i>
                        </button>
                        <!-- 反之數量小於等於1 則出現刪除icon -->
                        <button type="button" class="btn btn-outline-danger" @click="removeCartItem(item.id)" v-else>
                            <i class="bi bi-trash3-fill"></i>
                        </button>
                      </div>
                      <input type="text"
                        class="form-control border-0 text-center my-auto shadow-none"
                        placeholder=""
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                        v-model="item.qty"
                        :disabled="item.id === status.cartQtyLoading"
                        readonly>
                      <div class="input-group-append">
                        <!-- 數量++ -->
                        <button class="btn btn-outline-dark border-0 py-2"
                            type="button"
                            id="button-addon2"
                            @click="item.qty++;adjustCartQty(item, item.qty)">
                          <i class="bi bi-plus"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td class="border-0 align-middle">
                    <p class="mb-0 ms-auto">NT${{ item.total }}</p>
                  </td>
                  <td class="border-0 align-middle">
                    <i class="fas fa-times"></i>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="input-group w-50 mb-3">
              <input type="text" class="form-control rounded-0 border-bottom border-top-0 border-start-0 border-end-0 shadow-none" placeholder="Coupon Code" aria-label="Recipient's username" aria-describedby="button-addon2">
              <div class="input-group-append">
                <button class="btn btn-outline-dark border-bottom border-top-0 border-start-0 border-end-0 rounded-0" type="button" id="button-addon2">
                    <i class="bi bi-send"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="border p-4 mb-4">
              <h4 class="fw-bold mb-4">訂單金額</h4>
              <table class="table text-muted border-bottom">
                <tbody>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">訂單金額</th>
                    <td class="text-end border-0 px-0 pt-4">NT${{ cart.total }}</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">付款方式</th>
                    <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-between mt-4">
                <p class="mb-0 h4 fw-bold">總計</p>
                <p class="mb-0 h4 fw-bold">NT${{ cart.final_total }}</p>
              </div>
              <RouterLink to="/checkout" class="btn btn-dark w-100 mt-4">結帳</RouterLink>
            </div>
          </div>
        </div>
        <div class="my-5">
          <h3 class="fw-bold">Lorem ipsum dolor sit amet</h3>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'

const { VITE_URL, VITE_NAME } = import.meta.env

export default {
  data () {
    return {
      cart: {},
      status: {
        cartQtyLoading: '' // 購物車列表數量
      }
    }
  },
  methods: {
    getCart () {
      const url = `${VITE_URL}/api/${VITE_NAME}/cart`
      axios
        .get(url)
        .then((res) => {
          // console.log(res)
          console.log('cart', res.data.data)
          this.cart = res.data.data
        })
        .catch((err) => {
          console.log(err)
          alert(err.response.data.message)
        })
    },
    // 購物車數量調整
    adjustCartQty (item, qty = 1) {
      const url = `${VITE_URL}/api/${VITE_NAME}/cart/${item.id}`
      // 客戶購物車數量調整 API文件 put
      const order = {
        product_id: item.product_id,
        qty
      }
      console.log(order)

      // loading...
      this.status.cartQtyLoading = item.id

      // 為確保可正確執行，測試 order，API先不送
      axios
        .put(url, { data: order })
        .then((res) => {
          console.log(res.data)
          this.status.cartQtyLoading = '' // 發送後清空
          this.getCart()
        })
        .catch((err) => {
          console.log(err.response.data.message)
        })
    },

    // 刪除購物車
    removeCartItem (id) {
      const url = `${VITE_URL}/api/${VITE_NAME}/cart/${id}`
      this.status.cartQtyLoading = id // 與購物車數量調整，共用 loading

      // 確保可正確執行，測試時API先不送
      axios
        .delete(url)
        .then((res) => {
          console.log(res.data)
          this.status.cartQtyLoading = '' // 發送後清空
          alert(res.data.message)
          this.getCart()
        })
        .catch((err) => {
          console.log(err.data.message)
          alert(err.response.data.message)
        })
    }
  },
  // 取得購物車品項內容
  mounted () {
    this.getCart()
  }
}
</script>
