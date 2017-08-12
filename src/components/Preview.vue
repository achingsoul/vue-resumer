<template>
  <div id="preview">
    <h1>{{resume.profile.name}}</h1>
    <p>{{resume.profile.city}} | {{resume.profile.birth}}</p>
  </div>
</template>

<style>
  #preview{
  }
</style>

<script>
export default {
  props: ['resume']
}
</script>
