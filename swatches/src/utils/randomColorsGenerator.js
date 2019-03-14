//Generates between 96 and 168 random hex color codes

const randomColorsGenerator = () => {
  const colors = [];
  const randomNumber = 96 + Math.floor(Math.random() * 73);
  for (let n = 1; n < randomNumber; n++) {
    colors.push("#" + (Math.random().toString(16) + "000000").slice(2, 8));
  }
  return colors;
};

export default randomColorsGenerator;
