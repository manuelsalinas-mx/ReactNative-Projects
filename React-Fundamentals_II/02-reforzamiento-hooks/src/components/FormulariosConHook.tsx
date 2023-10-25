import { useFormulario } from "../hooks/useFormulario"


export const FormulariosConHook = () => {
    const { formulario, email, password, onChange} = useFormulario({
        email: 'test@mail.com',
        password: '12345'
    })

  return (
    <>
        <h2>Formularios con Hook</h2>
        <input 
        type="text" 
        className="form-control"
        placeholder="email"
        value={ email}
        onChange={ ( { target} ) =>  onChange(target.value, 'email') }
        />

<input 
        type="password" 
        className="form-control mt-2 mb-2"
        placeholder="password"
        value={ password}
        onChange={ ( { target } ) =>  onChange(target.value, 'password') }
        />

        <code>
            <pre> { JSON.stringify(formulario, null, 2) } </pre>
        </code>
    </>
  )
}
