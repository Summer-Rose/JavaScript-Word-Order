var getUniqueWords = function(words) {
  var wordsArray = words.split(" ");
  var sortedWords = wordsArray.sort();
  var uniqueWords = [];
  for (var i = 0; i < sortedWords.length; i++) {
    if (sortedWords[i] == sortedWords[i + 1]) {continue}
    uniqueWords.push(sortedWords[i]);
  }
  return uniqueWords;
};

var createObjectKeyName = function(uniqueWords) {
  var wordsObject = {};
  for (var i = 0; i < uniqueWords.length; i ++) {
    wordsObject[uniqueWords[i]] = 0;
  }
  return wordsObject;
};

var countsWordOccurence = function(words, wordsObject) {
  var wordsArray = words.split(" ");
  var sortedWords = wordsArray.sort();
  debugger;
  for (var key in wordsObject) {
    for(var i = 0; i < wordsArray.length; i++) {
      var word = wordsArray[i];
      if(key == word) {
        wordsObject[key] += 1;
      } else {continue;}
    }
  }
  return wordsObject;
}

//if key is the same as the word increment value by one
