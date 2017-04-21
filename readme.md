<!--
Market: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Angular $http Lab

### Introduction

> ***Note:*** *This will be a pair programming activity, but you will need to submit code separately.  This means that you can work on one developer's repository for the duration of class time today, but you will need to fork that repository to the other developer's GitHub before class ends.*

Based on our experience in the last lesson using $http to access APIs in Angular, your task is to build something _just_ like what we built together - but on your own.

Starting from scratch is important practice and having to build the entire Angular app from nothing will help reinforce what pieces you need and how they connect.

Now, the fun part. You'll be working on an interface for our **Infamous Criminals™** API – a database to store & categorize history's most well-known wrong-doers. The API already exists, but we desperately need your help creating an Angular application to add criminals to our database, delete them when they've gone straight, and time permitting, update their information when their whereabouts change.


## Exercise

#### Requirements

Use $http to:

- access an API resource
- POST a new instance of a resource

**Bonus:**
- update an API resource
- delete an API resource

#### Starter Code

There's an Express-built API ready to run with `nodemon`. Don't forget to `npm install` and run `mongod`. There's no seed data - you'll have to save your own criminals.

#### Instructions

Preliminary:

1. Check out the index-has-prompts file. You can use this as a guide to build your index.html file from scratch, or copy and paste it into your own index.html file.

2. You will need to flesh out this file with the proper angular functionality. The prompts file has hints. All of the concepts you need for this have been covered. You might need to do some Googling. Ask for help if you need to so you can get to CRUDding!

3. Create your Angular app in an app.js file and your controller in your criminalsController.js file. Your index-has-prompts.html file already has links to where those files will live.

Main:

4. Write the code in those files to CRUD criminals!

#### Deliverable

Build an Angular app from scratch to interface with our RESTful CRUD API. Focus on GET/POST first and tackle PUT/PATCH/DELETE if you have time.

Use the included CSS if you wish but feel free to make your own!

<img width="740" alt="Infamous Criminals" src="https://cloud.githubusercontent.com/assets/25366/9455944/e202ed9e-4a85-11e5-8752-2cf61f242867.png">

## Additional Resources

- [$http Documentation](https://docs.angularjs.org/api/ng/service/$http)
