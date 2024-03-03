<template>
  <div>
    <div v-for="(image, index) in images" :key="index" class="activities-imagery">
      <img :src="image" :alt="alts[index]" :title="imageTitle[index]"
           @click="toggleBorder(index)" :class="{'img-border': isHidden[index]}">
      <div class="description">{{ description[index] }}</div>
      <a :href="link[index]">{{ buttonText[index] }}</a>
      <div class="footer">{{ footerText[index] }}</div>
    </div>
  </div>
</template>

<script>
import borderMixin from '@/mixins/imgBorder.js';

export default {
  name: 'TravelImagery',
  props: {
    images: {
      type: Array,
      required: true
    },
    alts: {
      type: Array,
      required: true
    },
    imageTitle: {
      type: Array,
      required: true
    },
    description: {
      type: Array,
      required: true
    },
    link: {
      type: Array,
      required: true
    },
    buttonText: {
      type: Array,
      required: true
    },
    footerText: {
      type: Array,
      required: true
    }
  },
  mixins: [borderMixin],
  data() {
    return {
      isHidden: new Array(this.images.length).fill(false)
    };
  },
  methods: {
    toggleBorder(index) {
      this.isHidden[index] = !this.isHidden[index];
    }
  }
};
</script>