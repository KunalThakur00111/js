// stack memory=> u get copy of whatever u want (primitive)
// heap memory=> original value refrence ( non- primitive)
// objects, arrays and functions are non premitive type.
let a = 12;
let b = a;
console.log(a); // 12
console.log(b); // 12
b = 5;
console.log(a); // 12
console.log(b); // 5
let user1 = {
    email: "kunalx25252@gmail.com",
    age: 18,
}
let user2 = user1;
user2.email = "kunal";
console.log(user1.email); // "kunal"
console.log(user2.email); // "kunal"