
describe('function getInfo', function() {
	it('finds Billy Bob', function() {
		var person = getInfo("Billy","Bob");
		expect(person.id).toEqual("272822514");
	});
});


describe('function getDescendants', function() {
	it('finds the children and grandchildren', function() {
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
			"currentSpouse": 313997561
	}
		var descendants = getDescendants(mattias);
		expect(descendants[0].id).toEqual("313998000");
	});
});


describe('function getDescendants', function() {
		var mader = {
			"id": "888201200",
			"firstName": "Mader",
			"lastName": "Madden",
			"gender": "male",
			"dob": "5/6/1937",
			"height": 76,
			"weight": 205,
			"eyeColor": "black",
			"occupation": "landscaper",
			"parents": [],
			"currentSpouse": 888201200
		}
	it('finds the children and grandchildren', function() {
		var descendants = getDescendants(mader);
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

describe('function getSpouse', function() {
	it('finds the spouse of the person you are searching for', function() {
		var jill = {
			"id": "878013758",
    		"firstName": "Jill",
   			"lastName": "Pafoy",
    		"gender": "Bob",
   		    "dob": "2/8/1972",
   		    "height": 74,
   		    "weight": 118,
   		    "eyeColor": "brown",
   		    "occupation": "programmer",
   		    "parents": [401222887, 401222887],
   		    "currentSpouse": 294874671}
		var currentSpouse = getSpouse(jill);
		expect(currentSpouse.firstName).toEqual("Dave");
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

describe('function getSiblings', function() {
	it('finds two peoples shared parent ids', function() {
		var sister = {
		    "id": "931247228",
		    "firstName": "Amii",
		    "lastName": "Pafoy",
		    "gender": "female",
		    "dob": "3/13/1963",
		    "height": 74,
		    "weight": 184,
		    "eyeColor": "brown",
		    "occupation": "landscaper",
		    "parents": [629807187, 464142841],
		    "currentSpouse": null}
		var sibling = getSiblings(sister);
		expect(sibling[0].id).toEqual("348457184");
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

describe('function getChildren', function() {
	it('finds the children of the person you are searching for', function() {
		var parent = 
		{"id": "401222887",
		"firstName": "Uma",
		"lastName": "Bob",
		"gender": "female",
		"dob": "4/1/1947",
		"height": 65,
		"weight": 162,
		"eyeColor": "brown",
		"occupation": "assistant",
		"parents": [],
		"currentSpouse": "272822514"}
    	var children = getChildren(parent);
		expect(children[0].id).toEqual("878013758");
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

describe('function filterCharacteristics', function() {
	it('returns person based on eye color searched', function() {
		var dataObject = [{
			"id": "313998000",
			"firstName": "Joey",
			"lastName": "Madden",
			"gender": "female",
			"dob": "2/02/1987",
			"height": 67,
			"weight": 100,
			"eyeColor": "brown",
			"occupation": "doctor",
			"parents": [313207561, 313997561],
			"currentSpouse": null},
			{
			"id": "159819275",
			"firstName": "Jasmine",
			"lastName": "Bob",
			"gender": "female",
			"dob": "12/18/1969",
			"height": 58,
			"weight": 156,
			"eyeColor": "blue",
			"occupation": "assistant",
			"parents": [409574486, 260451248],
			"currentSpouse": 951747547
			}];
		 var query = {
		 	"eyeColor": "blue",
		 	"age": null,
		 	"height": null,
		 	"weight": null,
		 	"occupation": null
		 }
		var searchedInfo = filterCharacteristics(query, dataObject);
		console.log(searchedInfo.length);
		expect(searchedInfo[0].id).toEqual("159819275");

	});
});

describe('function filterCharacteristics', function() {
	it('returns person based on age searched', function() {
		var dataObject = [{
			"id": "313998000",
			"firstName": "Joey",
			"lastName": "Madden",
			"gender": "female",
			"dob": "2/02/1987",
			"height": 67,
			"weight": 100,
			"eyeColor": "brown",
			"occupation": "doctor",
			"parents": [313207561, 313997561],
			"currentSpouse": null},
			{
			"id": "159819275",
			"firstName": "Jasmine",
			"lastName": "Bob",
			"gender": "female",
			"dob": "12/18/1969",
			"height": 58,
			"weight": 156,
			"eyeColor": "blue",
			"occupation": "assistant",
			"parents": [409574486, 260451248],
			"currentSpouse": 951747547
			}];
		 var query = {
		 	"eyeColor": null,
		 	"age": 46,
		 	"height": null,
		 	"weight": null,
		 	"occupation": null
		 }
		var searchedInfo = filterCharacteristics(query, dataObject);
		console.log(searchedInfo.length);
		expect(searchedInfo[0].id).toEqual("159819275");

	});
});

describe('function filterCharacteristics', function() {
	it('returns person based on heigh in inches searched', function() {
		var dataObject = [{
			"id": "313998000",
			"firstName": "Joey",
			"lastName": "Madden",
			"gender": "female",
			"dob": "2/02/1987",
			"height": 67,
			"weight": 100,
			"eyeColor": "brown",
			"occupation": "doctor",
			"parents": [313207561, 313997561],
			"currentSpouse": null},
			{
			"id": "159819275",
			"firstName": "Jasmine",
			"lastName": "Bob",
			"gender": "female",
			"dob": "12/18/1969",
			"height": 58,
			"weight": 156,
			"eyeColor": "blue",
			"occupation": "assistant",
			"parents": [409574486, 260451248],
			"currentSpouse": 951747547
			}];
		 var query = {
		 	"eyeColor": null,
		 	"age": null,
		 	"height": 58,
		 	"weight": null,
		 	"occupation": null
		 }
		var searchedInfo = filterCharacteristics(query, dataObject);
		console.log(searchedInfo.length);
		expect(searchedInfo[0].id).toEqual("159819275");

	});
});

describe('function filterCharacteristics', function() {
	it('returns person based on weight in pounds searched', function() {
		var dataObject = [{
			"id": "313998000",
			"firstName": "Joey",
			"lastName": "Madden",
			"gender": "female",
			"dob": "2/02/1987",
			"height": 67,
			"weight": 100,
			"eyeColor": "brown",
			"occupation": "doctor",
			"parents": [313207561, 313997561],
			"currentSpouse": null},
			{
			"id": "159819275",
			"firstName": "Jasmine",
			"lastName": "Bob",
			"gender": "female",
			"dob": "12/18/1969",
			"height": 58,
			"weight": 156,
			"eyeColor": "blue",
			"occupation": "assistant",
			"parents": [409574486, 260451248],
			"currentSpouse": 951747547
			}];
		 var query = {
		 	"eyeColor": null,
		 	"age": null,
		 	"height": null,
		 	"weight": 156,
		 	"occupation": null
		 }
		var searchedInfo = filterCharacteristics(query, dataObject);
		console.log(searchedInfo.length);
		expect(searchedInfo[0].id).toEqual("159819275");

	});
});

describe('function filterCharacteristics', function() {
	it('returns person based on occupation searched', function() {
		var dataObject = [{
			"id": "313998000",
			"firstName": "Joey",
			"lastName": "Madden",
			"gender": "female",
			"dob": "2/02/1987",
			"height": 67,
			"weight": 100,
			"eyeColor": "brown",
			"occupation": "doctor",
			"parents": [313207561, 313997561],
			"currentSpouse": null},
			{
			"id": "159819275",
			"firstName": "Jasmine",
			"lastName": "Bob",
			"gender": "female",
			"dob": "12/18/1969",
			"height": 58,
			"weight": 156,
			"eyeColor": "blue",
			"occupation": "assistant",
			"parents": [409574486, 260451248],
			"currentSpouse": 951747547
			}];
		 var query = {
		 	"eyeColor": null,
		 	"age": null,
		 	"height": null,
		 	"weight": null,
		 	"occupation": "assistant"
		 }
		var searchedInfo = filterCharacteristics(query, dataObject);
		console.log(searchedInfo.length);
		expect(searchedInfo[0].id).toEqual("159819275");

	});
});


//^^ test five times to test each characteristic

// describe('function getAge', function() {
// 	it ('finds the age of the person searched based on birth date', function() {
// 		var  =
// 	}
// }






