---
title: Testing Rust-based CLI applications using temporary directories
publishedAt: 2026-01-17
tags: ['Rust', 'Terminal', 'Open Source']
featured: true
---

I recently finished reading the book [Command Line Applications in Rust](https://rust-cli.github.io/book/), experimenting with the exercises and adding more test cases. While the testing chapter covers the [basics of testing CLI apps](https://rust-cli.github.io/book/tutorial/testing.html), it didn't show the full potential of the recommended crates [assert_cmd](https://crates.io/crates/assert_cmd), [assert_fs](https://crates.io/crates/assert_fs) and [predicates](https://crates.io/crates/predicates).

Specifically, I wondered how to create a temporary directory with multiple nested subdirectories and files. This is very useful for testing CLI tools that scaffold projects. Or in the case of my current Rust project, building a simple Git clone to learn more about how Git works internally, how to structure unit and integration tests in Rust, and to practice using the language.

Since I'm used to reading technical documentation and learning new technologies, I found what I needed without too much trouble by exploring [docs.rs/assert_fs](https://docs.rs/assert_fs/latest/assert_fs/struct.TempDir.html) to learn about temporary directories, and [docs.rs/assert_cmd](https://docs.rs/assert_cmd/latest/assert_cmd/cmd/struct.Command.html#method.current_dir) for executing the CLI app in a specific working directory. However, this seemed like a good opportunity to improve the Rust CLI book itself, to make common testing techniques easier to discover for people who might be new(er) to programming and not yet comfortable with jumping into technical documentation. I remember how much I valued these types of friendly and accessible descriptions when I started more than a decade ago, and these days I think they are important to make software development more accessible.

So I ended up [contributing](https://github.com/rust-cli/book/pull/284) a new section describing the following example to hopefully make the book even better. If you're curious about how it works, I encourage you to read the [full version](https://github.com/rust-cli/book/pull/284/files) which gives some more context.

```rs
#[test]
fn find_content_in_file_of_tmp_dir() -> Result<(), Box<dyn std::error::Error>> {
    let cwd = assert_fs::TempDir::new()?;

    let child_dir = cwd.child("nested/child_dir");
    let child_file = child_dir.child("sample.txt");

    child_file.write_str("The first\ntest file.\nLast line of first file.")?;

    // Files can be nested several levels within the temporary directory
    assert!(child_file.path().ends_with("nested/child_dir/sample.txt"));

    cargo_bin_cmd!("grrs")
        // Execute in the temporary directory
        .current_dir(cwd.path())
        .arg("first")
        .arg(child_file.path())
        .assert()
        .success()
        .stdout(predicate::str::contains(
            "The first\nLast line of first file.",
        ));

    Ok(())
}
```

Making this change was also a good opportunity to learn more about how [mdBook](https://github.com/rust-lang/mdBook) works, which is commonly used for many Rust books and technical tutorials. I really enjoyed how fast it builds, and even runs tests for the code samples to verify everything works as expected. This makes technical writing such a smooth experience.

And speaking of the Git clone, it's coming together nicely and has already taught me a lot about both Rust programming and how to create integration tests that simulate a Git repository. In fact, these testing techniques already helped me catch a regression while refactoring to reuse some code between `git cat-file` and `git ls-tree`, so this knowledge has already proven useful!
