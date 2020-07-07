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
export {
  formatDescription,
  formatTitle
}