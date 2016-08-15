
const cata = [
  {id: 0, cat: "header", label: "Production"},
  {id: 1, name: "producer", cat: "production", code: 55201, label: "Producer"},
  {id: 2, name: "associateProducer", cat: "production", code: 56891, label: "Associate Producer"},
  {id: 3, name: "pa", cat: "production", code: 5912, label: "Production Assistant"},
  {id: 4, name: "setPA", cat: "production", code: 12345, label: "Set Production Assistant"},
  {id: 5, name: "intern", cat: "production", code: 47816, label: "Intern"},
  {id: 6, name: "director", cat: "production", code: 10223, label: "Director"},
  {id: 7, name: "writer", cat: "production", code: 10999, label: "Writer"},

  {id: 8, cat: "header", label: "Camera"},
  {id: 9, name: "dp", cat: "camera", code: 10976, label: "Director of Photography"},
  {id: 10, name: "camOp", cat: "camera", code: 50192, label: "Camera Operator"},

  {id: 11, cat: "header", label: "Post-Production"},
  {id: 12, name: "editor", cat: "post", code: 9999, label: "Editor"},
  {id: 13, name: "colorCorrection", cat: "post", code:50122, label: "Color Correction"},
  {id: 14, name: "audioMix", cat: "post", code:11235, label: "Audio Mixing"}
];

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

// export const codeCategories = {
//   580200 : "Consultant",
//   560100: "Writer",
//   560270 : "Director",
//   560260 : "Producer",
//   560260 : "Associate Producer",
//   560230 : "Production Assistant",
//   545010 : "Research Materials",
//   560250 : "On-Camera Talent",
//   560350 : "Make-Up Artist",
//   560350 : "Hair Stylist",
//   560350 : "Wardrobe Stylist",
//   560350 : "Wardrobe Allowance",
//   560220 : "Director of Photography",
//   560220 : "Camera Operator",
//   560230 : "Assistant Camera",
//   560210 : "Audio Operator",
//   560220 : "Gaffer/Grip/Best Boy",
//   560450 : "Photographer",
//   560230 : "Set PA",
//   500120 : "Intern",
//   570100 : "Camera Rental",
//   570100 : "Lighting Rental",
//   570100 : "Misc Equipment Rental",
//   570150 : "Location Fees & Permits",
//   570150 : "Location Manager",
//   570150 : "Set Design",
//   545100 : "Props",
//   590200 : "Meals & Craft Service",
//   590500 : "Taxis & Local Transpo",
//   590400 : "Airfare",
//   590300 : "Hotel",
//   590400 : "Car Rental",
//   590600 : "Gas/Tolls/Parking",
//   560240 : "Editor",
//   560240 : "Assistant Editor",
//   560240 : "Edit Suite",
//   660400 : "Design & Motion GFX",
//   515250 : "Transcription",
//   515250 : "Color Correction",
//   515250 : "Audio Mix",
//   515250 : "Misc Post",
//   564000 : "Photo Licensing",
//   570200 : "Footage Licensing",
//   570200 : "Music Licensing",
//   "NONE" : "Insurance",
//   500950 : "Hosting Service",
//   560275 : "Third Party Production",
//   560280 : "Third Party Production - Licensing"
// };

export default cata;

//Refactor All below this point. Probably delete it:
const options = [
{
type: 'group', name: 'Production-CREW', items: [
 { value: {Producer: 'Producer', code: 99999}, label: 'Producer' },
 { value: 'Associate Producer', label: 'Associate Producer' },
 { value: 'Production Assistant', label: 'Production Assistant' },
 { value: 'Set Production Assistant', label: 'Set Production Assistant' },
 { value: 'Intern', label: 'Intern' },
 { value: 'Director', label: 'Director' },
 { value: 'Writer', label: 'Writer' },
 { value: 'Director of Photography', label: 'Director of Photography' },
 { value: 'Camera Operator', label: 'Camera Operator' },
 { value: 'Assistant Camera', label: 'Assistant Camera' },
 { value: 'Audio Operator', label: 'Audio Operator' },
 { value: 'Gaffer/Grip/Best Boy', label: 'Gaffer/Grip/Best Boy' },
 { value: 'Set Design', label: 'Set Design' },
 { value: 'Location Manager', label: 'Location Manager' },
 { value: 'Make-Up Artist', label: 'Make-Up Artist' },
 { value: 'Hair Stylist', label: 'Hair Stylist' },
 { value: 'Wardrobe Stylist', label: 'Wardrobe Stylist' },
 { value: 'Wardrobe Allowance', label: 'Wardrobe Allowance' },
 { value: 'Photographer', label: 'Photographer' }
]
},
{
type: 'group', name: 'Production-CAST', items: [
 { value: 'On-Camera Talent', label: 'On-Camera Talent' }
]
},
{
type: 'group', name: 'Production-EQUIPMENT', items: [
 { value: 'Camera Rental', label: 'Camera Rental' },
 { value: 'Lighting Rental', label: 'Lighting Rental' },
 { value: 'Misc Equipment Rental', label: 'Misc Equipment Rental' },
 { value: 'Props', label: 'Props' }
]
},
{
type: 'group', name: 'Production-GENERAL', items: [
 { value: 'Insurance', label: 'Insurance' },
 { value: 'Meals & Craft Service', label: 'Meals & Craft Service' },
 { value: 'Hosting Service', label: 'Hosting Service' },
 { value: 'Taxis & Local Transpo', label: 'Taxis & Local Transportation' },
 { value: 'Airfare', label: 'Airfare' },
 { value: 'Hotel', label: 'Hotel' },
 { value: 'Car Rental', label: 'Car Rental' },
 { value: 'Gas, Tolls, Parking', label: 'Gas, Tolls, Parking' },
 { value: 'Research Materials', label: 'Research Materials' },
 { value: 'Location Fees & Permits', label: 'Location Fees & Permits' }
]
},
{
type: 'group', name: 'Post-Production-EDITING', items: [
 { value: 'Editor', label: 'Editor' },
 { value: 'Assistant Editor', label: 'Assistant Editor' },
 { value: 'Edit Suite', label: 'Edit Suite' },
 { value: 'Color Correction', label: 'Color Correction' },
 { value: 'Audio Mix', label: 'Audio Mix' },
 { value: 'Design & Motion GFX', label: 'Design & Motion GFX' },
 { value: 'Transcription', label: 'Transcription' },
 { value: 'Misc Post', label: 'Misc Post' },
 { value: 'Photo Licensing', label: 'Photo Licensing' },
 { value: 'Footage Licensing', label: 'Footage Licensing' },
 { value: 'Music Licensing', label: 'Music Licensing' }
]
}
];
