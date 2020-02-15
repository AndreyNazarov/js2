
const findLongestWord = function(array) {
  let words = array.split(' ');
  let wordLength = 0;
  let longestWord;

  for (let i = 0; i < words.length; i += 1) {
    wordLength = words[1].length;

    if (words[i].length > wordLength) {
      longestWord = words[i];

      return longestWord;
    }

  }
};
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you')); // 'force'

