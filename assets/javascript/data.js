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

function saveClick() {
    var employee = {
        name: `${$("#inputName").val()}`,
        role: `${$("#inputRole").val()}`,
        start: `${$("#inputStartDate").val()}`,
        rate: parseInt($("#monthlyInput").val())
    };

    pushEmployee(employee);
}

function pushEmployee(employee) {
    var eRef = firebase.database().ref('employees');
    var e = eRef.push(employee);
    console.log(e.toString())
}
var emp = firebase.database().ref("employees");

emp.on('child_added', function (childSnaphot, prevChildKey) {

    const child = childSnaphot.toJSON();
    var tr = $("<tr>");
    $(tr).append($("<td>").html(child.name));
    $(tr).append($("<td>").html(child.role));
    $(tr).append($("<td>").html(child.start));
    $(tr).append($("<td>"));
    $(tr).append($("<td>").html(child.rate));    
    $(tr).append($("<td>"));



    $("table").append(tr);


});


document.getElementById("add-user").addEventListener("click", function (event) {
    event.preventDefault();
    saveClick();

});


