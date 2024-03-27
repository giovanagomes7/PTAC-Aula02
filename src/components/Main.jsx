import { useState } from "react";

export default function Main(){
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState();
    
    const [listaContatos, setListaContatos] = useState ([]);
    
    const registrar = (event) => {
        event.preventDefault();
        alert("Olá");
        setListaContatos([...listaContatos,{
            nomeSalvo: nome,
            telefoneSalvo: telefone
        }]);
    };
    
    console.table(listaContatos);

    return(
        <main>
            <form action="" onSubmit={registrar}>
                <label htmlFor="nome">nome</label>
                <input type="text" name="" id="nome" onChange={(event)=> setNome(event.target.value)}/> 
               
                <label htmlFor="telefone">telefone</label>   
                <input type="text" name="" id="telefone" onChange={(event) => setTelefone (event.target.value)}/>
                <button>Enviar</button>
                
            {nome}
            {telefone}
       </form>
        
        </main>
    )
}