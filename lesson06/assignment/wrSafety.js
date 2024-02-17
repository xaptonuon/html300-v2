// Winter Safety & Etiquette 
let winterSafety = ["Snow grooming equipment may be on winter trails at any time.", "Trail grooming schedules may change w/o notice due to snow conditions, temperatures, equipment breakdowns, etc.", "Respect all public and private property and the rights of all winter recreationists", "Park your vehicle considerately without blocking other vehicles or impeding access to trails.",
"Do not disturb wildlife and avoid closed areas.", "Do not litter, and pack out everything you packed in.", "Respect designated areas, trail use signs, and established ski tracks."];
let winterSafetyText = "";
for (let i = 0; i < winterSafety.length; i++) {
  winterSafetyText += "<li>" + winterSafety[i] + "</li>"
}

document.getElementById("general-winter-safety").innerHTML = winterSafetyText;

// Winter Clothing
winterClothing = ["Wear clothing that holds the body's heat.", "Clothing should be windproof, water-repellent, and capable of allowing moisture to evaporate from the body.", "Down is good in dry conditions but becomes ineffective when wet.", "Cotton next to the skin draws heat out of the body when it becomes damp.", "Wool is the best protection--certain new synthetics are also good.",
"Layering clothing is advisable, as the air pockets between fabrics hold the body's heat.", "Layered clothing also has the advantage of being removable if the temperature rises."];
let winterClothingText = "";
for (let i = 0; i < winterClothing.length; i++) {
  winterClothingText += "<li>" + winterClothing[i] + "</li>"
}
document.getElementById("winter-clothing-recommendations").innerHTML = winterClothingText;

// Outdoor Gear 
outdoorGear = ["Cellphone / Two-Way Radio", "Compass + Map", "Extra Clothing", "Extra Food & Water", "First Aid Kit", "Flashlight",
"Knife", "Matches / Fire Starter", "Thermal Blanket", "Sunglasses / Goggles"];
let outdoorGearText = "";
for (let i = 0; i < outdoorGear.length; i++) {
  outdoorGearText += "<li>" + outdoorGear[i] + "</li>"
}
document.getElementById("outdoor-gear-recommendations").innerHTML = outdoorGearText;