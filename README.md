# Angular Datepicker Module

## Description

This is a simple datepicker for angularjs. Includes the build system

Dependencies to run:
*datejs*
*angular ~1.4.9*

*****

## Install (demo)

```sh
npm install
gulp
node server.js
```

Go to **http://localhost:3000** and enjoy!

*****

## Include it in your project!

1. Import the files dist/datepicker.min.css and misc/datepicker.js
2. Go [here](https://github.com/datejs/Datejs/tree/master/build) to get your datejs locale
3. Include the datejs file and datepicker.js to your application
4. Use the directive **\<datepicker\>**
5. Enjoy!

*****

## Usage:

```html
<datepicker min=0 max=20></datepicker>
```

This will force the user to select from today up to +20 days.
Use relative numbers to adjust.
No attribute means no date limit.

*****

## Note:

This project uses DateJS. The french locale file has been included for the demonstration only
Original sources are available [here](https://github.com/datejs/Datejs)