import React from 'react'

export const TiposBasicos = () => {

const nombre: string = 'Manuel';
const edad: number = 37;
const estaActivo: Boolean = true;
const poderes: string[] = ['Super Velocidad', 'Volar', 'Respirar en el agua'];


  return (
    <div>
        <h3>Tipos Basicos</h3>
        { nombre } tiene { edad } años  
        <br />
        Estatus: { estaActivo ? 'Activado' : 'Desactivado' }
        <br />
        Poderes: { poderes.join(", ") }

    </div>
  )
}
