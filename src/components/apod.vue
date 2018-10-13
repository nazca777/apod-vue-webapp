<template>
  <div class="hello">
    <button class="hideBtn" v-on:click="toggleHide">{{hideTxt}} Text</button>
   <div v-if="apod" class="contain">
    <span v-if="notHidden">
     <h3 class="logo">APOD</h3>
     <h3 class="title apodInfo">{{apod.title}}</h3>
     <h5 class="explanation apodInfo">{{apod.explanation}}</h5>
       <h3 class="bottom-text">{{apod.copyright}}</h3>
    </span>
     <img :src="apod.url" alt="hi">
      </div>
   </div>
</template>

<script>
import {mapActions, Store, mapState} from 'vuex'
export default {
  name: 'apod',
  mounted() {
    this.$store.dispatch('loadApod')
  },
  computed: mapState([
    'apod'
  ]),
  data: function() {
    return {
      notHidden: true,
      hideTxt: "Hide"
    }
  },
  methods: {
    toggleHide: function() {
      this.notHidden = !this.notHidden
      if (this.notHidden == true) {
        this.hideTxt = "Hide"
      } else if (this.notHidden == false) {
        this.hideTxt = "Unhide"
      }

    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.logo {
  color: white;
  letter-spacing: 0.5rem;
  font-weight: 400;
  text-align: center;
  position: absolute;
  width: 100%;
  margin-top: 1.3rem;
}

img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  background-position: center center;
  background-size: cover;
}

.contain {
  position: relative;
}
.apodInfo {
  color: white;
  position: absolute;
  font-weight: 300;
  text-align: center;
  padding: 0.3rem 1rem;
  line-height: 2rem;
  width: 70%;
  display: inline;
}

.title {
  margin-top: 12vh;
  border-bottom: 10px #FF9595 solid;
  text-align: center;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.explanation {
  margin-top: 24.5vh;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.bottom-text {
  font-weight: 300;
  color: white;
  bottom: 2px;
  width: 100%;
  text-align: center;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  font-weight: 600;
}

.loading {
  color: white;
  width: 100%;
  text-align: center;
  font-weight: 500;
}

button {
  margin-left: 1rem;
  margin-top: 0.5rem;
  position: absolute;
  z-index: 4;
}

.hideBtn {
  color: white;
  background: #FF9595;
  padding: 0.5rem;
  border: none;
  font-weight: 400;
  font-size: 15px;
}

@media only screen and (max-width: 1200px) {
  .apodInfo {
    position:fixed;

  }

  .logo {
    margin-top: 1rem;
    position: fixed;
    display: none;
  }

  .title {
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .explanation {
    top: 40%;
    font-size: 12px;
  }

  .bottom-text {
    font-size: 14px;
  }

}


</style>
