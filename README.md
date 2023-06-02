# ESO ClassGuides

## Description
ESO ClassGuides is a comprehensive and user-friendly application tailored specifically for players of the popular game Elder Scrolls Online (ESO). Its primary purpose is to empower ESO players by providing them with a centralized platform to discover and access the most valuable and relevant resources related to their chosen class. By leveraging the power of Reddit and YouTube, ESO ClassGuides simplifies the process of finding top-rated content, including game updates, tutorial videos, build guides, and hidden secrets, ensuring players have all the necessary information at their fingertips. Whether you're a seasoned adventurer or just starting your journey in Tamriel, ESO ClassGuides is your go-to tool for staying informed, improving your gameplay, and unlocking the full potential of your character. Let the application guide you through the vast universe of Elder Scrolls Online, helping you conquer any challenge that comes your way. Elevate your ESO adventure like never before with ESO ClassGuides!

## User Story
As a player of Elder Scrolls Online, I want to easily find the best Reddit and YouTube content related to my chosen class so that I can stay informed, improve my gameplay, and discover new strategies and tips.

## Acceptance Criteria
```
WHEN I open the application

THEN I should see a navigation bar with the title "ESO ClassGuides" and three navigation links: "Home," "About," and "Guides."

WHEN I click on the "Home" link

THEN I should be redirected to the home section of the page.

WHEN I click on the "About" link

THEN I should be scrolled down to the about section of the page.

WHEN I click on the "Guides" link

THEN I should be scrolled down to the search section of the page.

WHEN In the search section

THEN I should see two dropdown menus: one for selecting the platform (Reddit or YouTube) and another for selecting the ESO class.

WHEN I select a platform from the dropdown menu

THEN the application should fetch the top results from that platform for the selected class.

IF I haven't selected a platform or a class

THEN the application should clear the results section.

IF I select Reddit as the platform

THEN the application should display the top Reddit results for the selected class, including the post title, author, and a link to the post.

IF I select YouTube as the platform

THEN the application should display the top YouTube results for the selected class, including embedded videos from YouTube.

THEN the application should limit the results to a maximum of 25 for both Reddit and YouTube.

THEN each result should be displayed in a card format with appropriate styling.

THEN the application should allow me to switch between platforms or change the selected class to fetch new results without refreshing the page.

WHEN I click on a navigation link

THEN it should highlight as the active link in the navigation bar.

WHEN I click on a navigation link

THEN it should scroll to the corresponding section of the page.

IF I reload the page or return to it later

THEN the active navigation link should be highlighted based on the current section.

```

## Visuals
![screenshot](./assets/images/ESO-Class-Guides-home.png)
![screenshot](./assets/images/ESO-Class-Guides-reddit.png)
![screenshot](./assets/images/ESO-Class-Guides-youtube.png)

## Authors
This application was written by Brady Billeisen & Cameron Singleton.

## Resources

[Deployed Site](https://brady-billeisen.github.io/eso-class-guide-app/)

[GitHub Repository](https://github.com/brady-billeisen/eso-class-guide-app)

## License
We used an MIT license for this application.