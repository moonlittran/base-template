# Outfit Base Templates

This toolkit repo will allow you to create the basis for HTML/CSS/JS templates that will be input into <a href="https://outfit.io">Outfit</a>.

## Base Template
A great starting point to take your static creative and make it dynamic. It's packed full of little tools to help you get started like auto text-resizing, crop marks and text overflow restrictions. 

## Examples
To help you along the way there are 3 examples of different types of Outfit templates that can also be used as a basis. 

### 1. Google Display Banners (responsive)
This responsive templates uses `@media (aspect-ratio)` to target specific ratios needed to create over 30 unique Google Display Banner sizes. 

### 2. DL Flyer
This double sided DL flyer utilises a two page layout, called via the `.page` class.

### 3. Letterhead
This single paged, A4 template allows you to create and customise your office letterhead.
<br>
<br>
## Tips & Tricks
Here is a list of tips, tricks and interesting things that we've picked up over that last couple of years.

* When creating a template from a set design it is always a good idea to overlay the design as a blueprint. It allows you to get pixel perfect results, but it is also quicker 😉. Remember to create your `.page` as the same size (or aspect ratio) as the blueprint. You can use the following snippet - just remember to update the `background-image`.

```
.test-background-image {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-image: url('');
  background-size: cover;
  background-repeat: no-repeat;
  pointer-events: none;
  opacity: 0.7;
}
```

* 