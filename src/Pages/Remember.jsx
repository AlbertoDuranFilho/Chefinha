import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

export function Remember(){
    useEffect(() => {
        Aos.init({duration:1200})
      })
    return (
        <>
            <div className="bg-slate-950 bg-no-repeat bg-cover bg-fixed w-screen h-screen flex items-center justify-center">
                <div className="ml-10 space-y-10" data-aos="fade-up-right">
                    <img className=" w-72 opacity-80" src="/assets/pola-1.png" alt="" />
                    <img className=" w-72 opacity-80" src="/assets/pola-2.png" alt="" />
                </div>

                <div className="max-w-96 mx-8" >
                    <h1 className=" p-3 text-2xl text-white font-inter font-bold text-center content-around">
                        São tantas memorias, antigas e novas. 
                        Tantas lembranças, e todas boas, mesmo as de aperreio e lapada kkkkkkkkkkk.
                        Estamos vivendo uma fase nova, tão sonhada por mim e posso falar com tranquilidade, que vamos viver muitos momentos inesquecíveis.
                        Que essas imagens nos lembre desses momentos felizes juntos e que possamos viver muito mais.   
                    </h1>
                </div>

                <div className="mr-10 space-y-10" data-aos="fade-up-left">
                    <img className=" w-72 opacity-80" src="/assets/pola-3.png" alt="" />
                    <img className=" w-72 opacity-80" src="/assets/pola-4.png" alt="" />
                </div>

            </div>
        </>
    )
}
