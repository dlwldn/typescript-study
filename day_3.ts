// filter 제네릭 분석
// interface ArrayFunction<T> {
//     filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
//     filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
// }

// const filtered = [1,2,3,4,5].filter(value => value % 2); // 1. 잘 찾는다
// const filtered2 = [1,'2',3,'4',5].filter(value => typeof value === 'string' ); // 2. 결과가 string | number 로 나와서 잘 못찾는다.

// 2번째의 해결방법
// const predicate = (value: string | number): value is string => typeof value === 'string';
// const filtered3 = [1,'2',3,'4',5].filter(predicate); // 결과가 string | number 로 나와서 잘 못찾는다.

// forEach, map, filter 만들어보기
// interface Arr<T> {
//     // forEach(callback: (item: T)=> void): void;   
//     forEach(callback: (value: T) => void): void;
//     map<S>(callback: (value: T) => S): S[];
//     filter<S extends T>(callback: (value: T) => value is S ): S[];
// }

// const a: Arr<number> = [1,2,3];
// const result1 = a.forEach((item)=> {
//     console.log(item);
// })

// const b: Arr<number> = [1,2,3];
// const result2 = b.map<string>((item) => {
//     return String(item) ;
// })

// const c: Arr<number | string> = [1,2,3,'4','5'];
// const result3 = c.filter<string>((item): item is string => {
//     return item === '5'
// })

// 공변성, 반공변성
// function a(x: string): string  {
//     return x
// }
// type A = (x: string) => string | number;
// const b: A = a; // 리턴값은 더 좁은값은 대입이 되고, 더 넓은값은 대입이 안된다. 


// function c(x: string | number ): number {
//     return +x;
// }
// type C = (x: string ) => number;
// const d: C = c; // 매개변수는 더 넓은값은 대입이 되고, 더 좁은값은 대입이 안된다.
// // 결국 리턴값만 맞으면 통과
