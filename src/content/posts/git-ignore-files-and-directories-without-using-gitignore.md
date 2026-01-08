---
title: Make Git Ignore Files and Directories Without Using .gitignore
publishedAt: 2025-09-12
tags: ['Git', 'Terminal']
---

By adding a pattern with the `.gitignore` syntax to the special file `.git/info/exclude`, it's possible to ignore files and directories without using `.gitignore` files.

```sh
echo "src/content/posts/_*" >> .git/info/exclude
```

## When to use `.git/info/exclude`

This is primarily useful to handle draft content, local config files, and when working with a Git-based CMS where you want to keep placeholder content out of the Git history.

## Why not use alternatives?

Both `git update-index --assume-unchanged` and `git update-index --skip-worktree` are good alternatives. However, both of them only apply to one file at a time. While this could be solved with a shell script, I usually prefer `git update-index` commands to temporarily ignore a few files.

This make `.git/info/exclude` easier to work with when you need to ignore many files and directories.

## Potential drawbacks of using `.git/info/exclude`

- Search results may be missing from your repository since you've explicitly told Git to ignore these files no matter what. This can be solved by manually including the directories you want to search, like `src/**/*` or just `src/`.
- The `.git/info/exclude` is only applied to your local Git repository. For many use cases, the regular `.gitignore` files are a better choice. In particular, `.gitignore` is better when you need to apply ignore files consistently for a large team, or in cases where it's critical to keep sensitive information away from your repositories.

## Summary

Taking this all into account, `.git/info/exclude` is very useful for local overrides - especially when working with Git-based content. However, like with any solution, make sure to consider what works best in your project.
