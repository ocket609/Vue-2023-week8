<template>
    <div class="bg-light pt-5 pb-7">
      <div class="container">
        <div class="row justify-content-center flex-md-row flex-column-reverse">
          <div class="col-md-6">
            <div class="bg-white p-4">
              <h4 class="fw-bold">訂購人資訊</h4>
                <!-- 表單驗證 -->
                <div class="row justify-content-center">
                  <v-form ref="form" class="col-md-8" v-slot="{ errors }" @submit="createOrder">
                  <!-- v-field 標籤與留言都加上 v-model 綁定變數，將資料傳入 -->
                    <div class="mb-3">
                      <label for="email" class="form-label">Email</label>
                      <v-field id="email" name="email" type="email" class="form-control"
                        :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required" v-model="form.user.email"></v-field>
                      <error-message name="email" class="invalid-feedback"></error-message>
                    </div>
                    <div class="mb-3">
                      <label for="name" class="form-label">收件人姓名</label>
                      <v-field id="name" name="姓名" type="text" class="form-control"
                        :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入姓名" rules="required" v-model="form.user.name"></v-field>
                      <error-message name="姓名" class="invalid-feedback"></error-message>
                    </div>
                    <div class="mb-3">
                      <label for="tel" class="form-label">收件人電話</label>
                      <v-field id="tel" name="電話" type="text" class="form-control"
                        :class="{ 'is-invalid': errors['電話'] }" placeholder="請輸入電話" rules="required|min:8|max:10" v-model="form.user.tel"></v-field>
                      <error-message name="電話" class="invalid-feedback"></error-message>
                    </div>
                    <div class="mb-3">
                      <label for="address" class="form-label">收件人地址</label>
                      <v-field id="address" name="地址" type="text" class="form-control"
                        :class="{ 'is-invalid': errors['地址'] }" placeholder="請輸入地址" rules="required" v-model="form.user.address"></v-field>
                      <error-message name="地址" class="invalid-feedback"></error-message>
                    </div>
                    <div class="mb-3">
                      <label for="message" class="form-label">留言</label>
                      <textarea id="message" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
                    </div>
                  </v-form>
                </div>
            </div>
            <div class="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100">
              <RouterLink type="button"
                class="btn btn-dark py-3 px-7 rounded-0"
                to="/checkoutpay"
                @click="createOrder()">送出訂單</RouterLink>
            </div>
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
      // 表單資料(驗證/送出訂單)
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      orderId: this.$route.params.id
    }
  },
  methods: {
    // 送出訂單
    createOrder () {
      const url = `${VITE_URL}/api/${VITE_NAME}/order`
      // 送出訂單 API文件 post

      // 宣告變數 order 存放串接 API 需要的表單資料(需求的資料結構同 data > form 內的資料格式)
      const order = this.form // this.form => 往外找，取到 data.return.form
      console.log(order)

      // 為確保可正確執行，測試 order，API先不送
      axios
        .post(url, { data: order })
        .then((res) => {
          console.log(res.data)
          alert(res.data.message)
          this.$refs.form.resetForm() // 成功送出後使用 resetForm() 語法來清除表單欄位的內容
          this.form.message = '' // 成功送出後，清空留言
          this.getCart()
          this.$router.push(`/checkOutPay/${res.data.orderId}`)
        })
        .catch((err) => {
          console.log(err.response.data.message)
          alert(err.response.data.message)
        })
    }
  }
}
</script>
