<template>
  <div>
    <Header />
    <Profile />
    <Works />
    <Footer />
  </div>
</template>

<script>
import Header  from '../components/Header'
import Profile from '../components/Profile'
import Works   from '../components/Works'
import Footer  from '../components/Footer'

export default {
  components: {
    Header,
    Profile,
    Works,
    Footer
  }
}
</script>

<style scoped>

</style>