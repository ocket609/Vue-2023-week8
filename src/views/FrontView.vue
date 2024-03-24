<!-- eslint-disable vue/no-unused-components -->
<template>
    <div class="">
      <div class="container d-flex flex-column">
        <NavBarComponent></NavBarComponent>
      </div>
    </div>
    <RouterView></RouterView>
    <!-- footer -->
    <div class="bg-dark py-5">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4">
          <a class="text-white h4" href="./index.html">LOGO</a>
          <ul class="d-flex list-unstyled mb-0 h4">
            <li><a href="#" class="text-white mx-3"><i class="fab fa-facebook"></i></a></li>
            <li><a href="#" class="text-white mx-3"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#" class="text-white ms-3"><i class="fab fa-line"></i></a></li>
          </ul>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white">
          <div class="mb-md-0 mb-1">
            <p class="mb-0">02-3456-7890</p>
            <p class="mb-0">service@mail.com</p>
          </div>
          <p class="mb-0">© 2020 LOGO All Rights Reserved.</p>
          <RouterLink class="text-white-50 bg-dark mb-0" to="/"><i class="bi bi-gear-fill"></i></RouterLink>
        </div>
      </div>
    </div>
</template>
<!-- router-view or RouterView 都可以 -->

<script>
import NavBarComponent from '../components/NavBarComponent.vue'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    NavBarComponent
  }
}
</script>
