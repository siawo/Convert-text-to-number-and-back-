var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
var mid = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']; ;
var rest = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quattuordecillion'];
function checkInput (test) { // eslint-disable-line no-unused-vars
  if (test === undefined) {
    var text = document.getElementById('input').value;
  } else {
    text = test;
  }
  var out = [];
  document.getElementById('output').innerHTML = '';
  if (text !== '') {
    var statement = text.split(/\d+/g);
    var numb = '';
    numb = text.match(/\d+/g) ? text.match(/\d+/g) : '';
    var i;
    for (i = 0; i < numb.length; i++) {
      out.push(find(numb[i]));
    }
  }
  var word = '';
  for (i = 0; i < statement.length; i++) {
  	if(out[i]!==undefined){
    	word=word+statement[i]+out[i].trim();
    }
    else{
    	word=word+statement[i];
    }    
  }
    word=word.replace("onest","first");
    word=word.replace("twond","second");
    word=word.replace("onest","first");
    word=word.replace("threerd","third");
    word=word.replace("fiveth","fifth");
    word=word.replace("nineth","ninth");
  document.getElementById('output').innerHTML = word;
  return (word);
}
function find (text) {
  var tex = '';
  if (Number(text) === 0) {
    tex = 'zero';
    return tex;
  }
  if (text.length > 48) {
    tex='Out of Limit';
    return tex;
  }
  var num = text;
  var j = 0;
  while (num.length > 0) {
    var ex = 0;
    if (num.length === 2) {
      ex = 1;
    }
    var last = num.substr(num.length - 3 + ex);
    tex = convert(last, j) + tex;
    num = num.substr(0, num.length - 3);
    j++;
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
var StringToNumb = function () {
  this.Values = {
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

  this.Multiply = {
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

  this.number = [];
  this.large = 0;
  this.small = 0;
  this.data = [];
};
StringToNumb.prototype.clear = function () {
  for (var i = 0; i < this.data.length; i++) {
    if (this.Values.hasOwnProperty(this.data[i]) || this.Multiply.hasOwnProperty(this.data[i])) {
      this.number.push(this.data[i]);
    }
  }
};
StringToNumb.prototype.conversion = function () {
  for (var i = 0; i < this.number.length; i++) {
    var each = this.number[i];
    var val = this.Values[each];
    if (val !== undefined) {
      this.small = this.small + val;
    } else if (each === 'hundred') {
      this.small = this.small * 100;
    } else {
      val = this.Multiply[each];
      if (val !== undefined) {
        this.large = this.large + this.small * val;
        this.small = 0;
      }
    }
  }
};
StringToNumb.prototype.splitter = function (input) {
  this.data = input.toLowerCase().split(/\s+/);
};

function convertIt (test) { // eslint-disable-line no-unused-vars
  if (test === undefined) {
    var input = document.getElementById('input2').value;
  } else {
    input = test;
  }
  var StringToNumber = new StringToNumb();
  StringToNumber.splitter(input);
  StringToNumber.clear();
  for (var i = 0; i < StringToNumber.data.length; i++) {
    StringToNumber.data[i];
  }
  StringToNumber.data
  StringToNumber.conversion();
  document.getElementById('output2').innerHTML += StringToNumber.large + StringToNumber.small;
  return StringToNumber.large + StringToNumber.small;
}
