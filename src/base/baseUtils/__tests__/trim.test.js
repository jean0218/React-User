import trim from '../trim';

test('Removal of space', function(){
    const string = '  233223334  ';
    return expect(trim(string)).toBe('233223334');
});