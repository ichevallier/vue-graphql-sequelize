<template>
  <div>
  	{{link.username}} <img v-bind:src="link.image" />
  </div>
</template>
<script>
  export default {
    name: 'LinkItem',
    props: ['link']
  }
</script>