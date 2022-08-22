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
