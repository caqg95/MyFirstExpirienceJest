
export const fizzBuzz = (limit) => {
   if(limit <= 0) {
       throw new Error('Limit should be greater than 0')
   }
   const result = [];
   for (let i = 1; i <= limit; i++) {
       result.push(fizzOrBuzz(i))
   }
   return result;
}

export const fizzOrBuzz = (i) => {
   if (i % 3 === 0 && i % 5 === 0)
       return 'fizzbuzz';
   if (i % 3 === 0)
       return 'fizz';
   if (i % 5 === 0)
       return 'buzz';
   return i;
}