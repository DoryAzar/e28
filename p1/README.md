# Project 1
+ By: Dory Azar
+ Production URL: [e28p1.broadposter.com](http://e28p1.broadposter.com)

## Outside resources

### w3schools
+ [Array includes](https://www.w3schools.com/jsref/jsref_includes_array.asp)
+ [Javascript keycodes](https://www.w3schools.com/jsref/event_key_keycode.asp)
+ [String to Array](https://www.w3schools.com/jsref/jsref_split.asp)
+ [Array to String](https://www.w3schools.com/jsref/jsref_join.asp)
+ [Character in String](https://www.w3schools.com/jsref/jsref_charat.asp)

### stackOverflow
+ [How to add window events with Vue](https://stackoverflow.com/questions/36993834/add-vue-js-event-on-window)

### Vue guide
+ [Understanding the lifecycle](https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks)

## Techniques used

+ The game uses 2 components. One illustrates root to component communication through props. Another illustrates event propagation from the component to the root

+ Watchers have been used to track number of tries and determine the end of the game

+ Reactivity has been leveraged the most in 2 areas: 1) in displaying the masked word as the player tries to guess the characters. 2) in displaying dynamic messages throughout the game

+ Dynamic message styling to focus the user attention on the different states of the game

+ Minimal validation to make sure that the player does not get punished for typing numbers or keys like Shift and Caps Lock. A setting for expanding the acceptable keys has also been created for scalability