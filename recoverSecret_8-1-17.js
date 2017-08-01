const l = console.log;

const recoverSecret = (triplets) => {

  const ans = [...triplets[0]];
  const remaining = triplets.slice(1);
  let letter;

  for (let i=0 ; i<remaining.length ; i++) {
    for (let j=0 ; j<remaining[i].length ; j++) {
        letter = remaining[i][j];
        l('letter --> ', letter)
        
    }
  }
  l('ans -->       ', ans)
  l('remaining --> ', remaining)
  return ans;
}

const arrangeLetter = (letter, array) => {

}

secret1 = "whatisup"
triplets1 = [
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
]

l('whatisup --> ', recoverSecret(triplets1))