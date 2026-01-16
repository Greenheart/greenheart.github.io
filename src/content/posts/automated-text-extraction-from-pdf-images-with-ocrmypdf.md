---
title: Automated Text Extraction from PDF Images with OCRmyPDF
publishedAt: 2025-09-04
tags: ['PDF', 'Data Pipelines', 'OCR']
---

When extracting text content from PDF files, you occasionally find embedded images without any text nodes. For tiny PDFs this can usually be solved manually, but it's not feasible to manually retype text from many PDF pages. Especially not as part of a data pipeline processing many thousands of documents.

Luckily, there are ways to automate the text extraction by using Optical Character Recognition ([OCR](https://en.wikipedia.org/wiki/Optical_character_recognition)) software.

One great example is the open source program [OCRmyPDF](https://github.com/ocrmypdf/OCRmyPDF), which in turn is built on top of [Tesseract](https://github.com/tesseract-ocr/tesseract). The best thing about this tool compared to others is that it runs completely locally on your computer which allows you to keep sensitive data private. Since it's a command-line tool, it's easy to automate and process many files in parallel.

`ocrmypdf` can usually be [installed with one command](https://ocrmypdf.readthedocs.io/en/latest/installation.html) to let you start using it. Though, as always, make sure you are installing from a reputable source, or build the program yourself from the source code.

## Using `ocrmypdf` to extract text from PDFs

If you only need to extract text from PDF files with English content, you can use the default language pack which usually comes preinstalled.

Here's how to perform OCR on a PDF with English content:

```sh
ocrmypdf in.pdf out.pdf
```

If some pages have text content already, you can skip them with `--skip-text`:

```sh
ocrmypdf --skip-text in.pdf out.pdf
```

## Using specific languages

If you need support for additional languages, you can [install additional language packs](https://ocrmypdf.readthedocs.io/en/latest/languages.html). If you for example want to use German, you would [install](https://ocrmypdf.readthedocs.io/en/latest/languages.html) the `deu` language pack and then use it like this:

```sh
ocrmypdf -l deu in.pdf out.pdf
```

If you want both German and English, you can enable multiple language packs:

```sh
ocrmypdf -l deu+eng in.pdf out.pdf
```

## Conclusion

These commands usually solve most cases for me with great results. Even though it's not always perfect, the output from `ocrmypdf` is a much better starting point for manually reviewing the PDF texts when it's important to make 100% correct conversions.

There are also plenty of options to explore with `ocrmypdf` to improve your results. If you find cases where it doesn't work, both `ocrmypdf` and `tesseract` are open source projects that could become even better with your contributions. In other cases, there are other OCR tools available, many of which are libre software. However, I've not needed them so far.
