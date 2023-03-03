    
    // a custom module to get current date
    //console.log(module);
    //module.exports="lmao";
    //console.log(date);    will print lmao because it is exported by this module.

    module.exports= getDate;        //it will run when you will close the brackets.       date() in the app.js
    
    function getDate(){
        let today= new Date();
        //let currentDay=today.getDay();            // will give index of weekdays. 0 for sunday, 1 for monday.-- 6 for saturday
        // const weekDays={1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday",6:"Saturday", 0:"Sunday"};
        let options= {               //JS object for date formatting
            weekday:'long',             //  weekdays will be written in full form, i.e., Saturday
            day:'numeric',               // days will be numeric format
            month: 'long'               // full month names
        };

        let day = today.toLocaleDateString("en-US", options);
        return day;
    }
        
