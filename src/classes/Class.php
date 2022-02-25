<?php

namespace App;


class Product{

    public $id;
    public $price;
   /**
    * constructor initilize the product price and id
    *
    * @param integer $id
    * @param integer $price
    */
    function __construct(int $id,int $price)
    {
        $this->id=$id;
        $this->price=$price;

        
    }

   
}




?>