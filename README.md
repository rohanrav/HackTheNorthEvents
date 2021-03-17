# Hack The North (Events)

## Deployment Information 
* You can visit the deployed application at the link [Here.](https://stormy-ravine-02564.herokuapp.com/)
* The duration slider on the event filter section of the site does not work (I did not have enough time to finish implementing it)

## Development Process
* Planning the structure and design:
Before I could start coding this project, I planned out how the application would work, what functionality I needed to include in the application, and certain things I needed to keep in mind when building this application. I drew mockups of how I wanted the application to look, and then determined the different components that would need to be built, then started to build the components. For the design, I relied on Bootstrap and my own custom styling to make the application look appealing, and used media queries to ensure the website would run nicely on mobile. The structure of the application basically consisted of several components that I built, and then assembling the components together in the main App.jsx file 

* Technology Used (React)
While I did not have any major experience with using React before building this project, I choose to use react because I knew the benefits of having reusable components (less code), faster application with no page refreshhes and more would make it the best candidate to build this application 
For stylign as I mentioned before, I choose to use Bootstrap as I was already familiar with using it, and its pre package components and ease of use really made it a lot easier to start building my application 
Lastly, As I knew I wanted to have multiple routes of my react application, I decided to use React router to separate and have a login, event detail, and home page  
* Challenges Faced
This project was definitely a challenging one to build, this was my first time building a react application outside of codesandbox
While I was familiar with what react was and how it worked, actually building an application with it proved to be a challenge for me espceiall considering it was my first time. 
* Some of the particularly pesky problems I faced were:
1. Dealing with JavaScript Async functions and Promises. When fetching data from the API, getting results back that were undefined when the fetch javascript function would not work was definitely frustrating. Going over how javascript promises work again, and covering the ,then and .catch functions helped me solve this issue.
2. Passing state between components. The idea of passing state between parent and child components was definitely something new for me to wrap my head around 
3. Updating complex state and using the javascript spread operator in doing so to keep the code sleek 

* Areas that you are proud of
I am especially proud of the filter feature I put in, to allow a user to search and filter by event type and start time. This was something that was tough to implement, as keeping track of this complex state with many properties and updating state appropriately was definitely a challenge. All in all, just proud of myself for finishing this project, first time using react I am proud of myself for finishing this project and learning a lot about react over the past 4-5 days.

## Next Steps
* Improve the styling
* I would like to improve the styling of the components as I feel it is kind of basic, perhaps I could consult with a professional graphic designer to get a better UI 
* Make animations and loading smoother. I would makeu proper loading animations (especially when loading event details), as there is a delay that is not very appealing for someone who is using the site
* Further modularize the components in the code, I feel like for some components, I could further break down the code in more modules - make the code easier to read, debug, and work on

