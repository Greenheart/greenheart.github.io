import"./DsnmJJEf.js";import"./D6tUPSQF.js";import{f as U,a as o,A as i,s as e,c as s,B as r,r as c}from"./CVtmfPP4.js";import{L as d}from"./00AeCcnI.js";import{C as n}from"./x5pRBw2h.js";const B="generate-password-in-browser-web-crypto-api",E={title:"Use the Web Crypto API to Generate a Cryptographically Secure Password in the Browser and Node.js",date:"2021-07-28",tags:["JavaScript","Web Crypto API","Node.js"]},{title:F,date:O,tags:z}=E,M=[{level:2,title:"Use the Web Crypto API in Any Environment",id:"use-the-web-crypto-api-in-any-environment"},{level:2,title:"Creating a Password by Selecting Random Characters",id:"creating-a-password-by-selecting-random-characters"},{level:2,title:"Cryptographically Secure Random Number Generation",id:"cryptographically-secure-random-number-generation"},{level:2,title:"Ensure Random Characters Have Equal Distribution",id:"ensure-random-characters-have-equal-distribution"},{level:2,title:"The Finished Password Generator",id:"the-finished-password-generator"},{level:2,title:"Generate Passwords with ",id:"generate-passwords-with"}];var L=U("<article><p>Strong, cryptographically safe passwords are an essential foundation to live a secure digital life. With an open source password manager like <!>, it's never been more accessible to generate unique, strong passwords for every online account, and then storing them in your password vault.</p><p>But what if you want to add password generation directly to your web app? That's recently been getting much more accessible as well thanks to the standard <!>.</p><h2>Use the Web Crypto API in Any Environment</h2><p>In order to make the generator work in both browsers and Node.js, we need an abstraction. This ensures we can use the same Web Crypto API no matter where the generator is used.</p><!><h2>Creating a Password by Selecting Random Characters</h2><p>The way our generator is going to work is by creating an array of a given length (matching the password length), and then filling it with random characters.</p><p>First, we'll import the crypto abstraction and define the character set we want to use.</p><!><p>Using <code>Array.from()</code>, we can provide a <code>Array.prototype.map()</code> callback to add the random characters directly while the array is created. Then, we just have to join the password into a string and we're done - except for the details of <code>getRandomCharacter()</code> which we'll cover soon.</p><!><h2>Cryptographically Secure Random Number Generation</h2><p>Let's implement <code>getRandomCharacter()</code>. To ensure the characters are randomized in a cryptographically safe way, we use <code>crypto.getRandomValues()</code>. This is <em>strongly</em> recommended instead of using <code>Math.random()</code> which may seem simpler, but is not secure enough for our needs.</p><!><p>To explain <code>getRandomCharacter()</code>, let's start by thinking about the character set again. Since our character set has less than 256 characters (8 bytes), we can pass an <code>Uint8Array</code> to <code>crypto.getRandomValues()</code>, to fill it with random numbers. In our case, this will be a single number between 0-255 since we created an <code>Uint8Array</code> with <code>1</code> byte. We'll retrieve the <code>randomNumber</code> and can now use this to calculate the random index from where to pick the next character.</p><p>Since our character set contains less than 256 characters, we need to ensure the random number isn't out of range to avoid crashes. This can be done using <code>%</code> - the <!>, which allows us to use a random number potentially much larger than our character set length, and always get a value within our desired range.</p><p>However, this method has a severe security issue - it will cause the first characters in our set to appear more often, greatly reducing the password security. This is caused by the fact that the result when using the remainder operator will restart from 0 once <code>randomNumber</code> has reached another multiple of the character set length. <code>39 % 40</code> yields <code>39</code> and <code>40 % 40</code> yields <code>0</code>, meaning we'll get the last character and then the first character again. This repeats for larger multiples such as 80 and so on, until the final iteration where we've reached the final multiple before 255. Then the remaining indices will add additional probability to pick the fist characters with the lowest indices.</p><!><h2>Ensure Random Characters Have Equal Distribution</h2><p>To work around the issue caused by the remainder operator, we can only allow random numbers that are smaller than the maximum multiple of the character set length that is in turn smaller than 255 (the maximum possible value for our random number when using an <code>Uint8Array</code>).</p><p>To calculate the maximum value, we can use the following expression:</p><!><p>To give an example, this means that a character set length of 60 would yield the maximum random number 240, since 240 is the largest number that is both less than 256 and evenly divisible by 60.</p><!><p>Getting back to implementing <code>getRandomCharacter()</code>, the next step would be to ensure that the we regenerate <code>randomNumber</code> as long as it's larger than our maximum allowed value. In the final version of <code>getRandomCharacter()</code>, we'll use a <!> loop to achieve this:</p><!><h2>The Finished Password Generator</h2><p>Here's how the generator looks when all pieces come together!</p><!><h2>Generate Passwords with <code>pagecrypt</code> in Your Next Project</h2><p>This post is based on what I learned while creating the <!> package which implements the code from this blog post, along with other related Web Crypto utilities. Since pagecrypt is just a standard ES module, it works with any JavaScript framework both on the frontend and the backend.</p><p>Install it with</p><!><p>Then, you can generate random passwords both in <!> and Node.js newer than v15.</p><!><p><strong>Enjoy!</strong></p><p>Let me know if you have any suggestions and further improvements!</p></article>");function Y(k){var l=L(),p=s(l),N=e(s(p));d(N,{href:"https://bitwarden.com/",children:(t,h)=>{r();var a=i("Bitwarden");o(t,a)},$$slots:{default:!0}}),r(),c(p);var m=e(p),j=e(s(m));d(j,{href:"https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto",children:(t,h)=>{r();var a=i("Web Crypto API");o(t,a)},$$slots:{default:!0}}),r(),c(m);var f=e(m,3);n(f,{"data-language":"js",code:`// crypto.js

/**
 * Get a reference to the Web Crypto API in any modern JS environment
 *
 * @returns An object implementing the Web Crypto API.
 */
async function loadCrypto() {
    if (
        (typeof window !== 'undefined' && window.crypto) ||
        (globalThis && globalThis.crypto)
    ) {
        // Running in browsers released after 2017, and other
        // runtimes with \`globalThis\` like Deno or CloudFlare Workers
        const crypto = window.crypto || globalThis.crypto

        return new Promise((resolve) => resolve(crypto))
    } else {
        // Running in Node.js >= 15
        const nodeCrypto = await import('crypto')
        return nodeCrypto.webcrypto
    }
}

const crypto = await loadCrypto()
export default crypto
`});var b=e(f,4);n(b,{"data-language":"js",code:`// generate-password.js

import crypto from './crypto'

const digits = '0123456789'
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lower = upper.toLowerCase()
const CHAR_SET = digits + upper + lower
`});var v=e(b,2);n(v,{"data-language":"js",code:`/**
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
`});var C=e(v,3);n(C,{"data-language":"js",code:`
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
`});var u=e(C,2),S=e(s(u),3);d(S,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder",children:(t,h)=>{r();var a=i("Remainder operator");o(t,a)},$$slots:{default:!0}}),r(),c(u);var _=e(u,2);n(_,{"data-language":"js",code:`const characters = '...'
const characterLength = 40

const randomNumber1 = 39
const randomNumber2 = 40


const index1 = randomNumber1 % characterLength // 39 % 40 = 39
const index2 = randomNumber2 % characterLength // 40 % 40 = 0

const first = characters[index1] // Returns the last character
const second = characters[index2] // Returns the first character!
`});var T=e(_,4);n(T,{"data-language":"js",code:`const max = 256 - (256 % characters.length)
`});var R=e(T,2);n(R,{"data-language":"js",code:`const max = 256 - (256 % 60) // 240
`});var g=e(R),$=e(s(g),7);d($,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while",children:(t,h)=>{r();var a=i("do...while");o(t,a)},$$slots:{default:!0}}),r(),c(g);var A=e(g);n(A,{"data-language":"js",code:`/**
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
`});var x=e(A,3);n(x,{"data-language":"js",code:`// generate-password.js

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
`});var w=e(x,2),G=e(s(w));d(G,{href:"https://github.com/greenheart/pagecrypt",children:(t,h)=>{r();var a=i("pagecrypt");o(t,a)},$$slots:{default:!0}}),r(),c(w);var P=e(w,2);n(P,{"data-language":"sh",code:`npm i pagecrypt
`});var y=e(P),W=e(s(y));d(W,{href:"https://caniuse.com/cryptography",children:(t,h)=>{r();var a=i("browsers newer than 2018");o(t,a)},$$slots:{default:!0}}),r(),c(y);var I=e(y);n(I,{"data-language":"js",code:`import { generatePassword } from 'pagecrypt/core'

const password = generatePassword(64)
`}),r(2),c(l),o(k,l)}export{Y as default,E as frontmatter,M as headings,B as slug};
