<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/dataBinding">DataBinding</router-link> |
    <router-link to="/dataBindingButton">DataBindingButton</router-link> |
    <router-link to="/dataBindingClass">DataBindingClass</router-link> |
    <router-link to="/dataBindingClass2">DataBindingClass2</router-link> |
    <router-link to="/dataBindingStyle">DataBindingStyle</router-link> |
    <router-link to="/dataBindingList">DataBindingList</router-link> |
    <router-link to="/renderingVIf">RenderingVIf</router-link> |
    <router-link to="/eventClick">EventClick</router-link> 
    <br>
    <router-link to="/eventChange">EventChange</router-link> |
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
