# Hack The North (Events)

## Important Information 
* You can visit the deployed application at the link [https://stormy-ravine-02564.herokuapp.com](https://stormy-ravine-02564.herokuapp.com/)
* The duration slider on the event filter section of the site does not work (I did not have enough time to finish implementing it)
* Use the Log In Credentials (Username: "test@htn.com", Password: "1234")

## Development Process
### Planning the structure and design:
* Before I started coding this project, I planned out how the application would work by determining what functionality needed to be implemented, how the application would look, and what technology I would use to build it. In terms of the design, I drew mockups of how I wanted the application to look, then determined the different components that would need to be built, and then built out the components. I relied on React-Bootstrap and my own custom styling to make the application look like the mockups I had designed, and implemented CSS Media Queries to ensure the website would run nicely on mobile devices. 
* The Structure of the application consisted of several smaller components that were put together in the App.js file, which was then rendered.

### Technology Used (React)
* While I did not have a ton of experience with using React before building this project, I choose to use React because I understood the benefits that I would gain. Getting reusable components (less code), an overall faster application with no page refreshes, and more, made it the best candidate to build this application.
* As I knew I wanted to have multiple routes of my react application, I decided to use React Router to create the login, event detail, and home routes.

### Challenges Faced
* This project was definitely a challenging one to build as I did not have a lot of experience with using React to build applications up until this point.
#### Some of the particularly pesky problems I faced were:
* Dealing with JavaScript Async functions and Promises. Fetching data from the API using the fetch() JavaScript function was not working as I intended as I kept getting back null responses. Going over how JavaScript promises work again, and covering the .then() and fetch() functions helped me solve this issue.
* Understanding how passing state between child and parent components worked (Lifting up State), and implementing this myself was definitely a challenge. Reading the React Documentation helped me solve this issue.
* Updating complex state and using the JavaScript Spread operator was a challenge, especially when it came to implementing the filter feature of my application. Reading the MDN Documentation, and experimenting helped me overcome this.

### Areas that you are proud of
* I am especially proud of the filter feature I put in, to allow a user to search, filter by event type, and filter by start time. This was something that was tough to implement, as keeping track of a complex state with many properties and updating the state appropriately was definitely a challenge. 
* All in all, I am proud of myself for finishing this project on time and learning a lot more about React over the past 4-5 days.

## Next Steps
Given more time, I would like to add the following to my application:
* Further modularize the components in the code. For some components, I could further break down the code into more modules. This way, the code becomes easier to debug, collaborate with others, and maintain over time.
* I would like to implement Redux to make managing state easier.
* I would like to improve the styling of the components as I feel the color pallette is somewhat bland. Perhaps I could consult with a professional graphic designer to get a better-looking and more functional UI.
* I would make proper loading animations to make the UI smoother and more appealing to the end-user.
