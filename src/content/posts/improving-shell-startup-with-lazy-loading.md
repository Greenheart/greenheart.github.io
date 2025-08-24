---
title: Improving Oh My Zsh Startup Time with Lazy Loading
date: 2023-03-23
tags: ['DX', 'Code Snippet']
---

Using [Oh My Zsh](https://ohmyz.sh/) is usually a great experience. However, adding heavy plugins (like `nvm`) to load at startup time can really hurt performance. Luckily there's a way to lazy load them.

## A Simple Solution

```sh
# ~/.zshrc
plugins=(nvm git) # 1
zstyle ':omz:plugins:nvm' lazy yes # 2

source $ZSH/oh-my-zsh.sh # 3
```

1. Add the nvm plugin to your `.zshrc` file.
2. Enable lazy loading for the `nvm` plugin.
3. Make sure you source Oh My Zsh at the end.

This method reduced my shell startup time from _~1.5 s_ to _~200 ms_. A **huge** improvement for a common action I perform many times daily.

However, I soon realised some of my projects had external dependencies that relied on commands like `node` and `npm` (and other package managers) to always be defined in the shell environment. This caused weird crashes, since lazy loading `nvm` means commands like `node` and `npm` only gets enabled when they first got used.

## Conditionally Lazy Loading for Specific Directories

Adding an if statement to avoid lazy loading in specific directories:

```sh
# ~/.zshrc
plugins=(nvm git)

# This excludes any subdirectory of "/your-project/"
# =~ is used for RegExp matching.
if ! [[ $PWD =~ "/your-project/" ]]; then
  zstyle ':omz:plugins:nvm' lazy yes
fi

source $ZSH/oh-my-zsh.sh
```

## Add more commands that should load nvm

In the [documentation](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/nvm) for `nvm` plugin, there are also other features that can be useful. For example, this is how to make sure `npx` and `pnpx` work even in new terminals.

```sh
zstyle ':omz:plugins:nvm' lazy-cmd npx pnpx
```

Hopefully this saves some time, allowing you move at the speed of thought 💭
