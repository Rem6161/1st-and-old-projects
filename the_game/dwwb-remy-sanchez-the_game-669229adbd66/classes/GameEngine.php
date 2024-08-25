<?php

    class GameEngine {

        //  PROPRIETES

        public $players;
        public $arena;
        public $fighter;
        public $randomTarget;
        public $fightersInArena;

        //  METHODES MAGIQUES

        public function __construct() {
            $this->players = [];
            $this->arena = [];
        }

        // METHODES
        
        public function addCombattant($enterPlayer) {
            // checks if the variable $enterPlayer is an array
            if(is_array($enterPlayer)) {
                // for each player
                foreach($enterPlayer as $p) {
                    // push argument $enterPlayer into object property $players
                    array_push($this->players, $p);
                }
            } else {
                // if the variable $enterPlayer isn't an array then push this variable in the array of property $players
                array_push($this->players, $enterPlayer);
            }
        }


        public function start() {

            // rajouter des personnages dans larene 
            $this->arena = $this->players;
            // // il faut deux personnage au minimum (condition)
            // // démarre le combat
            if($this->players > 2) {
                echo "<p>Le combat peut commencer</p> <br>";
            } else {
                echo "<p>Le combat ne peut pas commencer</p> <br>";
            }
           
            // compte les combattants présents dans l'arène
            $this->fightersInArena = count($this->arena);

            // si il y a plus de deux combattans dans l'arène
            if($this->fightersInArena >= 2) {
                // tant qu'il y a plus de deux combattants ou deux combattants dans l'arène
                while($this->fightersInArena >= 2) {

                    // pour chaque combatant dans l'arène
                    foreach($this->arena as $this->fighter) {
                            
                            // selectionne le combattant dans l'array $this->arena par sa key
                            if (($key = array_search($this->fighter, $this->arena)) !== false) {
                
                                // il s'exclut lui même de son choix de cibles
                                $choosingTargetArray = $this->arena;
                                unset($choosingTargetArray[$key]);
                
                                // selectionne joueur cible aléatoire
                                $getRandomTarget = array_rand($choosingTargetArray);
                                $this->randomTarget = $choosingTargetArray[$getRandomTarget];

                                $this->tourDeJeu();

                                $this->nettoyerMort();
                            }
                        }
                    }   
                }
            $this->fin();
        }

        public function getId() {
            // retourne un l'id  aleatoire 
            $k = array_rand($this->players,1);
            return $k;  

            //     foreach($this->players as $p ){

            //     $p = array_rand($this->players ,  5);
            //     $a = $p ;
            //     $random_keys=array_rand($a,3);
            //     echo $a[$random_keys[0]]."<br>";
            //     echo $a[$random_keys[1]]."<br>";
            //     echo $a[$random_keys[2]];
        
                
            // }
            
        }


        public function getJoueur() {
            // retourne un joueur aléatoire
        }

        public function tourDeJeu() {
            // fait attaquer chaque joueur
            // joueur attaque
            $this->fighter->attack($this->randomTarget);
        }

        public function nettoyerMort() {
             // si la cible est morte
            // KICK DE L'ARENE
            if ($this->randomTarget->hp < 0) {

                // selectionne la cible dans l'array $this->arena par sa key
                if (($key = array_search($this->randomTarget, $this->arena)) !== false) {

                    // kick de l'arène si la cible a des hp inférieurs à 0
                    unset($this->arena[$key]);
                    
                    // echo du kick
                    $targetName = $this->randomTarget->name;
                    echo "<p>$targetName is kicked from the arena</p> <br>";
                    
                    // var_dump($this->arena);
                    // réassigne la bonne valeur au nombre de combattants dans l'arène
                    $this->fightersInArena = count($this->arena);
                }
            }
        }

        public function fin() {
            // at this point, only one fighter remains in the arena
            // getting winner value
            // getting first element of array arena
            $winner = array_shift($this->arena);
            echo "END OF KOMBAT !!! $winner->name wins !";
        }
    }


        // // si la cible a moins de 0 hp
        // if($$this->randomTarget->hp < 0) {
        //     // selectionne la cible aléatoire dans l'array $choosingTargetArray par sa key
        //     if (($key = array_search($$this->randomTarget, $choosingTargetArray)) !== false) {
        //         // on exclut la cible morte du choix de cibles
        //         unset($choosingTargetArray[$key]);
        //     }
        // }


        
        // // KICK DE L'ARENE
        // foreach($this->arena as $this->fighter) {
        //     // vérifie si chaque fighter a des points de vie supérieur à 0
        //     if ($this->fighter->hp < 0) {
        //         // selectionne le combattant dans l'array $this->arena par sa key
        //         if (($key = array_search($this->fighter, $this->arena)) !== false) {
        //             // kick de l'arène si le fighter a des hp inférieurs à 0
        //             unset($this->arena[$key]);
        //             // echo du kick
        //             echo "$this->fighter->name is kicked from the arena";
        //         }
        //     }
        // }
        






?>