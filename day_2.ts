// 1) 타입 가드
// function numOrStr(a: number | string | number[]) {
//     if(typeof a === 'number') {
//         a.toFixed(2);  // 숫자만 
//     }

//     if(typeof a === 'string') {
//         a.charAt(3) // 문자만
//     }

//     if(Array.isArray(a)) {
//         a.map(item => item)
//     }
// }


// class A {
//     aaa() {}
// }
// class B {
//     bbb() {}
// }

// function aOrB(param: A | B) {
//     if(param instanceof A) {
//         param.aaa(); // A의 인스턴트만 범위로 지정됨
//     }
//     if(param instanceof B) {
//         param.bbb();  // B의 인스턴트만 범위로 지정됨
//     }
// }


// type B = { type: 'b', bbb: string };
// type C = { type: 'c', ccc: string };
// type D = { type: 'd', ddd: string };

// function typeCheck (a: B | C | D) {
//     if(a.type === 'b') { // 타입의 속성의 값 차이로 타입가드
//         a.bbb 
//     }
//     if('ddd' in a) { // 타입의 속성의 이름 차이로 타입가드
//         a.ddd 
//     }
// }


// 2) 커스텀 타입가드
// type Animal = { name: 'monkey', action: 'walk'};
// type Bird = { name: 'pijyon', speed: 'good' };
// function isAnimal(item: Animal | Bird): item is Animal {
//     if((item as Animal).action) return true;
//     return false
// }

// function getAnimal(item: Animal | Bird) {
//     if(isAnimal(item)) {
//         return item.action
//     }
// }


// 3) 인덱스드 시그니쳐, 맵드 타입스
// type A = { [key: string]: number }
// const a: A = { 'wef': 0, 'asd': 4 }

// type A = { [key in B]: number }
// type B = 'Human' | 'Bird'
// const a: A = { 'Human': 0, 'Bird': 4 }


// 4) 클래스의 타입
// class A {
//     a: string;
//     b: number;
//     private c: string = '123'; // private는 타입스크립트에서 제공하는 멤버변수 타입 (private를 사용하는게 권장)
//     #d: string = '2555' // #은 자바스크립트에서 제공하는 멤버변수 구분자

//     constructor() {
//         this.a = 'abc';
//         this.b = 123;
//     }
// }

// abstract class B {
//     abstract method(): void
// }

// class C extends B {
//     method() {
        
//     }
// }

// const a: A = new A(); // a는 new A()의 타입을 가진다.
// const b: typeof A = A; // b는 A클래스 자체의 타입을 가진다.


// 5) 제네릭
// function add<T extends number>(a: T, b: T): number {
//     return a + b
// }

// add(3, 5); // 가능
// add('3', '5') // 불가능 -> T를 extends number로 좁혀놨기때문에

// 화살표 함수의 제네릭
// const add = <T extends string>(x: T, y: T) => {
//     return 'ddddd'
// }
// const sub = <T = unknown>(x: T, y: T) => {
//     return 'efwef'
// }
// const mul = <T,>(x: T, y: T) => {
//     return 'efwef'
// }

// 일반 함수의 제네릭
// function add<T>(x: T, y: T): T {
//     return x
// }

// add<number>(1, 2)