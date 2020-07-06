function formatDescription({descripcion}){
  if(!descripcion){
    return descripcion;
  }
  let lastChar = descripcion.slice(-1);
  return lastChar == '.'? descripcion.slice(0,-1):descripcion;
}

export {
  formatDescription
}