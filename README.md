# greenheart.github.io

## Email Spam Protection

1. Make a copy of `.env.example` and name it `.env`.
2. Add your email to `VITE_EMAIL` in `.env`.
3. Add a strong password to encrypt/decrypt your email to `VITE_PASSWORD` in `.env`.
4. Open a terminal and run `node scripts/encrypt-text.js`. Then copy the output (make sure you get every character) and add it to `VITE_PAYLOAD` in `.env`.
5. Now, the email should be accessible in the `<EncryptedEmail />` component. Easily available for users, but most basic spam bots will not be able to extract the email.

## Writing Best Practices

- Use the title casing script to format headings.
- Format code blocks with `node script/format-code.js` to ensure they are consistent and avoid horizontal scroll bars as long as possible. See the script for further instructions.
- Use `<!-- prettier-ignore-start -->` and `<!-- prettier-ignore-end -->` to prevent the main Prettier instance of the codebase to re-format the inline code blocks after they have been formatted with the manual script.

## Credits

-   Font Awesome: LinkedIn & GitHub SVG icons. Licensed under [CC BY 4.0](https://fontawesome.com/license)
