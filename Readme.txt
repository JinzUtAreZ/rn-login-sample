Instructions in making this app

1. expo init "Name of app"
2. go to folder then npm start
   default package.json
3. Error in Expo fixed by  
   E:\NodeJS\ReactNativeApp\ExpoTest\node*modules\metro-config\src
   \defaults\blacklist.js in my project
   from:
var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
 /heapCapture\/bundle\.js/,
 /.*\/__tests__\/.*/
];
to

var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];

4. npm install --save react-navigation react-navigation-header-buttons react-navigation-stack
5. npm install --save redux react-redux redux-thunk
6. expo install react-native-screens react-native-gesture-handler react-native-reanimated
7. expo install expo-linear-gradient
8. device orientation in app.json = { default, portrait, landscape }
9. expo install react-navigation-tabs
 FOR BOTTOM TABS STYLING PANGET UNG createBottomTabNavigator
10. npm install --save react-navigation-material-bottom-tabs
11. npm install --save react-native-paper 
12. npm install --save react-navigation-drawer

Button element 
https://react-native-elements.github.io/react-native-elements/docs/getting_started.html
npm install react-native-elements

Authentication using firebase
https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
https://console.firebase.google.com/u/0/project/rn-myfirst-app/settings/general/
 get the WEB_API_KEY from the project overview settings.
 
React Native Navigation
 https://www.reactnativeschool.com/complex-navigation-example-with-react-navigation

 
