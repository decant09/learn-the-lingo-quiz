# Learn the Lingo Quiz
Learn the Lingo Quiz is a quiz based learning modality for users to test their knowledge of the local tongue. It is quiz based
game whereby you are presented with a phrase or term with four possible answers to choose from. It is aimed at people who are
interested in the fun of linguistics and want to learn the local lingo.

<!-- ![](/docs/testing/am-i-responsive.png) -->

To visit the live link to Learn the Lingo on GitHub pages click [here](https://decant09.github.io/learn-the-lingo-quiz/).  

## Contents
- [User Experience](#user-experience)
    - [Initial Discussion](#initial-discussion)
    - [User Stories](#user-stories)
        - [First Time Visitor Goals](#first-time-visitor-goals)
        - [Returning Visitor Goals](#returning-visitor-goals)
        - [Frequent Visitor Goals](#frequent-visitor-goals)
    - [Design](#design)
        - [Colour Scheme](#colour-scheme)
        - [Typography](#typography)
        - [Wireframes](#wireframes)
- [Features](#features)
    - [Home Page](#home-page)
    - [Quiz Page](#quiz-page)
    - [Quiz Over Page](#quiz-over-page)
    - [Dark Mode Toggle](#dark-mode-toggle)
    - [Future Features](#future-features)
- [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Frameworks](#frameworks)
- [Testing](#testing)
    - [W3C Validator](#w3c-validator)
        - [HTML Testing](#html-testing)
        - [CSS Testing](#css-testing)
    - [JShint](#jshint)
        - [JavaScript](#javascript-testing)
    - [Accessibility](#accessibility)
        - [WebAIM](#webaim)
        - [Google Lighthouse](#google-lighthouse)
    - [Manual](#manual)
    - [Testing User Stories from User Experience (UX) Section](#testing-user-stories-from-user-experience-ux-section)
        - [First Time Visitor Goals](#first-time-visitor-goals-1)
        - [Returning Visitor Goals](#returning-visitor-goals-1)
        - [Frequent Visitor Goals](#frequent-visitor-goals-1)
    - [Bugs](#bugs)
        - [Known](#known)
        - [Solved](#solved)
- [Deployment & Local Development](#deployment--local-development)
    - [Deployment](#deployment)
    - [Local Development](#local-development)
        - [How to Fork](#how-to-fork)
        - [How to Clone](#how-to-clone)
- [Credits](#credits)
    - [Code Used](#code-used)
    - [Browser Icon](#browser-icon)
    - [Resources](#resources)
    - [Acknowledgements](#acknowledgements)
## User Experience

### Initial Discussion
This website is created for a project submission for the Diploma in Full Stack Software Development (E-commerce Applications) at
Code Institute. The criteria for the submission were primarily that it be created using the HTML, CSS and JavaScript coding
languages. We were presented with a few website formats to choose from, of which I chose a quiz based game format.  
I chose a linguistics based quiz as I have an interest in liguistics. Although one language may be the common first language in
many countries, there local variations and uses of this same language between and within each country. Some people may find this
challenging to encounter but I find it particularly interesting and fun. The aim was to develop a quiz that will either help people
to have some fun, or to help people improve their understanding of the local lingo.  

### User Stories
#### First Time Visitor Goals
- I want to know what the website is about upon arriving.
- I want the website to be easily navigatable.
- I want the website to be responsive to the device screen size that I am using.
- I want to see a score count as I play and my score result on completing the quiz.
- I want a question counter to know how far I have progressed in the quiz.
- I want to know if I have answered the quiz question correctly.
#### Returning Visitor Goals
- I want an option to view the site in dark mode.
- I want to be presented with different questions each time I play.
- I want an option to be able to play again.
#### Frequent Visitor Goals
- I want a leaderboard so I can see how well I have performed (furture implementation).
### Design
#### Colour Scheme

#### Typography
Poppins

#### Wireframes
Wireframes were created for the website layout. The layout is the same across different device screen sizes.
- Home Page  
![](/docs/wireframes/home_page.png)
- Quiz Page  
![](/docs/wireframes/quiz_page.png)
- Quiz Over Page  
![](/docs/wireframes/quiz_over_page.png)

## Features
- 
### Home Page  
### Quiz Page
- There is score display area located in the quiz head to the top right of the quiz. It increments by 20 as questions are
    answered correctly.
- There is a question counter area located in the quiz head to the top left of the quiz. It given an integer value of between
    1 and 5, depending on what question number you are at. This number is displayed beside a forward slash and the number 5. This is
    is to show the user that there are 5 questions in total and how far they have progressed.
- Once an answer option is clicked on the background colour changes to green, if the answer selected is correct, and red if
incorrect.
### Quiz Over Page
### Dark Mode Toggle
- Font awesome icons for a sun and a moon are used to denote bright mode or dark mode. The icon changes from one to the other
depending on what mode you are currently viewing the page on. The sun is used on the bright mode page and the moon on the dark mode
page. There is a circular dark mode toggle icon located in the top right corner of each page of the website. The user can toggle
between dark and light mode depending on preference.

### Future Features

##  Technologies Used
### Languages
- HTML5
- CSS3
- JavaScript
### Frameworks
- Git
    - Used for version control by utilising the Gitpod and Codeanywhere terminals to commit to Git and Push to GitHub.
- [Google Fonts](https://fonts.google.com/)
    - Google fonts were used to import the Poppins font family into the style.css file.
- GitHub
    - Used to store the code of the project after being pushed from Git.
- [Balsamiq](https://balsamiq.com/)
    - Used to generate the wireframes for the design of the website.
- [Font Awesome](https://fontawesome.com/)
    - Used for the dark mode toggle sun and moon icons.
- [CDNJS](https://cdnjs.com/libraries/font-awesome)
    - Used this open source CDN to create the link for the font awesome icons.
- [Tinypng](https://tinypng.com/)
    - Used to compress image files down to smaller sizes before uploading to the website.
- Google Dev Tools
    - Used for responsiveness investigations, isolating code, troubleshooting, and testing features.
- [Am I Responsive]
<!-- (https://ui.dev/amiresponsive?url=https://decant09.github.io/beach-yoga-fuerteventura/) -->
    - Used to show responsiveness across different device sizes.

## Testing

### W3C Validator
#### HTML Testing
- Home Page
    - Result - <!-- No errors or warnings to show.-->  
<!-- ![](/docs/testing/validator-testing-index.png) -->
- Quiz Page
    - Result - <!-- No errors or warnings to show.-->  
<!-- ![](/docs/testing/validator-testing-schedule.png) -->
- Quiz Over Page
    - Result - <!--No errors or warnings to show.-->  
<!-- ![](/docs/testing/validator-testing-contact.png) -->

#### CSS Testing
- Style Sheet
    - Result - No errors found.  
<!-- ![](/docs/testing/validator-testing-style.png) -->

### JShint
#### JavaScript Testing
- Script
    - Result -
- Questions
    - Result -
- Quiz Over
    - Result -

### Accessibility
#### WebAIM
- I tested the contrast of the background colour versus the font colour using [WebAIM](website link).
    -  Result -  - Pass.  
<!-- ![](/docs/colour-palette/webaim-contrast-check.png)  -->
#### Google Lighthouse
- Home Page
    - Result -   
<!-- ![](/docs/testing/lighthouse-testing-index.png) -->
- Quiz Page
    - Result -   
<!-- ![](/docs/testing/lighthouse-testing-schedule.png) -->
- Quiz Over Page
    - Result -  
<!-- ![](/docs/testing/lighthouse-testing-contact.png) -->

### Manual
- I used Google Dev Tools to test for screen responsiveness.  

- I tested on different browsers (chrome, firefox, safari & edge) to ensure the website performs as expected across all of these.

- I tested on android and iPhone devices.

- I tested all the buttons and answers fields on the website manually to ensure that they all work as expected. Upon hovering over
them the desired effect is realised. The main buttons redirect appropriately to the website areas they are linked to. The answer
fields behave as intended.

- The dark mode toggle icon changes appearance upon clicking. The dark mode colour scheme is maintained throughout the website when
a new page is opened.

- I spellchecked the website by copying the text content to [Online Spellcheck](https://www.online-spellcheck.com/).

### Testing User Stories from User Experience (UX) Section
<!-- attach supporting images -->
#### First Time Visitor Goals
- I want to know what the website is about upon arriving.
    - There is a clear website title on the home page and a brief introduction as to what the website is.
- I want the website to be easily navigatable.
    - There are easy to locate labelled buttons on each page which which take you to where tou would expect.
- I want the website to be responsive to the device screen size that I am using.
    - The website is responsive to the device screen size it is being viewed on by using a simple design and a media query
    where required.
- I want to see a score count as I play and my score result on completing the quiz.
    - There is score display area located in the quiz head to the top right of the quiz. Once the user completes the quiz they
    are presented with their result and a short message.
- I want a question counter to know how far I have progressed in the quiz.
    - There is a question counter area located in the quiz head to the top left of the quiz to show how far the user has
    progressed.
- I want to know if I have answered the quiz question correctly.
    - Once an answer option is clicked on the background colour changes to green if the answer selected is correct. If the answer
    selected is incorrect the background changes to red.
#### Returning Visitor Goals
- I want an option to view the site in dark mode.
    - There is a dark mode toggle option located in the top right corner of each page of the website. The user can toggle between
    dark and light mode depending on their preference.
- I want to be presented with different questions each time I play.
    - There is a pool of 20 questions and 5 of these are randomly selected each time the game is played.
- I want an option to be able to play again.
    - Once the user completes the quiz a page is loaded with their result and an option to go to the home page or to try the quiz
    again.
#### Frequent Visitor Goals


### Bugs
#### Known

#### Solved
- The answer field containers were of uneven size on smaller screens. Where answer fields had longer text, two lines of text were
created. The size of the container would increase causing some containers to be double the size of the others displayed. I made each
container be of a larger size and aligned the text centrally. This maintains uniformity and also has the benefit of each of the
containers being larger which improves user experience on small screens.  

## Deployment & Local Development
### Deployment
The site was deployed to GitHub pages and the following steps were followed to do so:

1. Log in to GitHub.
2. Navigate to the [repository](https://github.com/decant09/learn-the-lingo-quiz) for this website.
3. In the repository click on the Settings tab.
4. Use the navigation bar on the left-hand side to open the pages section.
5. In the branch section select a source to enable GitHub Pages for this repository. Select Main from the drop-down menu and click
Save.
6. Wait a few moments and a URL is generated with a live link to the website which can be found
[here](https://decant09.github.io/learn-the-lingo-quiz/).

### Local Development
The steps below describe how to fork or clone the repository if desired.
#### How to Fork
1. Log in to Github.
2. Navigate to the [repository](https://github.com/decant09/learn-the-lingo-quiz) for this website.
3. Click the Fork button in the top right corner.
4. You will be brought to a new page with a short form to be completed.
5. Upon completing click on the "Create fork" button and this will create a fork of the repository in your personal account.

#### How to Clone
1. Log in to GitHub.
2. Navigate to the [repository](https://github.com/decant09/learn-the-lingo-quiz) for this website.
3. Click on the Code button and a modal will appear.
4. Within this modal selcet the local tab.
5. Within this tab there is HTTPS, SSH or GitHub CLI tab.
6. Click on the HTTPS tab and copy the link shown.
7. In your development environment open the terminal.
8. Change the current working directory to the location where you want the cloned directory to be.
9. Type "git clone" into the terminal, then paste the URL you copied in step 6.
10. Press **Enter** to create your local clone.

## Credits
### Code Used
- 

### Browser Icon
- Obtained the browser icon using [favicon](https://www.favicon.cc/?action=icon&file_id=823471).

### Resources

### Acknowledgements
- My Mentor Chris Quinn for continuous helpful feedback.
- Tutor support at Code Institute for their amazing support.
- Alan Bushell at Code Institute for guiding the class in our weekly stand-ups.