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