<?php 
abstract class ClassConexao{

    #conexão com o banco de dados
    protected function conectaDB()
    {
        try{
            $Conn=new PDO("mysql:host=localhost;dbname=fseletro","root","");
            return $Con;
        }catch (PDOException $Erro){
            return $Erro->getMessage();
        }
    }
    }

?>