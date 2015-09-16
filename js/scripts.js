var wordCount = function(words) {
  var newWords = stripText(words);
  var uniqueWords = getUniqueWords(newWords);
  var wordsObject = createObjectKeyName(uniqueWords);
  var countedWords = countsWordOccurrence(newWords, wordsObject);
  var results = sortByOccurrence(countedWords);
  return results;
}

var stripText = function(words) {
    var noPunc = words.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()?]/g,"");
    var upperCase = noPunc.toLowerCase();
    return upperCase;
}


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

var countsWordOccurrence = function(words, wordsObject) {
  var wordsArray = words.split(" ");
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

var sortByOccurrence = function(wordsObject) {
  var sortedObjects = [];
  for (var word in wordsObject) {
    sortedObjects.push([word, wordsObject[word]]);
  }
    sortedObjects.shift();
    sortedObjects.sort(function(a,b) { return b[1] - a[1]})

  return sortedObjects;
}

//TODO:Sort sortedObjects alphabetically

$(document).ready(function() {
  $("form#wordForm").submit(function(event) {
    userText = $("textarea#words").val();
    var sortedArray = wordCount(userText);

    for (var i = 0; i < sortedArray.length; i++) {
      $(".wordList").append('<tr>')
      $(".wordList").append('<td>' + sortedArray[i][0].toUpperCase() + '</td>');
      $(".wordList").append('<td>' + sortedArray[i][1] + '</td>');
      $(".wordList").append('</tr>');
    }

    $("#userInput").text(userText);

    $("#results").show();
    $("#form").hide();
    event.preventDefault();
  });
});
