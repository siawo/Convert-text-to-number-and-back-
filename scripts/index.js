var ones=['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var mid=['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tens=['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
var rest=['hundred','thousand','million','billion'];
function checkInput(){
	var text=document.getElementById('input').value;
	var texts=document.getElementById('texts').checked;
	var numbers=document.getElementById('numbers').checked;
	//console.log(text,texts,numbers);
	if (text!=="" && (texts || numbers))
	{
		find(text,texts,numbers);
	}
}
function find(text,texts,numbers){
	var numb=text.match(/\d+/g);
	for(var i=0;i<numb.length;i++)
	{
		if(Number(numb[i])==0)
		{
			document.getElementById('output').innerHTML+=" zero";
			i++;
		}
		var num=numb[i];
		var j=0;
		while(num>0)
		{
			var last=num%1000;
			convert(last,j);
			num=Math.floor(num/1000);
			j++;

		}
	}
}
function convert(last,j){
var text="";

}