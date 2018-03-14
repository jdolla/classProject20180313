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
        email: "email",
        age: 59,
        comment: "stuff"
    };

    pushEmployee(employee);
}

function pushEmployee(employee) {
    var e = firebase.database().ref('employees');
    var eRef = e.push(employee);
}