---
title: Update Your Git Commit Email Address Before Pushing to Remote Repository
date: 2021-07-23
tags: ['Git', 'Code Snippet']
---

Here's a quick way to update commit author email and display name for previous commits in a local project.

Two things worth mentioning before using this:

1. If you change your email, it might no longer count as contributions on your GitHub/GitLab profile. But as long as you keep the old email as a hidden email connected to your account, it should work.

2. Remember that rewriting history in shared projects is a bad idea. Especially when working in a collaborative environment with other people. But for old local projects that you want to upload to a public Git repository, this method could be useful to hide some personal information.

Let's use [git-filter-repo](https://github.com/newren/git-filter-repo) which is a modern replacement to `git filter-branch` and can be installed via package managers or by following the official [install guide](https://github.com/newren/git-filter-repo/blob/main/INSTALL.md).

Once installed, we can update the email like this:

```sh
git-filter-repo \\\
--email-callback 'return email.replace(b"old@email.com", b"new@email.com")'
```

If you also want to update your name, you can run this command:

```sh
git-filter-repo \\\
--name-callback 'return name.replace(b"OldName", b"NewName")' \
--email-callback 'return email.replace(b"old@email.com", b"new@email.com")'
```

Credit: [StackOverflow](https://stackoverflow.com/a/60364176)
