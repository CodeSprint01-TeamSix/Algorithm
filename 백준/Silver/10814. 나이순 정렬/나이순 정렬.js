const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let members = [];

input.forEach((member, index) => {
  const [age, name] = member.split(" ");
  if (name) {
    members.push({ age: parseInt(age), name, number: index }); //{나이, 이름, 등록순}
  }
});

members.sort((a, b) => {
  if (a.age !== b.age) {
    //나이가 같지 않을때
    return a.age - b.age;
  } else {
    return a.number - b.number;
  }
});

let result = members.map((member) => `${member.age} ${member.name}`).join("\n"); //다시 텍스트로 되돌리기
console.log(result);
