
function proiz(a, b) {
    return a * b;
 }
 
describe('function tests', () => {
    it('should return 10 for arguments 2 and 5', () => {
       expect(proiz(2, 5)).toBe(10);
    });
 });