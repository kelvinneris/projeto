import './Colaborador.css'

function Colaborador ({nome, imagem, cargo, email, corDeFundo}) {
    return(<div className="colaborador ">
        <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome} />
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
            <h6>{email}</h6>
        </div>
        </div>
    )
}

export default Colaborador