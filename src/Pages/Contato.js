import React, { useState, useEffect } from 'react';
import Form from '../Components/Form';

export default function Contato() {

    const [comentarios, setComentarios] = useState([]);

    function getComentario() {
        async function showComentarios() {
            const url = "http://localhost:3001/comentarios";
            const resposta = await fetch(url);
            const resultado = await resposta.json();
            setComentarios(resultado);

        }
        showComentarios();
    }

    useEffect(() => { getComentario() }, []);

    useEffect(() => { }, [comentarios]);

    return (
        <div className="container-fluid">
            <h3 className="text-white">Products</h3>

            <h2>Contacts</h2>
            <hr />
            <div className="container">

                <div className="row container-fluid">

                    <div className="col-6 ">
                        
                        <font>contact@fullstackmusic.com</font>

                    </div>
                    <div className="col-6">
                        
                        <font>999-9999</font>
                    </div>

                </div>
            </div>

            <Form />

            <div className="text-white">
                <div className="col-sm-9">
                    {comentarios.map(
                        row =>  <div className="text-dark" key={row.id}>    
                                Usuário: {row.nome} 
                                <br />
                                Mensagem: {row.msg}  
                                <br />
                                Data: {row.data} 
                                <hr />
                                </div>     
                                    )
                    }
                </div>
            </div>
        </div>
    );
}