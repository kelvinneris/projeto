import Colaborador from "../Colaborador"
import './Time.css'

function Time(props){
    return(
        (props.colaboradores.length > 0) && <section className="time" >
            <h3 style={{borderColor: props.corPrimaria}} >{props.nome}</h3>
            <div className='colaboradores'>
                 {props.colaboradores.map(colaborador =><Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} email={colaborador.email} imagem={colaborador.imagem}/>)}
            </div>
        </section>
        
    )
}

export default Time
