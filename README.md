# greenheart.github.io

## Building the site with talks included

_NOTE:_ This could be simplified in the future to allow fully automatic builds.

1. Git clone the talks repo https://github.com/Greenheart/talks
2. Run `npm install` in the subdirectory of each talk you want to build.
3. From the root of the `talks` project, run `npm i && npm run build`
4. In the website project, run `pnpm build` to build project with all talks
5. Verify build output and deploy.

## Email spam protection

1. Make a copy of `.env.example` and name it `.env`.
2. Add your email to `VITE_EMAIL` in `.env`.
3. Add a strong password to encrypt/decrypt your email to `VITE_PASSWORD` in `.env`.
4. Open a terminal and run `pnpm encrypt:text`. Then copy the output (make sure you get every character) and add it to `VITE_PAYLOAD` in `.env`.
5. Now, the email should be accessible in the `<EncryptedEmail />` component. Easily available for users, but most basic spambots will not be able to extract the email.

## Writing best practices

- Use `node scripts/title-case.js` to format headings.
- Use `node scripts/format-code.js` to ensure code has a consistent style.
- Add `<!-- prettier-ignore-start -->` and `<!-- prettier-ignore-end -->` to wrap code blocks in blog posts to prevent the main Prettier instance of the codebase to re-format the code blocks after they already have been formatted with `node scripts/format-code.js`.
- It's possible to prevent post drafts from rendering by prefixing the file with `_`.

## Keeping local draft posts in the project without checking them in to Git

To ignore draft posts that start with the `_` prefix, append the following ignore pattern to `.git/info/exclude`:

```sh
echo "src/content/posts/_*" >> .git/info/exclude
```

Then posts will show up as normal during local development, but not be checked into git as long as they include the `_` prefix in their filename.

### Publishing a draft post

1. Remove the `_` prefix from the filename
2. Remove the `draft` property from the post frontmatter.

Note `.git/info/exclude` this only applies to the local Git repository and needs to be added for newly clones repositories.

## Credits

- Font Awesome: LinkedIn & GitHub SVG icons. Licensed under [CC BY 4.0](https://fontawesome.com/license)
