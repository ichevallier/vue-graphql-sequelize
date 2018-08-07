<template>
  <div class="menu-links">
    <router-link to="/">Home</router-link> - 
    <router-link :to="{name: 'AddPerson'}" class="title">Add profile</router-link>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.menu-links a {
  display: inline-block;
  text-decoration: none;
  color: #fff;
  margin: 30px auto;
}
</style>
