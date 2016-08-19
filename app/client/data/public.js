
const cata = [
  {id: 0, cat: "header", label: "Production"},
  {id: 1, name: "producer", cat: "production", code: 560260, label: "Producer"},
  {id: 2, name: "assProducer", cat: "production", code: 560260, label: "Associate Producer"},
  {id: 3, name: "pa", cat: "production", code: 560230, label: "Production Assistant"},
  {id: 4, name: "setPA", cat: "production", code: 12345, label: "Set PA"},
  {id: 5, name: "intern", cat: "production", code: 47816, label: "Intern"},
  {id: 6, name: "director", cat: "production", code: 560270, label: "Director"},
  {id: 7, name: "writer", cat: "production", code: 560100, label: "Writer"},
  {id: 8, name: "mealsCrafty", cat: "production", code: 590200, label: "Meals/Crafty"},
  {id: 9, name: "talent", cat: "production", code: 560250, label: "On-Camera Talent"},

  {id: 10, cat: "header", label: "Hair, Make-Up, Wardrobe"},
  {id: 11, name: "hairStylist", cat:"hmu", code: 560350, label: "Hair Stylist"},
  {id: 12, name: "makeUpArtist", cat:"hmu", code: 560350, label: "Make-Up Artist"},
  {id: 13, name: "wardrobeStylist", cat:"hmu", code: 560350, label: "Wardrobe Stylist"},
  {id: 14, name: "wardrobeAllowance", cat:"hmu", code: 560350, label: "Wardrobe Allowance"},

  {id: 15, cat: "header", label: "Technical Crew"},
  {id: 16, name: "dp", cat: "techCrew", code: 560220, label: "Director of Photography"},
  {id: 17, name: "camOp", cat: "techCrew", code: 560220, label: "Camera Operator"},
  {id: 18, name: "camAssist", cat: "techCrew", code: 560230, label: "Camera Assistant"},
  {id: 19, name: "audioOp", cat: "techCrew", code: 560210, label: "Audio Operator"},
  {id: 20, name: "setPhoto", cat: "techCrew", code: 560450, label: "Set Photographer"},

  {id: 21, cat: "header", label: "Equipment"},
  {id: 22, name: "camRent", cat: "equipment", code: 570100, label: "Camera Rental"},
  {id: 23, name: "lightRent", cat: "equipment", code: 570100, label: "Lighting Rental"},
  {id: 24, name: "miscRent", cat: "equipment", code: 570100, label: "Misc Equipment Rental"},
  {id: 25, name: "props", cat: "equipment", code: 545100, label: "Props"},
  {id: 26, name: "setDesign", cat: "equipment", code: 570150, label: "Set Design"},

  {id: 27, cat: "header", label: "locations"},
  {id: 28, name: "locFeesPermits", cat: "locations", code: 570150, label: "Location/Fees/Permits'"},
  {id: 29, name: "locManager", cat: "locations", code: 570150, label: "Location Manager"},
  {id: 30, name: "taxis", cat: "locations", code: 590500, label: "Taxis & Local Transpo"},
  {id: 31, name: "airfare", cat: "locations", code: 590400, label: "Airfare"},
  {id: 32, name: "hotel", cat: "locations", code: 590300, label: "Hotel"},
  {id: 33, name: "carRental", cat: "locations", code: 590400, label: "Car Rental"},
  {id: 34, name: "gasTollPark", cat: "locations", code: 590600, label: "Gas/Tolls/Parking"},

  {id: 35, cat: "header", label: "Post-Production"},
  {id: 36, name: "editor", cat: "post", code: 560240, label: "Editor"},
  {id: 37, name: "assEditor", cat: "post", code: 560240, label: "Assistant Editor"},
  {id: 38, name: "colorCorrection", cat: "post", code:515250, label: "Color Correction"},
  {id: 39, name: "editSuite", cat: "post", code: 560240, label: "Edit Suite"},
  {id: 40, name: "audioMix", cat: "post", code:515250, label: "Audio Mixing"},
  {id: 41, name: "transcription", cat: "post", code: 515250, label: "Transcription"},
  {id: 42, name: "designMotion", cat: "post", code: 660400, label: "Deisgn & Motion GFX"},
  {id: 43, name: "miscPost", cat: "post", code: 515250, label: "Misc Post"},

  {id: 44, cat: "header", label: "Misc Categories"},
  {id: 45, name: "consultant", cat: "misc", code: 580200, label: "Consultant"},
  {id: 46, name: "researchMats", cat: "misc", code: 545010, label: "Research Materials"},
  {id: 47, name: "photoLic", cat: "misc", code: 564000, label: "Photo Licensing"},
  {id: 48, name: "footageLic", cat: "misc", code: 570200, label: "Footage Licensing"},
  {id: 49, name: "musicLic", cat: "misc", code: 570200, label: "Music Licensing"},
  {id: 50, name: "insurance", cat: "misc", code: null, label: "Insurance"},
  {id: 51, name: "hosting", cat: "misc", code: 500950, label: "Hosting Service"},
  {id: 52, name: "3rdPartProd", cat: "misc", code: 560275, label: "Third Party Production"},
  {id: 53, name: "3rdPartLic", cat: "misc", code: 560280, label: "Third Party Licensing"},
];

export var codesToIndex = {

};

export var judy = {
  projName: undefined,
  projId: undefined,
  vertical: undefined,
  tier: undefined,
  numAssets: undefined,
  videoType: undefined,
  reqBudget: undefined,
  startDate: undefined,
  endDate: undefined,
  editDate: undefined,
  releaseDate: undefined
};

export default cata;
