<?php

namespace App;




class Cart
{
    public array $cart = array();
    //  $cart=array();

    /**
     * constructor 
     */
    function __construct()
    {
    }
    /**
     * add product into cart array
     *
     * @param Product $product
     * @return void
     */
    public function addToCart(Product $product)
    {


        if ($this->isProductPresent($product)) {
            $product->qnty = 1;
            array_push($this->cart, $product);
        }
    }
    /**
     * return the cart array
     *
     * @return void
     */
    public function getCart()
    {
        return $this->cart;
        # code...
    }

    /**
     * this function set the preivous cart array
     *
     * @param [type] $carrt
     * @return void
     */
    public function setCart($carrt)
    {

        $this->cart = json_decode($carrt);
    }

    /**
     * this function delete the product from cart
     *
     * @param [type] $id
     * @return void
     */
    public function deleteFromCart($id)
    {
        foreach ($this->cart as $key => $val) {

            if ($val->id == $id) {

                // $product->id=$product->id+1;
                array_splice($this->cart, $key, 1);
                return;
            }
        }
    }
    /**
     * this function check product present in cart or not
     *
     * @param Product $product
     * @return boolean
     */
    public function isProductPresent(Product $product)
    {
        //check product present or not
        foreach ($this->cart as $key => $val) {

            if ($val->id == $product->id) {

                // $product->id=$product->id+1;
                $this->cart[$key]->qnty += 1;
                return false;
            }
        }
        return true;
    }
}
