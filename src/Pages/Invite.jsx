import React, { useEffect, useState } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

export function Invite(){
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        Aos.init({duration:1200})
      })
    return (
        <>
            <div className=" bg-slate-950 bg-fixed w-screen h-screen flex justify-center items-center">
                <img className="opacity-80 h-screen" src="/assets/pasta.jpg" alt="" data-aos="fade-right"/>
                <div className="text-white text-center h-screen ml-10 flex flex-col justify-center p-10" data-aos="fade-left">
                    <p className=" font-inter text-lg w-96 mb-8 text-justify">Combinamos que íamos devagar, que vamos curtir todos os momentos, se (re)conhecer de um novo jeito, 
                        mas a verdade é que a intimidade e a leveza que temos um com outro, não é algo que uma só vida é possível ter. 
                        Não sei o que fomos em vidas passadas, mas sei que o amor estava lá também, 
                        assim como vai estar para sempre em nossas almas. 
                    </p>
                    <h1 className=" font-dancing-script text-5xl font-bold mb-4">Quer sair comigo?</h1>
                    <p className="font-inter" >06 de Julho de 2024 às 19:30</p>
                    <p className=" font-inter text-xl mt-14">
                        <strong>Trattoria de origem</strong><br></br>
                        Restaurante Italiano<span>🍝</span><br></br>
                        Av. Sapé 501, Manaíra
                    </p>
                    <div className="flex items-center justify-between mt-20 font-inter ">
                        <button className="w-44 h-14 font-bold bg-emerald-500 rounded-3xl shadow hover:bg-emerald-800 hover:transition hover:ease-in-out hover:scale-110" onClick={() => setShowModal(true)}>SIM!</button>
                        <button className="w-44 h-14 font-bold bg-red-500 rounded-3xl shadow hover:bg-red-800 hover:transition hover:scale-110" onClick={() => setShowModal(true)}>COM CERTEZA!!</button>
                    </div>
                </div>
            </div>

            {showModal ? (
              <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 ">
                      <button
                        className=" bg-transparent rounded-3xl p-1 ml-auto text-center border-0 float-right leading-none font-semibold outline-none focus:outline-none "
                        onClick={() => setShowModal(false)}
                      >
                        <span className=" text-black justify-center h-6 w-6 text-xl block outline-none focus:outline-none hover:transition-all hover:text-red-900">
                          X
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <img className="w-80" src="../src/assets/meme-1.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
            ): null}
        </>
    )
}
