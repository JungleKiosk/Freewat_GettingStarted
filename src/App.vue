<script>

</script>


<template>



  <div class="container-fluid bg-dark py-4">

    <div class="row justify-content-center ">
      <div class="col-12 col-lg-3 text-center text-center">
        <!-- Utilizza RouterLink per creare bottoni -->
        <RouterLink active-class="active" to="/">
          <button class="rounded-2 btn_bg_green mx-1">
            <span>Home</span>
          </button>
        </RouterLink>

        <RouterLink active-class="active" to="/getstart">
          <button class="rounded-2 btn_bg_green mx-1">
            <span>Get Start</span>
          </button>
        </RouterLink>

        <RouterLink active-class="active" to="/about">
          <button class="rounded-2 btn_bg_green mx-1">
            <span>About me</span>
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
  <RouterView />
</template>

<style>
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

/* .content-container {
  position: relative;
} */

img {
  width: 70%;
}

.btn_bg_green {
  background-color: transparent;
  color: #ffffff;
  border: none;
  cursor: pointer;
  overflow: hidden;
}

.btn_bg_green:hover {
  color: #1d92c0;
  text-decoration:underline;
}

.btn_bg_purple {
  background-color: transparent;
  color: #1d92c0;;
  border: none;
  cursor: pointer;
  overflow: hidden;
}

.btn_bg_purple:hover {
  text-decoration:underline;
}


@keyframes l-top-passing {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}
</style>
