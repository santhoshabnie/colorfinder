## Project Name

#### Color Finder

An applicaion used to list out all the related colors based on user input. This project was built with ReactJS, which uses the Heroku colors names API to lists the list of color names based on the user input.

## Demo Link

Please access the site at https://color-finder-react.netlify.app/

## Screenshots

![Alt text](https://i.postimg.cc/S25FMKkv/1.png "Optional title")

![Alt text](https://i.postimg.cc/4nDR4n8K/2.png "Optional title")

![Alt text](https://i.postimg.cc/wRmKcdBT/3.png "Optional title")

![Alt text](https://i.postimg.cc/HjcCCbtD/4.png "Optional title")

## Library, Framework, Modules & Data Source

- ReactJS.

- Bootstrap for responsive design.

- Axios for fetching data from internet.

- react-responsive-masonry for adding the masonry grid to the page.

- Data Souce : https://color-names.herokuapp.com/v1/

## Approach

I used https://color-names.herokuapp.com/v1/ to get the almost all of the colors from the server(includes 20k+ colors), data from the above URL contains details like color name, hexa code, rgb code etc. First, soon as page complete loads, script will get all the colors from the API and store it in the state, then, user will enter the input, as soon as users enters 3 or more characters, based on the user input, script will filter the related colors and show them in masonry grid.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Run Test Suite:

`npm test`

To Start Server:

`npm start`

To Visit App:

`http://localhost:3000/`

## License

MIT license @ [author](https://github.com/santhoshabnie)
