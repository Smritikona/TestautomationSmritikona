$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/SmritikonaSukul/git/TestautomationSmritikona/CucumberProject/src/main/java/Features/deals.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 294100,
  "status": "passed"
});
formatter.before({
  "duration": 243000,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "batchautomation",
        "Test@12345"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepDefnition.user_already_on_login_page()"
});
formatter.result({
  "duration": 14838328300,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 43539100,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 506059700,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 7261110800,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 9598100,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 2036766500,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.user_enters_contacts_details(DataTable)"
});
formatter.result({
  "duration": 381204800,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.close_the_browser()"
});
formatter.result({
  "duration": 822204800,
  "status": "passed"
});
formatter.after({
  "duration": 223300,
  "status": "passed"
});
formatter.after({
  "duration": 77800,
  "status": "passed"
});
});