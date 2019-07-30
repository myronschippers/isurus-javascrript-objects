# JavaScript Objects and Classes Review

## Object Review

Objects are a data type that allows us to store multiple pieces of information together inside a single variable.

Each piece of data inside an object is called a **property**. Also sometimes called a **key**. Each **property** has a value. The value can be any legal JavaScript data type including Numbers, Strings, Arrays, other objects, or even Functions.


## Object Literals

A quick way to create an object is with an assignment expression with an **Object Literal**. This code creates a single Object variable.

```JavaScript
const topHat = {
    type: 'Top',
    color: 'Black',
    size: 14
};

const baseballHat = {
    type: 'Baseball Cap',
    color: 'Red and White',
    size: 12
}
```

This can be very handy and is used frequently in JavaScript.

The downside is if we needed to create a lot of different kinds of `hat` objects. We don't want to copy and paste this code over and over again.

### How can we compare this data?

What if we don't know what our number size is but we know that we normally buy a hat at a medium size? 

With the Hat data stored in these objects we can compare the size data against a range to figure this out for an end user. We'll start by creating a function that takes in the Hat data object and figures out if that hat is small, medium, and large returning the result as a string value.

```JS
function hatReadableSize(hatObject) {
  if (hatData.size <= 12) {
    return 'Small';
  } else if (hatData.size > 12 && hatData.size <= 18) {
    return 'Medium';
  } else if (hatData.size > 18 && hatData.size <= 24) {
    return 'Large';
  } else if (hatData.size > 24 && hatData.size <= 30) {
    return 'X-Large';
  }
}

console.log('topHat is: ', hatReadableSize(topHat));
console.log('baseballHat is: ', hatReadableSize(baseballHat));
```

Wait a minute... if I am a new developer looking at this code what do these numbers mean? Are these just magic numbers? Let's clean this up a little bit to give meaning to these numbers.

```JS
function hatReadableSize(hatObject) {
  const maxSizeSmall = 12;
  const maxSizeMedium = 18;
  const maxSizeLarge = 24;
  const maxSizeXLarge = 30;

  if (hatData.size <= maxSizeSmall) {
    return 'Small';
  } else if (hatData.size > maxSizeSmall && hatData.size <= maxSizeMedium) {
    return 'Medium';
  } else if (hatData.size > maxSizeMedium && hatData.size <= maxSizeLarge) {
    return 'Large';
  } else if (hatData.size > maxSizeLarge && hatData.size <= maxSizeXLarge) {
    return 'X-Large';
  }
}

console.log('topHat is: ', hatReadableSize(topHat));
console.log('baseballHat is: ', hatReadableSize(baseballHat));
```