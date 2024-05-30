<script>

</script>


<template>



  <div class="container-fluid bg-dark py-4">

    <div class="row justify-content-center ">
      <div class="col-12 col-lg-3 text-center gap-5">
        <!-- Utilizza RouterLink per creare bottoni -->
        <RouterLink active-class="active" to="/">
          <button class="rounded-2 btn_bg_green mx-1">
            <span>HOME</span>
          </button>
        </RouterLink>

        <RouterLink active-class="active" to="/getstart">
          <button class="rounded-2 btn_bg_green mx-1">
            <span>Get Start</span>
          </button>
        </RouterLink>

        <RouterLink active-class="active" to="/about">
          <button class="rounded-2 btn_bg_green mx-1">
            <span>About</span>
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
  <RouterView />
</template>

<style></style>
