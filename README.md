# Learn the Lingo Quiz
Learn the Lingo Quiz is a quiz based learning modality for users to test their knowledge of the local tongue. It is quiz based
game whereby you are presented with a phrase or term with four possible answers to choose from. It is aimed at people who are
interested in the fun of linguistics and want to learn the local lingo.

![](/docs/testing/am_i_responsive.png)

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
- Light Mode Palette  
I opted for a neutral color scheme throughout the website mainly using grays, whites and blacks. I used a bright gray colour, #EDEAF0,
for backgrounds, and an off black colour for the font, #0F0916. Other shades of gray were used for shadowing to implement a 3D effect
around buttons and borders.  
The main pop of colour is the purple colour, #4C2F6C, used for the background of the answer areas. I chose a purple colour as this is
a colour representative of Scotland. The national emblem of Scotland is the purple thistle.  
Once this purple colour was chosen I used a colour palette website called [color-name](https://www.color-name.com/hex/4C2F6C). I used
the colur palettes generated from the purple colour to inform the other colour choices.  
![](/docs/colour_palette/color_name_palette.png)  
- Dark Mode Palette  
Compiling the dark mode palette involved only swapping some of the main colours of the light mode palette around. An additional dark
gray colour, #272D3C, was chosen by using the light mode font colour, #0F0916, to generate a matching gradient palette usin
[ColorSpace](https://mycolor.space/?hex=%230F0916&sub=1).  
![](/docs/colour_palette/colorspace.png)  
- Correct/Incorrect Answer Palette  
The standard green colour was chosen to indicate a correct answer and the standard red colour was chosen to indicate an incorrect
answer.  

#### Typography
I chose a simple Poppins sans serif font family throughout for the text.  
The font is used on a GeekProbin [YouTube](https://www.youtube.com/watch?v=-cX5jnQgqSM) quiz app tutorial and I decided to
use it as I found it to be geometrically attactive.  
I wanted a simple font where readability was a strong characteristic. I referenced a blog on
[Pepper Square](https://www.peppersquare.com/blog/10-best-google-fonts-for-your-website/#:~:text=Source%20Sans%20Pro-,5.,in%20text%20or%20display%20contexts.)
to confirm the choice.  

#### Wireframes
Wireframes were created for the website layout. The layout is the same across different device screen sizes.
- Home Page  
![](/docs/wireframes/wireframe_home_page.png)
- Quiz Page  
![](/docs/wireframes/wireframe_quiz_page.png)
- Quiz Over Page  
![](/docs/wireframes/wireframe_quiz_over_page.png)

## Features
- The website is made up of three pages, the home page, the quiz page and the quiz over page. The home page contains a start
button which takes you to the quiz itself. When the quiz is complete the quiz over page is automatically opened. This page contains
buttons to navigate back to the home page or to the quiz page again.
### Home Page  
- The home page displays the title of the website clearly.
- Below this there is a brief introduction to the website and an invaitation to take the quiz.
- Below the introduction there is a button labelled "start" which when clicked takes you the quiz page.
-The button is styled with a box shadow to make it stand out as a button. There is a hover effect applied that changes the cursor
to a pointer and makes the button pop up a fraction. This gives the appearance of it moving in a 3D direction out of the screen.
- There is dark mode toggle icon to allow the user to change between the default light mode to dark mode. This is displayed on each
of the pages of the website.  
![](/docs/website_screenshots/home_page.png)  
### Quiz Page
- The quiz page is made up of a quiz area with a shadow effect border applied.
- Within this area there are three main components, the quiz head, the question display, and the associated answers options.
- The quiz head, located at the top, contains a question count to the left and a score count to the right.
- The question counter contains two numbers separated by a forward slash. These are placed under the heading labelled "question".
The first number is a number between 1 and 5, and is assigned depending on what question number point the user is at in the quiz.
The second number is 5 and corresponds to the total amount of questions in the quiz. This shows the user that there are 5 questions
in total and how far they have progressed. When the page is loaded the question counter displays 1/5.
- The score counter is placed under the heading labelled "score". It starts at 0 and increments by 20 as questions are answered
correctly.
- The question area displays the new question each time it is prompted to, this being when the page is loaded and when an answer
option has been clicked.  
![](/docs/website_screenshots/quiz_page.png)  
- Each question has its associated answers displayed below it. There are 4 possible answer choices of which only one is right. A
hover effect is applied to the areas containing the answers. The results in the cursor changing to a pointer and the colour scheme
of the area changing.  
![](/docs/website_screenshots/quiz_page_hover.png)  
- Once an answer option is chosen and clicked on the background colour changes to green, if the answer selected is correct, and red if
incorrect. There is a brief delay applied before the next question is automatically displayed.  
![](/docs/website_screenshots/quiz_page_green.png)  
![](/docs/website_screenshots/quiz_page_red.png)  
- The quiz is complete once 5 questions have been answered prompting the quiz over page to be displayed.  

### Quiz Over Page
- This page shows the users score result with a message displayed beneath.
- The message displayed depends on the score achieved. There are three possible messages, one for achieving a result of 100/100, one
for over 50/100 but less than 100, and finally one for all other results, in other words results less than 50/100.
- There are two buttons displayed underneath stacked on top on each other. They have the same styling and hover effect aplied to
them as the start button on the home page.
- The first button is labelled "try again" which when clicked taks tou the start of the quiz again.
- The second button is labelled "home" and when clicked takes you to the home page.  
![](/docs/website_screenshots/quiz_over_page_100_msg.png)  
![](/docs/website_screenshots/quiz_over_page_o50_msg.png)  
![](/docs/website_screenshots/quiz_over_page_u50_msg.png)  
### Dark Mode Toggle
- The dark mode toggle is featured on each of the pages of the website in the same position on each, that is to the top right corner.  
![](/docs/website_screenshots/dark_mode_toggle.png)  
- Its appearance is a font awesome icon, a sun or a moon, surrounded by a circle.
- It is a clickable area which when clicked toggles the appearance of the website between the dark and light mode styles.
- A sun icon is shown when the website is in light mode and the moon icon when in dark mode. The icon changes from one to the other
depending on what mode you are currently viewing the page on.
- The user can toggle between dark and light mode depending on their preference. This preference choice is maintained throughout the
website regardless of whether or not a new page is visited.  
![](/docs/website_screenshots/home_page_dark_mode.png)  
![](/docs/website_screenshots/quiz_page_dark_mode.png)  
![](/docs/website_screenshots/quiz_over_page_dark_mode.png)  
### Future Features
- The website is based on the Scottish linguistic variation of English, as well as its own regional dialects. However, on a similar
basis, I would like to include England and Ireland specific quizes.
- The structure would be the same but instead the homepage would be modified to add buttons that would allow the user to choose the
England, Ireland or Scotland quiz option.
- At the outset of creating this website I intended to have a leaderboard feature which would display the top three scores achieved
by users. However. time contraints meant that I had to remove this feature from the website as it not fully complete by the time
of submission.
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
- Google Dev Tools
    - Used for responsiveness investigations, isolating code, troubleshooting, and testing features.
- [Am I Responsive](https://ui.dev/amiresponsive?url=https://decant09.github.io/learn-the-lingo-quiz/)
    - Used to show responsiveness across different device sizes.
- [Favicon](https://www.favicon.cc/?action=icon&file_id=823471).
    - Used to obtain the browser icon to be displayed in the browser tab. 

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
- I tested the contrast of the font colours used against their respective background colours using WebAIM.
- Black text on light gray background
    - [Result](https://webaim.org/resources/contrastchecker/?fcolor=0F0916&bcolor=EDEAF0) - 16.46:1 - Pass.  
    ![](/docs/testing/webaim_blk_lgr.png)  
- White text on purple background
    - [Result](https://webaim.org/resources/contrastchecker/?fcolor=FFFFFF&bcolor=4C2F6C) - 10.87:1 - Pass.  
    ![](/docs/testing/webaim_wht_prp.png)  
- Purple text on light gray background
    - [Result](https://webaim.org/resources/contrastchecker/?fcolor=4C2F6C&bcolor=EDEAF0) - 9.13:1 - Pass.  
    ![](/docs/testing/webaim_prp_lgr.png)  
- White text on dark gray background
    - [Result](https://webaim.org/resources/contrastchecker/?fcolor=FFFFFF&bcolor=272D3C) - 13.75:1 - Pass.  
    ![](/docs/testing/webaim_wht_dgr.png)  

#### Google Lighthouse
Google lighthouse was used to test for accessibilty for each page.
- Home Page
    - Result - 100  
    ![](/docs/testing/home_page_lighthouse.png)  
- Quiz Page
    - Result - 100  
    ![](/docs/testing/quiz_page_lighthouse.png)  
- Quiz Over Page
    - Result - 100 
    ![](/docs/testing/quiz_over_page_lighthouse.png)  

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
- An "Uncaught ReferenceError: questionsArray is not defined" message was logging in the console on the home page and on the quiz over
page. This was because the questionsArray is located in the questions.js file, which is not linked on these two pages. So when the
startQuiz function was being called, it then couldn't find the questionsArray. I resolved this by adding a "typeof" line of code.
This instructs the startQuiz funtion to run if the questionsArray is not undefined, that is, if it is defined, then run.  

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

### Resources

### Acknowledgements
- My Mentor Chris Quinn for continuous helpful feedback.
- Tutor support at Code Institute for their amazing support.
- Alan Bushell at Code Institute for guiding the class in our weekly stand-ups.