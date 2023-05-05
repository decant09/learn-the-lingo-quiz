# Learn the Lingo Quiz
Learn the Lingo Quiz is a quiz based learning modality for users to test their knowledge of the local tongue. It is a quiz based
game whereby you are presented with a phrase, or term, with four possible answers to choose from. It is aimed at people who are
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
        - [HTML](#html)
        - [CSS](#css)
    - [JShint](#jshint)
        - [JavaScript](#javascript)
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
This website was created for a project submission to Code Institute for the Diploma in Full Stack Software Development
(E-commerce Applications). The criteria for the submission were primarily that it be created using HTML, CSS, and JavaScript coding
languages. We were presented with a few website formats to choose from and of these I chose the quiz based game format.  
I chose a linguistics based quiz as I have an interest in linguistics. Although one language may be the common first language in
many countries, there are many local variations and uses of this same language between and within each country. Some people may
find this challenging to encounter but I find it particularly interesting and fun. The aim was to develop a quiz that will either help people to have some fun or help to improve their understanding of the local lingo.  

### User Stories
#### First Time Visitor Goals
- I want to know what the website is about upon arriving.
- I want the website to be easily navigatable.
- I want the website to be responsive to the device screen size that I am using.
- I want to know the rules of the quiz.
- I want to see a score count as I play and my score result on completing the quiz.
- I want a question counter to know how far I have progressed in the quiz.
- I want to know if I have answered the quiz question correctly.
#### Returning Visitor Goals
- I want an option to view the site in dark mode.
- I want to be presented with different questions each time I play.
- I want an option to be able to play again.
#### Frequent Visitor Goals
- I want a leaderboard so I can see how well I have performed (future implementation).
- I want a number of quiz options (future implementation).
### Design
#### Colour Scheme
- Light Mode Palette  
I opted for a neutral colour scheme throughout the website mainly using greys, whites, and blacks. I used a bright grey colour,
#EDEAF0, for the backgrounds, and an off-black colour, #0F0916, for the font. Other shades of grey were used for shadowing to
implement a 3D effect around buttons and borders.  
The main pop of colour is the purple colour, #4C2F6C, used for the background of the answer areas. I chose a purple colour as this is
a colour representative of Scotland. The national emblem of Scotland is the purple thistle.  
Once this purple colour was chosen I used a colour palette website called [color-name](https://www.color-name.com/hex/4C2F6C). I used
the colour palettes generated from the purple colour to inform the other colour choices.  
![](/docs/colour_palette/color_name_palette.png)  
- Dark Mode Palette  
Compiling the dark mode palette involved only swapping some of the main colours of the light mode palette around. An additional dark
grey colour, #272D3C, was chosen by using the light mode font colour, #0F0916, to generate a matching gradient palette using
[ColorSpace](https://mycolor.space/?hex=%230F0916&sub=1).  
![](/docs/colour_palette/colorspace.png)  
- Correct/Incorrect Answer Palette  
The standard green colour was chosen to indicate a correct answer and the standard red colour was chosen to indicate an incorrect
answer.  

#### Typography
I chose a simple Poppins sans serif font family throughout for the text.  
The font is used on a GeekProbin [YouTube](https://www.youtube.com/watch?v=-cX5jnQgqSM) quiz app tutorial and I decided to
use it as I found it to be geometrically attractive.  
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
- The website is made up of three pages, the home page, the quiz page, and the quiz over page. The home page contains a start
button that takes you to the quiz itself. When the quiz is complete, the quiz over page is automatically opened. This page contains
buttons to navigate back to the home page or to the quiz page again.
### Home Page  
- The home page displays the title of the website clearly.
- Below this, there is a brief introduction to the website and an invitation to take the quiz.
- Below the introduction, there is a button labelled "start" that when clicked takes you to the quiz page.
- Below the start button, there is a button labelled "rules". When clicked, a modal appears with the rules. The main background behind
the modal darkens making the modal the focus of the page when open. The modal has a close button that when clicked closes the modal.
Clicking any area outside the modal will also close it.
- The buttons are styled with a box shadow to make them stand out as buttons. There is a hover effect applied that changes the cursor
to a pointer and makes the button pop up a fraction. This gives the appearance of it moving in a 3D direction out of the screen.
- There is a dark mode toggle icon to allow the user to change between the default light mode to dark mode. This is displayed on each
of the pages of the website.  
![](/docs/website_screenshots/home_page.png)  
![](/docs/website_screenshots/home_page_rules_modal.png)  
### Quiz Page
- The quiz page is made up of a quiz area with a shadow effect border applied.
- Within this area, there are three main components, the quiz head, the question display, and the associated answers options.
- The quiz head, located at the top, contains a question count to the left and a score count to the right.
- The question counter contains two numbers separated by a forward slash. These are placed under the heading labelled "question".
The first number is a number between 1 and 5 and is assigned depending on what question number point the user is at in the quiz.
The second number is 5 and corresponds to the total amount of questions in the quiz. This shows the user that there are 5 questions
in total and how far they have progressed. When the page is loaded the question counter displays 1/5.
- The score counter is placed under the heading labelled "score". It starts at 0 and increments by 20 as questions are answered
correctly.
- The question area displays the new question each time it is prompted to, this being when the page is loaded and when an answer
option has been clicked.  
![](/docs/website_screenshots/quiz_page.png)  
- Each question has its associated answers displayed below it. There are 4 possible answer choices of which only one is right. A
hover effect is applied to the areas containing the answers. This results in the cursor changing to a pointer and the colour scheme
of the area changing.  
![](/docs/website_screenshots/quiz_page_hover.png)  
- Once an answer option is chosen and clicked on the background colour changes to green if the answer selected is correct, and red if
incorrect. There is a brief delay applied before the next question is automatically displayed.  
![](/docs/website_screenshots/quiz_page_green.png)  
![](/docs/website_screenshots/quiz_page_red.png)  
- The quiz is complete once 5 questions have been answered prompting the quiz over page to be displayed.  

### Quiz Over Page
- This page shows the user's score result with a message displayed beneath.
- The message displayed depends on the score achieved. There are three possible messages, one for achieving a result of 100/100, one
for over 50/100 but less than 100, and finally one for all other results, in other words results less than 50/100.
- There are two buttons displayed underneath stacked on top of each other. They have the same styling and hover effect applied to
them as the start button on the home page.
- The first button is labelled "try again" and when clicked takes you to the start of the quiz again.
- The second button is labelled "home" and when clicked takes you to the home page.  
![](/docs/website_screenshots/quiz_over_page_100_msg.png)  
![](/docs/website_screenshots/quiz_over_page_o50_msg.png)  
![](/docs/website_screenshots/quiz_over_page_u50_msg.png)  
### Dark Mode Toggle
- The dark mode toggle is featured on each of the pages of the website in the same position on each, which is in the top right
corner.  
![](/docs/website_screenshots/dark_mode_toggle.png)  
- Its appearance is a font awesome icon, a sun or a moon, surrounded by a circle.
- It is a clickable area that when clicked toggles the appearance of the website between the dark and light mode styles.
- A sun icon is shown when the website is in light mode and the moon icon when in dark mode. The icon changes from one to the other
depending on what mode you are currently viewing the page.
- The user can toggle between dark and light modes depending on their preference. This preference choice is maintained throughout the
website regardless of whether or not a new page is visited.  
![](/docs/website_screenshots/home_page_dark_mode.png)  
![](/docs/website_screenshots/quiz_page_dark_mode.png)  
![](/docs/website_screenshots/quiz_over_page_dark_mode.png)  
### Future Features
- The website is based on the Scottish linguistic variation of English, as well as its regional dialects. However, on a similar
basis, I would like to include England and Ireland specific quizzes.
- The structure would be the same, but instead, the homepage would be modified to add buttons that would allow the user to choose the
England, Ireland, or Scotland quiz option.
- At the outset of creating this website I intended to have a leaderboard feature that would display the top three scores achieved
by users. However, time constraints meant that I had to remove this feature from the website as it was not fully complete by the
time of submission.
##  Technologies Used
### Languages
- HTML5
- CSS3
- JavaScript
### Frameworks
- Git
    - Used for version control by utilising the Gitpod and Codeanywhere terminals to commit to Git and push to GitHub.
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
#### HTML
- Home Page  
    - Result - No errors or warnings to show.  
    ![](/docs/testing/w3c_home_page_html.png)
- Quiz Page  
    - Result - No errors or warnings to show.  
    ![](/docs/testing/w3c_quiz_html.png)
- Quiz Over Page  
    - Result - No errors or warnings to show.  
    ![](/docs/testing/w3c_quiz_over_html.png)

#### CSS
- Style Sheet
    - Result - No errors found.  
    ![](/docs/testing/w3c_style.png)

### JShint
#### JavaScript
- Script
    - Result - No errors or warnings.  
    ![](/docs/testing/jshint_script.png)
- Questions
    - Result - No errors or warnings.  
    ![](/docs/testing/jshint_questions.png)
- Quiz Over
    - Result - No errors or warnings.  
    ![](/docs/testing/jshint_quiz_over.png)
- Rules
    - Result - No errors or warnings.  
    ![](/docs/testing/jshint_rules.png)
### Accessibility
#### WebAIM
- I tested the contrast of the font colours used against their respective background colours using WebAIM.
- Black text on light grey background
    - [Result](https://webaim.org/resources/contrastchecker/?fcolor=0F0916&bcolor=EDEAF0) - 16.46:1 - Pass.  
    ![](/docs/testing/webaim_blk_lgr.png)  
- White text on purple background
    - [Result](https://webaim.org/resources/contrastchecker/?fcolor=FFFFFF&bcolor=4C2F6C) - 10.87:1 - Pass.  
    ![](/docs/testing/webaim_wht_prp.png)  
- Purple text on light grey background
    - [Result](https://webaim.org/resources/contrastchecker/?fcolor=4C2F6C&bcolor=EDEAF0) - 9.13:1 - Pass.  
    ![](/docs/testing/webaim_prp_lgr.png)  
- White text on dark grey background
    - [Result](https://webaim.org/resources/contrastchecker/?fcolor=FFFFFF&bcolor=272D3C) - 13.75:1 - Pass.  
    ![](/docs/testing/webaim_wht_dgr.png)  

#### Google Lighthouse
Google Lighthouse was used to test for accessibility for each page.
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
![](/docs/website_screenshots/mobile_responsive.png)  
- I tested on different browsers (chrome, firefox, safari & edge) to ensure the website performs as expected across all of these.
- I tested on Android and iPhone devices.
- I tested all the buttons and answer fields on the website manually to ensure that they all work as expected. Upon hovering over
them the desired effect is realised. The main buttons redirect appropriately to the website areas they are linked to. The answer
fields behave as intended.
- The dark mode toggle icon changes appearance upon clicking. The dark mode colour scheme is maintained throughout the website when
a new page is opened.
- I spellchecked the website and the readme using [Online Spellcheck](https://www.online-spellcheck.com/). I also used
[Webpage Spell-Check](https://chrome.google.com/webstore/detail/webpage-spell-check/mgdhaoimpabdhmacaclbbjddhngchjik), a google chrome extension.
- I used [Grammarly](https://www.grammarly.com/) to check for grammatical errors.

### Testing User Stories from User Experience (UX) Section
#### First Time Visitor Goals
- I want to know what the website is about upon arriving.
    - There is a clear website title on the home page, a brief introduction as to what the website is, and an invitation to take
    the quiz.  
    ![](/docs/website_screenshots/home_page_text.png)
- I want the website to be easily navigatable.
    - There are easy to locate labelled buttons on each page which take you to where you would expect.  
    ![](/docs/website_screenshots/home_page_btns.png)  
    ![](/docs/website_screenshots/quiz_over_btns.png)  
- I want the website to be responsive to the device screen size that I am using.
    - The website is responsive to the device screen size it is being viewed on by using a simple design and a media query
    where required (see image above in [manual testing](#manual)).  
- I want to know the rules of the quiz.
    - There is rules button that when clicked on opens a modal containing the rules.  
    ![](/docs/website_screenshots/home_page_btns.png)  
    ![](/docs/website_screenshots/home_page_rules_modal.png)  
- I want to see a score count as I play and my score result on completing the quiz.
    - There is a score display area located in the quiz head to the top right of the quiz. Once the user completes the quiz they
    are presented with their result and a short message (see also image below next bullet point for score count).  
    ![](/docs/website_screenshots/result_msg.png)
- I want a question counter to know how far I have progressed in the quiz.
    - There is a question counter area located in the quiz head to the top left of the quiz to show how far the user has
    progressed.  
    ![](/docs/website_screenshots/quiz_head.png)  
- I want to know if I have answered the quiz question correctly.
    - Once an answer option is clicked on the background colour changes to green if the answer selected is correct. If the answer
    selected is incorrect the background changes to red.  
    ![](/docs/website_screenshots/answer_right.png)  
    ![](/docs/website_screenshots/answer_wrong.png)  
#### Returning Visitor Goals
- I want an option to view the site in dark mode.
    - There is a dark mode toggle option located in the top right corner of each page of the website. The user can toggle between
    dark and light modes depending on their preference.  
    ![](/docs/website_screenshots/dark_mode_toggle.png)  
- I want to be presented with different questions each time I play.
    - There is a pool of 20 questions and 5 of these are randomly selected each time the game is played.
- I want an option to be able to play again.
    - Once the user completes the quiz, a page is loaded with their result and an option to go to the home page or to try the quiz
    again.  
    ![](/docs/website_screenshots/quiz_over_btns.png)  
#### Frequent Visitor Goals
- I want a leaderboard so I can see how well I have performed.
- I want a number of quiz options.
    - Both of these goals have not yet been met, but as discussed in the [future features](#future-features) section, these goals
    will be met with the future implementation plans mentioned there.
### Bugs
#### Known
- When dark mode is toggled on there is a slight regression to the default light mode when you navigate to a new page.
- Before the page has fully loaded some HTML placeholder content can be seen. For example in the question field, "This is a question"
is visible briefly, and "Answer" in the answer fields. A loading page could be a possible solution.
- The dark mode toggle changes the mode accordingly when clicked. When a new page is loaded, if dark mode was previously selected,
the new page correctly displays in dark mode. However, the icon displayed changes back to a sun when the moon icon should be displayed.
This previously was working as intended but I noticed too late that it was now an issue.
- I was not able to resolve these bugs before the submission of the project but I would like to in future.
#### Solved
- The quiz content was spilling over the top and bottom of the quiz container at smaller screen sizes. I changed the container height
from 50vh to fit-content.
- The console was reporting errors relating to the question number display and the score result displayed on the quiz over page.
I re-arranged the JavaScript file and made a dedicated file for the quiz over page which resolved this. I also removed the JavaScript
link from the index page as there was no need for this and it was also logging errors in the console.
- There was an issue with the hover effect still being applied after the correct and incorrect classes were applied to the answers
after clicking on them. This resulted in these class effects only being visible if you removed the cursor from the area. The
background areas did not turn green or red if the cursor remained over the area. Instead, the area displayed the hover effect of a
grey background. I added a hover function to these classes to alleviate the issue.
- The content from the quiz area was overflowing onto the dark mode toggle area. This was resolved by adding a wrapper div to
the toggle-icon div. Then setting and changing the flex alignment of the wrapper div, below the toggle wrapper, to flex-start as opposed to center. This means the top of the quiz area remains constant, just below the toggle area, even though the quiz area grows
or shrinks depending on its content.
- The answer field containers were of uneven size on smaller screens. Where answer fields had longer text, two lines of text were
created. The size of the container would increase causing some containers to be double the size of the others displayed. I made each
container larger and aligned the text centrally. This maintains uniformity and also has the benefit of each of the containers
being larger, which improves user experience on small screens.  
- An "Uncaught ReferenceError: questionsArray is not defined" message was logging in the console on the home page and the quiz over
page. This was because the questionsArray is located in the questions.js file, which is not linked on these two pages. So when the
startQuiz function was being called, it then couldn't find the questionsArray. I resolved this by adding a "typeof" line of code.
This instructs the startQuiz function to run if the questionsArray is not undefined, that is, if it is defined, then run.
- The answer containers, once selected, would shrink a little and cause the whole page contents to shift. This was due to
there not being a solid border applied to the correct and incorrect class styling. I applied a border of 0.25rem solid to resolve
this.
- On touch screen when an answer option was selected it changed colour correctly to green or red depending on whether or not the
answer was right or wrong. However, when the next question and answers were displayed, the answer container that was selected on
the previous question maintained a hover effect, that is, its background was light grey instead of purple like the other three answer
containers. I used a media query to resolve this issue.

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
5. Upon completing, click on the "Create fork" button and this will create a fork of the repository in your personal account.

#### How to Clone
1. Log in to GitHub.
2. Navigate to the [repository](https://github.com/decant09/learn-the-lingo-quiz) for this website.
3. Click on the Code button and a modal will appear.
4. Within this modal select the local tab.
5. Within this tab there are HTTPS, SSH, or GitHub CLI tabs.
6. Click on the HTTPS tab and copy the link shown.
7. In your development environment open the terminal.
8. Change the current working directory to the location where you want the cloned directory to be.
9. Type "git clone" into the terminal, then paste the URL you copied in step 6.
10. Press **Enter** to create your local clone.

## Credits
### Code Used
-  The Build a quiz app [YouTube](https://www.youtube.com/watch?v=u98ROZjBWy8&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx) tutorial by James Q Quick was used to help build the JavaScript code needed for the quiz.
- I referred to the following YouTube tutorials when coding the JavaScript for the dark mode toggle:
    - Dark Mode with HTML, CSS, and JavaScript / Switching between Dark and Light Themes / HTML, CSS, JS by
    [Code and Create](https://www.youtube.com/watch?v=N3-K5G2qFDM).
    - Dark / Light Mode Theme Toggle with CSS and JavaScript | Tutorial for Beginners by
    [Future Coders](https://www.youtube.com/watch?v=D2V2DT1FCNk).
- For help with determining the dark mode status from local storage I referred to:
    - Dark Mode JavaScript toggle using localStorage even on reload by [codewj](https://www.youtube.com/watch?v=-Jt_h91uXkQ).
- To add the rules modal I used code from the [W3Schools'](https://www.w3schools.com/howto/howto_css_modals.asp) page:
    - How To Create a Modal Box.

### Resources
- For tips relating to root font size and how to override to create a better user experience on
[freecodecamp](https://www.freecodecamp.org/news/override-root-font-size-for-a-better-user-experience/).
- Referred to the GeekProbin [YouTube](https://www.youtube.com/watch?v=-cX5jnQgqSM) tutorial for CSS styling.
- [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#prop-align-items),
[Flexbox Froggy](https://flexboxfroggy.com/), and [Kevin Powell](https://www.youtube.com/watch?v=u044iM9xsWU) helped me with flexbox
issues.
- Use of the "typeof" operator from [Dmitri Pavlutin](https://dmitripavlutin.com/javascript-typeof-instanceof/).
- For help with addEventListener on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).
- W3Schools for [JSON.parse](https://www.w3schools.com/js/js_json_parse.asp) and
[JSON.stringify](https://www.w3schools.com/js/js_json_stringify.asp).
- [Stack Overflow](https://stackoverflow.com/questions/10323392/in-javascript-jquery-what-does-e-mean)
for help with event handlers.
- To help resolve the hover bug on touchscreens I referred to Kevin Powell's YouTube
[video](https://www.youtube.com/watch?v=uuluAyw9AI0) on dealing with hover on mobile.  
### Acknowledgements
- My Mentor Chris Quinn for continuous helpful feedback.
- Tutor support at Code Institute for their amazing support.
- Alan Bushell at Code Institute for guiding the class in our weekly stand-ups.