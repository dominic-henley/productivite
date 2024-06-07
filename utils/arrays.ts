export const zip = (a: Array<any>, b: Array<any>) => {
  return a.map((_, i) => {
    return [ { x: a[i], y: b[i] } ]
  })
}