<?php
class Conf {
   
    // Attributes

    static private $databases = array(
      
      // serveur 
      'hostname' => 'a_remplir',
     
      // Nom de la bdd
      'database' => 'a_remplir',
     
      // Utilisateur ('root' par défault)
      'login' => 'a_remplir',
      
      // Mot de passe
      'password' => 'a_remplir'
    );
     
    

    // Methods

    static public function getLogin() {
  
          return self::$databases['login'];
    }



    static public function getHostname() {
  
          return self::$databases['hostname'];
    }


    static public function getDatabase() {
  
          return self::$databases['database'];
    }


    static public function getPassword() {
  
          return self::$databases['password'];
    }

     
  }



    // $conf = new Conf;
    
    // echo $conf::getPassword();


?>