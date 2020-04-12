# Project 2 - Broadposter: share your stories with the world
+ By: *Dory Azar*
+ Production URL: <http://e28p2.broadposter.com>

## Description

Broadposter allows users to share stories, memories, articles or just any piece of information with the community.


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