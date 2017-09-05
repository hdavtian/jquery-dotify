# Dotify Jquery Plugin
Shorten your text using this simple plugin. Dotify wraps parts of your text with two css classes which you can use to stylize to your liking. In our case, the goal is to shorten text and place a "...". So the script inserts two spans in your content with css classes 'dotify-dots' and .dotify-extra-content. You can stylize your content with these hooks however you want. Since we want to hide the 'extra content', we just do a display:none. Simple :)

###### The markup
```html
<p class="your-class">
    Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua.
</p>
```

###### The JS
```javascript
$('.my-class').dotify({
    max: 25,
    dotCharacters: '...'
});
```

###### The Css
```css
.dotify-dots {
    
}

.dotify-extra-content {
    display: none;
}
```

###### Generated result
```html
<p class="my-paragraph">
    Lorem ipsum dolor 
    <span class="dotify-dots">
        ...
    </span>
    <span class="dotify-extra-content">
        sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore 
        et dolore magna aliqua.
    </span>
</p>
```



## Getting Started
- Include dotify library after jquery
- Include dotify css (or include the classes in your own css)
- Target desired DOM element in your markup and call .dotify()
