# Lexicon

A simple web-app for adding and looking up words in a lexicon.

Uses

- [React](https://facebook.github.io/react/)
- [Material UI](http://www.material-ui.com/#/)
- [Algolia](https://www.algolia.com/)

## Table of Contents

- [Installation](#installation)
- [Running](#running)
- [Viewing](#viewing)
- [Contributing](#contributing)
- [Deploying](#deploying)

## Installation

0. Follow [general requirements here](https://github.com/mdzhang/guides/blob/master/DEV_SETUP.md#general-requirements).

0. Clone and enter this repo
    ```sh
    git clone git@github.com:mdzhang/lexicon-app.git
    cd lexicon-app
    ```

0. Install Homebrew packages
    ```sh
    brew bundle
    ```

0. Follow Javascript setup steps [here](https://github.com/mdzhang/guides/blob/master/DEV_SETUP.md#javascript)

0. Follow React setup steps [here](https://github.com/mdzhang/guides/blob/master/DEV_SETUP.md#react)

0. Install development environment variables
    ```sh
    cp .envrc.sample .envrc
    direnv allow
    ```

0. Install git hooks
    ```sh
    pre-commit install
    ```

    *NB*: These hooks will fail if `.envrc` is not up to date

## Running

```sh
make start
```

## Viewing

```sh
make open
```

## Contributing

See the following guidelines:

- [Javascript](https://github.com/mdzhang/guides/blob/master/STYLEGUIDES.md#javascript)
- [React](https://github.com/airbnb/javascript/tree/master/react)

## Deploying

```sh
make deploy
```
