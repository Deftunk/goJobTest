import { findClosestToZero } from './'

describe('Oh ! Looks like there is a new project here', () => {
    describe('Let\'s test hello world', () => {
        it('Should "Hello world !" to be "Hello world !" ', () => {
            expect("Hello world !").toBe("Hello world !");
        })
    })

    describe('let\'s find those numbers ', () => {
        it('it should return 0', () => {
            expect(findClosestToZero([0])).toBe(0);
        })
    })
});