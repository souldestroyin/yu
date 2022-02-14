function deepCopy(obj, map = new Map()) {
  if(typeof obj !== 'object' || obj === null) {
    return obj
  }

  if(map.has(obj)) {
    return map.get(obj)
  }

  const tmp = Array.isArray(obj) ? [] : {}
  map.set(obj, tmp)

  for(let key in obj) {
    tmp[key] = deepCopy(obj[key], map)
  }

  return tmp

}