// Given alphabet is vowel or consonant

  function vowels (n) {
    let vowels = ['a','e','i','o','u'];
    if(vowels.includes(n)) {
        return " given alphabet is volwel"
    }else {
        return " given alphabet is consonant"
    }
 }

 console.log(vowels('p'))