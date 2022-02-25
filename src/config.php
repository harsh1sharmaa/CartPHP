<?php
session_start();

use App\Cart;
use App\Product;

require_once("vendor/autoload.php");





$action = $_GET['action'];

/**
 * if user click add-to-cart then this block run
 */
if ($action == "add") {

    $id = intval($_GET['id']);
    $price = intval($_GET['price']);



    $product = new Product($id, $price);


    if (!isset($_SESSION['cart'])) {

        $_SESSION['cart'] = array();
        $cart = new Cart();
        $cart->addToCart($product);
        $cartarr = $cart->getCart();
        $_SESSION['cart'] = json_encode($cartarr);
    } else {
        $cart = new Cart();
        $carrt = $_SESSION['cart'];
        $cart->setCart($carrt);
        $cart->addToCart($product);
        $cartarr = $cart->getCart();
        $_SESSION['cart'] = json_encode($cartarr);
    }
    // echo json_decode($_SESSION['cart']);
    echo $_SESSION['cart'];
}

/**
 * if user click the delete the this block is run
 */
if ($action == 'delete') {

    $id = intval($_GET['id']);

    $cart = new Cart();
    $carrt = $_SESSION['cart'];
    $cart->setCart($carrt);

    $cart->deleteFromCart($id);
    $cartarr = $cart->getCart();
    $_SESSION['cart'] = json_encode($cartarr);

    echo $_SESSION['cart'];
}


/**this block run the first time */
if ($action == 'start') {

    echo $_SESSION['cart'];
}
