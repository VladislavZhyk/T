
function sum(a, b) {
    return a + b;
 }
 
describe('function tests', () => {
    it('should return 3 for arguments 1 and 2', () => {
       expect(sum(1, 2)).toBe(3);
    });
 });