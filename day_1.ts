// 1) 튜플의 타입유추 한계
// const tuple: [string, number] = ['나나나', 3];
// tuple[2] = '이건에러';
// tuple.push('이건통과');


// 2) as const 를 빼면 각 객체의 값을 number로 추론한다. 추론을 정확하게 하기위해 as const 사용
// const Direction = {
//     Up: 0,
//     Down: 1,
//     Left: 2,
//     Right: 3,
// } as const;


// 3) typeof keyof 활용 (a, b, c 키만 뽑아내고싶다.)
// const obj = { a: '123', b: '333', c: 5};
// type Key = keyof typeof obj;


// 4) union (| 또는, 중에 하나)
// 아래처럼 string | number로 a와 b가 구성되어있으면 리턴값은 어떻게 정해질수가 없어지므로 타입정의할때 잘 해야함.
// function add(a: string | number, b: string | number): string | number {
//     return a + b;  
// }
// const result: string | number = add(1, 2);


// 5) intersection (& 그리고, 모두)
// A는 객체속성중 hello나 jiwoo중 하나만 있어도 되지만, B는 둘다 있어야한다. (A에서 두개 다 있어도 에러 안남.)
// type A = { hello: 'world' } | { jiwoo: 'jiwoo' }
// type B = { hello: 'world' } & { jiwoo: 'jiwoo' } 


// 6) 좁은 타입, 넓은 타입
// type A = { name: string };
// type B = { age: number };
// type C = A & B;
// const obj = { name: 'jiwoo', age: 30, filter: true } 
// const a: C = obj 
// const b: C = { name: 'jiwoo', age: 30, filter: true }; 잉여 속성 검사로 인해 바로 리터럴을 집어넣으면 에러가남


// 7) interface와 type
// interface A { name: string };
// interface A { age: number };
// const a: A = { name: 'jiwoo', age: 20 };

// type B = { name: string };
// type C = { age: number };
// type D = B & C;
// const b: D = { name: 'jiwoo', age: 20 };


// 8) void 타입
// void는 함수에 직접적인 리턴값으로 적혀적을때만 제대로 됨 (리턴값을 undefined 또는 적지않는다.)
// 매개변수와 메소드는 상관 없음 (리턴값을 사용하지 않겠다 로만 적용됨)

// err
// function add(callback: () => void): void {
//     return 'abc' 
// }

// ok
// add(() => {
//     return 'abc'
// })

// interface Human {
//     talk: () => void;
// }

// ok
// const human: Human = {
//     talk: () => {
//         return 'abc'
//     }
// }


