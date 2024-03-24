<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <h3 class="fw-bold mb-4 pt-3">付款頁面</h3>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-center pb-5">
        <div class="col-md-8">
          <div class="border p-4 mb-4">
            <!-- 訂單 -->
            <div class="border p-4 mb-4">
                <h4>訂單編號</h4>
                <h5>{{ order.id }}</h5>
            </div>
            <div class="mb-2">
                <h4 class="mb-4">訂單細項</h4>
                <div class="d-flex" v-for="item in order.products" :key="item.id">
                    <img :src="item.product.imageUrl" alt="" class="me-2" style="width: 48px; height: 48px; object-fit: cover">
                    <div class="w-100">
                        <div class="d-flex justify-content-between">
                        <p class="mb-0 fw-bold">{{ item.product.title }}</p>
                        <p class="mb-0">NT${{ item.total }}</p>
                        </div>
                        <p class="mb-0 fw-bold">x{{ item.qty }}</p>
                    </div>
                </div>
            </div>
            <table class="table mt-4 border-top border-bottom text-muted">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">小計</th>
                  <td class="text-end border-0 px-0 pt-4">NT${{ order.total }}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">付款方式</th>
                  <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 fw-bold">總計</p>
              <p class="mb-0 h4 fw-bold">NT${{ order.total }}</p>
            </div>
          </div>
          <div class="d-flex flex-column-reverse flex-md-row mt-4 justify-content-center align-items-md-center align-items-end w-100">
            <button type="button" class="btn btn-dark py-3 px-7" @click.prevent="orderPay()">確認結帳</button>
          </div>
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
      order: {},
      orderProduct: []
    }
  },
  methods: {
    // 取得訂單
    getOrder () {
      const { id } = this.$route.params
      const url = `${VITE_URL}/api/${VITE_NAME}/order/${id}`
      axios
        .get(url)
        .then((res) => {
          console.log(res)
          console.log(res.data.order)
          this.order = res.data.order
          // this.orderProduct = res.data.order.products.id
          // this.orderId = res.data.order.id
        })
        .catch((err) => {
          console.log(err)
          alert(err.response.data.message)
        })
    },
    // 付款
    orderPay () {
      const { id } = this.$route.params
      const url = `${VITE_URL}/api/${VITE_NAME}/pay/${id}`
      axios
        .post(url)
        .then((res) => {
          console.log(res)
          this.order.is_paid = true
          alert(res.data.message)
          this.$router.push('/')
        })
        .catch((err) => {
          console.log(err)
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    console.log(this.$route)
    this.getOrder()
    this.orderPay()
  }
}
</script>
