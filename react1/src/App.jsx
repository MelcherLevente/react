function Header(){
  return(
    <>
      <h1 style={{color:"red"}} >Tanulói kurzuskatalógus</h1>
      <hr />
    </>
  )
}

function StudentCard(){
  return (
    <div>
      <h1>Melcher Levente</h1>
      <h2>Programozó</h2>
      <h3>Angol</h3>
    </div>
  )
}

function Footer(){
  return <p>@ 2026 Frontend</p>
}

function StudentList(){
  return(
    <div>
      <StudentCard />
      <StudentCard />
      <StudentCard />
    </div>
  )
}

export default function App(){
  return (
    <main>
      <Header />
      <StudentList />
      <Footer />
    </main>
  )
}



/* export default function JS(){
  return (
      <>
        <h1>Üdv react!</h1>
        <p>Ez JavaScriptből került az oldalra</p>
      </>
  )
} */

/* export default function Bemutatkozas(){
  return (
    <div>
        <h1>Melcher Levente</h1>
        <h2>13.D</h2>
        <p>JSSSSS</p>
        <p><b>Hobbi</b></p>
    </div>
  )
} */