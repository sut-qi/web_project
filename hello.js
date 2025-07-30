document.querySelector("button").addEventListener("click", function () {
  const input = document.getElementById("info").value.trim();
  if (input === "") {
    alert("请输入你的名字！");
  } else if (input === "小菜鱼") {
    alert("我爱你！小菜鱼！亲亲亲亲亲亲亲！");
  } else if (input === "肖偲羽") {
    alert("我爱你！肖偲羽！爱爱爱爱爱爱爱！");
  } else {
    alert(`Welcome ${input}!`);
  }
});
