/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if (i == nums.length) return 1;
  return nums[i] * product(nums, i+1); 
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, long=0) {
  if (i == words.length) return long;
  long = Math.max(words[i].length, long)
  return longest(words, i+1, long);
}


/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, newStr = "") {
  if (i >= str.length) return newStr;
  newStr += str[i]
  return everyOther(str, i+2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=str.length-1) {
  if (i < 0) return true;
  if (str[str.length-1 - i] != str[i]) return false;
  return isPalindrome(str, i-1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if (i == arr.length) return -1;
  if (arr[i] == val) return i;
  return findIndex(arr, val, i+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=str.length -1, newStr="") {
  if (i < 0) return newStr;
  newStr += str[i]
  return revString(str, i-1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left=0, right=arr.length) {
  if (val > arr[arr.length-1]) return -1;

  if (left > right) {
    return -1;
  }
  
  let middle = Math.floor((right+left)/2);
  let mVal = arr[middle];

  if(mVal > val) {
    return binarySearch(arr, val, left, middle -1);
  }
  if (mVal < val) {
    return binarySearch(arr, val, middle+1, right);
  }

  if (mVal == val) return middle;

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
