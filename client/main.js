class Calendar {
  //do something with the data here
  constructor(schedule) {

  }
}

class Event {
  constructor(data) {
    this.startTime = data.startTime;
    this.endTime = data.endTime;
    this.description = data.description;
  }
}

class Day {
  constructor(name) {
    this.name = name;
    this.events = [];
    this.addEvent = (eventData) => {
      this.events.push(new Event(eventData));
    }
    this.orderEvents = () => {
      //go through events and sort them by start and end time
    }
  }
}

class Week {
  constructor(number) {
    this.weekNumber = number;
    this.days = [];
    this.addDay = (name) => {
      const day = new Day(name);
      this.days.push(day);
    }
  }
}

function sliceDayToWeek(totalDays){
  // const totalWeeks;
  // if(totalDays.length % 6 > 0){
  //   totalWeeks = totalDays.length / 6 + 1;
  // } else {
  //   totalWeeks = totalDays.length / 6;
  // }
  // const weeks = {}
  // for(let i = 1; i <= totalWeeks ; i++)    c// onweeks[i]new Week(1);i{

  // }1);

  let weekNumber = 1;
  let dayCounter = 0;

  let allWeeks = [];

  //console.log('length: ' + totalDays.length);


  let totalWeeks;
  totalWeeks = Math.floor(totalDays.length / 6);
  let remainderDays = totalDays.length % 6;

  for (let i = 0; i < totalWeeks; i++) {
    let week = new Week(weekNumber);
    //console.log(totalDays);
    console.log(totalDays[dayCounter]);

    for (let j = 0; j < 6; j++) {
      week.addDay(totalDays[dayCounter].name);
      //console.log(week)
      //console.log(week.days[0]);
      //console.log(totalDays[dayCounter].events)

      for(let event in totalDays[dayCounter].events){
        //console.log(totalDays[dayCounter].events[event]);
        week.days[j].addEvent(totalDays[dayCounter].events[event]);
      }
      //console.log('day added: ' + totalDays[dayCounter]);
      dayCounter++;
    }
    allWeeks.push(week);
    weekNumber++;
  }

  let finalweek = new Week(weekNumber);
  for (let j = 0; j < remainderDays; j++) {
    finalweek.addDay(totalDays[dayCounter].name);
    for(let event in totalDays[dayCounter]){
      //console.log(week.days[j]);
      finalweek.days[j].addEvent(event);
    }
    dayCounter++;
  }

  allWeeks.push(finalweek);
  console.log(allWeeks);

}
var CSurl = 'http://slack-server-production.us-west-2.elasticbeanstalk.com/calendar/FTRI/9';

document.addEventListener('DOMContentLoaded', () => {
  const totalDays = [];
  const title = document.createElement('h1');
  title.innerText = 'Social Calendar';
  document.querySelector('body').appendChild(title);
  // make AJAX call here....
  function ajaxCall() {
    $.ajax({
      url: CSurl,
      type: "GET",
      success: function(data) {
        var x = JSON.stringify(data);
        for (const day in data) {
          //console.log(day)
          //console.log(data)
          // totalDays.push(day);
          //console.log(day, data[day]);
          let date = new Day(day);
          //console.log(date)
          // let date = day;
          //console.log('day: ' + day);
          totalDays.push(date);
          //console.log(totalDays)
          for(const event of data[day]) {
            //console.log(event);
            let newEvent = new Event(event);
            newEvent.description = event.description;
            newEvent.startTime = event.start.dateTime;
            newEvent.endTime = event.end.dateTime;
            date.addEvent(newEvent);
          }
        }
        //console.log(totalDays);

        sliceDayToWeek(totalDays);
        //console.log(x)
      },
      error: function(error) {
      console.log(`Error ${error}`);
      }
    });
  }
  ajaxCall();
  //sliceDayToWeek(totalDays);

});
