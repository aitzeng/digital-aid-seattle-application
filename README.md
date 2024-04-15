## Setting up MongoDB

You'll first need to create a .env file.

Copy and Paste the code below into the .env file. This will give you access into the database. If this was a real application instead of a challenge, the code would obviously not be displayed.

MONGODB_URI=mongodb+srv://aitzeng:SjzNEfuK7OmXpphw@cluster0.mywqza4.mongodb.net/DAS

## Getting Started

Next, ensure the packages have been installed.

npm install
# or
yarn install

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding Donations

The user is able to fill out the form and add in donation entries. When submitted, the history of donations will be updated.

The history shows the most recent 5 donations. To have more donations viewable, you'll need to adjust the app/api/history/route.ts file. 

## Editing Donations

Users are also able to edit donations. In the history section, clicking edit will cause the specified panel to become editable. Users can then change the names/types/quantity. If this was a more realistic application, the history would be tied to the user's account and not be adjustable to everyone.

Users also have the option to be more specific with the type of donation in the editable field. I just wanted to showcase the easy drop down menu :D
