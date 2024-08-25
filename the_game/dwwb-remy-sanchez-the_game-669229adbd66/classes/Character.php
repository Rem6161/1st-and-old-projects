<?php

abstract class Character {

    // PROPRIETES
    // faire en sorte que ce soit des entiers

    public $name;
    public $id;
    public $race;
    public $hp;
    public $strength;
    public $stamina;
    

    // METHODES MAGIQUES

    protected function __construct($enterName) {
        $this->name = $enterName;
        }
    

    // METHODES

    public function attack($target) {
        // $character attacks $target;
        // use strength to attack target hp
        // strength - stamina = hp loss
        $hp_loss = $this->strength - $target->stamina;
        // target looses hp
        $newTargetHp = $target->hp - $hp_loss;
        // sets target new hp value
        $target->hp = $newTargetHp;

        // echo the player attacks
        echo "<p>$this->name the $this->race attacks $target->name the $target->race !!!</p>";

        // echo the damage output
        echo "<p>It's super effective !! The attack makes $target->name loose $hp_loss HP !!!</p>";

        // echo the new target health points
        echo "<p>$target->name has now $newTargetHp HP.</p> <br>";

    }


//////////////////////////////////////////////////////////////////////////////////////////////////////////
    // // FIGHT
    // public function fight($enterPlayer1, $enterPlayer2) {
    //     // player 1 attacks
    //     $enterPlayer1->attack($enterPlayer2);
    //     // if player 2 survived
    //     if ($enterPlayer2->hp > 0) {
    //         // player 2 attacks
    //         $enterPlayer2->attack($enterPlayer1);
    //         // if player 1 survives
    //         if ($enterPlayer1->hp > 0) {
    //             // player 1 attacks
    //             $enterPlayer1->attack($enterPlayer2);
    //         } else {
    //             // player 1 is dead
    //             echo "<p>$enterPlayer1->name is dead.</p> <br>";
    //         }
    //     } else {
    //         // player 2 is dead
    //         echo "<p>$enterPlayer2->name is dead.</p> <br>";
    //     }
    // }

    // public function fight() {
    //     // tant que le joueur a plus de 0 hp
    //     while ($this->hp > 0) {
    //         // le joueur attaque une cible random, autre que lui même
            
    //     }

    // }
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}




?>