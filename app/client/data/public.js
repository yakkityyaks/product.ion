
const cata = [
  {id: 0, cat: "header", label: "Production"},
  {id: 1, name: "producer", cat: "production", code: 55201, label: "Producer"},
  {id: 2, name: "associateProducer", cat: "production", code: 56891, label: "Associate Producer"},
  {id: 3, name: "pa", cat: "production", code: 5912, label: "Production Assistant"},
  {id: 4, name: "setPA", cat: "production", code: 12345, label: "Set Production Assistant"},
  {id: 5, name: "intern", cat: "production", code: 47816, label: "Intern"},
  {id: 6, name: "director", cat: "production", code: 10223, label: "Director"},
  {id: 7, name: "writer", cat: "production", code: 10999, label: "Writer"},
  // {id: 8, name: "talent", cat: "production", code: 55555, label: "Talent"},

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

export default cata;
