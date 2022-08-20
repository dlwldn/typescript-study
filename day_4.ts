// 오버로딩 
// declare function add(x: number, y: number): number;
// declare function add(x: number, y: number, z: number): number;
// declare function add(x: string, y: number, z: number): number;

// add(1,2);
// add(2,3,4);
// add('2',3,4);


// type이 unknown으로 나올때 as를 사용해도 됨 하지만 사람이 정의하는거기 때문에 as 쓰는건 별로 추천 안함. - 타입가드를 추천! (ex: axios error 부분)
// interface Axios {
//     get: () => void;
// }
// declare const axios: Axios;
// interface CustomError extends Error {
//     response?: {
//         data?: any
//     }
// }
// class CustomError extends Error {
//     response?: {
//         data: any
//     }
// }
// const fetchData = async () => {
//     try {
//         await axios.get();
//     } catch (err) {
//         if(err instanceof CustomError) { // 타입가드
//             const customError = err;
//             console.log(customError.response?.data);
//         }
//     }
// }
 

// Partial 타입 만들어보기
// interface Profile {
//     name: string;
//     age: number;
//     isMarried: boolean;
// }

// type P<T> = {
//     [Key in keyof T]?: T[Key];
// }

// const person: Profile = {
//     name: 'jiwoo',
//     age: 9999,
//     isMarried: true,
// }
// const person2: P<Profile> = {
//     name: 'jee',
// }