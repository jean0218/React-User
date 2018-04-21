import arrayIsEquality from '../arrayIsEquality';

test('Array is unequal', function(){
    const arr1 = [{
            firstName: "enrique",
            lastName: "shaw",
            gender: "male",
            id: "No01"
        }, {
            firstName: "aitor",
            lastName: "vicente",
            gender: "male",
            id: "No02"
        }],
        arr2 = [{
                firstName: "enrique",
                lastName: "shaw",
                gender: "male",
                id: "No01"
            },{
                firstName: "aitor",
                lastName: "vicente",
                gender: "male",
                id: "No02"
            }, {
                firstName: "ellen",
                lastName: "kilpela",
                gender: "female",
                id: "No03"
            }];
    return expect(arrayIsEquality(arr1, arr2)).toBe(true);
});

test('Array equality', function(){
    const arr1 = [{
            firstName: "enrique",
            lastName: "shaw",
            gender: "male",
            id: "No01"
        }, {
            firstName: "aitor",
            lastName: "vicente",
            gender: "male",
            id: "No02"
        }],
        arr2 = [{
            firstName: "enrique",
            lastName: "shaw",
            gender: "male",
            id: "No01"
        }, {
            firstName: "aitor",
            lastName: "vicente",
            gender: "male",
            id: "No02"
        }];
    return expect(arrayIsEquality(arr1, arr2)).toBe(false);
})






