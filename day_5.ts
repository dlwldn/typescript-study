// Pick 만들어보기
// interface Profile {
//     name: string;
//     age: number;
//     isMarried: boolean;
// }
// type P<T, S extends keyof T> = {
//     [Key in S]?: T[Key];
// }
// const person: Profile = {
//     name: 'jiwoo',
//     age: 9999,
//     isMarried: true,
// }
// const person2: P<Profile, 'name' | 'age'> = {
//     name: 'jee',
//     age: 399,
// }


// Exclude, Extract
// type Exc<T, U> = T extends U ? never : T;
// type Ext<T, U> = T extends U ? T : never;
// type Animal = 'Cat' | 'Dog' | 'Human';
// type A = Exc<Animal, 'Cat'>; // Cat을 제외한 나머지 두개가 됨
// type B = Ext<Animal, 'Dog' | 'Human'> // Dog와 Human을 포함하게 됨


// Required, Record, NonNullable
// interface Profile {
//     name: string,
//     age: number,
//     married?: boolean,
// }
// type R<T> = {
//     [Key in keyof T]-?: T[Key] // -? : 옵셔널을 제거하는것.
// }
// const person: R<Profile> = { // Required - 키값을 필수값으로 모두 바꿔서 검사. 즉 married가 없어서 에러남
//     name: 'jiwoo',
//     age: 26,
// }
// interface Obj {
//     [key: string]: number;
// }
// type R<T extends keyof any, S> = { // extends keyof any 하면 string | number | symbol 이렇게 조건 제한을 줄 수 있다. 왜 주느냐? (T 자리에 아무거나 들어오면 안되기 때문)
//     [Key in T]: S;
// }
// const a: R<string, number> = { a: 5, b: 3 }; // Record - 객체를 지정된 제네릭의 키와 벨류의 타입으로 만든다.
// type IncludeNull = string | null | undefined;
// const a: NonNullable<IncludeNull> = 'sssss'; // NonNullable - a는 string만 허용된다. 


// Parameters, ReturnType
// function zip(x: number, y: string, z:boolean): { x: number } {
//     return { x }
// }
// type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
// type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any

// type P = Parameters<typeof zip>; // [number, string, boolean] 배열형태로.
// type R = ReturnType<typeof zip>; // { x: number } 리턴형태 그대로.