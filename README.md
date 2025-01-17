# **Maps and Sets Exercise**

## **Quick Question #1**

What does the following code return?

```jsx
new Set([1,1,2,2,3,4])
```

## **Quick Question #2**

What does the following code return?

```jsx
[...new Set("referee")].join("")
```

## **Quick Questions #3**

What does the Map ***m*** look like after running the following code?

```jsx
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
```

## **hasDuplicate**

Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

```jsx
hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false
```

## **vowelCount**

Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

```jsx
vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }
```

[Solution](https://lessons.springboard.com/Solution-785cba9d3554495f9787e49fcedd6c2f?pvs=21)
