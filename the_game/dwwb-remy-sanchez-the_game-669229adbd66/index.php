<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Game</title>
</head>
<body>
    <h1>The Game</h1>


<?php

        ini_set('display_errors', '1');
        ini_set('display_startup_errors', '1');
        error_reporting(E_ALL);


        require("classes/GameEngine.php");
        require("classes/Character.php");
        require("classes/Elf.php");
        require("classes/Human.php");
        require("classes/Orc.php");
        


        // Creating Game Engine
        $gameEngine = new GameEngine();

        // Creating players
        $players = [
            $orc1 = new Orc("CLAUDE"),
            $orc2 = new Orc("MARC"),
            $elf1 = new Elf("TIFFANY"),
            $human1 = new Human("GEORGIO")
        ];

        $CARAMEL = new Elf("CARAMEL");




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // DUEL

        // Creating arena
        $domeDuTonnerre = [
            $orc1,
            $elf1
        ];

        $fighter1 = $domeDuTonnerre[0];
        $fighter2 = $domeDuTonnerre[1];

        
        echo "DUEL !!!! $fighter1->name VS $fighter2->name !";

        
        // compte les combattants présents dans l'arène
        $fightersInArena = count($domeDuTonnerre);

        // si il y a plus de deux combattans dans l'arène
        if($fightersInArena >= 2) {
            // tant qu'il y a plus de deux combattants ou deux combattants dans l'arène
            while($fightersInArena >= 2) {

                // pour chaque combatant dans l'arène
                foreach($domeDuTonnerre as $fighter) {
                    
                    // si le combattant a plus de 0 hp
                    if(($fighter->hp > 0)) {
                        
                        // selectionne le combattant dans l'array $domeDuTonnerre par sa key
                        if (($key = array_search($fighter, $domeDuTonnerre)) !== false) {
            
                            // il s'exclut lui même de son choix de cibles
                            $choosingTargetArray = $domeDuTonnerre;
                            unset($choosingTargetArray[$key]);
            
                            // selectionne joueur cible aléatoire
                            $getRandomTarget = array_rand($choosingTargetArray);
                            $randomTarget = $choosingTargetArray[$getRandomTarget];

                            // joueur attaque
                            $fighter->attack($randomTarget);

                            // si la cible est morte
                            // KICK DE L'ARENE
                            if ($randomTarget->hp < 0) {

                                // selectionne la cible dans l'array $domeDuTonnerre par sa key
                                if (($key = array_search($randomTarget, $domeDuTonnerre)) !== false) {

                                    // kick de l'arène si la cible a des hp inférieurs à 0
                                    unset($domeDuTonnerre[$key]);
                                    
                                    // echo du kick
                                    echo "<p>$randomTarget->name is kicked from the arena</p> <br>";
                                    
                                    // var_dump($domeDuTonnerre);
                                    // réassigne la bonne valeur au nombre de combattants dans l'arène
                                    $fightersInArena = count($domeDuTonnerre);
                                }
                            }
                        }
                    }
                }   
            }

        } 


        // at this point, only one fighter remains in the arena
        // getting winner value
        // getting first element of array arena
        $winner = array_shift($domeDuTonnerre);
        echo "END OF DUEL !!! $winner->name wins !";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

echo "<br><br><br><br><br><br>";


// Partie 2, combat à plusieurs

$gameEngine->addCombattant($players);
$gameEngine->addCombattant($CARAMEL);

// var_dump($gameEngine);

$gameEngine->start();
$gameEngine->getId();



?>







    
</body>
</html>