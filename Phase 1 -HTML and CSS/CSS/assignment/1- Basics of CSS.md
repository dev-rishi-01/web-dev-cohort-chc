# 1- Basics of CSS

## What is CSS ?

- <strong>CSS stands for Cascading Style Sheets.</strong> It is the language for describing the presentation of Web Pages, including Colours, Layout and Fonts, thus making our web Pages presentable to the user.
- CSS is designed to make style sheets for the web. It is independent of HTML and can be used with any XML-based markup language. Now let's try to break acronym:
  - Cascading: Falling of Styles.
  - Style: Adding designs/ Styling our HTML tags.
  - Sheets: Writing our Style in different documents.

## How CSS was born ?

- In Early days of World Wide Web, HTML handled both content and styling. This meant that if a web designer wanted to change the font or color of a particular element, They had to modify each instance of that element withing the HTML code. This was inefficient and made consistent styling across a website was challenging.
- <strong> Håkon Wium Lie's. Proposal in 1994:</strong> Hakon was a researcher at CERN (CERN is a European Organization for Nuclear Research),
  he recognized this problem and proposed the concept of Cascading Style Sheets in 1994. His idea was to create a separate language dedicated to defining the visual presentation of web documents, allowing authors to control styles independently from the HTML structure.
- <strong>Evolution and Adoption: </strong> CSS quickly gained popularity among web developers due to its ability to streamline web development and enhance design flexibility. Subsequent versions, such as CSS2(1998) and CSS3(released as modular specifications), introduced advanced features like media-specific styles, aural styles and later powerful layout tools like Flexbox and Grid.

## CSS Editors

- Some of the popular Editors that are best Suited to wire CSS code are as following:

1. Atom
2. Visual Studio Code
3. Brackets
4. Espresso
5. Notepad++
6. Komodo Editor
7. Sublime Text

## CSS Syntax

```
Selector {
  		        Property 1 : value;
                	 Property 2 : value;
               	 Property 3 : value;
             }
  For example:
         h1
            {
                Color: red;
                 Text-align: center;

            }
          #unique
           {
                 color: green;
           }
```

- Selector: selects the element you want to target
- Always remains the same whether we apply internal or external styling
- There are few basic selectors like tags, id's and classes.
- All forms this key-value pair
- Keys: Properties(attributes) like color, font-size, background, width, height, etc.
- Value: Values associated with these properties.

## How to write CSS

- There are 3 ways to write CSS in our HTML file: 

1. <strong>Inline CSS: </strong> 
- Before CSS this was the only way to apply styles 
- Not an efficient way to write as it has a lot of redundancy 
- Self-contained 
- Uniquely applied on each element 
- The idea of separation of concerns was lost
  Example:
  ``` 
  <h3 style=color:red> Have a great day </h3>
  <p  style =” color: green”> I did this , I did that </p>

2. <strong>Internal CSS </strong>: 
- With the help of style tag, we can apply styles within the HTML file.
- Redundancy is removed.
- But the idea of separation of concerns still lost.
- Uniquely applied on a single document.
- Example: 
```
<style>
    h1{
        color: red;
    }
</style>
```

3. <strong>External CSS</strong>:
- Within the help pf <link> tag in the head tag, we can apply styles
- Reference is added
- File saved with .css extension
- Redundancy is removed
- The idea of separation of concerns is maintained
- Uniquely applied to each document
- Example: 
```
<head>
<link rel="stylesheet" type="text/css href="name of the CSS file"   >
</head>
    h1 {
        color:red;
    }
```

