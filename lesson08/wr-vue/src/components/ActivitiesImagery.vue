<template>
  <div>
    <div v-for="(image, index) in images" :key="index" class="activities-imagery">
      <img :src="image" :alt="alts[index]" :title="imageTitle[index]"
           @click="toggleBorder(index)" :class="{'img-border': isHidden[index]}">
    </div>
  </div>
</template>

<script>
import borderMixin from '@/mixins/imgBorder';

export default {
  name: 'ActivitiesImagery',
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
    }
  },
  mixins: [borderMixin],
  methods: {
    toggleBorder(index) {
      this.isHidden[index] = !this.isHidden[index];
    }
  }
};
</script>