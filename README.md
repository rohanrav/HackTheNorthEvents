# Hack The North (Events)

## Deployment Information 
* You can visit the deployed application at the link [Here.](https://stormy-ravine-02564.herokuapp.com/)
* The duration slider on the event filter section of the site does not work (I did not have enough time to finish implementing it)

## Development Process
### Planning the structure and design:
* Before I started coding this project, I planned out how the application would work by determining what functionality needed to be implemented, how the application would look, and what technology I would use to build it. In terms of the design, I drew mockups of how I wanted the application to look, then determined the different components that would need to be built and built out the components. I relied on React-Bootstrap and my own custom styling to make the application look like the mockups I had designed, and implemented CSS Media Queries to ensure the website would run nicely on mobile devices. 
* The Structure of the application consisted of several smaller components that were put together in the App.js file, which was then rendered.

### Technology Used (React)
* While I did not have any major experience with using React before building this project I choose to use React because I understood the benefits that I gain. Getting reusable components (less code), an overall faster application with no page refreshhes, and more, made it the best candidate to build this application.
* As I knew I wanted to have multiple routes of my react application, I decided to use React router to separate and have a login, event detail, and home page.

### Challenges Faced
* This project was definitely a challenging one to build, this was my first time building a react application outside of codesandbox
While I was familiar with what react was and how it worked, actually building an application with it proved to be a challenge for me espceiall considering it was my first time. 
#### Some of the particularly pesky problems I faced were:
* Dealing with JavaScript Async functions and Promises. When fetching data from the API, getting results back that were undefined when the fetch javascript function would not work was definitely frustrating. Going over how javascript promises work again, and covering the ,then and .catch functions helped me solve this issue.
* Passing state between components. The idea of passing state between parent and child components was definitely something new for me to wrap my head around 
* Updating complex state and using the javascript spread operator in doing so to keep the code sleek 

### Areas that you are proud of
* I am especially proud of the filter feature I put in, to allow a user to search and filter by event type and start time. This was something that was tough to implement, as keeping track of this complex state with many properties and updating state appropriately was definitely a challenge. All in all, just proud of myself for finishing this project, first time using react I am proud of myself for finishing this project and learning a lot about react over the past 4-5 days.

## Next Steps
Given more time, I would liked to add the following to my application:
* I would like to improve the styling of the components as I feel it is kind of basic, perhaps I could consult with a professional graphic designer to get a better UI .
* I would make proper loading animations (especially when loading event details), as there is a delay that is not very appealing for someone who is using the site.
* Further modularize the components in the code, I feel like for some components, I could further break down the code in more modules - make the code easier to read, debug, and work on.

