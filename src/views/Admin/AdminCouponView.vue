<template>
    <div>
        <h2>優惠券</h2>
        <button class="btn btn-outline-primary btn-xl"
          @click="openCouponModal(true)">建立新優惠券</button>
    </div>
    <div>
        <table class="table mt-4">
            <thead>
                <tr>
                    <th>名稱</th>
                    <th>折扣百分比</th>
                    <th>到期日</th>
                    <th>是否啟用</th>
                    <th>編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in coupons" :key="item.id">
                    <td>{{ item.title }}</td>
                    <td>{{ item.percent }}%</td>
                    <td>{{ $filters.date(item.due_date) }}</td>
                    <td>
                        <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
                        <span v-else class="text-muted">尚未啟用</span>
                    </td>
                    <td>
                        <div>
                            <button type="button" class="btn btn-outline-primary btn-sm" @click.prevent="openCouponModal(false, item)">編輯</button>
                            <button type="button" class="btn btn-outline-danger btn-sm" @click.prevent="openDelCouponModal(item)">刪除</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- Modal -->
        <!-- 傳入子元件 CouponModal -->
        <CouponModal
          ref="couponModal"
          :coupon="tempCoupon"
          :is-new="isNew"
          @update-coupon="updateCoupon">
        </CouponModal>
        <!-- 傳入子元件 DelModal -->
        <DelModal
          ref="delModal"
          :item="tempCoupon"
          @del-item="delCoupon">
        </DelModal>
    </div>
</template>

<script>
import axios from 'axios'

import CouponModal from '../../components/CouponModal.vue'
import DelModal from '../../components/DelModal.vue'
// import PaginationComponent from '../../components/PaginationComponent.vue'

const { VITE_URL, VITE_NAME } = import.meta.env

export default {
  data () {
    return {
      coupons: [],
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      },
      couponPage: {},
      // 判斷是否為新增，來決定API行為為新增或編輯
      isNew: false
    }
  },
  methods: {
    // 取得優惠券列表
    getCoupons (couponPage = 1) {
      const url = `${VITE_URL}/api/${VITE_NAME}/admin/coupons?page=${couponPage}`
      console.log(url)
      axios
        .get(url)
        .then((res) => {
          console.log(res.data)
          this.coupons = res.data.coupons
        })
        .catch((err) => {
          console.log(err.data.message)
          alert(err.data.message)
        })
    },

    // 開啟 Modal
    // 以 isNew 的 true / false 來判斷為新增或編輯； item 帶入 coupons 內容
    // 新增
    openCouponModal (isNew, item) {
      console.log('openCouponModal')
      this.isNew = isNew
      if (this.isNew) {
        this.tempCoupon = {
          // 不是很懂，待學習
          due_date: new Date().getTime() / 1000
        }
      } else {
        // 按鈕觸發 openModal 函式後，將當前優惠卷資訊重新賦值給 tempCoupon
        this.tempCoupon = { ...item }
      }
      // this.$refs.couponModal.openModal()
      const couponComponent = this.$refs.couponModal
      couponComponent.openModal()
    },
    openDelCouponModal (item) {
      this.tempCoupon = { ...item }
      // 宣告一個 delComponent 變數用於抓取子元件 CouponModal
      const delComponent = this.$refs.delModal
      // 並調用 openModal 函式開啟 modal
      delComponent.openModal()
    },
    // 新增/修改 優惠券
    updateCoupon () {
      // POST API 新增
      let url = `${VITE_URL}/api/${VITE_NAME}/admin/coupon`
      let changeAPI = 'post'
      // PUT API 修改
      if (!this.isNew) { // 判斷如果不是新增
        url = `${VITE_URL}/api/${VITE_NAME}/admin/coupon/${this.tempCoupon.id}`
        changeAPI = 'put'
      }

      axios
        // eslint-disable-next-line no-unexpected-multiline
        [changeAPI](url, {
          data: this.tempCoupon
        })
        .then((res) => {
          console.log(res.data)
          // 新增/修改完成後重新取得列表
          this.getCoupons()
          // 成功後關閉 Modal
          this.$refs.couponModal.hideModal()
          // 清除框內輸入內容
          this.tempCoupon = {}
        })
        .catch((err) => {
          console.log(err.response.data.message)
          alert(err.response.data.message)
        })
    },
    // 刪除
    delCoupon () {
      const url = `${VITE_URL}/api/${VITE_NAME}/admin/coupon/${this.tempCoupon.id}`

      axios
        .delete(url)
        .then((res) => {
          console.log(res.data.message)
          // 宣告一個 delComponent 變數用於抓取子元件 DelModal
          const delComponent = this.$refs.delModal
          // 並調用 hideModal 函式關閉 modal
          delComponent.hideModal()
          this.getCoupons()
        })
        .catch((err) => {
          console.log(err.response.data.message)
          alert(err.response.data.message)
        })
    }
  },
  components: {
    CouponModal,
    DelModal
    // PaginationComponent
  },
  mounted () {
    this.getCoupons()
  }
}
</script>
