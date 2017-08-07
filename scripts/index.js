
var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
var mid = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']; ;
var rest = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quattuordecillion'];
function checkInput (test) { // eslint-disable-line no-unused-vars
  if(test===undefined){
    var text = document.getElementById('input').value;
  }
  else{
    text=test;
  }
  document.getElementById('output').innerHTML = '';
  if (text !== '') {
    var out=find(text);
  }
  return out;
}
function find (text) {
  var numb = text.match(/\d+/g);
  // console.log(numb);
  for (var i = 0; i < numb.length; i++) {
    var tex = '';
    if (Number(numb[i]) === 0) {
      // document.getElementById('output').innerHTML += ' zero';
      tex = 'zero';
      document.getElementById('output').innerHTML += '<br />' + tex;
      continue;
    }
    if (numb[i].length > 48) {
      document.getElementById('output').innerHTML += 'Out of Limit';
      continue;
    }
    var num = numb[i];
    // console.log( numb[i]);
    var j = 0;
    while (num.length > 0) {
      var ex = 0;
      if (num.length === 2) {
        ex = 1;
      }
      var last = num.substr(num.length - 3 + ex);
      // console.log( last);
      tex = convert(last, j) + tex;
      num = num.substr(0, num.length - 3);
      j++;
    }
    document.getElementById('output').innerHTML += '<br />' + tex;
  }
  return tex;
}
function convert (last, j) {
  var text = '';
  last = Number(last);
  while (last > 0) {
    if (last > 99) {
      var digit = Math.floor(last / 100);
      text += ' ' + ones[digit] + ' hundred';
      last = (last % 100);
    } else if (last >= 20 && last <= 99) {
      if (text !== '' && j === 0) {
        text += ' and';
      }
      digit = Math.floor(last / 10);
      text += ' ' + tens[digit];
      last = last % 10;
      text += ' ' + ones[last];
      last = 0;
    } else if (last < 20 && last > 10) {
      if (text !== '' && j === 0) {
        text += ' and';
      }
      text += ' ' + mid[last - 10];
      last = 0;
    } else {
      text += ' ' + ones[last];
      last = 0;
    }
  }
  if (text !== '') {
    text += ' ' + rest[j];
  }
  return text;
}

var Values = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
  'ten': 10,
  'eleven': 11,
  'twelve': 12,
  'thirteen': 13,
  'fourteen': 14,
  'fifteen': 15,
  'sixteen': 16,
  'seventeen': 17,
  'eighteen': 18,
  'nineteen': 19,
  'twenty': 20,
  'thirty': 30,
  'forty': 40,
  'fifty': 50,
  'sixty': 60,
  'seventy': 70,
  'eighty': 80,
  'ninety': 90
};

var Multiply = {
  'hundred': 1e2,
  'thousand': 1e3,
  'million': 1e6,
  'billion': 1e9,
  'trillion': 1e12,
  'quadrillion': 1e15,
  'quintillion': 1e18,
  'sextillion': 1e21,
  'septillion': 1e24,
  'octillion': 1e27,
  'nonillion': 1e30,
  'decillion': 1e33,
  'undecillion': 1e36,
  'duodecillion': 1e39,
  'tredecillion': 1e42,
  'quattuordecillion': 1e45
};

var number, large, small, input;

function stringToNum (test) { // eslint-disable-line no-unused-vars
  if(test===undefined){
    input = document.getElementById('input2').value;
  }
  else{
   input=test;
  }
  var data = input.toLowerCase().split(/\s+/);
  large = 0;
  small = 0;
  number = [];
  data.forEach(clear);
  number.forEach(conversion);
  document.getElementById('output2').innerHTML = large + small;
  return (large + small);
}
function clear (b) {
  if (Values.hasOwnProperty(b) || Multiply.hasOwnProperty(b)) {
    number.push(b);
  }
}
function conversion (each) {
  var val = Values[each];
  if (val !== undefined) {
    small = small + val;
  } else if (each === 'hundred') {
    small = small * 100;
  } else {
    val = Multiply[each];
    if (val !== undefined) {
      large = large + small * val;
      small = 0;
    }
  }
}
