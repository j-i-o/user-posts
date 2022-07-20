const SKIN = ["Pale", "Light", "Black"]
const GLASSES = ["Blank", "Prescription02"]
const HAIRCOLOR = ["Auburn", "BlondeGolden", "BrownDark"]
const HAIRSTYLE = [
  "LongHairBigHair",
  "LongHairNotTooLong",
  "ShortHairDreads01",
  "ShortHairTheCaesarSidePart",
]
const CLOTHESCOLOR = ["Blue03", "PastelOrange", "Red", "Gray02"]

const generateAvatar = () => {
  const rand = (opc) => Math.floor(Math.random() * opc);
  const avatarURL = `https://avataaars.io/?avatarStyle=Circle&topType=${HAIRSTYLE[rand(4)]
    }&accessoriesType=${GLASSES[rand(2)]}&hairColor=${HAIRCOLOR[rand(3)]
    }&facialHairType=Blank&clotheType=Hoodie&clotheColor=${CLOTHESCOLOR[rand(4)]
    }&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=${SKIN[rand(3)]
    }`;
  return avatarURL;
}

export default generateAvatar