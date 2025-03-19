import myobject from "./mymodule.js";

const allCode = document.querySelectorAll("code");
console.log(allCode);
for (let item of allCode) {
  item.innerHTML = `&lt;${item.innerHTML}&gt - ${myobject.a}`;
}
