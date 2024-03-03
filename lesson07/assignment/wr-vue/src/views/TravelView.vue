<template>
  <div>
    <header>
      <h1>Winter Travel Advisory</h1>
    </header>
    <nav>
    </nav>
    <main>
      <!-- Image+Card Section w/ Bootstrap -->
      
      <!-- WSDOT section recycled from assignment 5. -->
      <div v-for="(item, index) in items" :key="index" class="wr-travel-section">
        <img :src="item.image" class="img-fluid img-thumbnail wr-travel-img" :alt="item.alt">
        <div class="card text-center">
          <div class="card-header">
            {{ item.title }}
          </div>
          <div class="card-body">
            <p class="card-text">{{ item.description }}</p>
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
      items: [
        {
          title: 'WSDOT Mountain Passes & Winter Travel',
          image: './imgs/snoqualmie-pass.jpg',
          alt: 'snowy snoqualmie pass',
          description: 'WSDOT provides a map of all the Mountain Passes in WA State, and even provides some helpful winter driving tips! Before you hit the road in snowy, icy weather, make sure both you and your car are ready for it. You can find winter driving conditions thanks to WSDOT. Remember, it’s always best to “know before you go”. So, don’t forget to check the latest road conditions before you head out.',
          link: 'https://wsdot.com/travel/real-time/mountainpasses',
          buttonText: 'WSDOT',
          footerText: 'Tune into the Highway Advisory Radio at 1610 AM and 530 AM, or follow them on X @wsdot_passes.'
        },
        {
          title: 'Northwest Avalanche Center',
          image: './imgs/avalanche.jpeg',
          alt: 'Avalanche in snowy WA Cascades',
          description: 'The Northwest Avalanche Center is all about making sure folks know about avalanches, lessening their effects, and giving everyone the lowdown on mountain weather, avalanche forecasts, learning resources, and stats. It’s basically your go-to hub for all things avalanche-related!',
          link: 'https://nwac.us',
          buttonText: 'NWAC',
          footerText: 'Share your observations with Northwest Avalanche Center on social media with #NWAC.'
        },
        {
          title: 'Washington SnoTel Sites',
          image: './imgs/snotel.jpeg',
          alt: 'Snotel instrumentation technology setup',
          description: 'SNOTEL, short for Snowpack Telemetry, is an automated system of snowpack and related climate sensors operated by the Natural Resources Conservation Service (NRCS). It’s a great resource for winter recreation enthusiasts, as it provides valuable data on snow depth, snow water content, temperature, and other climate conditions.',
          link: 'https://toolkit.climate.gov/tool/snow-telemetry-snotel-data-viewer',
          buttonText: 'SNOTEL',
          footerText: 'Share your observations and follow the Natural Resouce Conservation Service on X @USDA_NRCS.'
        }
      ]
    };
  }
};
</script>

