function isPalindromeChecker(word) {
  
  let original = word.lowerCase();
  
  let reversedVersion;
  
  reversedVersion = original.split('').reverse().join('');
  
  console.log(reversedVersion);
  
  console.log(original);
  
  if (original === reversedVersion) {
    return console.log("is a Palindrome");
  }
  else {
    return console.log("not a palindrome");
  }
  
  
}

isPalindromeChecker("level");


