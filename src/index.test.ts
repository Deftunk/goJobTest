import { findClosestToZero } from './'

describe('Oh ! Looks like there is a new project here', () => {
    describe('Let\'s test hello world', () => {
        it('Should "Hello world !" to be "Hello world !" ', () => {
            expect("Hello world !").toBe("Hello world !");
        })
    })

    describe('let\'s find those numbers ', () => {        
        it('should return 0 if we try with 0', () => {
            expect(findClosestToZero([0])).toBe(0);
        })

        it('should return 0 if we try with []', () => {
            expect(findClosestToZero([])).toBe(0);
        })

        it('should return 5 for [8, 5, 10]', () => {
            expect(findClosestToZero([8, 5, 10])).toBe(5);
        })
        it('should return 1 for [5, 4, -9, 6, -10, -1, 8]', () => {
            expect(findClosestToZero([5, 4, -9, 6, -10, -1, 8])).toBe(-1);
        });
    })
});