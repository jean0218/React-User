import getArrIndex from '../getArrIndex';

test('get array index', function(){
    const arr = [{
        first:'peng',
        last:'lunjiao',
        id:"No1",
    },{
        first:'xia',
        last:'xiaoling',
        id:"No2",
    }];
    return expect(getArrIndex(arr, "No2")).toBe(1);
})