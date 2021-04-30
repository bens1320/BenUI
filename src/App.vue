<template>
  <div>hi|
    <router-link to="/">页面1</router-link>
    <router-link to="/xxx">页面2</router-link>
  </div>
  <hr>
  <router-view/>
</template>
<script>

export default {
  name: 'App',
}
</script>
