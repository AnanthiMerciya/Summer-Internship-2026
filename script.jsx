function login()
{
    var username =
    document.getElementById("username").value;

    var password =
    document.getElementById("password").value;

    if(username == "")
    {
        alert("Enter Username");
        return;
    }

    if(password == "")
    {
        alert("Enter Password");
        return;
    }

    alert("Login Successful");

    window.location.href =
    "index.html";
}

function openBooking()
{
    window.location.href =
    "booking.html";
}

function bookService(service)
{
    localStorage.setItem(
    "selectedService",
    service);

    window.location.href =
    "booking.html";
}

function confirmBooking()
{
    var name =
    document.getElementById(
    "customerName").value;

    var mobile =
    document.getElementById(
    "mobile").value;

    var service =
    document.getElementById(
    "service").value;

    var address =
    document.getElementById(
    "address").value;

    var pickupDate =
    document.getElementById(
    "pickupDate").value;

    var pickupTime =
    document.getElementById(
    "pickupTime").value;


    if(name == "")
    {
        alert(
        "Enter Customer Name");
        return;
    }

    if(mobile == "")
    {
        alert(
        "Enter Mobile Number");
        return;
    }

    if(address == "")
    {
        alert(
        "Enter Address");
        return;
    }

    var orderId =
    "OR" +
    Math.floor(
    Math.random() * 100000
    );

    localStorage.setItem(
    "orderId",
    orderId);

    localStorage.setItem(
    "customerName",
    name);

    localStorage.setItem(
    "mobile",
    mobile);

    localStorage.setItem(
    "serviceName",
    service);

    localStorage.setItem(
    "address",
    address);

    localStorage.setItem(
    "pickupDate",
    pickupDate);

    localStorage.setItem(
    "pickupTime",
    pickupTime);

    localStorage.setItem(
    "orderStatus",
    "Pickup Scheduled");

    window.location.href =
    "confirmation.html";
}

function goPayment()
{
    window.location.href =
    "payment.html";
}

function trackOrder()
{
    window.location.href =
    "tracking.html";
}

function payNow()
{
    var methods =
    document.getElementsByName(
    "payment");

    var selectedMethod =
    "";

    for(var i=0;
        i<methods.length;
        i++)
    {
        if(methods[i].checked)
        {
            selectedMethod =
            methods[i].value;
        }
    }

    if(selectedMethod == "")
    {
        alert(
        "Select Payment Method");
        return;
    }

    localStorage.setItem(
    "paymentMethod",
    selectedMethod);

    localStorage.setItem(
    "paymentStatus",
    "Paid");

    document.getElementById(
    "successBox")
    .style.display =
    "block";
}

function goOrders()
{
    window.location.href =
    "orders.html";
}

function openTracking()
{
    window.location.href =
    "tracking.html";
}

function goFeedback()
{
    window.location.href =
    "feedback.html";
}

function submitFeedback()
{
    var feedback =
    document.getElementById(
    "feedbackText").value;

    var ratings =
    document.getElementsByName(
    "rating");

    var selectedRating =
    "";

    for(var i=0;
        i<ratings.length;
        i++)
    {
        if(ratings[i].checked)
        {
            selectedRating =
            ratings[i].value;
        }
    }

    if(selectedRating == "")
    {
        alert(
        "Select Rating");
        return;
    }

    if(feedback == "")
    {
        alert(
        "Enter Feedback");
        return;
    }

    localStorage.setItem(
    "rating",
    selectedRating);

    localStorage.setItem(
    "feedback",
    feedback);

    document.getElementById(
    "thankYouMessage")
    .innerHTML =

    "<h3>Thank You!</h3>" +

    "<p>Your feedback has been submitted.</p>";
}

function goHistory()
{
    window.location.href =
    "history.html";
}

function logoutUser()
{
    var confirmLogout =
    confirm(
    "Do you want to logout?");

    if(confirmLogout)
    {
        window.location.href =
        "login.html";
    }
}

function searchOrder()
{
    var enteredOrder =
    document.getElementById(
    "searchOrder").value;

    var savedOrder =
    localStorage.getItem(
    "orderId");

    if(enteredOrder ==
       savedOrder)
    {
        document.getElementById(
        "searchResult")
        .innerHTML =
        "Order Found";
    }
    else
    {
        document.getElementById(
        "searchResult")
        .innerHTML =
        "Order Not Found";
    }
}

function viewOrderDetails()
{
    var details =

    "Order ID : " +
    localStorage.getItem(
    "orderId") +

    "\n\nCustomer : " +
    localStorage.getItem(
    "customerName") +

    "\n\nService : " +
    localStorage.getItem(
    "serviceName") +

    "\n\nPayment : " +
    localStorage.getItem(
    "paymentStatus") +

    "\n\nStatus : " +
    localStorage.getItem(
    "orderStatus");

    alert(details);
}

function goProfile()
{
    window.location.href =
    "profile.html";
}

function searchCustomer()
{
    var enteredName =
    document.getElementById(
    "customerSearch")
    .value
    .toLowerCase();

    var customerName =
    localStorage.getItem(
    "customerName");

    if(customerName == null)
    {
        customerName = "";
    }

    customerName =
    customerName.toLowerCase();

    if(enteredName ==
       customerName)
    {
        document.getElementById(
        "customerResult")
        .innerHTML =
        "Customer Found";
    }
    else
    {
        document.getElementById(
        "customerResult")
        .innerHTML =
        "Customer Not Found";
    }
}

function downloadInvoice()
{
    var orderId =
    localStorage.getItem(
    "orderId");

    var customer =
    localStorage.getItem(
    "customerName");

    var service =
    localStorage.getItem(
    "serviceName");

    var payment =
    localStorage.getItem(
    "paymentStatus");

    var invoice =

    "MERCIYA QUICKWASH SERVICES\n\n" +

    "Order ID : " +
    orderId + "\n\n" +

    "Customer : " +
    customer + "\n\n" +

    "Service : " +
    service + "\n\n" +

    "Payment : " +
    payment;

    var blob =
    new Blob(
    [invoice],
    {type:"text/plain"});

    var link =
    document.createElement(
    "a");

    link.href =
    URL.createObjectURL(
    blob);

    link.download =
    "Invoice.txt";

    link.click();
}

function toggleDarkMode()
{
    document.body
    .classList.toggle(
    "dark-mode");
}

window.onload = function()
{
    var serviceField =
    document.getElementById(
    "service");

    if(serviceField)
    {
        var selectedService =
        localStorage.getItem(
        "selectedService");

        if(selectedService)
        {
            serviceField.value =
            selectedService;
        }
    }
};