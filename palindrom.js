const string = "kayak"
function isPalindrome(str){
  let reversedString = []
  for(let i = 0; i < string.length; i++){
    reversedString[i] = string[string.length-1-i] //? -i
  }
  if (reversedString === string){
    check = "This word " + string + " is Palindrome"
  }else {
    check = "This word " + string + " is not a Palindrome"
  }
  return check
}
  const result = isPalindrome(string)
    console.log(result);
