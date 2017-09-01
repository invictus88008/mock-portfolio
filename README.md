## Mock Portfolio

This is a fork of the udacity proftolio project.  It has been opitmized to run in under 60fps.

### Run Sever

`npm run start`

### Edits

Edits are made in src directory and run `gulp build` to diribute it to public.

Optimizations made so far include:

async font load
Install critical with gulp to load crititcal styles first
multiple perferamce bugs handled in view/js/main.js including switching querySelector, to appropriate getElementBy, moving dom look ups/variable assignment out of loops.


