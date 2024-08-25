<?php

class Human extends Character { 

    // PROPRIETES
    
    

    // METHODES MAGIQUES

    public function __construct($enterName) {
        // appelle la fonction construct du parent
        parent::__construct($enterName);
        // assigne la propriété race
        $race = __CLASS__;
        $this->race = "$race";
        // assigne les autres propriétés
        $this->hp = 50;
        $this->strength = 12;
        $this->stamina = 5;

}


    // METHODES



}


?>