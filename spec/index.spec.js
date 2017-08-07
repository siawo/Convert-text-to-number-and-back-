describe("",function(){
	beforeAll(function(){
	var html='<input type="text" id="input" ><button type="button" id="b1" onclick="checkInput()">Enter a text</button><input type="text" id="input2" ><button type="button" id="b2" onclick="convertIt()">Enter a number</button> <br><p id="output"></p><br><p id="output2"></p>';
	document.body.insertAdjacentHTML('afterbegin', html);
	});
	describe("Number in words",function(){
		it("",function(){
			expect(checkInput("99")).toBe("ninety nine ");
			expect(checkInput("999")).toBe("nine hundred and ninety nine ");
			expect(checkInput("16")).toBe("sixteen ");
			expect(checkInput('0')).toBe('zero ');
			expect(checkInput('116')).toBe('one hundred and sixteen ');
			expect(checkInput('I have 9 apples')).toBe('I have nine apples ');
			expect(checkInput('123456789')).toBe('one hundred twenty three million four hundred fifty six thousand seven hundred and eighty nine ');
			expect(checkInput('1234567890123456789012345678901234567890123456789')).toBe(' ');

		})
	})
	describe("Words to number",function(){
		it("",function(){
			expect(convertIt("ninety nine")).toBe(99);
			expect(convertIt("nine hundred and ninety nine")).toBe(999);
			expect(convertIt("five")).toBe(5);
			expect(convertIt("one hundred")).toBe(100);
			expect(convertIt(undefined)).toBe(0);
			expect(convertIt("twelve million three hundred forty five thousand six hundred and seventy eight")).toBe(12345678);
		})
	})
	
})