var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
var mid = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']; ;
var rest = ['', 'thousand', 'million', 'billion'];
function checkInput () { // eslint-disable-line no-unused-vars
  var text = document.getElementById('input').value;
  var texts = document.getElementById('texts').checked;
  var numbers = document.getElementById('numbers').checked;
  document.getElementById('output').innerHTML = '';
  if (text !== '' && (texts || numbers)) {
    find(text, texts, numbers);
  }
}
function find (text, texts, numbers) {
  var numb = text.match(/\d+/g);
  for (var i = 0; i < numb.length; i++) {
    if (Number(numb[i]) === 0) {
      document.getElementById('output').innerHTML += ' zero';
      i++;
    }
    if (numb[i].length > 12) {
      i++;
    }
    var num = numb[i];
    var j = 0;
    var tex = '';
    while (num > 0) {
      var last = num % 1000;
      tex = convert(last, j) + ' ' + tex;
      num = Math.floor(num / 1000);
      j++;
    }
    document.getElementById('output').innerHTML += '<br />' + tex;
  }
}
function convert (last, j) {
  var text = '';
  while (last > 0) {
    if (last > 99) {
      var digit = Math.floor(last / 100);
      text += ' ' + ones[digit] + ' hundred';
      last = Math.round(((last / 100) - digit) * 100);
    } else if (last >= 20 && last <= 99) {
      digit = Math.floor(last / 10);
      text += ' ' + tens[digit];
      last = Math.round((last / 10 - digit) * 10);
      console.log(last, digit, text);
    } else {
      if (last < 20 && last > 10) {
        text += ' ' + mid[last - 10];
        console.log(last, digit, text);
        last = 0;
      } else {
        text += ' ' + ones[last];
        last = 0;
      }
    }
  }
  text += ' ' + rest[j];
  return text;
}
