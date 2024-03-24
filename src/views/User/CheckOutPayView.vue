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
                <div class="d-flex" v-for="item in order" :key="item.id">
                    <img src="" alt="" class="me-2" style="width: 48px; height: 48px; object-fit: cover">
                    <div class="w-100">
                        <div class="d-flex justify-content-between">
                        <p class="mb-0 fw-bold">{{ order }}</p>
                        <p class="mb-0">NT${{ order }}</p>
                        </div>
                        <p class="mb-0 fw-bold">x{{ order }}</p>
                    </div>
                </div>
            </div>
            <table class="table mt-4 border-top border-bottom text-muted">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">小計</th>
                  <td class="text-end border-0 px-0 pt-4">NT${{ order }}</td>
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
            <a href="./checkout-success.html" class="btn btn-dark py-3 px-7">確認結帳</a>
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
      orderId: {}
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
          console.log(res.data)
          this.order = res.data.order
          this.orderId = res.data.order.id
        })
        .catch((err) => {
          console.log(err)
          alert(err.response.data.message)
        })
    },
    // 付款
    orderPay () {}
  },
  mounted () {
    console.log(this.$route)
    this.getOrder()
  }
}
</script>
