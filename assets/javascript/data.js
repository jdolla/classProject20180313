var config = {
    apiKey: "AIzaSyBRxAfI5mNIi8sGR8BWSzyGDZfc1MOgZ2o",
    authDomain: "fir-cohort-2018-ac2c4.firebaseapp.com",
    databaseURL: "https://fir-cohort-2018-ac2c4.firebaseio.com",
    projectId: "fir-cohort-2018-ac2c4",
    storageBucket: "fir-cohort-2018-ac2c4.appspot.com",
    messagingSenderId: "107567576883"
};

firebase.initializeApp(config);


// Create a variable to reference the database.
var database = firebase.database();

function saveClick(){
    var employee = {
        name: "name",
        role: "email",
        start: "1/1/1900",
        rate: 5.00
    };

    pushEmployee(employee);
}

function pushEmployee(employee) {
    var e = firebase.database().ref('employees');
    var eRef = e.push(employee);
}
var emp = firebase.database().ref("employees");

emp.on('child_added', function(childSnaphot, prevChildKey){
console.log(childSnaphot.val())
});