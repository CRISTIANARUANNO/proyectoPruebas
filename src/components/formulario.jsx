function Formulario(){
  
    const handleSubmit = (event) =>{
        event.preventDefault()
        const {busqueda} = Object.fromEntries(new window.FormData(event.target))
        console.log(busqueda)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input name="busqueda" type="text" placeholder="avengers, batman, titanic..."/>
            <button type='submit'>Buecar Peliculas</button>
        </form>
    )

}
export default Formulario