describe("",function(){
	beforeAll(function(){
	var html='<input type="text" id="input" ><button type="button" onclick="checkInput()">Enter a text</button><input type="text" id="input2" ><button type="button" onclick="stringToNum()">Enter a number</button> <br><p id="output"></p><br><p id="output2"></p>';
	document.body.insertAdjacentHTML('afterbegin', html);
	});
	describe("",function(){
		it("",function(){
			//document.getElementById('input').value="99";
			//document.getElementById('b1').onclick(checkInput());
			expect(find("99")).toBe(" ninety nine ");
			expect(find("999")).toBe(" nine hundred and ninety nine ");
			expect(find("16")).toBe(" sixteen ");
			expect(find('0')).toBe('zero');
			expect(find('116')).toBe(' one hundred and sixteen ');
			expect(find('9')).toBe(' nine ');
			expect(find('123456789')).toBe(' one hundred twenty three million four hundred fifty six thousand seven hundred and eighty nine ');
			expect(find('1234567890123456789012345678901234567890123456789')).toBe('');

		})
	})
	
})