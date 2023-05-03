# Learn the Lingo Quiz
Learn the Lingo Quiz is a quiz based learning modality for users to test their knowledge of the local tongue. It is quiz based game whereby you are presented with a phrase or term with four possible answers to choose from. It is aimed at people who are interested in the fun of linguistics and want to learn the local lingo.

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
This website is created for a project submission for the Diploma in Full Stack Software Development (E-commerce Applications) at Code Institute. The criteria for the submission were primarily that it be created using the HTML, CSS and JavaScript coding languages. We were presented with a few website formats to choose from of which I chose a quiz based game format.  
I chose a linguistics based quiz as I have an interest in liguistics. Although one language may be the common first language in many countries, there local variations and uses of this same language between and within each country. Some people may find this challenging to encounter but I find it particularly interesting and fun. The aim was to develop a quiz that will either help people to have some fun, or to help people improve their understanding of the local lingo.

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
Wireframes were created for desktop as the website layout is the same across different device screen sizes. The one exception is the contact page, where the form and map areas are repositioned above and below each other on screen sizes of 800px and lower. A wireframe is provided to show this layout.  
- Home Page  
![](/docs/wireframes/wireframe-homepage.png)  
- Schedule Page  
![](/docs/wireframes/wireframe-schedule.png)  
- Contact Page
    - Desktop  
    ![](/docs/wireframes/wireframe-contact.png)  
    - Screen Sizes below 800px  
    ![](/docs/wireframes/wireframe-contact-small-screen.png)  
- Thank You Page  
![](/docs/wireframes/wireframe-thank-you.png)  

## Features
### Home Page  
### Quiz Page
### Quiz Over Page
### Dark Mode Toggle
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
<!-- - [Am I Responsive](https://ui.dev/amiresponsive?url=https://decant09.github.io/beach-yoga-fuerteventura/) -->
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

- I tested all the buttons and answers fields on the website manually to ensure that they all work as expected. Upon hovering over them the desired effect is realised. The main buttons redirect appropriately to the website areas they are linked to. The answer fields behave as intended.

- The dark mode toggle icon changes appearance upon clicking. The dark mode colour scheme is maintained throughout the website when a new page is opened.

- I spellchecked the website by copying the text content to [Online Spellcheck](https://www.online-spellcheck.com/).

### Testing User Stories from User Experience (UX) Section
<!-- address points from UX attach supporting images -->
#### First Time Visitor Goals

#### Returning Visitor Goals


#### Frequent Visitor Goals


### Bugs
#### Known

#### Solved

## Deployment & Local Development
### Deployment
The site was deployed to GitHub pages and the following steps were followed to do so:

1. Log in to GitHub.
2. Navigate to the [repository](https://github.com/decant09/learn-the-lingo-quiz) for this website.
3. In the repository click on the Settings tab.
4. Use the navigation bar on the left-hand side to open the pages section.
5. In the branch section select a source to enable GitHub Pages for this repository. Select Main from the drop-down menu and click Save.
6. Wait a few moments and a URL is generated with a live link to the website which can be found [here](https://decant09.github.io/learn-the-lingo-quiz/).

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
- Used the code from the [Love Running](https://github.com/decant09/love-running) website to develop the footer element. 

### Browser Icon
- Obtained the browser icon using [favicon](https://www.favicon.cc/?action=icon&file_id=823471).

### Resources

### Acknowledgements
- My Mentor Chris Quinn for continuous helpful feedback.
- Tutor support at Code Institute for their amazing support.
- Alan Bushell at Code Institute for guiding the class in our weekly stand-ups.
