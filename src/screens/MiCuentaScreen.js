import React from 'react'
import CardPerfil from '../components/cardPerfil/CardPerfil'
import FormularioMiCuenta from '../components/formularioMiCuenta/FormularioMiCuenta'
import PerfilHeader from '../components/perfilHeader/PerfilHeader'
import '../styles.css'

const MiCuentaScreen = () => {
    return (
        <div className="content__wrapper">
            <div className="row mt-4 mb-4">
                <div className="col-12">
                    <PerfilHeader/>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-8">
                    <FormularioMiCuenta/>
                </div>
                <div className="col-4">
                    <CardPerfil/>
                </div>
            </div>
        
        </div>
    )
}

export default MiCuentaScreen
