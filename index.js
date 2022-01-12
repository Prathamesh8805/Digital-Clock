let day;
let time;
let a;
// const options = { weekday: 'long', year: 'numbric', month: 'long', day: 'numbric' };

setInterval(() => {

    a = new Date();
    date = a.toLocaleDateString();
    time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();

    document.getElementById('time').innerHTML = time + " on " + date;
}, 1000); 