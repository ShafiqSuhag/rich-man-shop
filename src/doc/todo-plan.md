Our company focused on a Niche website (single product category selling website). Currently, we are looking for a front-end web developer to build a full-stack website using React, firebase, react router, node, express, mongodb etc.

We have a simple sample task for you.

# Website Purpose:
- Your website has to be related to Car Sales, Moto Bikes sales, Bicycle Sales, Apartment sales, handicraft( pottery, or woodcraft, jewellery, jute basket, etc.), camera, security camera, action camera, drone, air conditioner, table fan, Alarm Clock, sunglass, lipstick, nail polish, shampoo, Baby Care products (shampoo, lotion, etc.), Baby toys, Decorative lights, Blender, utensils, watch, water bottles, etc. However, your website can not be a typical e-commerce, restaurant, or clothing (textile related) or any of your previous assignments.

- Make sure your design and website idea is unique. First, finalize your idea (what type of website you want to build). Then google the site design or visit themeforest to get your website idea. However, your website can not be related to your previous assignments or any demo project displayed in the course or in our conceptual sessions.

- Initially, do not spend too much time thinking about the design. Just spend 30minutes to an hour. And then finalize the idea. Start working on the project. If needed, put a placeholder image and keep developing the functionalities. Once the functionality is done, come back to add proper images.

Task Detail:
- Home page will have a header (simple navbar), banner, products, reviews, and footer. On the home page, the products will have a maximum of 6 items/products. You can put one or more products in a row based on your design. Each product should have a relevant name, image, short description, add a purchase or buy now button. If a user clicks on the purchase or buy now button it will take the user to the purchase page.

- Add one extra section in the home page in addition to the 5 sections mentioned above.

- We will have another page on the top navigation bar (header) mentioning explore (you can give it a meaningful name based on your website). Clicking on the link will take the user to the explore page. On this page, users will see all the products you have. This means, the user will see at least 10 products on this page. Each item will have a name, description, image, price and button. Once a user clicks on this button, it will take the user to the purchase page.

- The purchasepage will be a private/protected route. Please make sure that if the user is not logged in, the private route redirects to the login page. After login, the user will be redirected to the page he/she wanted to go to. Also, make sure, after reloading the page of a private route, the user is not redirected to the login page. The purchase page should display detailed information of the item the user has clicked somewhere at the top. It will also display the user's name and email address from the login system and the user will have a field to provide address, phone number and necessary information to place the order or to complete the purchase.

- Implement email/ password (login/Register) based login system. The registration form should have the name and once a user is logged in, the user name, and the logout button should appear on the header which will log out the user once clicked. Displaying username on the header is optional. Please note that implementing the google, facebook, or github provider based authentication is also optional.

- If a user is logged in, he/she will see another option on the header is called Dashboard and inside that dashboard a normal user (not an admin) will see options like pay,My Orders, Review, Logout. Based on your website idea, you can change the name of these menu items. The pay page will say: Payment system coming soon.

- On the my orders page, the logged in user will see only his/her orders. If the user wants, he/she should be able to cancel/delete any order. Ask a confirmation message before deleting or canceling an item. Using browser confirmation dialog is ok.

- On the Review page, users should be able to add a review and that review will appear on the home age. Right now you will see every review on the home page. There is no limit on the numbers of reviews or the order of the review.

- If an admin logs in, he/she will not see the options that a normal user sees. Insted an admin will see Manage All Orders, Add A Product, Make Admin, Manage Products Logout. Based on your website idea, you can change the name of these menu items. Details about Manage all orders or Manage products will be provided later.

- An Admin should be able to make another user an admin. If an admin wants, he/she will be able to add a product on the add a product page. After adding the product, this product will appear on the explore page. Please note, to add an image for a new product, you can just upload the image on any image hosting sites like imgbb, etc.and then have an input field to add the link of the image.

- For our testing purpose please add one admin with the email address: admin@admin.com with password: 123456

- Use a database to store information. It could be mongodb atlas or any other noSQL database.

Bonus:
- At the time of adding review, you may add an input field to add ratings (a number between 0-5). Based on the rating, display rating star on each reviews in the home page

- Meaningful readme.md file both on client side and server side. containing your website name, a little description, link to your live site. And at least five bullet points mentioning different features and functionality of your website.

- Make the website responsive. Make sure the site looks different on desktop and mobile responsive. Tablet responsive is optional

- Make the website meaningful and consistent in look and feel. Give your website a relevant name. Images and all the content of the website has to be relevant. No lorem ipsum please.

- Clean and organized Code. Organize components and add comments when needed

- use .env file on the server, .env.local file on the client to hide db user and password, etc. Also use .gitignore file

- On the Manage All Orders page for the admin, the logged in admin will see the orders placed by every user. If multiple users used this website to place orders, everyone's order will be displayed here. Admin can update the status of the order. At the time of placing an order, every order will have a default status: pending. On the Manage All Orders page, an admin will be able to update the status of the pending to shipped status. This could be a simple button to update the pending status. (don't over think, this is a simple button to update the status field of an order. Use Id to find the order and set the status to approved). Also, it would be nice if you can do one additonal task here: The admin will be able to delete anyone's order here. Make sure to add a confirmation before deleting. Please note: delete is optional but recommended on this page.

- on the Manage Products page, an admin can delete any of the products. Please make sure there is a confirmation. After delete that product will not appear on the explore page.

Optional:
- Make sure you have done everything on the main part and bonus. deploy and test everything after that you may try optional things.

- payment gateway (paypal or stripe or anything else)

- On the add a product page, try to implement direct image upload from your computer. This image can be hosted on third part image hosting like imgbb or directly to mongodb

- Add a shopping cart and Order review page

- pagination. if you implement pagination, you can have duplicate products

- Implement jwt token.

- Manage orders page, add more options like: pending, rejected, shipped. And consider using a select (drop down options). Also, once the status of an item is updated that status is reflected on the 'my orders' page once the user of the order is logged in.

- Try to use a better looking confirmation dialogue other than the browser's default confirm.

- Add some animation while applicable.

- Please Use icons whenever applicable and use fonts (google fonts)

- Make the footer little more realistic

- Optimize your images

- Add something extra of your own. This will help you in the future.

- Most of the booking will have a date, you can use browsers default input type date or any external packages

- We encourage you to use axios.

- Also, if you want you can use mongoose.

- If possible, replace the default react favicon and give an icon for your website.