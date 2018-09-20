# it2810-webutvikling-h18-prosjekt-2-gruppe--12
it2810-webutvikling-h18-prosjekt-2-gruppe--12 created by GitHub Classroom

## Tabs/Tab
As we couldn't use libraries like "react-router" this is made from the ground up. The `Tabs` component contains the tabs proper (Buttons with labels) and their content. The content of the selected tab is based on the choices made in the `Selector` component. If any choices are yet to be made, they will show no content, except a message telling the user to pick categories in the selector. React lifecycle functions are used here.

## Selector
Selector component with 3 types of media (Sound, SVG and Text) with three radio buttons in each category. App.js keeps the state of what categories have been selected as well as which tab is currently active. As `Selector` and `RadioButton` are child components of `App.js`, callback functions are used to handle changes and determine the current state. This state is then sent to the "Tabs" component to decide what is to be rendered.

## Text
We created a text component that we can simply call with the applicable props to get the text we need for the selected categories. We pass the category and tab index, acquired from parent rcomponents, to the component, allowing simple access. The category is used as a JSON key to get the correct array from the AJAX respone. The tab index is an integer, and is used in accessing the selected array to make sure that each tab displays the proper text. The text is then placed in a div tag to be rendered when the component is called.

## Graphics
The tab component was implemented with an image property, for holding a svg file. Then we made a method for creating a path for the specific svg file from the resource folder in public, based on the selector component's current choice (If the selector's choice for SVG was “Random” (first category) and the current active tab is Tab #3, then return the path for the 03.svg file). Third, a method for loading the SVG image, using the path found in the previous method, which would set the tab components image property to the result. In the tab component the SVG file would be rendered by setting `dangerouslySetInnerHtml` into the image property, in its render method.

## Sound
Simple sound component using the HTML5 `<audio>` tag. The MP3 file is chosen depending on the category selected in `Selector`, as well as the current tab. The audio tag in HTML5 supports standard playback functions such as pause, play and volume, and is an excellent choice for a project like this due to ease of use. 

##AJAX
We placed the resources in the public folder of the React project structure. This folder contains all graphics, sound and text to be used in the tabs. The SVG and JSON files were then to be accessed via AJAX. Due to the simplicity of the tasks, we opted to use the native Fetch method rather than something like Axios. Some benefit Axios provides over Fetch is simpler error handling, as any HTTP error code will trigger catch blocks, while Fetch treats any HTTP code as a successful response. Only a network error or things like permission issues will trigger a catch block with no extra work. This is not wrong, but can be confusing to work with. You need to do some extra work with the "ok" flag from the Fetch response to get the same behaviour as Axios. Axios also supports automatic JSON conversion, while Fetch needs to call the `.json()` method on the response to get a readable object. Either way, Fetch worked fine for what we needed it to do, but we’ve noted some benefits of Axios for future projects.

## Responsive web design: 
The requirements for project 2 were to use Viewport, media queries, pictures that scale and flex/floating content. All of these were used in this project. Viewport is included in the meta tag in index.html. Media queries are used in the css styling for handling landscape and smaller devices so it becomes responsive. We also used flex for this project, so the content in the tabs and the content in the body behaves as we want to, and adjusts itself depending on the screen size.  (see Tab.css).

## Testing: 
The aim of the unit testing was to assure that the website’s functionality and behaviour was preserved, on a diverse set of devices. We chose to test the website on an Iphone sized mobile phone (320 x 480 pixels), Ipad (768 x 1024 pixels, both vertically and horizontally) and a regular laptop (1920 x 1080 pixels). The testing was done personally (with our own devices) and with an external program (found at http://mattkersley.com/responsive/). 

## Desired functionality and behaviour: 
At the top of the website the header should be displayed, with the set of tabs (1-4) under it. The gallery (Image + text + play button for sound) should be placed under the set of tabs, left justified, with the selector menu on the same level, right justified. If there is not enough space for the entire gallery at the same level, the text and play button will wrap under the image. If there is no space for the selector menu, it should wrap under the Gallery (For small devices, it would be image -> text + play button -> selector menu). The footer is placed at the bottom of the website. 

The gallery is interactive and should show content based on the choices made by the user, using the radio buttons in the selector menu. For each type of media (Text, Graphic, Sound) there are three categories to choose from and each tab will show some unique “art piece”, based on the choice of the user.
