<template>
  <div class="nav-style pt-6">
    <div class="container mt-6">
      <h2>後台</h2>
      <nav class="mb-4">
        <RouterLink class="link-style router-link-hover" to="/admin/products">產品列表</RouterLink> |
        <RouterLink class="link-style router-link-hover" to="/admin/order">訂單</RouterLink> |
        <RouterLink class="link-style router-link-hover" to="/admin/coupon">優惠卷</RouterLink> |
        <RouterLink class="link-style router-link-hover" to="/">返回前台</RouterLink> |
        <a class="link-style router-link-hover" href="" @click.prevent="loginOut">登出</a>
      </nav>
    </div>
  </div>
  <div class="container mb-6">
    <RouterView v-if="checkSuccess"></RouterView>
    <!-- 加上 checkSuccess 判斷 -->
    <!-- 在 DashboardView.vue 的驗證加上 checkSuccess 的狀態，避免還沒進行驗證時，就進到後台產品或訂單頁面取資料，這時會造成錯誤。 -->
  </div>
</template>

<script>
import axios from 'axios'

const { VITE_URL } = import.meta.env

export default {
  data () {
    return {
      // 驗證加上 checkSuccess 的狀態
      checkSuccess: false
    }
  },
  methods: {
    // 登入驗證
    checkAdmin () {
      const url = `${VITE_URL}/api/user/check`
      axios
        .post(url)
        .then((response) => {
          // 驗證加上 checkSuccess 的狀態
          this.checkSuccess = true
          console.log('驗證成功：', response.data.success)
          alert('驗證成功：', response.data.success)
        })
        .catch(() => {
          // console.log(err.data)
          this.$router.push('/login')
        })
    },

    // 登出
    loginOut () {
      const url = `${VITE_URL}/logout`
      axios
        .post(url)
        .then((res) => {
          alert('成功登出！')
          // 登入時有設置 cookie 存取 token，在登出時也要記得清除這個 cookie
          document.cookie = 'loginToken=; expires=; path=/'
          this.$router.push('/')
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    // 取出 Token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)loginToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    axios.defaults.headers.common.Authorization = token
    this.checkAdmin()
  }
}
</script>

<style>
.link-style {
  text-decoration: none;
  color: #000;
}
.router-link-hover:hover {
  font-weight: 700;
  border-bottom: 1px solid #000;
}
.nav-style {
  background: #D0D0D0;
}
</style>
