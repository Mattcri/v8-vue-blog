<template>
  <div>
    <header class="masthead" style="background-image: url('/assets/img/chevrolet-blazer.jpg');">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <div class="post-heading">
              <h1>
                <strong>La página que busca no existe</strong>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    <button @click="backHome" type="button" class="btn btn-outline-dark my-3 backBtn">Regresa al inicio</button>
  </div>
</template>

<script>
export default {
  methods: {
    backHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.backBtn {
  width: 250px;
  height: 70px;
}
</style>