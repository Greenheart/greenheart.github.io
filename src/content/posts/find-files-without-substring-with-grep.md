---
title: Find Files Without a Substring with Grep
date: 2024-05-29
tags: ['React', 'Shell Scripting', 'Terminal']
---

After resolving a merge conflict in a large React codebase, the following error appeared:

```sh
Element type is invalid: expected a string (for built-in components) or a class/function
```

It seemed like one of the components was [missing the export keyword](https://stackoverflow.com/questions/44897070/element-type-is-invalid-expected-a-string-for-built-in-components-or-a-class). The question was just which component?

It's easy to find all files in a directory that do include a substring like `export` in the IDE and various terminal commands, but what about finding the files that don't include the `export` keyword?

Shell scripting to the rescue: After some research, I learned about some new CLI flags that could be used to solve this with the `grep` command, available in most Unix shells.

The following command recursively finds all files in the `components` directory (including its subdirectories) that don't include the `export` search string:

```sh
grep -riL "export" components
```

There's also an option to match files that do include a keyword, by replacing the `-L` flag with `-l`, as described [here](https://stackoverflow.com/a/56486664):

```sh
grep -ril "export" components
```

Quite a powerful way to quickly find what you need!
