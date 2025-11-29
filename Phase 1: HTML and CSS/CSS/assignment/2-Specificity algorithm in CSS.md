# 🎨 Understanding CSS Specificity in Simple Words

## 📌 What is Specificity?
When you write CSS, sometimes more than one rule tries to style the same element.  
Specificity is the **algorithm browsers use to decide which rule wins**. Think of it like a scoring system: the higher the score, the stronger the rule.

---

## ⚖️ The Specificity Hierarchy
CSS rules are ranked based on the type of selector:

1. **Inline styles** → strongest (written directly in the HTML element)
2. **ID selectors** (`#header`) → very strong
3. **Class selectors** (`.title`), attributes (`[type="text"]`), pseudo-classes (`:hover`) → medium strength
4. **Element selectors** (`p`, `div`, `h1`) and pseudo-elements (`::before`) → weakest

---

## 📊 Specificity Score System
Browsers calculate specificity like a 4-digit score:

| Selector Type                  | Example             | Score |
|--------------------------------|---------------------|-------|
| Inline styles                  | `<p style="...">`   | 1000  |
| ID selector                    | `#main`             | 100   |
| Class/attribute/pseudo-class   | `.box`, `[href]`, `:hover` | 10 |
| Element/pseudo-element         | `p`, `div`, `::after` | 1 |

---

## 🧩 Example
```html
<style>
  p { color: red; }              /* score 1 */
  .highlight { color: green; }   /* score 10 */
  #special { color: blue; }      /* score 100 */
</style>

<p id="special" class="highlight">Hello World!</p>
