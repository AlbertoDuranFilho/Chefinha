import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

export function Love(){
    useEffect(() => {
        Aos.init({duration:1200})
      })
    return (
        <>
            <div className="bg-img-second bg-no-repeat bg-cover bg-fixed w-screen h-screen flex items-center justify-center">
                <h1 className="text-5xl text-white font-inter text-center content-around p-11" data-aos="fade-down-right">
                 
                <i>"Se tu vens por exemplo, às quatro da tarde, desde as três eu começarei a ser feliz. 
                  Quanto mais a hora for chegando, mais me sentirei feliz. 
                  Às quatro horas, então, estarei inquieta e agitada: descobrirei o preço da felicidade!"</i>(O Pequeno Príncipe).<br></br><br></br>

                <strong>Tantos anos que me sinto dessa forma e mesmo hoje, fico com frio na barriga e com tremedeira nas mãos para te ver, porque anseio pela tua companhia.</strong>
                </h1>
            </div>
        </>
    )
}
