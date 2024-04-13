import { defineStore } from 'pinia'
import axios from 'axios'

const { VITE_URL, VITE_NAME } = import.meta.env
const url = `${VITE_URL}/api/${VITE_NAME}/cart`

export default defineStore('cartStore', {
  state: () => ({
    // API文件購物車有的內容，分開存，方便取用
    carts: {},
    final_total: 0,
    total: 0
  }),
  // actions 等同於 methods
  actions: {
    getCart () {
      axios
        .get(url)
        .then((res) => {
          console.log('pinia cart', res.data.data)
          // this.cart = res.data.data
          this.carts = res.data.data.carts
          this.final_total = res.data.data.final_total
          this.total = res.data.data.total
        })
        .catch((err) => {
          // console.log(err)
          alert(err.response.data.message)
        })
    },
    addToCart (id, qty = 1) {
      const url = `${VITE_URL}/api/${VITE_NAME}/cart`
      const order = {
        product_id: id, // 改成用參數傳入
        qty
      }
      axios
        .post(url, { data: order })
        .then((res) => {
          console.log(res.data)
          alert(res.data.message)
          this.getCart()
        })
        .catch((err) => {
          console.log(err)
          alert(err.response.data.message)
        })
    }
  }
})
