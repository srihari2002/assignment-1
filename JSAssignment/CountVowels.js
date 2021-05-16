//Count vowels

function vowelCount(str1)
{
  var vowList = 'aeiouAEIOU';
  var count = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowList.indexOf(str1[x]) !== -1)
    {
      count += 1;
    }
  
  }
  return count;
}

var string1 = prompt("Enter the string");
console.log(vowelCount(string1))