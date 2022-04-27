# `<full-screen>` and `<full-screen-toggle>` Elements

Simple custom elements for triggering fullscreen mode in supported browsers.

## Getting Started

### Installing

```sh
npm install @evanminto/full-screen-element --save
```
or
```sh
yarn add @evanminto/full-screen-element
```

Alternatively, download the bundled browser-ready file at `dist/index.js`.

### Importing

Load the file via ES imports or a script tag:

```js
import '@evanminto/full-screen-element`;
```
or
```html
<script src="/path/to/full-screen-element/index.js"></script>
```

This will automatically register the custom elements with the names `full-screen` and `full-screen-toggle`.

## How to Use

Simple default usage:

```html
<full-screen>
  <p>Fullscreenable content</p>

  <full-screen-toggle>
    <button type="button">
      Toggle Fullscreen
    </button>
  </full-screen-toggle>
</full-screen>
```

Hide button when fullscreen isn't supported:

```html
<full-screen>
  <p>Fullscreenable content</p>

  <full-screen-toggle>
    <template>
      <button type="button">
        Toggle Fullscreen
      </button>
    </template>
  </full-screen-toggle>
</full-screen>
```

## `<full-screen-toggle>` Behaviors

Use the `data-behavior` attribute to select which elements should get custom
behaviors associated with them, or omit it to let the element select sensible
defaults.

### Values
* **full-screen-toggle-template:** If fullscreen is supported in the current browser
and `<full-screen-toggle>` is defined, the
`<template data-behavior="full-screen-toggle-template">` will be cloned and replaced
with its clone. Why would you use this? It’s a good practice to only show UI
that’s actually functional, so putting the button inside a `<template>` ensures
that only users who can use fullscreen mode see the button. By default the
element will use its first `<template>` descendant.
* **full-screen-toggle-button:** When clicked, this element will trigger the
`full-screen-toggle` event on the `<full-screen-toggle>` element. The default
click will also be suppressed. Links with `data-behavior="full-screen-toggle"`
won’t navigate and submit buttons won’t submit their forms. By default the
element will use its first `<button>` descendant.

## Methods on `<full-screen>`

### toggle()

Toggles fullscreen on or off for the target element.

**NOTE:** This will fail unless called in the context of a user action

## Events

### full-screen-toggle

Fired by `<full-screen-toggle>`.

### Built-in Events

`<full-screen>` has no custom events, but you can listen for the built-in
fullscreen events, `fullscreenchange` and `fullscreenerror`.
