import Banner from './components/Banner/Banner'
import Formulario from "./components/Formulario"
import Time from "./components/Time"
import { useState } from "react"


function App() {

    const times = [
        {
            nome: 'Programação',
            corPrimaria: '#57C278',
            corSegundaria: '#D9F7E9'
        },
        {
            nome: 'Front-End',
            corPrimaria: '#82CFFA',
            corSegundaria: '#EBF8FF'
        },
        {
            nome: 'Data Science',
            corPrimaria: '#A6D157',
            corSegundaria: '#F0F8E2'
        },
        {
            nome: 'Devopos',
            corPrimaria: '#E06B69',
            corSegundaria: '#FDE7E8'
        },
        {
            nome: 'Ux e Desigin',
            corPrimaria: '#DB6EBF',
            corSegundaria: '#FAE9F5'
        },
        {
            nome: 'Mobile',
            corPrimaria: '#FFBA05',
            corSegundaria: '#FFF5D9'
        }, {
            nome: 'Inovaçao e Gestão',
            corPrimaria: '#FF8A29',
            corSegundaria: '#FFEEDF'
        },
    ]

    const [colaboradores, setColaboradores] = useState([])

    const aoNovoColaboradorAdicionado = (colaborador) => {
        debugger
        setColaboradores([...colaboradores, colaborador])
    }

    return (
        <>
            <Banner />
            <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
            
        
            {times.map(time => <Time
                key={time.nome}
                nome={time.nome}
                corPrimaria={time.corPrimaria}
                corSegundaria={time.corSegundaria}
                colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            />)}
      
        </>
    )
}

export default App