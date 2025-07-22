'use client'

import NavBar from "./modules/navbar"

function writeTodoToBrowserData() {

  localStorage.setItem('todo', "ligma")
  console.log(localStorage.getItem('todo'))

}

export default function Home() {
  return (
    <>
      {/* Der äußere Container sollte die volle Höhe des Viewports einnehmen */}
      <div className="container flex flex-col min-h-screen">
          <nav>
            <NavBar></NavBar>
          </nav>
          {/* Der main-Bereich nimmt den verbleibenden Platz ein und wird zum Flex-Container zum Zentrieren */}
          <main className="flex flex-grow items-center justify-center">
            {/* Dieser Div ist jetzt der tatsächliche "zentrierte" Container.
                Er hat keine 100vh/100vw mehr, sondern eine feste oder relative Größe. */}
            <div className="maincontainer border-2 p-8 bg-white shadow-lg rounded-lg max-w-md w-full"> {/* Beispiel: Max-Breite, Padding, Hintergrund */}
              <div className="header text-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Enter your TODO: </h1>
              </div>
              <div className="input">
                <input
                  type="text"
                  placeholder="Deine Aufgabe hier..."
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button onClick={writeTodoToBrowserData} className="p-4 border-2 hover:p" >Submit</button>
              </div>
            </div>
          </main>
      </div>
    </>
  )
}