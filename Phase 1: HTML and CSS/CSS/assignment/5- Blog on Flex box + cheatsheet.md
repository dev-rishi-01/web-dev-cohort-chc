
```markdown
# 📦 Flexbox in CSS Made Simple + Cheatsheet

## 🎯 Introduction
Flexbox (short for **Flexible Box Layout**) is a CSS layout mode that makes it easy to arrange elements in rows or columns, align them, and distribute space.  
Think of it as a smarter way to position items compared to floats or inline-blocks.

---

## 🧩 Why Flexbox?
- Align items horizontally or vertically with ease
- Distribute space evenly between items
- Make layouts responsive without complex math
- Control alignment and spacing with just a few properties

---

## ⚙️ Basic Setup
To use Flexbox, set the parent container’s `display` property:

```css
.container {
  display: flex;
}
```

Now all direct children of `.container` become **flex items**.

---

## 📊 Flexbox Cheatsheet

### 🔹 Container Properties (applied to parent)
| Property          | Values | What it does |
|-------------------|--------|--------------|
| `display`         | `flex` / `inline-flex` | Activates flexbox |
| `flex-direction`  | `row` (default), `row-reverse`, `column`, `column-reverse` | Direction of items |
| `flex-wrap`       | `nowrap` (default), `wrap`, `wrap-reverse` | Wrap items to new lines |
| `justify-content` | `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly` | Horizontal alignment |
| `align-items`     | `stretch` (default), `flex-start`, `flex-end`, `center`, `baseline` | Vertical alignment |
| `align-content`   | `stretch`, `flex-start`, `flex-end`, `center`, `space-between`, `space-around` | Align multiple rows |

---

### 🔹 Item Properties (applied to children)
| Property      | Values | What it does |
|---------------|--------|--------------|
| `order`       | number (default 0) | Controls item order |
| `flex-grow`   | number (default 0) | How much item grows relative to others |
| `flex-shrink` | number (default 1) | How much item shrinks relative to others |
| `flex-basis`  | length (`auto`, `50px`, `30%`) | Initial size before growing/shrinking |
| `align-self`  | `auto`, `flex-start`, `flex-end`, `center`, `baseline`, `stretch` | Overrides `align-items` for one item |

---

## 🧩 Example Layout
```html
<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .item {
    background: lightblue;
    padding: 20px;
    margin: 5px;
  }
</style>

<div class="container">
  <div class="item">Box 1</div>
  <div class="item">Box 2</div>
  <div class="item">Box 3</div>
</div>
```
---

## 🚀 Tips
- Use `flex: 1` as shorthand for `flex-grow: 1; flex-shrink: 1; flex-basis: 0;`
- Combine `justify-content` and `align-items` for perfect centering
- Use `flex-wrap` for responsive grids

---