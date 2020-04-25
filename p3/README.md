# Project 3 - Broadposter: share your stories with the world
+ By: *Dory Azar*
+ Production URL: <http://e28p3.broadposter.com>

## Description

Broadposter allows users to share stories, memories, articles or just any piece of information with the community.


## State Management
+ A Store has been used to reduce the server calls that attempt to retrieve data. Fetching a collection of posts or a single post are used by several components. It was therefore a logical choice to make sure to optimize that by using Store actions to asynchronously make api calls. A Special logic has been added to retrieve data from the store using a getter when it's available. Otherwise, a server call is made to attempt to find the requested data.

+ An "edit" state is used in order to track if a form is in editing or creation modes. Broadposter uses one form for both creation and editing, thus the need to identify in which mode a form is throughout the life of the session.


## Pages summary
+ Posters Page: page displaying all the posters
+ Poster Page: page displaying details of a specific poster
+ Error Page: page displaying a dynamic error message
+ Manage Poster Page: page displaying a generic form responsible for creating, updating or deleting a poster


## SFC summary

### Global Components
+ ShowNavigation: displays the global navigation
+ ShowError: displays a page error
+ ShowMessaging: displays an informational, success, warning or error styled messages on the page

### Poster Components
+ ShowPosters: component that renders a poster within a list
+ ShowPoster: component that renders the details of a poster
+ PosterForm: Form for creating, updating or deleting a poster
  
## Server interaction
+ PHP backend was created serving results through a REST-ful API
+ CRUD interactions:
	+ Create a poster
	+ Retrieve all posters
	+ Retrieve details of a specific poster
	+ Update a specific poster
	+ Delete a specific poster
	
+ Server Validations: When the server returns validation errors, the PosterForm component knows how to interpret and to render them

## Outside resources & Notes

+ Caligrafy full-stack framework: Proprietary PHP framework used for creating the REST-ful API. This framework is being developed throughout my journey at Harvard Extension and will be the main topic of my capstone project.

[Discover Caligrafy](https://github.com/DoryAzar/caligrafy)

+ [Bootstrap 3.3.x](https://getbootstrap.com/docs/3.3/)

+ Axios documentation: [Vue cookbook](https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html)

+ VueJS favicon - From the official VueJS asset library

