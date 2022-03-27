# `<full-screen>` Element

Simple custom element for triggering fullscreen mode in supported browsers.

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

This will automatically register the custom element with the name `full-screen`.

## How to Use

Simple default usage:

```html
<full-screen>
  <p>Fullscreenable content</p>

  <button
    type="button"
    data-behavior="full-screen-toggle"
  >
    Toggle Fullscreen
  </button>
</full-screen>
```

With a separate target:

```html
<div id="full_screen_target">
  <p>Fullscreenable content</p>
</div>

<full-screen target="full_screen_target">
  <button
    type="button"
    data-behavior="full-screen-toggle"
  >
    Toggle Fullscreen
  </button>
</full-screen>
```

**NOTE:** When the button is outside of the target, users will only be
able to exit fullscreen mode via built-in mechanisms such as the Escape key.

With a template:

```html
<full-screen>
  <p>Fullscreenable content</p>

  <template data-behavior="full-screen-template">
    <button
      type="button"
      data-behavior="full-screen-toggle"
    >
      Toggle Fullscreen
    </button>
  </template>
</full-screen>
```

## Attributes on `<full-screen>`

### target

ID of an element. If the ID is null, an empty string, or doesn't exist
in the same document or shadow root as this element, this element
will be the default target.

## Descendant Attributes

### data-behavior

This attribute assigns the specified behavior to an element in the light DOM,
allowing the host document to customize markup, styling, and additiona JS logic
without piercing the shadow DOM boundary.

`data-behavior` must be set on a _descendant_ of a `<full-screen>` element.

#### Values
* **full-screen-template:** If fullscreen is supported in the current browser
and `<full-screen>` is defined, the
`<template data-behavior="full-screen-template">` will be cloned and replaced
with its clone. Why would you use this? It’s a good practice to only show UI
that’s actually functional, so putting the button inside a `<template>` ensures
that only users who can use fullscreen mode see the button.
* **full-screen-toggle:** When clicked, this element, will call `toggle()` and toggle the fullscreen
state. The default click will also be suppressed. Links with
`data-behavior="full-screen-toggle"` won’t navigate and submit buttons won’t
submit their forms.

## Properties

### target

Reflected property version of the `target` attribute.

## Methods

### toggle()

Toggles fullscreen on or off for the target element.

**NOTE:** This will fail unless called in the context of a user action

## Events

This element has no custom events, but you can listen for the built-in
fullscreen events, `fullscreenchange` and `fullscreenerror`.

**NOTE:** The built-in fullscreen events will fire on whichever element is in
fullscreen mode. That means if you use the `target` attribute, the events will
fire on the target, _not_ the `<full-screen>` element.
