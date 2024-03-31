# Assessment for front-end Developer Profile at Gyan Grove

I have used react.js with JavaScript and for vanilla CSS is being using in the application to be more abstract. <br />
For resposiveness in jsx part, useMediaQuery hook is being used and for CSS part basic media query is used. <br />
For infinite scrolling, a temporary invisible component is used and when that comonent enters the view port, the next set of data id fetched from the API. <br />
For horzontal scroll, flex box in being used with additional CSS properties like flex-shrink and overflow, also the scroll bar is also hidden. <br />
The image URLs comming from the API is google drive link to that email, so we hade to convert that to the preview format to display the image in the web page using `converURLForSrc` function. <br />


## To run the application locally

### Install all the dependencies 
run the command `npm install`

### Set Up the enviroment variables
1. Create a file named .env in the root of the project
2. add the azure key which is being used as the code in the APIs in the following mannger:
   REACT_APP_API_KEY=`<azure key>`
   
### Start the application 
Runs the app in the development mode using the command `npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## ScreenShot of thw working project

![Screenshot from 2024-03-31 17-49-02](https://github.com/Himanshuiiit/gyan-grove-assessment/assets/76449638/bfbdee64-d977-4154-9f5e-9c6f7d5d3e47)

### URL to the deployed project

https://gyan-grove-assessment.vercel.app/
