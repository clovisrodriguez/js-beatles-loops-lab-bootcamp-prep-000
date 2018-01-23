function theBeatlesPlay (musicians, instruments){
  let newArray = [];
  for (let i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}

function johnLennonFacts (facts) {
  let newArray = [];
  while (facts.length > newArray.length) {
    let i = 0
    i ++
    newArray.push(facts[i] + '!!!')
  }
  return newArray
}