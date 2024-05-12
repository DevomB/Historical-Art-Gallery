import Image from "next/image";

export default function Home() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl flex">
      <figure><Image src="https://github.com/DevomB/Historical-Art-Gallery/blob/main/public/Gothic--Portal-of-the-Chartes-Cathedral.jpg" alt="The Chartes Cathedral" width="96" height="128"/></figure>
      <div className="card-body">
        <h2 className="card-title">The Chartes Cathedral</h2>
        <p>The Chartes Cathedral was the destination of a pilgrimage dedicated to the Virgin Mary, among the most popular in all medieval Western Christianity.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>

      
      <figure><Image src="/public\Gothic--The-Virgin-and-the-Child-Enthroned.jpg" alt="The Virgin and Child Enthroned" width="96" height="128"/></figure>
      <div className="card-body">
        <h2 className="card-title">The Virgin and Child Enthroned</h2>
        <p>This represents a complex, medieval theological notion known as a Sedes Sapientiae (Throne of Wisdom), in which Mary serves as a throne for Christ, who in turn embodies divine wisdom</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>

    
  );
}
