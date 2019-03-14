// Transforms a flat array of swatches into a 2d array
// of pages containing swatches

const paginate = arr => {
  const pages = [];
  while (arr.length) {
    pages.push(arr.splice(0, 12));
  }
  return pages;
};

export default paginate;
