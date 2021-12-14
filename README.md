// Problems

//still can't sign in?
//had not defined a token from my returned data and stored it in a variable

// once I login, I still see options to login and register unless I refresh the page
// I had duplicate login routes and needed to pass token to navbar as a prop

// what do I do with return parameters in the users/me endpoint section of the api?

Routes via React Router (This is a minimum; you could have more than just these routes. These routes may be named as you wish.):

/posts
/profile (with messages)
/login and /register (this could alternatively be displayed in the profile instead of living in its own route)
Unauthenticated Users should be able to:

See a list of all posts
Sign up for an account with username and password
Sign in with correct username/password combination
Unauthenticated Users should not be able to:

Create a new post
Delete any post
Send a message to the author of any post
Authenticated Users should be able to:

Create a new post
Delete a post for which they are the author
Send a message to the author of any post for which they are not the author
See all messages for any post for which they are the author
See all messages they've received in a special view
Authenticated Users should not be able to:

Delete posts for which they are not the author
Send a message to themselves
All users should be able to:

Filter posts with a simple text matcher (no fetch call needed here)
Opportunity for EXTRA CREDIT of up to 5% added to your overall score. Authenticated Users would be delighted to be able to:

Edit a post for which they are the author
