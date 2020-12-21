import {useState} from 'react';

function Home() {
   return <div>
       <h1>Home 3^C</h1>
       <Contador/>
   </div>
}
export default Home
function Contador(){
    const [contador,setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }
    return(
        <div> 
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}