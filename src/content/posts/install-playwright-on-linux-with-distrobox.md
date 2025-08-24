---
title: Installing Playwright on non-Ubuntu Linux distributions
date: 2025-08-23
tags: ['Playwright', 'Distrobox', 'Testing']
featured: true
---

## Prerequisites

This guide assumes you have a container runtime like [Podman](https://podman.io/) (strongly recommended) or Docker already installed.

## Set up distrobox

Since Playwright only supports Ubuntu, you can use [Distrobox](https://distrobox.it/) to run Playwright within an Ubuntu container. This allows you to run Playwright on your development machine despite which Linux distribution you prefer.

On Fedora, you can install it like this:

```sh
sudo dnf install distrobox
```

It's a good practice to separate your actual home directory from the home directories of your distrobox containers. I suggest you store them all in once place in `~/distrobox`, and then create subdirectories with the actual home directories of each distrobox container:

```sh
mkdir ~/distrobox
```

To use distrobox, we begin by creating a new container named `ubuntu` and set its home directory to `~/distrobox/ubuntu`. This will also install some additional packages needed for Playwright.

```sh
distrobox create \
> --name ubuntu --image ubuntu:24.04 \
> --home ~/distrobox/ubuntu \
> --additional-packages "git vim nodejs npm"
```

Next, let's enter into the `ubuntu` container:

```sh
distrobox enter ubuntu
```

**NOTE:** The first time you run this command it will start installing dependencies, which might take some time depending on your network.

Once this is completed, your current terminal will have access to the environment of your distrobox container called `ubuntu`. You can now run commands specific to the Ubuntu environment, such as:

```sh
apt --version
```

Great! Now let's get started with Playwright.

## Installing Playwright

In the same terminal with access to the `ubuntu` container, navigate to your project directory and run the following two commands.

First, install the system dependencies (Ubuntu packages) needed by Playwright:

```sh
npx playwright install-deps
```

Then, install the latest browsers used to run tests:

```sh
npx playwright install
# or
npx playwright install firefox 	# specific browser
```

And now you're ready to start testing with Playwright!

## Running tests with Playwright

**NOTE:** Make sure to run the Playwright tests in your native Terminal application and not in an integrated terminal such as the one in your code editor. This way, you keep the Playwright process - which spawns several browsers - separate from your code editor. This is much better for system stability and memory usage.

To get access to the `ubuntu` distrobox container, run the following in a new native terminal:

```sh
distrobox enter ubuntu
```

In the same terminal, you can then navigate to your project directory and run the tests:

```sh
npx playwright test
# or replace with your test command
pnpm test
```

And that's all - happy testing!
