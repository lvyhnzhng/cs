# Javascript 
&nbsp;
# Chapter 1
## 1. HTML（HyperText Markup Language）
- 定义：用于定义网页结构的标记语言，通过标签（like `<p>`, `<div>`, `<img>`）描述内容的含义与层次  
- 作用：告诉浏览器展示什么，比如段落、标题、图片、链接。浏览器渲染成可视化页面.   

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>示例</title>
  </head>
  <body>
    <h1>我的第一段页面</h1>
    <p>HTML 用于给浏览器“搭骨架”。</p>
  </body>
</html>
```

## 2. JavaScript（JS）
- 定义：一种脚本编程语言，能让网页具备逻辑和交互能力()。
- 作用：可以动态修改 HTML 结构、样式，也可实现动画、事件响应、数据操作等

```html
<button id="btn">点我</button>
<script>
  document.getElementById("btn").addEventListener("click", () => {
    alert("按钮已点击！");
  });
</script>
```

## 3. HTML 与 JavaScript 的关系
- HTML：提供“结构”——静态内容与布局；
- JavaScript：提供“行为”——动态修改内容或样式，响应用户操作 ￼；
- JS 可以嵌入 HTML 中，也可以通过外部文件 `<script src="...">` 引入。

## 4. DOM（Document Object Model）
- 浏览器解析 HTML/XML 形成的DOM“节点树”，JS 可以通过 DOM 提供的方法操作它

```javascript
// 查找元素
const p = document.querySelector("p");
// 修改内容
p.textContent = "内容已改变!";
// 改样式
p.style.color = "red";
```

## 5. BOM（Browser Object Model）
- 浏览器提供的额外接口（挂在 window 上），用于控制浏览器特性：
- 弹窗：alert, confirm
- 浏览导航：location.href = ..., history.back()
- 定时器：setTimeout, setInterval
- 本地存储：localStorage.setItem(...)