// describe('function addSixTo', function() {
// 	it('add 6 to 2', function() {
// 		expect(addSixTo(2)).toEqual(8);
// 	});
// });

describe('function getInfo', function() {
	it('finds Billy Bob', function() {
		var person = getInfo("Billy","Bob");
		expect(person[0].id).toEqual("272822514");
	});
});