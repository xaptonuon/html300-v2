<template>
  <div>
    <header>
      <h1>Winter Rec Activities</h1>
    </header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/travel">Travel</router-link></li>
        <li><router-link to="/safety">Safety</router-link></li>
        <li><router-link to="/activities" class="active">Activities</router-link></li>
      </ul>
    </nav>
    <main>
      <div class="grid-container">
        <div v-for="(activity, index) in activities" :key="index" class="row">
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-12">
            <img :src="activity.image" class="img img-fluid" :alt="activity.alt">
          </div>
          <div class="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-12">
            <div :id="'activity-carousel-' + index" class="carousel slide" data-bs-interval="false">
              <div class="carousel-inner">
                <div v-for="(item, i) in activity.items" :key="i" :class="{ 'carousel-item': true, 'active': i === 0 }">
                  <h2>{{ item.title }}</h2>
                  <h5>{{ item.subtitle }}</h5>
                  <div class="activity-languages">
                    <p v-for="(info, j) in item.info" :key="j">{{ info }}</p>
                  </div>
                </div>
              </div>
              <button :class="'carousel-control-prev'" :type="'button'" :data-bs-target="'#activity-carousel-' + index" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </button>
              <button :class="'carousel-control-next'" :type="'button'" :data-bs-target="'#activity-carousel-' + index" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'WinterRecActivities',
  data() {
    return {
      activities: [
        {
          image: 'imgs/wa-snowmobiles.jpg',
          alt: 'Snowmobiling',
          items: [
            {
              title: 'Motorized Winter Recreation',
              subtitle: '(Snowmobiling)',
              info: [
                'Snowmobiling is one of the state\'s most popular winter activities!',
                'More than 3,000 miles of groomed snowmobile trails',
                'Cleared parking areas for vehicles in close proximity to groomed and/or backcountry trails.',
                'Note: Children under age 12 may not operate a snowmobile on or across a public roadway or highway.',
                '<a href="https://apps.leg.wa.gov/RCW/dispo.aspx?cite=46.10.110">View the complete snowmobiling rules</a> in the Revised Code of Washington.'
              ]
            },
            {
              title: 'Snowmobiling Tips',
              info: [
                '<span class="info-title">Watch your speed:</span> Ride at a reasonable and prudent speed relative to existing conditions and other trail users.',
                '<span class="info-title">Use the Buddy System:</span> Never snowmobile alone! In case of an accident or machine failure, that second machine and rider may be your only means for a safe return.',
                '<span class="info-title">Lights on!</span> Always use your lights between dusk and dawn.',
                '<span class="info-title">Respect Private Property:</span> Obtain permission from landowners before entering private property.',
                '<span class="info-title">Always</span> respect non-motorized sports trails marked with cross-country ski signs or blue diamonds. Snowmobile traffic ruins cross-country ski tracks.',
                '<span class="info-title">DO NOT</span> harass or endanger wildlife. Protect winter wildlife populations by viewing animals from a distance, maintaining a constant speed, and staying on your snowmobile when animals are present.',
                '<span class="info-title">NEVER</span> ride under the influence of alcohol or drugs--or ride in a manner that would endanger lives or property.'
              ]
            }
          ]
        },
        {
          image: 'imgs/wa-snowshoeing.png',
          alt: 'Snowshoeing',
          items: [
            {
              title: 'Non-Motorized Winter Recreation',
              subtitle: 'Skiing, Snowshoeing, and Dogsledding',
              info: [
                'Discover the scenic beauty of Washington State through its extensive network of snowshoeing trails, catering to all skill levels. From the rugged terrain of the Cascade Mountains to the tranquil paths of Olympic National Park, enthusiasts can explore diverse landscapes while enjoying the simplicity and accessibility of snowshoeing.',
                'With trails ranging from beginner-friendly to challenging, cross-country skiers of all levels can also enjoy the tranquility and beauty of Washington\'s winter wonderland across the state.'
              ]
            },
            {
              title: 'Sled dogs / Mushing / Skijoring',
              info: [
                'The only sled dog trails in the state are at Crystal Springs Sno-Park.',
                'To ensure an enjoyable experience for all visitors, please respect trail courtesy and keep your dogs on leash throughout the sled dog trail system as well as the parking areas.',
                'Dogs are not allowed in the nearby Erling Stordahl Sno-Park. However, they are permitted on leash or harness only on the Palouse to Cascades State Park Trail east of Lost Lake Road crossing.',
                'The trail system comprises old logging roads, a segment of the Palouse to Cascades State Park Trail, and utility corridors, offering an excellent sled dog trail experience during the winter.',
                'Dog teams cannot stop on a dime and can be about 70\' long.  While these are working dogs and trained to obey the musher, they may take a few seconds to come to a stop depending on their speed, team size and snow conditions.  If a team is approaching, please step to the side and give them some room.'
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>
