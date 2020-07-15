<template>
  <div class="Login">
    <login></login>
  </div>
</template>

<script>

  import login from "../components/login";
  import linput from "../components/linput";
  import lbutton from "../components/lbutton";


  export default {
    name: 'Login',
    components: {
      login,
    }
  }
</script>
