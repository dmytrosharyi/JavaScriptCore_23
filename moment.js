function viewNewDay(){
  var value = document.getElementById('date').value;
  var data = moment(value,'DD-MM-YYYY').add(20,'years');
  var day = data.get('day');
  switch (day){
    case 1:
      document.getElementById('newDay').innerHTML ='Monday';
      break;
    case 2:
        document.getElementById('newDay').innerHTML ='Tuesday';
        break;
    case 3:
        document.getElementById('newDay').innerHTML ='Wednesday';
        break;
    case 4:
        document.getElementById('newDay').innerHTML ='Thursday';
        break;
    case 5:
        document.getElementById('newDay').innerHTML ='Friday';
        break;
    case 6:
        document.getElementById('newDay').innerHTML ='Saturday';
        break;
    case 7:
        document.getElementById('newDay').innerHTML ='Sunday';
        break;
  }
}