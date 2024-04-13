<template>
  <div
    class="modal fade"
    id="couponModal" tabindex="-1" aria-labelledby="couponModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="couponModalLabel">
            <!-- 新增/編輯 Modal共用 -->
            <!-- 判斷點擊開啟的鈕是新增/編輯 -->
            <span v-if="isNew">新增優惠卷</span>
            <span v-else>編輯優惠卷</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <!-- label-for 對應 input-id -->
            <label for="title" class="col-form-label">標題</label>
            <input type="text" class="form-control" id="title" v-model="tempCoupon.title" placeholder="請輸入標題">
          </div>
          <div class="mb-3">
            <label for="coupon_code" class="col-form-label">優惠碼</label>
            <input type="text" class="form-control" id="coupon_code" v-model="tempCoupon.code" placeholder="請輸入優惠碼">
          </div>
          <div class="mb-3">
            <label for="due_date" class="col-form-label">到期日</label>
            <input type="date" class="form-control" id="due_date" v-model="tempCoupon.due_date">
          </div>
          <div class="mb-3">
            <label for="percent" class="col-form-label">折扣百分比</label>
            <input type="number" class="form-control" id="percent" v-model="tempCoupon.percent" placeholder="請輸入折扣百分比">
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" :true-value="1" :false-value="0" v-model="tempCoupon.is_enabled" id="is_enabled">
              <label for="is_enabled" class="form-check-label">
                是否啟用
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('update-coupon', tempCoupon)"
            >{{ isNew ? '新增優惠券' : '更新優惠券' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '../mixins/modalMixin'

export default {
  // 不是很懂，待學習
  props: {
    coupon: Object,
    isNew: Boolean
  },
  data () {
    return {
      tempCoupon: {},
      due_date: ''
    }
  },
  emits: ['update-coupon'],
  watch: {
    coupon () {
      // 重新宣告一個 tempCoupon 變數賦值
      // 避免從子元件直接修改到父元件的資料，違反 Vue 的單向數據流原則造成錯誤
      this.tempCoupon = this.coupon

      // 不是很懂，待學習
      // 將時間格式改為 YYYY-MM-DD
      const dateAndTime = new Date(this.tempCoupon.due_date * 1000).toISOString().split('T');
      [this.due_date] = dateAndTime
    },
    due_date () {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000)
    }
  },
  mixins: [modalMixin]
}
</script>
