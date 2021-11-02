/**
 * fib(n), return nth number of the fibanacci sequence  
 */


/*
const fib = (n, memo = {}) => {
    if(n in memo) return memo[n];
    if(n <= 2){
     return 1
    }     
    memo[n] =  fib(n-1, memo) + fib(n-2, memo)
    return memo[n]
}

console.log(fib(6));
console.log(fib(50));
*/

/**
 * Travel on a 2D grid, begin with top left corner and end is bottom right corner, can move down and right 
 * In how many ways can you travel to the goal on a frid with dimensions m*n
 */

/*
const gridTraveller = (m, n, memo={}) =>{
    const key = m + ',' + n;
    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1 
     if (m ===0 || n ===0) return 0 
    
    memo[key] = gridTraveller(m -1, n, memo) + gridTraveller(m, n-1, memo)
    return memo[key]
}

console.log(gridTraveller(18, 18))


//Memoization  
/**
 * CanSum 
 */

/** 
const canSum = (targetSum, numbers, memo = {}) => {
    if(targetSum in memo ) return memo[targetSum]
    if(targetSum === 0) return true
    if(targetSum < 0) return false

    for(let num of numbers){
        const remainder = targetSum - num;
      if(canSum(remainder, numbers, memo) === true ) {
          memo[targetSum] = true;
          return true;
      }
        
    }
    memo[targetSum] = false;
    return false;
}


console.log(canSum(7, [2,3] ))

console.log(canSum(1000, [1, 15]))

console.log(canSum(1000, [2, 200, 100, 150]))

console.log(canSum(300, [7, 14]))


/**
 * Write a fucntion 'howSum(targetSum, numbers)' that takes in a targetsum and an array of numbers as arguments 
 * The function should return an array containing any combination of elements that add up to exactly the targetsum. if there is no combination that adds up to the targetsum, then return null.
 * 
 */

/*
const howSum = (targetSum, numbers, memo ={}) =>{
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 1) return null;

    for(let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers, memo);
        if(remainderResult !== null){
            memo[targetSum] = [...remainderResult, num]
            return memo[targetSum]
        }
    }
    memo[targetSum] = null;
    return null;
}

console.log(howSum(7, [2, 3]))

console.log(howSum(8, [2,3,5]))
console.log(howSum(300, [7,14, 12]))

console.log(howSum(500, [4,7,7]))

/**
 * Write a fuc ' bestSum(targetSum, numbers)' that takes in a targetSum and an array of numebrs as arguments.
 * the fucn should return an array containing the shortest combination of numbers that add up exactly the targetsum. 
 * If there is a tie for the shotrest combination you may return any one of the shortest
 */

/*
const bestSum = (targetSum, numbers, memo= {}) =>{
    if(targetSum in memo) return memo[targetSum]
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    let shortestCombi = null;

    for(let num of numbers){
        const remainder = targetSum - num;
        const remainderCombi = bestSum(remainder, numbers, memo);
        if(remainderCombi !== null){
            const combination = [...remainderCombi, num]
            if(shortestCombi === null || combination.length < shortestCombi.length){

                shortestCombi = combination;
            }
        }
    }
    memo[targetSum] = shortestCombi;
    return shortestCombi
}



console.log(bestSum(7,[5,3,4,7]))

console.log(bestSum(100, [1,2,3,4,5]))
*/

/**
 * Write a fucn canConstruct(target, wordBank) that accepts a target string and an array of strings 
 * The function should return a boolean indicating whether or not the target can be constructed by concatenating elements of the wordBank array 
 */

/*
const canConstruct = (target, wordBank, memo={}) =>{
    if(target in memo) return memo[target]
    if(target === ''){
        return true;
    }
    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank, memo) === true){
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}


console.log(canConstruct('abcd', ['ab', 'abc', 'def', 'cd'] ))

console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeesoseeeeeeeeeeeeeeeeeeee', ['e', 'eeew','eeeee', 'sos', 'eeeew'] ))


/**
 * Write a func countConstruct(target, wordBank) that accepts a target string and an array of strings.
 * The function should return the number of ways that the target can be constructed by concatenating elements of the wordBank array
 */

/*
const countConstruct = (target, wordBank, memo={}) =>{
    if(target in memo) return memo[target];
    if(target === '') return 1;

    let totalCount = 0;

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const noOfWays = countConstruct((target.slice)(word.length), wordBank, memo);
            totalCount += noOfWays;
        }
    }
    memo[target] = totalCount;
    return totalCount;
}




console.log(countConstruct('skatenoard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd','def', 'abcd']))

/**
 * Write a func allCoonstruct(target, wordBank) that accepts a target string and an array of strings.e
 * 
 * The fucnc should return a 2D array containing the all of the ways that the target can be constructed by concatenating elements of the wordBank array. Each element of the 2D array should represent one combination that constructs the target
 */

/*
const allConstruct = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target]
    if(target === '') return [[]];

    const result = [];
    for(let word of wordBank) {
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank, memo)
            const targetWays = suffixWays.map(way => [word, ...way])
            result.push(...targetWays)
        }

    }
    memo[target] = result
    return result
}


console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))

console.log(allConstruct('adcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))

console.log(allConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaasa', ['a', 'aa', 'asz', 'aaa', 'vv']))


/**
 * Write  a function fib(n) that takest in a number as arg the fucntion should return the n-th number of the finonacci sequence 
 */

//ITERATION 
/*
const fib = (n) =>{
    const table = Array(n+1).fill(0)
    table[1] = 1;
    for(let i = 0; i<= n; i++){
        table[i + 1] += table[i]
        table[i + 2] += table[i]
    }
    return table[n]
}


console.log(fib(6))
console.log(fib(50))

/**GirdTraveller */

/*
const gridTraveller = (m, n) =>{
    const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0))

    table[1][1] = 1;

    for(let i = 0; i<= m; i++){
        for(let j = 0; j<= n; j++){
            const current = table[i][j]
            if(j +1 <= n) table[i][j + 1] += current;
            if(i + 1 <= m ) table[i + 1][j] += current;

        }
    }
    return table[m][n];
}



console.log(gridTraveller(1, 1));

console.log(gridTraveller(18, 18))

/**
 * CanSum
 * Tabulation
 */

/* 
const canSum = (targetSum, numbers) =>{
    const table = Array(targetSum  + 1).fill(false);
    table[0] = true;
    for(let i = 0; i<= table.length; i++){
        if(table[i] === true){
            for(let num of numbers){
                table[ i = num] = true;
            }
        }
    }
    return table[targetSum]
}


console.log(canSum(7, [5, 3, 4, 7]))

console.log(canSum(100, [7, 14]))

/**
 * howSum
 */

/*
const howSum = (targetSum, numbers) =>{
    const table = Array(targetSum  + 1).fill(null)
    table[0] = [];

    for(let i = 0; i<= targetSum; i++){
        if(table[i] !== null){
            for(let num of numbers){
                table[i + num] = [...table[i], num ]
            }
        }
    }
    return table[targetSum]
}


console.log(howSum(7, [2, 3]))

console.log(howSum(7, [4, 2, 1]))

console.log(howSum(8, [2, 4]))

console.log(howSum(100, [7, 17]))


/**
 * BestSum
 */

/*
const bestSum = (targetSum, numbers) =>{
     const table = Array(targetSum + 1).fill(null);
     table[0] = [];

     for(let i = 0; i<= targetSum; i++){
         if(table[i] !== null){
             for(let num of numbers) {
                const combination = [ ...table[i], num];
                if(!table[i + num] || table[i + num].legnth > combination.length){
                    table[i + num] = combination
                }
             }
         }
     }
     return table[targetSum]
}


console.log(bestSum(7, [5, 3, 4, 7]));

console.log(bestSum(8, [2, 4, 6,7]))

console.log(bestSum(100, [ 25,1, 4, 6]))



/**
 * Write a fucn canConstruct(target, wordBank)
 */

/*
const canConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(false)
    table[0] = true;

    for(let i = 0; i<=target.length; i++) {
        if(table[i] === true) {
            for(let word of wordBank) {
                //if the word matches the characters 
                if(target.slice(i, i + word.length) === word){
                    table[i + word.length] = true;
                }
            }
        }
    }
    return table[target.length];
}




console.log(canConstruct('abcdef', ['ab', 'cd', 'abc', 'def', 'abcd']))


/**
 * countConstruct(target, wordBank)
 */


/** 
const countConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0)
    table[0] = 1;

    for(let i = 0; i < target.length; i++) {
        for(let word of wordBank){
            if(target.slice(i, i + word.length) === word){
                table[i + word.length] += table[i]
            }
        }
    }
    return table[target.length]
}


console.log(countConstruct('abcdef', ['ab', 'cd', 'abc', 'def', 'abcde']))

console.log(countConstruct('eeeeeeeeeeeeeerr', ['eeee', 'eeerr', 'eeeeeeeeeeeeeeee']))


/**
 * allConstruct(target, wordBank)
 */

/* 
const allConstruct = (target, wordBank) => {
    const table = Array(target.length + 1)
    .fill()
    .map(()=> [])

    table[0] = [[]];

    for( let i = 0; i < target.length; i++ ) {
        for(let word of wordBank) {
            if(target.slice(i, i + word.length) === word) {
                const newCombi = table[i].map(subArray => [...subArray, word])
                table[i + word.length].push(...newCombi)
            }
        }
    }
    return table[target.length]
}

console.log(allConstruct('purple', ['p', 'ur', 'purple', 'ple']))


console.log(allConstruct('wordwarcraft', ' wor', 'd', ',craft', 'dede', 'wa', 'r'))


