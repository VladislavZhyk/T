
function plosh(a, b, c) {
    var sum = parseFloat(a) + parseFloat(b) + parseFloat(c);
   return Math.sqrt((sum / 2) * ((sum / 2) - a) * ((sum / 2) - b) * ((sum / 2) - c));
 }
 
describe('function tests', () => {
    it('should return 3 for arguments 2, 4 and 5', () => {
       expect(plosh(2, 4, 5)).toBe(3.799671038392666);
    });
 });