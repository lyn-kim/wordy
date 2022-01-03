---
name: Polish
about: Use this template for enhancing user experience of existing functionality.
title: "Polish"
---

## ✅ Task List

> ##### Commit checklist for tasks needed.

- [ ] Verify the consistency of the site's theme.
    - The `<title>` should fall in line with the site's overall purpose. `ajax-project` is not specific enough.
    - Replace the default [favicon](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_custom_icons_to_your_site) included in the project's `index.html` file with an image that is thematically related to the app.
    - The site's brand (logo and/or text) should be visible and consistently placed on every page. Clicking the site's brand should navigate the user back to the home page.
    - A main heading (`<h1>`) should be visible near the top of every page. It should indicate which page the user is currently on. It should be consistently placed on every page (excluding the landing page, which may have it somewhere more prominent).
    - Site navigation links should be visible and consistently placed on every page of the site.
    - Every page of the site should use a consistent color pallette consisting of 2-5 colors (excluding images and videos). All text should either be light-text-on-dark-background or dark-text-on-light-background to keep text readable.
- [ ] Verify the site's HTML has good semantics. For any changes to the HTML structure, update the CSS as-needed to prevent the UI from breaking.
    - Each tabular list of things should be in a well-structured table (`<table>`).
    - Each non-tabular list of things (including, for example, site navigation or a grid of images) should be in a well-structured list (`<ul>` or `<ol>`).
    - All form control elements (`input`, `select`, `textarea`, etc.) should be in a `form` element.
    - Each input with special input restrictions should have an appropriate input type (`type="number"` for numbers, `type="email"` for emails, etc.).
    - Event handler functions for `form` elements should be applied to the `"submit"` event on the `form` element, ***not*** a `"click"` event on the "Submit" button..
    - Each clickable element that sets inputs back to their default state should be a reset button (`type="reset"`) for the form (`<form>`) containing those inputs.
    - Each clickable element that triggers navigation within the page or to another page/site should be an anchor tag (`<a>`).
    - Each image which is important to the content of the site (not just for visual appeal) should be an image tag (`<img>`).
- [ ] Verify the site's layout fits and effectively uses space on all commonly-used device sizes, including:
    - Wide-screen Desktop/Laptop (1920px-by-947px)
    - iPhone X (portrait and landscape)
- [ ] Verify that each interactive element on the site looks and feels interactive:
    - Links should be colored differently from surrounding text (if text is dark, the default blue usually works) to stand out. Hovering over a link should change the `cursor` to a `pointer`.
    - Buttons should clearly stand out from the surrounding content, using a different `background-color` and/or a `border`. Hovering over a button should change the `cursor` to a `pointer` and change the button's appearance in some way (`color`, `text-decoration`, `outline`, `box-shadow`, `background-color`, etc.) without changing the button's overall size or position.
- [ ] Verify that each API request (that isn't part of initial page load) handles network wait times and failures gracefully (test using inspector Network tab):
    - While an API call is in-progress, a loading message or animation should be displayed. When the API call stops (regardless of outcome), the loading message/spinner should disappear.
    - When a `GET` API call responds with an empty data set (no error), the client should display an appropriate message.
    - When an API call produces an error response, the client should communicate it to the user appropriately.
- [ ] Verify that the following common issues are addressed:
    - Address any console errors (other than a missing `favicon`), if possible.
    - Ensure no images are stretched out of their natural aspect ratio, regardless of screen size.
    - In tables, fixed-decimal columns (such as currencies) are right-aligned to keep decimal points aligned.
