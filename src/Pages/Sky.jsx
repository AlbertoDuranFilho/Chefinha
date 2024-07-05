import React, { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'

export function Sky(){
    useEffect(() => {
        Aos.init({duration:1200})
      })
    return (
        <>
            <div className="bg-img-first bg-no-repeat bg-cover bg-fixed w-screen h-screen flex items-center justify-center">
                <h1 className=" animate-pulse text-6xl text-white font-dancing-script font-bold text-center content-around" data-aos="zoom-in">"As estrelas que ouvem e os sonhos que são atendidos".</h1>
            </div>
        </>
    )
}
