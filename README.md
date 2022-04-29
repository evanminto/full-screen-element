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

## Customizing Behavior

### Template

By default, `<full-screen-toggle>` automatically checks if fullscreen is
supported in the browser, and if it _is_ supported, the element clones the
contents of its first `<template>` descendant and replaces the template with
the clone.

For example, if we start with:

```html
<full-screen-toggle>
  <template>
    <button type="button">Toggle Fullscreen</button>
  </template>
</full-screen-toggle>
```

It will end up looking like this in supporting browsers:

```html
<full-screen-toggle>
  <button type="button">Toggle Fullscreen</button>
</full-screen-toggle>
```

To use a different template, add the `data-full-screen-toggle-template` to the
template, like so:

```html
<template data-full-screen-toggle-template>
  ...
</template>
```

### Trigger

By default, the element will toggle fullscreen when any `<button>` descendant
is clicked.

To use a different button (or a different type of element) as the trigger, add
the `data-full-screen-toggle-trigger` attribute, like so:

```html
<div role="button" data-full-screen-toggle-trigger>Fullscreen</div>
```

**CAUTION:** Using an element other than `<button>` can introduce semantic
and accessibility issues. In almost all cases you should use `<button>` for
triggering fullscreen.

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
