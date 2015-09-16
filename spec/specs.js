describe('getUniqueWords', function() {
  it("gives a list of words without any duplicates", function() {
    expect(getUniqueWords("apple grape melon grape kiwi")).to.eql(["apple", "grape", "kiwi", "melon"]);
  });
});

describe('createObjectKeyName', function() {
  it("use words from array to assign to key in object", function() {
    expect(createObjectKeyName(["apple", "grape", "kiwi", "melon"])).to.eql({apple: 0, grape: 0, kiwi: 0, melon: 0});
  });
});

describe('countsWordOccurrence', function() {
  it("counts occurence of words in array and updates value of object key with the same name", function() {
    expect(countsWordOccurence("apple grape kiwi grape kiwi melon", {apple: 0, grape: 0, kiwi: 0, melon: 0})).to.eql({apple: 1, grape: 2, kiwi: 2, melon: 1});
  });
});
