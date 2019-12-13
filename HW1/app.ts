//2)реализовать метод который принимает число натуральное(int >0)и выдает массив чисел фибоначи до заданного числа
// fn(2) => [1,1]
// fn(4) => [1,1,2,3]
function fn(num: number): Array<number> {
    let arr: Array<number> = [1];
    for (let i:number = 1; i <= num; i = arr[arr.length - 1] + arr[arr.length - 2]) {
        arr.push(i);
    }
    return arr;
}

console.log(fn(60));


//1)реализовать метод принимающий строку и возвращающий является ли она полиндромом
function isPalindrome(str: string): boolean {
    let strReverse: string = str.split('').reverse().join('');
    return strReverse === str;
}

console.log(isPalindrome('abba'));

