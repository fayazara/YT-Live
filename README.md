
# YT Live

A list of live youtube tv channels.


## Why did I make this?

A friend had a list of live youtube channels saved as a Google sheet and mentioned there's no way to know if there's a live news channel, unless you search for it specifically. Hence I made this small site as a weekend project, a centralized site with live channels.

The site might be a overkill, as I could have just listed down the links somewhere, but I like making small projects, and here it is.
## Tech Stack

**Client:** Vue, Nuxt.js, TailwindCSS

**Server:** Firebase Auth, Firebase Firestore (For favourites)

  
## Contributing

Since I am not able to pull all the data myself, contributions are welcome for new channels/stations from your country. If you find something you'd like to add, please add raise a PR by adding a new json file inside the content directory.

This project uses [Nuxt Content module](https://content.nuxtjs.org/writing).

1. Create a new json file in the `content/channels` directory.
2. Follow the below example format and fill in the data.
```JSON
{
    "name": "ABC News",
    "category": "News",
    "language": "English",
    "youtube_id": "w_Ma8oQLmSM",
    "youtube_link": "https://www.youtube.com/watch?v=w_Ma8oQLmSM",
    "youtube_embed_link": "https://www.youtube.com/embed/w_Ma8oQLmSM",
    "iframe_supported": false,
    "country": "USA"
}
```
3. Copy the channel logo from youtube and save in the static folder.
4. Raise a PR.
## FAQ

#### How do I request new channels

Please follow the contributing guide and raise a PR.


## Roadmap

- Divide the channels geographically

- Better favourites page.

- Better player page.

- Not sure, but maybe an app? As this already works as a PWA.

  

## Local Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
