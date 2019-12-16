// Builds HTML for the home page based on categories array
// returned from the server.
function buildAndShowHomeHTML (categories) {
  
  // Load home snippet page
  $ajaxUtils.sendGetRequest(
    homeHtmlUrl,
    function (homeHtml) {

      // TODO: STEP 2: Here, call chooseRandomCategory, passing it retrieved 'categories'
      // Pay attention to what type of data that function returns vs what the chosenCategoryShortName
      // variable's name implies it expects.
      
      var chosenCategoryShortName = chooseRandomCategory(categories).short_name;      

      // TODO: STEP 3: Substitute {{randomCategoryShortName}} in the home html snippet with the
      // chosen category from STEP 2. Use existing insertProperty function for that purpose.
      // Look through this code for an example of how to do use the insertProperty function.
      // WARNING! You are inserting something that will have to result in a valid Javascript
      // syntax because the substitution of {{randomCategoryShortName}} becomes an argument
      // being passed into the $dc.loadMenuItems function. Think about what that argument needs
      // to look like. For example, a valid call would look something like this:
      // $dc.loadMenuItems('L')
      // Hint: you need to surround the chosen category short name with something before inserting
      // it into the home html snippet.
      //

      chosenCategoryShortName = "'" + chosenCategoryShortName + "'";
      var homeHtmlToInsertIntoMainPage = insertProperty(homeHtml, "randomCategoryShortName", chosenCategoryShortName);
      

      // TODO: STEP 4: Insert the the produced HTML in STEP 3 into the main page
      // Use the existing insertHtml function for that purpose. Look through this code for an example
      // of how to do that. 
      // ....

      insertHtml("#main-content", homeHtmlToInsertIntoMainPage);      
    },
    false); // False here because we are getting just regular HTML from the server, so no need to process JSON.
}
