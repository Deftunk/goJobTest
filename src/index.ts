const findClosestToZero = (numbers: number[]): number => {
    // Undefined or any false args are impossible because of ts so we only test 0
    // This reduce can be shorter but readability is important
    return numbers.reduce((actualClosest: number, maybeTheClosest: number) => {
        return isCloserToZero(maybeTheClosest, actualClosest) ? maybeTheClosest : actualClosest
    }, 0);
}

const isCloserToZero = (number1: number, number2: number): boolean => {
    return Math.abs(number1) < Math.abs(number2) || Math.abs(number2) === 0
}

export { findClosestToZero };