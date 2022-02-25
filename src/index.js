let data = [
    {
        id: "101",
        price: "150",
        src: "images/football.png"
    },
    {
        id: "102",
        price: "120",
        src: "images/tennis.png"
    },
    {
        id: "103",
        price: "90",
        src: "images/basketball.png"
    },
    {
        id: "104",
        price: "110",
        src: "images/table-tennis.png"
    },
    {
        id: "105",
        price: "80",
        src: "images/soccer.png"
    }
]

$(document).ready(function () {
    console.log("hello");

    displayProduct();


    $.ajax({
        method: "GET",
        url: "config.php",
        data: { action: "start" },
        dataType: "JSON"
    }).done(function (data) {


        console.log(data);

        displytable(data);

    });



    // $("#products").on("click", ".add-to-cart", function (e) {
    //     e.preventDefault();

    //     let pid = $(this).data('pid');
    //     let price = $(this).data('price');


    //     console.log("add click");
    //     // console.log(pid);
    //     // console.log(price);
    //     $.ajax({
    //         method: "GET",
    //         url: "config.php",
    //         data: { id: pid, action: "add", price: price },
    //          dataType: "JSON"
    //     }).done(function (data) {
    //         // data=$.parseJSON(data);

    // // var myObject = Object.assign({}, data);
    //         // data=JSON.parse(data);

    //         console.log(data);

    //         displytable(data);

    //     });

    // })




    // $("#table").on("click", ".deletebtn", function (e) {
    //     e.preventDefault();

    //     let pid = $(this).data('pid');
    //     // let price = $(this).data('price');


    //     console.log("add click");
    //     // console.log(pid);
    //     // console.log(price);
    //     $.ajax({
    //         method: "GET",
    //         url: "config.php",
    //         data: { id: pid, action: "delete"},
    //          dataType: "JSON"
    //     }).done(function (data) {
    //         // data=$.parseJSON(data);

    // // var myObject = Object.assign({}, data);
    //         // data=JSON.parse(data);

    //         console.log(data);

    //         displytable(data);

    //     });

    // })




})

/**
 * this block run when add to cart is clicked
 */
$("#products").on("click", ".add-to-cart", function (e) {
    e.preventDefault();

    let pid = $(this).data('pid');
    let price = $(this).data('price');


    console.log("add click");

    $.ajax({
        method: "GET",
        url: "config.php",
        data: { id: pid, action: "add", price: price },
        dataType: "JSON"
    }).done(function (data) {


        console.log(data);

        displytable(data);

    });

})




$("#table").on("click", ".deletebtn", function (e) {
    e.preventDefault();

    let pid = $(this).data('pid');
    // let price = $(this).data('price');


    console.log("add click");

    $.ajax({
        method: "GET",
        url: "config.php",
        data: { id: pid, action: "delete" },
        dataType: "JSON"
    }).done(function (data) {


        console.log(data);

        displytable(data);

    });

})





















function displytable(data) {
    console.log("in dis");
    let tprice = 0;
    let tqnty = 0;
    console.log(data.length);

    let html = "<table><tr><th>product id</th><th>product price</th><th>Quantity</th><th>Action</th></tr>";
    for (let i = 0; i < data.length; i++) {


        console.log(i);

        tprice = tprice + (data[i].price * data[i].qnty);
        tqnty = tqnty + data[i].qnty;
        console.log(i);
        html += "<tr><td>"
            + data[i].id +
            "</td><td>"
            + data[i].price +
            "</td><td>"
            + data[i].qnty +
            "</td><td>" +
            "<a href=" + " # class=deletebtn  data-pid=" + data[i].id + ">  delete</a>"
        "</td></tr>"

    }
    // console.log(html);
    // document.getElementById('table').innerHTML = html + "</table>";
    $("#table").html(html + "</table>");
    // resetInput();

    $("#tprice").text("total price = " + tprice);
    $("#tqnty").text("total quantity = " + tqnty);


}

function displayProduct() {

    let str = "";
    for (let i = 0; i < data.length; i++) {
        let obj = data[i];

        str += "<div id=product-101 class=product>\
        <img src="+ obj.src + ">\
        <h3 class=title><a href=#>Product"+ obj.id + "</a></h3>\
        <span>Price: $"+ obj.price + "</span>\
        <a class=add-to-cart href=# data-pid="+ obj.id + " " + "data-price=" + obj.price + ">Add To Cart</a>\
    </div>"

    }
    $("#products").html(str);



}