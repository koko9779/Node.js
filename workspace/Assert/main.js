/*
 * Assert 모듈
 * 
 * assert : 주어진 변수나 수식의 값이 0 또는 false인 경우 오류발생
 * 
 * <변수나 수식값 비교>
 * equal : 두 값이 다를 경우 오류 발생, 값의 타입 무시
 * strictEqual :  ,,               , 값의 타입도 검사
 * notEqual : 두 값이 같을 경우 오류 발생, 값의 타입 무시
 * notStrictEqual :       ,,          , 값의 타입도 검사
 * 
 * <객체 비교>
 * deepEqual : 두 객체의 멤버가 동일하지 않을 경우 오류 발생, 값의 타입 무시
 * deepStrictEqual :            ,,                     , 값의 타입도 검사
 * notDeepEqual : 두 객체의 멤버가 동일할 경우 오류 발생, 값의 타입 무시
 * notDeepStrictEqual :         ,,                  , 값의 타입도 검사
 */


var assert = require("assert");

var v1 = 10;
var v2 = 10;
var v3 = 20;
var v4 = "10";

assert(v1<v3);
console.log("v1은 v3보다 작습니다");

/* 
assert(v1==v3);
console.log("v1은 v3와 같습니다");
*/

assert(v1==v2);
console.log("v1과 v2는 같습니다");

/*
//결과값이 0이기 때문에 오류 발생
assert(v1-v2);	
console.log("v1-v2는 0입니다")
*/

assert(v1-v3);
console.log("v1-v3는 0이 아닙니다");

assert.equal(v1,v2);
console.log("v1과 v2는 같습니다");

/*
assert.equal(v1,v3);
console.log("v1과 v3는 같습니다");
*/

assert.equal(v1,v4);
console.log("v1과 v4는 같습니다");

/*
assert.strictEqual(v1,v4);
console.log("v1과 v4는 같습니다");
*/

/*
assert.notEqual(v1,v2);
console.log("v1과 v2는 다릅니다");
*/

assert.notEqual(v1,v3);
console.log("v1과 v3는 다릅니다");
/*
assert.notEqual(v1,v4);
console.log("v1과 v4는 다릅니다");
*/
assert.notStrictEqual(v1,v4);
console.log("v1과 v4는 다릅니다");

var obj1 = {
		a1:10,
		a2:20
};
var obj2 = {
		a1:10,
		a2:20
};
var obj3 = {
		a1:10,
		a2:30
};
var obj4 = {
		a1:10,
		a2:'20'
};

assert.deepEqual(obj1,obj2);
console.log("obj1과 obj2는 같습니다");

/*
assert.deepEqual(obj1,obj3);
console.log("obj1과 obj3는 같습니다");
*/

assert.deepEqual(obj1,obj4);
console.log("obj1과 obj4는 같습니다");

/*
assert.deepStrictEqual(obj1,obj4);
console.log("obj1과 obj4는 같습니다")
*/

/*
assert.notDeepEqual(obj1,obj2);
console.log("obj1과 obj2는 다릅니다");
*/

assert.notDeepEqual(obj1,obj3);
console.log("obj1과 obj3은 다릅니다");

/*
assert.notDeepEqual(obj1,obj4);
console.log("obj1과 obj4는 다릅니다");
*/

assert.notDeepStrictEqual(obj1,obj4);
console.log("obj1과 obj4는 다릅니다");
