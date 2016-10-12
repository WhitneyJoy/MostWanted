
describe('function getInfo', function() {
	it('finds Billy Bob', function() {
		var person = getInfo("Billy","Bob");
		expect(person[0].id).toEqual("272822514");
	});
});
//^^THIS ONE WORKS

describe('function getDescendants', function() {
	it('finds the children and grandchildren', function() {
		var descendants = getDescendants("313997561");
		expect(descendants[0].id).toEqual("313998000");
	});
});
//^^THIS ONE WORKS

describe('function getParents', function() {
	it('finds the people with children', function() {
		var parents = getParents("Joey Madden");
		expect(parents.id).toEqual("Mattias Madden");
	});
});
//^^THIS ONE DOES NOT WORK

describe('function getSpouse', function() {
	it('finds the spouse of the person you are searching for', function() {
		var spouse = getSpouse("313997561");
		expect(spouse.id).toEqual("313997561");
	});
});
//^^THIS ONE WORKS

describe('function getSiblings', function() {
	it('finds two peoples shared parent ids', function() {
		var siblings = getSiblings("Amii Pafoy");
		expect(siblings.name.toEqual("Dave Pafoy");
	});
});
//^^THIS ONE DOES NOT WORK

