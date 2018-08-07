<template>
  <div>
  	<div class="content">
  	<div class="image"><img v-bind:src="link.image" v-bind:alt="link.username" /></div>
  	<div class="header">{{link.firstName}} {{link.lastName}}</div>
  	<div class="link"><router-link :to="{name: 'PersonPage', params: {id: link.id}}" class="title">More info</router-link></div>
  	</div>
  </div>
</template>
<script>
  export default {
    name: 'PersonItem',
    props: ['link']
  }
</script>