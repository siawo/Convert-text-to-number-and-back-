describe("",function(){
	beforeAll(function(){
	var html='<input type="text" id="input" ><button type="button" id="b1" onclick="checkInput()">Enter a text</button><input type="text" id="input2" ><button type="button" id="b2" onclick="convertIt()">Enter a number</button> <br><p id="output"></p><br><p id="output2"></p>';
	document.body.insertAdjacentHTML('afterbegin', html);
	});
	describe("Number in words",function(){
		it("",function(){
			expect(checkInput("99")).toBe("ninety nine");
			expect(checkInput("999")).toBe("nine hundred and ninety nine");
			expect(checkInput("16")).toBe("sixteen");
			expect(checkInput('0')).toBe('zero');
			expect(checkInput('116')).toBe('one hundred and sixteen');
			expect(checkInput('I have 9 apples')).toBe('I have nine apples');
			expect(checkInput('123456789')).toBe('one hundred twenty three million four hundred fifty six thousand seven hundred and eighty nine');
			expect(checkInput('1234567890123456789012345678901234567890123456789')).toBe('Out of Limit');

		})
	})
	describe("Words to number",function(){
		it("",function(){
			expect(convertIt("ninety nine")).toBe('99 ');
			expect(convertIt("nine hundred ninety nine")).toBe('999 ');
			expect(convertIt("five")).toBe('5 ');
			expect(convertIt("I have five apples")).toBe('I have 5 apples ');
			expect(convertIt("thousands")).toBe('1000s ');
			expect(convertIt("one hundred")).toBe('100 ');
			expect(convertIt(undefined)).toBe(' ');
			expect(convertIt("twelve million three hundred forty five thousand six hundred seventy eight")).toBe('12345678 ');
		})
	})
	
})