<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-layout wrap>
          <div class="wrap">
            <v-flex xs6>
              <div class="grid">
                <Header />
                <Applike />
                <Works />
                <Footer />
              </div>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs6>
              <div class="capt">
                <Captions />
              </div>
            </v-flex>
          </div>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header   from '../components/Header'
import Applike  from '../components/Applike'
import Works    from '../components/Works'
import Footer   from '../components/Footer'
import Captions from '../components/Captions'

export default {
  components: {
    Header,
    Applike,
    Works,
    Footer,
    Captions
  }
}
</script>

<style scoped>
  .grid {
    flex-grow: 3;
    background-color: #ffffff11;
  }
  .capt {
    flex-grow: 1;
    background-color: #ffffff11;
  }
</style>