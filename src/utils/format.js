function formatDescription({ descripcion }) {
  if (!descripcion) {
    return descripcion;
  }
  let lastChar = descripcion.slice(-1);
  return lastChar == '.' ? descripcion.slice(0, -1) : descripcion;
}
function formatTitle({ nombre }) {
  if (!nombre) {
    return nombre;
  }
  let lastChar = nombre.slice(-1);
  return lastChar == '.' ? nombre : nombre + '.';
}

function categoryBalancer(categories, numColumns = 3) {
  const AllCategories = Object.keys(categories)
  if (AllCategories.length < numColumns) {
    let Initial = numColumns == 2 ? [[], []] : [[], [], []]
    return Object.keys(categories).reduce(
      (cols, cat, i) => {
        const c = i % numColumns;
        cols[c].push(categories[cat]);
        return cols;
      },
      Initial
    );
  }
  let InitialValue = []
  let j = AllCategories.length;
  let chunk = AllCategories.length / numColumns;
  let index = 0
  for (let i = 0; i < j; i += chunk) {
    InitialValue.push([])
    let temparray = AllCategories.slice(i, i + chunk);
    temparray.forEach((value) => {
      InitialValue[index].push(categories[value])
    })
    index++;
  }
  return InitialValue;
}
export {
  formatDescription,
  formatTitle,
  categoryBalancer
}