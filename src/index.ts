const findClosestToZero = (numbers: number[]) => {

    //undefined or any false args are impossible because of ts so we only test 0    
    const closestToZero : number = numbers.reduce((actualClosest: number, maybeTheClosest: number) => {        
        if (Math.abs(maybeTheClosest) < Math.abs(actualClosest) || Math.abs(actualClosest) === 0) {
            return Math.abs(maybeTheClosest);
        }
        else return actualClosest
    }, 0);
    return closestToZero;
}

export { findClosestToZero };