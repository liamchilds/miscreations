function getRandomInt(min, max) {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
    Math.ceil(min)
  );
}

function getRandomColour() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default new Array(15).fill(null).map(() => {
  const sides = getRandomInt(3, 8);
  const colour = getRandomColour();
  return {
    sides,
    colour
  };
});
