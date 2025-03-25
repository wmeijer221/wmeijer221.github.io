# Website title

This repository contains a website.

## Contribution guidelines

First of all, thank you for being interested in contributing to this webpage.
Whether it is to fix a typo, update a data entry, or overhaul the entire page, your help is much appreciated.
Having said that, there are some simple rules which we would like you to follow:
- Do not propose changes if you don't know what you're doing; when unsure, post an issue with a request/recommendation instead.
- If your change is minor (e.g., fixing a typo or updating/adding a data entry), feel free to submit it right away. If it's big, talk it through first (either in-person or by submitting an issue).
- Submit your changes through a pull request. This makes managing changes a lot cleaner/easier. Please make it clear what you changed and why, though.

Please mind that, to contribute to the project directly, you will have to be added as a member.
If you do not want to wait for this, feel free to create a project fork and submit a pull request from there.


## What can I change and where do I do that?

If you're here to add a new data entry (e.g., an event, personal details, etc.) or update one, you can refer to the [_data](./_data) folder.
You will find various `JSON` files; their names should be mostly self-explanatory, so just look for the one that makes the most sense for your needs and open that one.
From there, if you already have an entry, look it up and feel free to change it.
If you don't have an entry yet, there is a template entry at the top of the file you can copy-and-paste and then change as you want.
Some fields are marked as optional; feel free to delete those.
The project contains the following data files:
- ...
- ...

If what you're looking for is not in the data files, you'll have to change one of the `HTML` pages.
To change anything there, please read the project's [Technical Details](#technical-details).

Once you have made your change, you need to test whether it worked first.
You do this with the following steps:
- Execute ``npm install`` to install the project's relevant packages.
- Execute ``npm run build`` in the terminal to regenerate the webpage.
- Execute ``npm run start`` in the terminal to start the webpage (if it ran successfully, the console output will mention where you should connect to; this is probably ``http://localhost:8080``).
- Go to wherever you expect your change to appear and check if it is really there.

If you are happy with the results, run ``npm run publish`` in your terminal and commit the changes it made to your branch (some of the files in the ``docs`` folder will have changed).
After you have done that, you are good to go and submit your pull request.


## Technical details

The project is fairly straightforward as it's a static webpage.
In other words, it's only a front-end, so no databases, APIs, etc.

To speed up development, we use [TailwindCSS](https://tailwindcss.com/) so we don't have to write any custom CSS, and [Liquid](https://shopify.dev/docs/api/liquid) to generate parts of the webpage.
The second lowers the threshold for contributing to the page quite substantially.

Beyond that, we expect you to have [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed when making changes.
If you want, you can use [VS Code Devcontainers](https://code.visualstudio.com/docs/devcontainers/containers), but that's not a hard prerequisite; it just helps with reproducibility.

For the pages, then, we use a template page found in [_layouts](./_layouts).
These use some standard components (headers, etc.) which are found in [_include](./_include).
Finally, the specific pages are included in [pages](./pages).

