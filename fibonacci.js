export default function fibonacci(n){
    if (n == 0)
        return 0;
    if (n === 1)
        return 1;
    if (typeof n === "string"){
        throw new TypeError("Input must be a number");
    }
    
    if (n < 0){
        throw new Error("Input must be a 0 or a positive number");
    }

    if (!Number.isInteger(n)){
        throw new Error("Input should be a positive interger");
    }

    let prev = 0, curr = 1;
    for (let i = 2; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
} 