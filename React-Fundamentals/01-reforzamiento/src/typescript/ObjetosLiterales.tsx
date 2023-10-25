
interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    calle: string;
    numero: number;
    ciudad: string;
    estado: string;
    pais: string;
    codigoPostal: number;
}

export const ObjetosLiterales = () => {

    const humano: Persona = {
        nombreCompleto: 'Manuel Salinas',
        edad: 37,
        direccion: {
            calle: 'Mallorca',
            numero: 130,
            ciudad: 'Leon',
            estado: 'Guanajuato',
            pais: 'Mexico',
            codigoPostal: 37400
        }
    }


  return (
    <div>
        <h3>Objetos Literales</h3>
        <br />
        <code>
            <pre>
                { JSON.stringify(humano, null, 2) }
            </pre>
        </code>
    </div>
  )
}
