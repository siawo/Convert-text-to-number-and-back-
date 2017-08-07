describe("",function(){
	beforeAll(function(){
	var html='<input type="text" id="input" ><button type="button" onclick="checkInput()">Enter a text</button><input type="text" id="input2" ><button type="button" onclick="stringToNum()">Enter a number</button> <br><p id="output"></p><br><p id="output2"></p>';
	document.body.insertAdjacentHTML('afterbegin', html);
	});
	describe("Number in words",function(){
		it("",function(){
			expect(checkInput("99")).toBe(" ninety nine ");
			expect(checkInput("999")).toBe(" nine hundred and ninety nine ");
			expect(checkInput("16")).toBe(" sixteen ");
			expect(checkInput('0')).toBe('zero');
			expect(checkInput('116')).toBe(' one hundred and sixteen ');
			expect(checkInput('9')).toBe(' nine ');
			expect(checkInput('')).toBe(undefined);
			expect(checkInput(undefined)).toBe(undefined);
			expect(checkInput('123456789')).toBe(' one hundred twenty three million four hundred fifty six thousand seven hundred and eighty nine ');
			expect(checkInput('1234567890123456789012345678901234567890123456789')).toBe('');

		})
	})
	describe("Words to number",function(){
		it("",function(){
			expect(stringToNum("ninety nine")).toBe(99);
			expect(stringToNum("nine hundred and ninety nine")).toBe(999);
			expect(stringToNum("five")).toBe(5);
			expect(stringToNum("one hundred")).toBe(100);
			expect(stringToNum(undefined)).toBe(0);
			expect(stringToNum("twelve million three hundred forty five thousand six hundred and seventy eight")).toBe(12345678);
		})
	})
	
})