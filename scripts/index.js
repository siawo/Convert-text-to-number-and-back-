
var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
var mid = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']; ;
var rest = ['', 'thousand', 'million', 'billion','trillion','quadrillion','quintillion','sextillion','septillion','octillion','nonillion','decillion','undecillion','duodecillion','tredecillion','quattuordecillion'];
function checkInput () { // eslint-disable-line no-unused-vars
  var text = document.getElementById('input').value;
  document.getElementById('output').innerHTML = '';
  if (text !== '') {
    find(text);
  }
}
function find (text) {
  var numb = text.match(/\d+/g);
  //console.log(numb);
  for (var i = 0; i < numb.length; i++) {
  	var tex = '';
    if (Number(numb[i]) === 0) {
      //document.getElementById('output').innerHTML += ' zero';
      tex='zero';
      document.getElementById('output').innerHTML += '<br />' + tex;
      continue;

    }
    if (numb[i].length > 48) {
    	document.getElementById('output').innerHTML += 'Out of Limit';
      continue;
    }
    var num = numb[i];
    //console.log( numb[i]);
    var j = 0;
    while (num.length > 0) {
    	var ex=0;
    	if(num.length===2)
    	{
    		ex=1;
    	}
      var last = num.substr(num.length-3 + ex);
      //console.log( last);
      tex = convert(last, j) + tex;
      num = num.substr(0,num.length-3);
      j++;
    }
    document.getElementById('output').innerHTML += '<br />' + tex;
  }
  return tex;
}
function convert (last, j) {
  var text = '';
  last=Number(last);
  while (last > 0) {
    if (last > 99) {
      var digit = Math.floor(last / 100);
      text += ' ' + ones[digit] + ' hundred';
      last = (last % 100) ;
    } else if (last >= 20 && last <= 99) {
    	if (text!=="" && j===0)
    	{
    		text+=" and";
    	}
      digit = Math.floor(last / 10);
      text += ' ' + tens[digit];
      last = last%10;
      text += ' ' + ones[last];
       last = 0;
    } else if (last < 20 && last > 10) {
    	if (text!=="" && j===0)
    	{
    		text+=" and";
    	}
        text += ' ' + mid[last - 10];
        last = 0;
      }
      else
      {
      	text += ' ' + ones[last];
       last = 0;
      }   
  }
  if(text!=='')
  {	
  	text += ' ' + rest[j];
  }
  return text;
}

