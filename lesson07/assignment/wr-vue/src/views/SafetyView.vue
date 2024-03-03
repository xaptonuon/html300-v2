<template>
  <div>
    <header>
      <h1>Outdoor Safety Tips</h1>
    </header>
    <nav>
    </nav>
    <main class="main">
      <!-- Accordion for General Winter Safety Section  -->
      <div class="accordion">
        <div class="accordion-item" v-for="(item, index) in accordionItems" :key="index">
          <h2 class="accordion-header" :id="'heading' + (index + 1)">
            <button
              class="accordion-button collapsed"
              type="button"
              :data-bs-toggle="'collapse'"
              :data-bs-target="'#collapse' + (index + 1)"
              :aria-expanded="item.expanded"
              :aria-controls="'collapse' + (index + 1)"
            >
            {{ item.title }} - Click to Expand
            </button>
          </h2>
          <div
            :id="'collapse' + (index + 1)"
            class="accordion-collapse collapse"
            :aria-labelledby="'heading' + (index + 1)"
          >
            <div class="accordion-body">
              <ul class="tips-list"> <!-- Apply the class here -->
                <li v-for="(tip, tipIndex) in item.tips" :key="tipIndex">{{ tip }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accordionItems: [
        {
          title: "⚠️ Remember general winter safety and outdoor recreation etiquette:",
          tips: [
            "Snow grooming equipment may be on winter trails at any time.",
            "Trail grooming schedules may change without notice due to snow conditions, temperatures, equipment breakdowns, etc.",
            "Respect all public and private property and the rights of all winter recreationists", 
            "Park your vehicle considerately without blocking other vehicles or impeding access to trails.",
            "Do not disturb wildlife and avoid closed areas.", 
            "Do not litter, and pack out everything you packed in.",
            "Respect designated areas, trail use signs, and established ski tracks."
          ],
          expanded: false
        },
        {
          title: "⚠️ Always dress properly for the weather:",
          tips: [
            "Wear clothing that holds the body's heat.",
            "Clothing should be windproof, water-repellent, and capable of allowing moisture to evaporate from the body.",
            "Down is good in dry conditions but becomes ineffective when wet.",
            "Cotton next to the skin draws heat out of the body when it becomes damp.",
            "Wool is the best protection--certain new synthetics are also good.",
            "Layering clothing is advisable, as the air pockets between fabrics hold the body's heat.",
            "Layered clothing also has the advantage of being removable if the temperature rises"
          ],
          expanded: false
        },
        {
          title: "⚠️ Be prepared, bring the following whenever you explore the great outdoors:",
          tips: [
            "Cellphone / Two-Way Radio",
            "Compass + Map",
            "Extra Clothing",
            "Extra Food & Water",
            "First Aid Kit",
            "Flashlight",
            "Knife",
            "Matches / Fire Starter",
            "Thermal Blanket",
            "Sunglasses / Goggles"
          ],
          expanded: false
        }
      ]
    };
  }
};
</script>

<style scoped>
.tips-list {
  text-align: left; /* Align text to the left */
}
</style>
