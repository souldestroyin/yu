<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->

      <el-button>vvvv</el-button>
      <yu-button>ddd</yu-button>
      <yu-radio v-model="value" :options="options"/>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>

export default{
  data() {
    return {
      value: '',
      options: [{
        id: 1,
        name: 'aaa'
      }, {
        id: 2,
        name: 'bbb'
      }]
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
