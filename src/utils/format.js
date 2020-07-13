import { getDishes } from './api'
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

async function getBalancedColumns(categories, numColumns = 3) {
  return await Promise.all(categories.map(async category => {
    return (await getDishes(category)).length || 0
  })).then(dishesByCategory => {
    let totalOfDishes = dishesByCategory.reduce((acc, dishes) => acc + dishes, 0);
    let size = Math.floor(totalOfDishes / numColumns);
    let threshold = 10; // 5 dishes as threshold
    let Column = {
      sumatory: 0,
      index: -1,
      Categories: []
    }
    let Columns = []
    for (let i = 0; i < numColumns; i++) {
      let InitialValue = {
        sumatory: 0,
        index: Column.index || -1,
        Categories: []
      }
      Column = dishesByCategory.reduce((acc, value, index) => {
        if (index > acc.index) {
          acc.sumatory += value
          if (acc.sumatory < size + threshold || i == numColumns - 1) {
            acc.Categories.push(index)
            acc.index = index;
          }
        }
        return acc;
      }, InitialValue);
      Columns.push(Column.Categories)
    }
    return Columns;
  })
}
async function categoryBalancer(categories, numColumns = 3) {
  // in case categories doesnt fill all use normal balancer.
  const AllCategories = Object.keys(categories)
  if (AllCategories.length <= numColumns) {
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
  // use custom balancer instead
  let BalancedColumns = await getBalancedColumns(categories, numColumns)
  const Columns = BalancedColumns.map(Column => {
    return Column.map(value => categories[value]);
  })
  return Columns;

  //let InitialValue = []
  //let j = AllCategories.length;
  //let chunk = AllCategories.length / numColumns;
  //let index = 0
  //for (let i = 0; i < j; i += chunk) {
  //  InitialValue.push([])
  //  let temparray = AllCategories.slice(i, i + chunk);
  //  temparray.forEach((value) => {
  //    InitialValue[index].push(categories[value])
  //  })
  //  index++;
  //}
  //console.log({ InitialValue })
  //return InitialValue;
}
export {
  formatDescription,
  formatTitle,
  categoryBalancer
}