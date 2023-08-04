## This is a simple like button made with HTML, CSS, and JavaScript.

## HTML

The HTML is very simple. We just have a `<div>` with the class `heart`. This `<div>` will be our like button.

```html
<div class="heart"></div>
```

## CSS

The CSS styles the `<div>` with the class `heart`. We set the height and width to 50px, and we set the background image to a heart animation. We also set the background position to left, and we set the background repeat to no-repeat. This will make the heart animation appear to be a single heart.

```css
.heart {
  cursor: pointer;
  height: 50px;
  width: 50px;
  background-image:url( 'https://abs.twimg.com/a/1446542199/img/t1/web_heart_animation.png');
  background-position: left;
  background-repeat:no-repeat;
  background-size:2900%;
}
```

## JavaScript

The JavaScript is what makes the like button work. We first add an event listener to the `<div>` with the class `heart`. This event listener will listen for the `click` event.

```javascript
document.querySelector('.heart').addEventListener('click', function() {

});
```

In the event handler, we first check if the `<div>` with the class `heart` has the class `is_animating`. If it does, we do nothing. This is to prevent the heart animation from being triggered multiple times.

```javascript
if (document.querySelector('.heart').classList.contains('is_animating')) {
  return;
}
```

Next, we add the class `is_animating` to the `<div>` with the class `heart`. This will start the heart animation.

```javascript
document.querySelector('.heart').classList.add('is_animating');
```

Finally, we set a timeout. The timeout will run after 0.8 seconds. When the timeout runs, we remove the class `is