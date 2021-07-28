---
title: Use the Web Crypto API to Generate a Cryptographically Secure Password in the Browser and Node.js
date: 2021-07-28
tags: ['JavaScript', 'Web Crypto API', 'Node.js']
---

Strong, cryptographically safe passwords are an essential foundation to live a secure digital life. With an open source password manager like [Bitwarden](https://bitwarden.com/), it's never been more accessible to generate unique, strong passwords for every online account, and then storing them in your password vault.

But what if you want to add password generation directly to your web app? That's recently been getting much more accessible as well thanks to the standard [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto).

## Use the Web Crypto API in Any Environment

In order to make the generator work in both browsers and Node.js, we need an abstraction. This ensures we can use the same Web Crypto API no matter where the generator is used.

```js
// crypto.js

// Isomorphic pattern to load Web Crypto in both browsers and Node.js
async function loadCrypto() {
    if (globalThis && globalThis.crypto) {
        // Running in browsers from 2018 and newer.
        return new Promise((resolve, _reject) =>
            resolve(globalThis.crypto),
        )
    } else {
        // Running in Node.js >= 15
        const cryptoLocal = await import('crypto')
        return cryptoLocal.webcrypto as unknown as Crypto
    }
}

const crypto = await loadCrypto()
export default crypto
```

## Creating a Password by Selecting Random Characters

The way our generator is going to work is by creating an array of a given length (matching the password length), and then filling it with random characters.

First, we'll import the crypto abstraction and define the character set we want to use.

<!-- prettier-ignore-start -->
```js
// generate-password.js

import crypto from './crypto'

const digits = '0123456789'
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lower = upper.toLowerCase()
const CHAR_SET = digits + upper + lower
```
<!-- prettier-ignore-end -->

Using `Array.from()`, we can provide a `Array.prototype.map()` callback to add the random characters directly while the array is created. Then, we just have to join the password into a string and we're done - except for the details of `getRandomCharacter()` which we'll cover soon.

<!-- prettier-ignore-start -->
```js
/**
 * Generate a random password of a given length.
 *
 * @param {number} length The password length.
 * @param {string} characters The set of characters to pick from.
 * @returns A random password.
 */
export function generatePassword(length = 80, characters = CHAR_SET) {
    return Array.from({ length }, (_) =>
        getRandomCharacter(characters),
    ).join('')
}
```
<!-- prettier-ignore-end -->

## Cryptographically Secure Random Number Generation

Let's implement `getRandomCharacter()`. To ensure the characters are randomized in a cryptographically safe way, we use `crypto.getRandomValues()`. This is _strongly_ recommended instead of using `Math.random()` which may seem simpler, but is not secure enough for our needs.

<!-- prettier-ignore-start -->
```js

/**
 * Get a random character from a given set of characters.
 *
 * @param {string} characters The set of characters to pick from.
 * @returns A random character.
 */
function getRandomCharacter(characters) {
    const randomNumber = crypto.getRandomValues(new Uint8Array(1))[0]
    return characters[randomNumber % characters.length]
}
```
<!-- prettier-ignore-end -->

To explain `getRandomCharacter()`, let's start by thinking about the character set again. Since our character set has less than 256 characters (8 bytes), we can pass an `Uint8Array` to `crypto.getRandomValues()`, to fill it with random numbers. In our case, this will be a single number between 0-255 since we created an `Uint8Array` with `1` byte. We'll retrieve the `randomNumber` and can now use this to calculate the random index from where to pick the next character.

Since our character set contains less than 256 characters, we need to ensure the random number isn't out of range to avoid crashes. This can be done using `%` - the [Remainder operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder), which allows us to use a random number potentially much larger than our character set length, and always get a value within our desired range.

However, this method has a severe security issue - it will cause the first characters in our set to appear more often, greatly reducing the password security. This is caused by the fact that the result when using the remainder operator will restart from 0 once `randomNumber` has reached another multiple of the character set length. `39 % 40` yields `39` and `40 % 40` yields `0`, meaning we'll get the last character and then the first character again. This repeats for larger multiples such as 80 and so on, until the final iteration where we've reached the final multiple before 255. Then the remaining indices will add additional probability to pick the fist characters with the lowest indices.

<!-- prettier-ignore-start -->
```js
const characters = '...'
const characterLength = 40

const randomNumber1 = 39
const randomNumber2 = 40


const index1 = randomNumber1 % characterLength // 39 % 40 = 39
const index2 = randomNumber2 % characterLength // 40 % 40 = 0

const first = characters[index1] // Returns the last character
const second = characters[index2] // Returns the first character!
```
<!-- prettier-ignore-end -->

## Ensure Random Characters Have Equal Distribution

To work around the issue caused by the remainder operator, we can only allow random numbers that are smaller than the maximum multiple of the character set length that is in turn smaller than 255 (the maximum possible value for our random number when using an `Uint8Array`).

To calculate the maximum value, we can use the following expression:

```js
const max = 256 - (256 % characters.length)
```

To give an example, this means that a character set length of 60 would yield the maximum random number 240, since 240 is the largest number that is both less than 256 and evenly divisible by 60.

```js
const max = 256 - (256 % 60) // 240
```

Getting back to implementing `getRandomCharacter()`, the next step would be to ensure that the we regenerate `randomNumber` as long as it's larger than our maximum allowed value. In the final version of `getRandomCharacter()`, we'll use a [do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while) loop to achieve this:

<!-- prettier-ignore-start -->
```js
/**
 * Get a random character from a given set of characters.
 *
 * @param {string} characters The set of characters to pick from.
 * @returns A random character.
 */
function getRandomCharacter(characters) {
    let randomNumber
    /**
     * Due to the repeating nature of results from the remainder
     * operator, we potentially need to regenerate the random number
     * several times. This is required to ensure all characters have
     * the same probability to get picked. Otherwise, the first
     * characters would appear more often, resulting in a weaker
     * password security.
     */
    do {
        randomNumber = crypto.getRandomValues(new Uint8Array(1))[0]
    } while (randomNumber >= 256 - (256 % characters.length))

    return characters[randomNumber % characters.length]
}
```
<!-- prettier-ignore-end -->

## The Finished Password Generator

Here's how the generator looks when all pieces come together!

<!-- prettier-ignore-start -->
```js
// generate-password.js

import crypto from './crypto'

const digits = '0123456789'
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lower = upper.toLowerCase()
const CHAR_SET = digits + upper + lower

/**
 * Generate a random password of a given length.
 *
 * @param {number} length The password length.
 * @param {string} characters The set of characters to pick from.
 * @returns A random password.
 */
export function generatePassword(length = 80, characters = CHAR_SET) {
    return Array.from({ length }, (_) =>
        getRandomCharacter(characters),
    ).join('')
}

/**
 * Get a random character from a given set of characters.
 *
 * @param {string} characters The set of characters to pick from.
 * @returns A random character.
 */
function getRandomCharacter(characters) {
    let randomNumber
    /**
     * Due to the repeating nature of results from the remainder
     * operator, we potentially need to regenerate the random number
     * several times. This is required to ensure all characters have
     * the same probability to get picked. Otherwise, the first
     * characters would appear more often, resulting in a weaker
     * password security.
     */
    do {
        randomNumber = crypto.getRandomValues(new Uint8Array(1))[0]
    } while (randomNumber >= 256 - (256 % characters.length))

    return characters[randomNumber % characters.length]
}
```
<!-- prettier-ignore-end -->

## Generate Passwords with `pagecrypt` in Your Next Project

This post is based on what I learned while creating the [pagecrypt](https://github.com/greenheart/pagecrypt) package which implements the code from this blog post, along with other related Web Crypto utilities. Since pagecrypt is just a standard ES module, it works with any JavaScript framework both on the frontend and the backend.

Install it with

```shell
npm i pagecrypt
```

Then, you can generate random passwords both in [browsers newer than 2018](https://caniuse.com/cryptography) and Node.js newer than v15.

```js
import { generatePassword } from 'pagecrypt/core'

const password = generatePassword(64)
```

**Enjoy!**

Let me know if you have any suggestions and further improvements!