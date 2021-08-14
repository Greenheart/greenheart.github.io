# greenheart.github.io

## Email Spam Protection

1. Make a copy of `.env.example` and name it `.env`.
2. Add your email to `VITE_EMAIL` in `.env`.
3. Add a strong password to encrypt/decrypt your email to `VITE_PASSWORD` in `.env`.
4. Open a terminal and run `node scripts/encrypt-text.js`. Then copy the output (make sure you get every character) and add it to `VITE_PAYLOAD` in `.env`.
5. Now, the email should be accessible in the `<EncryptedEmail />` component. Easily available for users, but most basic spam bots will not be able to extract the email.

## Writing Best Practices

- Use `node scripts/title-case.js` to format headings.
- Use `node scripts/format-code.js` to ensure code has a consistent style.
- Use `<!-- prettier-ignore-start -->` and `<!-- prettier-ignore-end -->` to wrap code blocks in blog posts to prevent the main Prettier instance of the codebase to re-format the code blocks after they already have been formatted with `node scripts/format-code.js`.
- It's possible to prevent post drafts from rendering by prefixing the file with `_`.

## Credits

-   Font Awesome: LinkedIn & GitHub SVG icons. Licensed under [CC BY 4.0](https://fontawesome.com/license)