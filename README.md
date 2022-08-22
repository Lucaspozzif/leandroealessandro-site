# Leandro e Alessandro web-app
Mornin' comrades, I am Lucas Pozzi,
A begginer developer.

This web app was created for help customers of the leandro e alessandro hairsalon to schedule themselves in the professional schedule, without the interference of any person.
It uses a react aplication, react router dom, firebase and firestore for now, all in node.js, but it still in its eraly phase, so probably it will get more frameworks 

## Prerequisites
- Node.js and npm
- Firebase

To install and run the project, you will get the folders and put them into a react app, you could create one typing "npx create-react-app leandroealessandro-site" and then running npm install to download the frameworks, so you can run the app by typing `npm run start`
Also, if you're not into knowing the code details you can go straight into the site, `https://leandroealessandro.com` to see the current site in it last working version

## Contribuitors
The only contribuitor to this project is @Lucaspozzif, (me).
I did all the design, back-end, front-end and hosting, of course, my customer paid for the hosting, but it still out of this project

# Bug Reports
The bugs are reported here, so I can come and find a solution for it as sudden as possible, 
the organization must be:

### Bug name
A short description of the problem

### Urgency level
there are 4 levels of urgency:
0 - It is just a minor problem, that cannot cause any issues to the app itself, generally small design problems
1 - Problems that require atention, but that are not so big that we can't live with it
2 - Big problems, vulnerabilities and other problems that need to be solved soon, often problems that can make the app unusable, in at least 1 or 2 days
3 - Insanely big bugs, that can put the customers data or the app itself in risk, it must be solved as soon as possible

### Problem
A detailed description of the problem and why it should be solved in that urgency level

### Solution (Optional)
If you have some logic in mind that can solve the problem you can put it here, so it will be easyer to solve and can be released faster

## Last confirming screen
Urgency level: 1
### Problem
After choosing a time and confirming it, the customer is just redirected to the inicial page, it's not ideal, the customer don't know if the site just glitched or if it is already marked
### Solution
Create a confirmed service page

## The services don't have different times
Urgency level: 2
### Problem
Different services, as corte and escova, have the same time (30 minutes), when they hould be at least one hour, if it stays like this, the customers will be able to schedule the time that is unavailable
### Solution
Turn the service array in database, an array of arrays, that can store the service.name and the service.time, that will be a number that represents how mutvh time it will took

## Schedule available in Sundays and Mondays
Urgency level: 2
### Problem
The shop does not open in this days, but customers still able to select services for these days.
### Solution
make the "taken" atribbute, be took in sundays and mondays automatically

## The site is missing animations
Urgency level: 1
### Problem
The site don't have any annimation, witch makes it really boring and unintresting, maybe some animation will bring some life to it
### Solution
Make css and javascript animations

## The font is ugly
Urgency level: 1
### Problem
For some reason, the font is ugly, change it
### Solution
Change the font in css