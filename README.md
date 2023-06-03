<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/KyleleeSea/Seraphina">
    <img src="https://i.imgur.com/Pa0MIKx.png" alt="Logo" width="80" height="80">
  </a>

<h1 align="center">Seraphina</h1>

  <p align="center">
    <h4>
      An AI powered website that sparks inspiration for creative writing
    </h4>
    <br />
<!--     <a href="https://seraphinai.com/">View Demo</a> -->
    ·
    <a href="https://github.com/KyleleeSea/Seraphina/issues">Report Bug</a>
    ·
    <a href="https://github.com/KyleleeSea/Seraphina/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

[![Seraphina Screen Shot][product-screenshot]](https://seraphinai.com/)

Seraphina is a production level web application created to help writers overcome writer's block by utilizing a fine-tuned GPT3 model to output possible sentences that follow where the user is stuck in order to provide inspiration.

### The AI
The fine-tuned model was created utilizing text from open source short stories found online. The dataset was created by web scraping with Selenium (a headless browser) in Python. Full dataset and Python notebooks available upon request. 

### Security
In order to prevent users from making excessive calls to the Seraphina site, I used Auth0 to setup authentication, and require users to be logged in to an account in order to utilize the AI. Users are given ten free tokens to use the AI. Further tokens can be bought through the Seraphina site.

### Features
- Fully trained natural language processing AI
- Authentication with user metadata 
- Payment system utilizing PayPal SDK 
- Mobile responsive landing page 
- Landing demo utilizing react hooks

### Built With

* [![React][React.js]][React-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![Auth0][Auth0.com]][Auth0-url]
* [![PayPal SDK][Paypal.com]][Paypal-url]
* [![GPT3][Openai.com]][GPT3-url]
* [![Selenium][Selenium.dev]][Selenium-url]


<!-- ## Live Demo

Please view the full demo of Seraphina here: <a href="https://seraphinai.com/">Seraphinai.com</a> -->

## Local Copy
You may run this project locally by following these steps:

1. Clone the repo
   ```sh
   git clone https://github.com/KyleleeSea/Seraphina
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a .env file
4. Create your own OpenAI account and include your key in the .env file in variable "REACT_APP_OPENAI_API_KEY"
5. Refactor to your own Auth0 account and include keys "REACT_APP_AUTH0_CLIENT_ID" and "REACT_APP_AUTH0_DOMAIN" in .env
6. Include your own PayPal developer application keys in "REACT_APP_PAYPAL_SECRET" and "REACT_APP_PAYPAL_CLIENTID" in .env
7. In terminal:
   ```sh
   npm run start
   ```
   

<!-- CONTACT -->
## Contact

Twitter - [@KyleleeSea](https://twitter.com/KyleleeSea)

Project Link: [https://github.com/KyleleeSea/Seraphina](https://github.com/KyleleeSea/Seraphina)

<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot]: https://i.imgur.com/AQqjqiK.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Auth0.com]: https://img.shields.io/badge/Auth0-000000?style=for-the-badge&logo=auth0&logoColor=635DFF
[Auth0-url]: https://auth0.com/
[Paypal.com]: https://img.shields.io/badge/Paypal_SDK-35495E?style=for-the-badge&logo=paypal&logoColor=4FC08D
[Paypal-url]: https://developer.paypal.com/home
[Openai.com]: https://img.shields.io/badge/GPT3-F7F7F8?style=for-the-badge&logo=openai&logoColor=000000
[GPT3-url]: https://openai.com/
[Selenium.dev]: https://img.shields.io/badge/Selenium-49B230?style=for-the-badge&logo=selenium&logoColor=ffffff
[Selenium-url]: https://www.selenium.dev/
