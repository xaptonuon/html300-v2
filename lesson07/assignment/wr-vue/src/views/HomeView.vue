<template>
  <div>
    <header>
      <h1>Chill Washington</h1>
      <nav>
        <ul>
          <li><router-link to="/" class="active">Home</router-link></li>
          <li><router-link to="/travel">Travel Advisory</router-link></li>
          <li><router-link to="/safety">Safety Tips</router-link></li>
          <li><router-link to="/activities">Winter Rec Activities</router-link></li>
        </ul>
      </nav>
      <div class="hero-image" title="photo credit: WA State Parks Winter Recreation">
        <div id="hero-1" class="hero-text">
          <h1>Embrace the ❄️Chill❄️</h1>
        </div>
      </div>
    </header>

    <section class="links">
      <a href="https://kingcountyparks.org/2023/08/24/plan-your-next-adventure-with-backyard-fun-finder/" target="_blank">
        <img src="https://i0.wp.com/bytesandboxes.org/wp-content/uploads/2017/02/kingcountylogo_mlk.jpg?ssl=1" alt="King County Parks and Recreation logo"/>
      </a>
      <a href="https://www.piercecountywa.gov/1292/Parks-Facilities-Trails" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Logo_of_Pierce_County%2C_Washington.svg" alt="Pierce County Parks and Recreation logo"/>
      </a>
      <a href="https://www.thurstoncountywa.gov/departments/public-works/parks-trails" target="_blank">
        <img src="https://s3.us-west-2.amazonaws.com/thurstoncountywa.gov.if-us-west-2/s3fs-public/styles/max_900x600/public/2023-02/Artboard%206.png" alt="Thurston County Parks and Recreation logo"/>
      </a>
      <a href="https://lewiscountywa.gov/departments/parks-recreation/" target="_blank">
        <img src="https://wsac.org/wp-content/uploads/2020/06/Lewis_County_Logo.png" alt="Lewis County Parks and Recreation logo"/>
      </a>
    </section>

    <main class="main">
      <p>Chill Washington works with land management agencies and park and recreation offices to help curate web maps and practical information for your favorite winter recreation activities in Washington State, all in one place! Special thanks to the WA Counties above, helping us curate outdoor recreation opportunities across Washington, with more to come! <strong>"Embrace the Chill"</strong>--Washington’s Winter Wonderland Awaits!</p>
      <button tabindex="0" class="btn btn-lg btn-success" role="button" @click="launchMap" ref="popover">Launch Map</button>
    </main>
  </div>
</template>

<script>
import snowstorm from './snowstormv144_20131208/snowstorm';

export default {
  methods: {
    launchMap() {
      // Handle map launch logic here
    }
  },
  mounted() {
    const popover = new bootstrap.Popover(this.$refs.popover, {
      trigger: 'focus'
    });

    // Initialize snowstorm effect
    snowstorm();
  }
}
</script>
