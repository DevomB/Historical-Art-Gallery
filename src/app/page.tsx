import Image from "next/image";



export default function Home() {
  return (



    <div className="card w-64 bg-base-100 shadow-xl">

      <figure><Image src="/Gothic--Portal-of-the-Chartes-Cathedral.jpg" alt="The Chartes Cathedral" width={184} height={128}/></figure>
      <div className="card-body">
        <h2 className="card-title text-center">The Chartes Cathedral</h2>
        <p className="text-center">The Chartes Cathedral was the destination of a pilgrimage dedicated to the Virgin Mary, among the most popular in all medieval Western Christianity.</p>
        <br/>
        <div className="card-actions self-center">
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>

      <figure><Image src="/Gothic--The-Virgin-and-the-Child-Enthroned.jpg" alt="The Virgin and Child Enthroned" width={184} height={128} /></figure>
      <div className="card-body">
        <h2 className="card-title text-center">The Virgin and Child Enthroned</h2>
        <p className="text-center" >This represents a complex, medieval theological notion known as a Sedes Sapientiae (Throne of Wisdom), in which Mary serves as a throne for Christ, who in turn embodies divine wisdom</p>
        <br/>
        <div className="card-actions self-center">
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>

      <figure><Image src="/Ren--Mona-Lisa.jpg" alt="The Mona Lisa" width={184} height={128} /></figure>
      <div className="card-body">
        <h2 className="card-title text-center">The Virgin and Child Enthroned</h2>
        <p className="text-center" >The Mona Lisa, also known as the Joconde, is an important painting in art history as it is an important key to understand the evolution of the art of the portrait during the Italian Renaissance.</p>
        <br/>
        <div className="card-actions self-center">
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>

      <figure><Image src="/Ren-Van-Eyke-and-his-Bride.jpg" alt="Arnolfini Portrait" width={184} height={128} /></figure>
      <div className="card-body">
        <h2 className="card-title text-center">The Virgin and Child Enthroned</h2>
        <p className="text-center" >The painting features an Italian merchant couple in 15th-century Bruges, showcasing their wealth and status.</p>
        <br/>
        <div className="card-actions self-center">
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>

      <figure><Image src="/Bar--Girl-w-a-pearl.jpg" alt="Arnolfini Portrait" width={184} height={128} /></figure>
      <div className="card-body ">
        <h2 className="card-title text-center">Girl with a Pearl Earing</h2>
        <p className="text-center" >The painting's enduring appeal has cemented its place in art history as a masterpiece of the Dutch Golden Age..</p>
        <br/>
        <div className="card-actions self-center">
          <button className="btn btn-primary" >Learn More</button>
        </div>
      </div>

    </div>
  );
}
