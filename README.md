# Kaufmann's Recipe Site (German)

## built in React, Bootstrap and custom CSS.

![ksr](https://kochannek.com/portfolio/kaufmanns-rezeptsammlung/ksroverviewgithub.png)

### About

This was my third React project - a recipe site with my grandfather's collection of ~180 phenomenal recipes.
Those recipes were published as a book once and the PDF file is be available as a free download (237 pages, dual page Layout).
You can preview the book [here](https://kochannek.com/previewer/kaufmannsrezeptsammlung).

All recipes and ingredients are written in German.

## Technologies used

**Frontend / UI:**

- React
- React Router
- React Context API
- Hooks
- Styling: Custom CSS, React-Bootstrap, React-Icons

**Backend:**

Contentful API.

The Website is fully responsive and I made two seperate versions of the Navbar (Desktop and Mobile) as well as several Breakpoints for scaling.

### Misc

I always heard about the phenomenon of looking at your Code months later and seeing countless things you can improve - and this was the case here as well.
Having written it in roughly May '20 and looking back at it in Nov '20, I couldn't help myself and did a massive overhaul. I significantly shortened the codebase, have re-written all class-based Components to functional ones (Hooks) and replaced every category page (I had a seperate page for every recipe category) with a single Component that accepts a slug via props.
Very satisfactory to see how much I could improve on this page - or rather: how much my coding skills improved in the last months.
Although I don't necessarily like the CSS I did very much, I'm still pretty happy with the result.
If there are any suggestions, just open a PR.

Happy coding!
