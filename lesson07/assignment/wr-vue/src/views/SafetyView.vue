<template>
  <div>
    <header>
      <h1>Winter Travel Advisory</h1>
    </header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/travel" class="active">Travel</router-link></li>
        <li><router-link to="/safety">Safety</router-link></li>
        <li><router-link to="/activities">Activities</router-link></li>
      </ul>
    </nav>
    <main>
      <!-- Image+Card Section w/ Bootstrap -->
      <div v-for="(item, index) in travelItems" :key="index" class="wr-travel-section">
        <img :src="item.image" class="img-fluid img-thumbnail wr-travel-img" :alt="item.alt">
        <div class="card text-center">
          <div class="card-header">
            {{ item.title }}
          </div>
          <div class="card-body">
            <p class="card-text">{{ item.description }}</p>
            <button @click="toggleMoreContent(index)" class="btn btn-primary">{{ showMoreContent[index] ? 'Hide Details' : 'Show Details' }}</button>
            <div v-if="showMoreContent[index]">
              <p class="card-text">Additional content goes here...</p>
              <!-- Add more content here as needed -->
            </div>
            <a :href="item.link" class="btn btn-primary">{{ item.buttonText }}</a>
          </div>
          <div class="card-footer text-muted">
            {{ item.footerText }}
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'TravelAdvisory',
  data() {
    return {
      travelItems: [

      ],
      showMoreContent: Array(this.travelItems.length).fill(false)
    };
  },
  methods: {
    toggleMoreContent(index) {
      this.$set(this.showMoreContent, index, !this.showMoreContent[index]);
    }
  }
};
</script>

