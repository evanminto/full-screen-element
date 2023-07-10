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
  <full-screen-toggle></full-screen-toggle>
</full-screen>
```

## Customizing HTML & CSS

By default the toggle button is rendered inside `<full-screen-toggle>`'s Shadow DOM.
You can style the button via the element’s CSS parts:

```html
<full-screen-toggle></full-screen-toggle>

<style>
  full-screen-toggle::part(toggle) {
    background-color: white;
    color: red;
  }

  full-screen-toggle[active]::part(toggle) {
    background-color: red;
    color: white;
  }
</style>
```

Or if you need more control you can provide a button in the Light DOM, which
overrides this behavior and allows you to use your own markup and styles:

```html
<full-screen-toggle>
  <button type="button">Toggle Fullscreen</button>
</full-screen-toggle>

<style>
  full-screen-toggle button {
    background-color: white;
    color: red;
  }

  full-screen-toggle[active] button {
    background-color: red;
    color: white;
  }
</style>
```

## Customizing Behavior

### Behavior Attribute

By default the first `<button>` child of `<full-screen-toggle>` will be treated
as a toggle button, so clicking it will turn fullscreen on and off.

To select a different button, attach the `data-behavior="toggle"` attribute:

```html
<full-screen-toggle>
  <button type="button">Does nothing</button>
  <button type="button" data-behavior="toggle">Toggle Fullscreen</button>
</full-screen-toggle>
```

If instead of a single toggle you’d like two separate buttons, one for entering
and one for exiting fullscreen, you can assign the `data-behavior="enter"` and
`data-behavior="exit"` attributes:

```html
<full-screen-toggle>
  <button type="button" data-behavior="enter">Enter Fullscreen</button>
  <button type="button" data-behavior="exit">Exit Fullscreen</button>
</full-screen-toggle>
```

**CAUTION:** While you can assign the `data-behavior` attribute to any element
you want, using an element other than `<button>` can introduce semantic and
accessibility issues. In almost all cases you should use `<button>` for
triggering fullscreen.

## Methods on `<full-screen>`

### toggle()

Toggles fullscreen on or off for the target element.

**NOTE:** This will fail unless called in the context of a user action

## Attributes on `<full-screen-toggle>`

### active

Boolean. Will be present if fullscreen is currently active.

### supported

Boolean. Will be present if fullscreen is supported in the current browser.

## Properties on `<full-screen-toggle>`

### active

Read-only. Mirrors the state of the `active` attribute.

### supported

Read-only. Mirrors the state of the `supported` attribute.

## Events

### full-screen-toggle

Fired by `<full-screen-toggle>`.

### Built-in Events

`<full-screen>` has no custom events, but you can listen for the built-in
fullscreen events, `fullscreenchange` and `fullscreenerror`.
