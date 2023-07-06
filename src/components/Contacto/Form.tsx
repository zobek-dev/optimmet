import { useState } from "react";

export const Form = ({handler, isLoading, isSent, hasError}:any)=>{
  const [formState, setFormState] = useState({})

  const handleFieldChange = (field:any, e:any) => {
    setFormState({
      ...formState,
      [field]: e.target.value,
    })
  }

  const handleFormSubmit = (e:any) => {
    handler(e, formState)
  }
  return(
    <>
      <form onSubmit={handleFormSubmit}>
        {/* <div>isLoading: {isLoading ? "Loading" : "false"}</div>
        <div>isSent: {isSent ? "Sent" : "false"}</div>
        <div>Error: {hasError || "null"}</div> */}

        <div className="block [&>input]:block [&>input]:w-full [&>input]:mb-5 [&>input]:border [&>input]:border-[#62CFF4] [&>input]:rounded-3xl [&>input]:py-2 [&>input]:px-4 [&>input]:placeholder:italic outline-[#C7E22B]">

          <input onChange={(e) => handleFieldChange("your-name", e)} type="text" placeholder="Nombre"/>

          <input onChange={(e) => handleFieldChange("your-email", e)} type="email" placeholder="Email"/>

          <input onChange={(e) => handleFieldChange("tel-201", e)} type="text" placeholder="Teléfono"/>

          <input onChange={(e) => handleFieldChange("your-subject", e)} type="text" placeholder="Asunto"/>

          <textarea onChange={(e) => handleFieldChange("your-message", e)} placeholder="Mensaje" rows={6} className="block w-full mb-3 border border-[#62CFF4] rounded-2xl py-2 px-4 placeholder:italic"></textarea>

        </div>

        { hasError && (<span className="block text-xs text-red-700">{hasError}</span>)}

        { isSent && (<span className="block text-xs text-green-300">{isSent}</span>)}

        <button type="submit" className="block float-right bg-white text-current border py-2 px-8 border-[#C7E22B] rounded-3xl transition-colors duration-200 ease-in-out hover:bg-[#C7E22B] hover:text-[white] mt-3">
          { isLoading ? 'Enviando..': 'Enviar' }
        </button>
      </form>
    </> 
  )
}