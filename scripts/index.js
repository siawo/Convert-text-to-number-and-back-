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
    if (out[i] !== undefined) {
      word = word + statement[i] + out[i].trim();
    } else {
      word = word + statement[i];
    }
  }
  word = word.replace('onest', 'first');
  word = word.replace('twond', 'second');
  word = word.replace('onest', 'first');
  word = word.replace('threerd', 'third');
  word = word.replace('fiveth', 'fifth');
  word = word.replace('nineth', 'ninth');
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
    tex = 'Out of Limit';
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

var Values = {
  'zero': 0,
  'one': 1,
  'fisrt': 1,
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
  'quattuordecillion': 1e45,
  'hundreds': '100s',
  'thousands': '1000s',
  'millions': '1000000s'
};

// var input = 'While I was standing today morning at my bus stop, i saw thousands of buses passed by without stoping at my stop. Then suddenly one taxi stopped with a number plate WB Twelve D nine eight seven two. Two passengers were already inside and I was the third luckiest one to get inside. I reached office at nine thirty today morning.';

var large, small, input;
var statement = [];
var data = [];
var dataOut = [];

function convertIt (test) { // eslint-disable-line no-unused-vars
  // input=document.getElementById('input2').value;
  if (test === undefined) {
    input = document.getElementById('input2').value;
  } else {
    input = test;
  }
  var text1 = input.replace(/\./g, ' . ');
  text1 = text1.replace(/;/g, ' ; ');
  text1 = text1.replace(/-/g, ' - ');
  text1 = text1.replace(/\//g, ' / ');
  text1 = text1.replace(/\?/g, ' ? ');
  text1 = text1.replace(/:/g, ' : ');
  text1 = text1.replace(/"/g, ' " ');
  text1 = text1.replace(/,/g, ' , ');
  text1 = text1.replace(/@/g, ' @ ');

  var ans = text1.split(/\s+/);
  statement = [];
  data = [];
  dataOut = [];
  extraction(ans);
  large = 0;
  small = 0;
  // console.log(statement);
  // console.log(data);
  for (var i = 0; i < data.length; i++) {
    var dsplit = data[i].toLowerCase().split(/\s+/);
    // console.log(dsplit);
    /* var j=0;
      var texz="";
      while(j<dsplit.length)
      {
        if(values[j]!==undefined && values[j+1]!==undefined)
        {
          if(values[j].toString().length<=values[j+1].toString().length)
          conversion(dsplit[i]);
          texz+=(large+small).toString();
          j++;

        }
      } */
    dsplit.forEach(conversion);
    dataOut.push(large + small);
    // console.log(large+small);
    large = 0;
    small = 0;
  }
  var word = '';
  var len = statement.length > dataOut.length ? statement.length : dataOut.length;
  for (i = 0; i < len; i++) {
    if (dataOut[i] !== undefined && statement[i] !== undefined) {
      word = word + statement[i] + dataOut[i] + ' ';
    } else if (dataOut[i] !== undefined) {
      word = word + dataOut[i];
    } else {
      word = word + statement[i];
    }
  }
  // console.log(word);

  document.getElementById('output2').innerHTML = word;
  return word;
}

function conversion (each) {
  var val = Values[each];
  if (val !== undefined) {
    small = small + val;
  } else if (each === 'hundred') {
    small = small * 100;
  } else {
    val = Multiply[each];
    if (val !== undefined && (typeof val) === 'number') {
      large = large + small * val;
      small = 0;
    } else if ((typeof val) === 'string') {
      large = val;
      small = '';
    }
  }
}
function extraction (ans) {
  var words = '';
  var dats = '';
  var j = 0;
  var k = 0;
  var i = 0;
  while (i < ans.length) {
    if (Values[ans[i].toLowerCase()] !== undefined || Multiply[ans[i].toLowerCase()] !== undefined /* || (ans[i]==='and' && Values[ans[i+1]]!==undefined) */) {
      if (k === 0) {
        if (words !== '') {
          statement.push(words);
          words = '';
          j = 0;
        }
        if (i === 0) {
          statement.push('');
        }
        dats += ans[i] + ' ';
        k++;
        i++;
      } else {
        dats += ans[i] + ' ';
        k++;
        i++;
      }
    } else {
      if (j === 0) {
        if (dats !== '') {
          data.push(dats);
          dats = '';
          k = 0;
        }
        words += ans[i] + ' ';
        j++;
        i++;
      } else {
        words += ans[i] + ' ';
        j++;
        i++;
      }
    }
  }
  if (words !== '') {
    statement.push(words);
    words = '';
  }
  if (dats !== '') {
    data.push(dats);
  }
}
