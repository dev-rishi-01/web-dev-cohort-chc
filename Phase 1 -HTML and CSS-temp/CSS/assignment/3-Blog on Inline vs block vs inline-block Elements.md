```markdown
# 📖 Inline vs Block vs Inline-Block Elements in CSS

## 🎯 Introduction

When working with HTML and CSS, you’ll often hear terms like inline,block and inline-block elements.  
These describe how elements behave on a web page — how they take up space and how they interact with other elements.

## 🧩 Block Elements

- What they are: Block elements take up the full width available.
- Behavior: They always start on a new line.
- Examples: `<div>`, `<p>`, `<h1>`–`<h6>`, `<section>`

<p>This is a block element.</p>
<div>This is another block element.</div>
```

---

## 📝 Inline Elements

- What they are: Inline elements only take up as much width as their content.
- Behavior: They do not start on a new line; they sit next to each other.
- Examples: `<span>`, `<a>`, `<strong>`, `<em>`

```html
<span>This is inline.</span> <span>This is also inline.</span>
```

---

## ⚖️ Inline-Block Elements

- What they are: A mix of both inline and block.
- Behavior: They sit next to each other like inline elements, but you can set width and height like block elements.
- Examples: Commonly used with `<img>` or when styling `<div>` with `display: inline-block;`

```html
<div
  style="display:inline-block; width:100px; height:50px; background:lightblue;"
>
  Box 1
</div>
<div
  style="display:inline-block; width:100px; height:50px; background:lightgreen;"
>
  Box 2
</div>
```

---

## 📊 Quick Comparison

| Type         | Starts New Line? | Can Set Width/Height? | Example Tags            |
| ------------ | ---------------- | --------------------- | ----------------------- |
| Block        | ✅ Yes           | ✅ Yes                | `<div>`, `<p>`          |
| Inline       | ❌ No            | ❌ No                 | `<span>`, `<a>`         |
| Inline-Block | ❌ No            | ✅ Yes                | `<img>`, styled `<div>` |

---
