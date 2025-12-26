
# CSS Interview Questions and Answers
---

**Topic : Selectors and Combinators**

## 6. How do you select elements by attribute in CSS?

### Concept

CSS allows you to select HTML elements **based on their attributes** using **attribute selectors**.
These selectors target elements like:

* input fields with a specific type
* links with a specific target
* buttons with disabled attribute
* elements having any custom attribute

Attribute selectors always use **square brackets `[ ]`**.

---

### Common Attribute Selector Types

### 1. Select elements with a specific attribute

```css
input[required] {
  border: 2px solid red;
}
```

Targets all `<input required>` fields.

---

### 2. Select elements with a specific attribute value

```css
input[type="email"] {
  background-color: #f0f8ff;
}
```

Targets only email input fields.

---

### 3. Attribute value starts with ( ^= )

```css
a[href^="https"] {
  color: green;
}
```

Matches links that **start with** "https".

---

### 4. Attribute value ends with ( $= )

```css
img[src$=".png"] {
  border: 1px solid black;
}
```

Matches images ending with ".png".

---

### 5. Attribute value contains ( *= )

```css
div[class*="card"] {
  padding: 10px;
}
```

Matches class names **that contain** “card”.

---

### Quick Summary for Interview

CSS attribute selectors allow you to style elements based on the presence or value of an attribute. They use square brackets and include patterns like `[attr]`, `[attr=value]`, `[attr^=value]`, `[attr$=value]`, `[attr*=value]`.

---


## 7. What is a pseudo-element, and what are they used for?

### Concept

A **pseudo-element** is used to style **specific parts of an element** or to **insert virtual elements** that do not exist in the HTML.

They are written using **double colons `::`** (modern standard).
Examples of “parts” you can be styled:

* First letter of a paragraph
* First line
* Before or after content
* Selection text

Pseudo-elements help add decoration or structure **without extra HTML**.

---

### Common Pseudo-Elements

### 1. `::before`

Adds content **before** an element.

```css
button::before {
  content: "→ ";
}
```

---

### 2. `::after`

Adds content **after** an element.

```css
button::after {
  content: " ✔";
}
```

---

### 3. `::first-letter`

Styles the **first letter** of a paragraph.

```css
p::first-letter {
  font-size: 40px;
  font-weight: bold;
}
```

---

### 4. `::first-line`

Styles only the **first line** of text.

```css
p::first-line {
  color: blue;
}
```

---

### 5. `::selection`

Styles text when user selects it.

```css
::selection {
  background: yellow;
  color: black;
}
```

---

### Code Example (Complete Demonstration)

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      p::first-letter {
        font-size: 32px;
        font-weight: bold;
        color: darkred;
      }

      p::first-line {
        color: blue;
      }

      button::before {
        content: "→ ";
      }

      button::after {
        content: " ✔";
      }

      ::selection {
        background: yellow;
        color: black;
      }
    </style>
  </head>

  <body>
    <p>
      This is a paragraph demonstrating pseudo-elements.
      The first letter and first line are styled.
    </p>

    <button>Submit</button>
  </body>
</html>
```

---

### Dry Run (What Happens)

* First letter of `<p>` becomes large and bold
* First line turns blue (depends on screen width)
* Button shows arrow before and checkmark after text
* Selected text turns yellow

All **without adding extra HTML elements**.

---

### Pseudo-class vs Pseudo-element (With Example)

#### Pseudo-class

* Styles an element based on **state**
* Uses **single colon `:`**
* Depends on **user interaction or condition**

Example:

```css
button:hover {
  background-color: lightgray;
}
```

Applied when:

* User hovers over the button

---

#### Pseudo-element

* Styles a **part of an element** or **virtual content**
* Uses **double colon `::`**
* Does **not depend on user state**

Example:

```css
button::after {
  content: " ✔";
}
```

Applied:

* Always, as part of the element

---

### Key Difference (Interview-ready)

| Aspect                 | Pseudo-class        | Pseudo-element               |
| ---------------------- | ------------------- | ---------------------------- |
| Purpose                | State-based styling | Part/virtual content styling |
| Colon                  | `:`                 | `::`                         |
| Depends on user action | Yes (hover, focus)  | No                           |
| Example                | `:hover`            | `::before`                   |

---

### One-line Interview Answer

> “Pseudo-classes style elements based on state, while pseudo-elements style specific parts of elements or insert virtual content without changing HTML.”


---

## 8. Explain the difference between the child combinator and the descendant combinator.

### Concept

Both are **CSS combinators** used to select elements based on their relationship in the HTML structure, but they differ in how *deeply* they search.

---

### Child Combinator (`>`)

Selects only the elements that are **direct children** of a parent.

* One level down only
* Strict parent → child
* Does NOT select grandchildren

```css
div > p {
  color: blue;
}
```

This applies styles only to `<p>` tags that are **direct children of `<div>`**.

#### Example HTML

```html
<div>
  <p>Direct child (blue)</p>
  <span>
    <p>Grandchild (NOT blue)</p>
  </span>
</div>
```

---

### Descendant Combinator (space `" "`)

Selects **all nested elements**, no matter how deep.

* Children, grandchildren, great-grandchildren — everything
* Loose relationship
* Any level inside

```css
div p {
  color: red;
}
```

This applies to **every `<p>` inside `<div>`**, no matter how nested.

#### Example HTML

```html
<div>
  <p>Child (red)</p>
  <span>
    <p>Grandchild (red)</p>
  </span>
</div>
```

---

### Key Difference (Interview Summary)

| Feature    | Child (`>`)          | Descendant (` `)    |
| ---------- | -------------------- | ------------------- |
| Matches    | Direct children only | All nested elements |
| Depth      | One level            | Unlimited           |
| Strictness | Strict               | Flexible            |
| Example    | `div > p`            | `div p`             |

---

### Short Interview Answer

The child combinator (`>`) selects only direct children of an element, while the descendant combinator (space) selects all nested elements at any depth. `div > p` targets direct `<p>` children, but `div p` targets every `<p>` inside the div.

---

## 9. How would you select all direct children elements of a particular type?

### Concept

To select **only the direct children** of a specific type (not grandchildren), you use the **child combinator (`>`)**.

This ensures the selector picks elements **exactly one level below** the parent.

---

### Syntax

```css
parent > child {
  /* styles */
}
```

---

### Example

Select all **direct child `<li>` elements** of a `<ul>`:

```css
ul > li {
  color: blue;
  font-weight: bold;
}
```

### Why this works

* Only `li` elements **immediately inside** the `ul` are styled.
* Nested or deeper `li` elements are ignored.

---

### Example HTML

```html
<ul>
  <li>Item 1</li>        <!-- direct child (selected) -->
  <li>Item 2</li>        <!-- direct child (selected) -->

  <div>
    <li>Nested item</li> <!-- NOT selected -->
  </div>
</ul>
```

---

### Short Interview Answer

To select all direct children of a specific type, use the **child combinator (`>`)**.
Example: `ul > li` selects only the `<li>` elements that are immediate children of the `<ul>`.

---


## 10. What are the universal selector and the sibling combinator, and when would you use them?

### Universal Selector (`*`)

### Concept

The **universal selector** selects **all elements** on the page.
It is useful when you want to apply a **global rule** to every element.

### Example

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### When to Use

* In CSS resets
* To remove default spacing
* To apply global box-sizing
* When styling all elements consistently

---

### Sibling Combinators

There are **two types**:

1. **Adjacent sibling combinator (`+`)**
2. **General sibling combinator (`~`)**

---

### 1. Adjacent Sibling Combinator (`+`)

### Concept

Selects the **immediately next sibling** of an element.

### Example

```css
h2 + p {
  color: blue;
}
```

This targets the **first `<p>` right after** an `<h2>`.

### When to Use

* Style only the **next** element
* Apply spacing between elements
* Visually group heading + paragraph

---

### 2. General Sibling Combinator (`~`)

### Concept

Selects **all siblings that come after** the given element (not necessarily adjacent).

### Example

```css
h2 ~ p {
  color: green;
}
```

Every `<p>` **after** an `<h2>` inside the same parent will be styled.

### When to Use

* Apply styles to multiple following siblings
* Form layout patterns
* Style repeated elements that follow a specific element

---

### Short Interview Answer

The **universal selector (`*`)** selects all elements and is mainly used for global rules like CSS resets.
The **sibling combinators** select elements that share the same parent:

* `A + B` selects the **immediately next sibling**,
* `A ~ B` selects **all following siblings**.

Use them for layout control and styling relationships between elements.

---

# Box Model and Layout

---
