---
title: Update Your Git Commit Email Address Before Pushing to Remote Repository
date: 2021-07-23
tags: ['Git', 'Code Snippet']
---

Here's a quick way to update commit author email and display name for previous commits in a local project.

Two things worth mentioning before using this:

1. If you change your email, it might no longer count as contributions on your GitHub/GitLab profile. But as long as you keep the old email as a hidden email connected to your account, it should work.

2. Remember that rewriting history in shared projects is a bad idea. Especially when working in a collaborative environment with other people. But for old local projects that you want to upload to a public Git repository, this method could be useful to hide some personal information.

```shell
git filter-branch --commit-filter '
      if [ "$GIT_AUTHOR_EMAIL" = "old@email.com" ];
      then
              GIT_AUTHOR_NAME="Your Name";
              GIT_AUTHOR_EMAIL="new@email.com";
              git commit-tree "$@";
      else
              git commit-tree "$@";
      fi' HEAD
```

Credit: [StackOverflow](https://stackoverflow.com/a/2931914/4183985)
