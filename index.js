// return masked string
function maskify(cc) {
  let original = cc;
  
  
  let masked1 = [...cc.slice(0, -4)]
  let masked2 = [...cc.slice(-4)]

  let mappingMasked = masked1.map(num => {
    return '#'
  })
  
  
  if(cc.length <= 4){
    return original;
  } else {
    let concatThem = mappingMasked.concat(masked2)
    let joinThem = concatThem.join('')
    return joinThem
  }
  
  

}