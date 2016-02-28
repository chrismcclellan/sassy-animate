#SassyAnimate
*Just-add-water CSS animation*

`animate.scss` is a bunch of cool, fun, and cross-browser animations for you to use in your projects. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness.

##Basic Usage
1. Include the stylesheet on your document's `<head>`

  ```html
  <head>
    <link rel="stylesheet" href="/animate.min.css">
  </head>
  ```
2. Add the class `animated` to the element you want to animate.
 You may also want to include the class `infinite` for an infinite loop.

3. Finally you need to add one of the following classes:

  [List of slugi-fied classes!](blob/master/class-list-slugified.txt)
  [List of camelCased classes!](blob/master/class-list-camelCased.txt)

Full example:
```html
<h1 class="animated infinite bounce">Example</h1>
```

[Check out all the animations here!](https://daneden.github.io/animate.scss/)

##Usage
To use animate.scss in your website, simply drop the stylesheet into your document's `<head>`, and add the class `animated` to an element, along with any of the animation names. That's it! You've got a CSS animated element. Super!

```html
<head>
  <link rel="stylesheet" href="animate.min.css">
</head>
```

You can do a whole bunch of other stuff with animate.scss when you combine it with jQuery or add your own CSS rules. Dynamically add animations using jQuery with ease:

```javascript
$('#yourElement').addClass('animate bounce-out-left');
```

You can also detect when an animation ends:

<!--
Before you make changes to this file, you should know that $('#yourElement').one() is *NOT A TYPO*

http://api.jquery.com/one/
-->

```javascript
$('#yourElement').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', doSomething);
```

[View a video tutorial](https://www.youtube.com/watch?v=CBQGl6zokMs) on how to use Animate.scss with jQuery here.

**Note:** `jQuery.one()` is used when you want to execute the event handler at most *once*. More information [here](http://api.jquery.com/one/).

You can also extend jQuery to add a function that does it all for you:

```javascript
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
```

And use it like this:

```javascript
$('#yourElement').animateCss('bounce');
```

You can change the duration of your animations, add a delay or change the number of times that it plays:

```css
#yourElement {
  @include bounce-in-down($duration:3s, $delay:2s, $infinite: true, '*');
}
```

*Note: be sure to replace "vendor" in the CSS with the applicable vendor prefixes (webkit, moz, etc)*

## Custom Builds
Animate.scss is powered by [grunt.js](http://gruntjs.com/), and you can create custom builds pretty easily. First of all, you’ll need Grunt and all other dependencies:

```sh
$ git clone git@github.com:chrismcclellan/sassy-animate.git
$ cd sassy-animate
$ npm install
```

Next, run `grunt build` to compile your custom build. For example, if you want only some of the the classes, simply comment out the class declerations in /sassy-animate/src/_classes.scss

```scss
// .bounceInDown, .bounce-in-down { @include bounce-in-down(); }
```

## License
Animate.scss is licensed under the MIT license. (http://opensource.org/licenses/MIT)
