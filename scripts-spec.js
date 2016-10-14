
describe('function getInfo', function() {
	it('finds Billy Bob', function() {
		var person = getInfo("Billy","Bob");
		expect(person[0].id).toEqual("272822514");
	});
});


describe('function getDescendants', function() {
	it('finds the children and grandchildren', function() {
		var descendants = getDescendants("313997561");
		expect(descendants[0].id).toEqual("313998000");
	});
});


describe('function getDescendants', function() {
	it('finds the children and grandchildren', function() {
		var descendants = getDescendants("888201200");
		expect(descendants[0].id).toEqual("822843554");
	});
});


describe('function getParents', function() {
	it('finds the children of the person searched', function() {
		var joey = {
		    "id": "313998000",
		    "firstName": "Joey",
		    "lastName": "Madden",
		    "gender": "female",
		    "dob": "2/02/1987",
		    "height": 67,
		    "weight": 100,
		    "eyeColor": "blue",
		    "occupation": "doctor",
		    "parents": [313207561, 313997561],
		    "currentSpouse": null}
		var parents = getParents(joey);
		expect(parents[0][1]).toEqual([313207561][313997561]);
	});
});


describe('function getParents', function() {
	it('finds the children of the person searched', function() {
		var dave = {
		"id": "294874671",
	    "firstName": "Dave",
	    "lastName": "Pafoy",
	    "gender": "male",
	    "dob": "8/5/1967",
	    "height": 61,
	    "weight": 112,
	    "eyeColor": "green",
	    "occupation": "doctor",
	    "parents": [629807187, 464142841]}
		var parents = getParents(dave);
		expect(parents[0][1]).toEqual([629807187][464142841]);
	});
});


describe('function getSpouse', function() {
	it('finds the spouse of the person you are searching for', function() {
		var billy = 
			{"id": "272822514",
		    "firstName": "Billy",
		    "lastName": "Bob",
		    "gender": "male",
		    "dob": "1/18/1949",
		    "height": 71,
		    "weight": 175,
		    "eyeColor": "brown",
		    "occupation": "programmer",
		    "parents": [],
		    "currentSpouse": "401222887"}
		var currentSpouse = getSpouse(billy);
		expect(currentSpouse.firstName).toEqual("Uma");
	});
});


describe('function getSpouse', function() {
	it('finds the spouse of the person you are searching for', function() {
		var mattias = {
			"id": "313207561",
		    "firstName": "Mattias",
		    "lastName": "Madden",
		    "gender": "male",
		    "dob": "2/19/1966",
		    "height": 70,
		    "weight": 110,
		    "eyeColor": "blue",
		    "occupation": "assistant",
		    "parents": [693243224, 888201200],
		    "currentSpouse": 313997561}
		var currentSpouse = getSpouse(mattias);
		expect(currentSpouse.firstName).toEqual("Ellen");
	});
});


describe('function getSiblings', function() {
	it('finds two peoples shared parent ids', function() {
		var sister = {
		    "id": "819168108",
		    "firstName": "Hana",
		    "lastName": "Madden",
		    "gender": "female",
		    "dob": "10/7/1953",
		    "height": 70,
		    "weight": 187,
		    "eyeColor": "brown",
		    "occupation": "politician",
		    "parents": [693243224, 888201200]}
		var sibling = getSiblings(sister);
		expect(sibling.length).toEqual(3);
		expect(sibling[0].id).toEqual("822843554");
	});
});


describe('function getChildren', function() {
	it('finds the children of the person you are searching for', function() {
		var parent = 
		{"id": "313997561",
    	"firstName": "Ellen",
    	"lastName": "Madden",
    	"gender": "female",
    	"dob": "2/19/1970",
    	"height": 67,
    	"weight": 100,
    	"eyeColor": "blue",
   		"occupation": "doctor",
    	"parents": [],
    	"currentSpouse": 313207561}
    	var children = getChildren(parent);
		expect(children[0].id).toEqual("313998000");
	});
});


describe('function getOldestKin', function() {
	it('finds the oldest person related to whoever is being searched for', function() {
		var regina = {
			"id": "822843554",
		    "firstName": "Regina",
		    "lastName": "Madden",
		    "gender": "female",
		    "dob": "7/26/1959",
		    "height": 71,
		    "weight": 249,
		    "eyeColor": "brown",
		    "occupation": "nurse",
		    "parents": [693243224, 888201200],
		    "currentSpouse": null
		};
		var oldest = getOldestKin(regina);
		expect(oldest.id).toEqual("888201200");
	});
});


