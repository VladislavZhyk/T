
function sred(a, b, c, d, e) {
    var sum = 0;
            sum = a + b + c + d + e;
            return sum / 5;
 }
 
describe('function tests', () => {
    it('should return 3 for arguments 1, 2, 2, 5 and 5', () => {
       expect(sred(1, 2, 2, 5, 5)).toBe(3);
    });
 });