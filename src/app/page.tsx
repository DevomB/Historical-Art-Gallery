import Image from "next/image";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <br/>
      <h1 className="text-7xl font-bold text-center text-purple-600 mb-8 tracking-wide shadow-lg">Historical Art Gallery</h1>

      <h2 className="text-5xl font-bold text-center text-purple-600 mb-8 tracking-wide shadow-lg">European Art</h2>

      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <Image src="/Gothic--Portal-of-the-Chartes-Cathedral.jpg" alt="The Chartes Cathedral" width={184} height={128}/>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">The Chartes Cathedral</h2>
              <p className="text-center">The Chartes Cathedral was the destination of a pilgrimage dedicated to the Virgin Mary, among the most popular in all medieval Western Christianity.</p>
              <div className="card-actions self-center">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <Image src="/Gothic--The-Virgin-and-the-Child-Enthroned.jpg" alt="The Virgin and Child Enthroned" width={184} height={128}/>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">The Virgin and Child Enthroned</h2>
              <p className="text-center">This represents a complex, medieval theological notion known as a Sedes Sapientiae (Throne of Wisdom), in which Mary serves as a throne for Christ, who in turn embodies divine wisdom</p>
              <div className="card-actions self-center">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <Image src="/Ren--Mona-Lisa.jpg" alt="The Mona Lisa" width={184} height={128}/>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">Mona Lisa</h2>
              <p className="text-center">The Mona Lisa, also known as the Joconde, is an important painting in art history as it is an important key to understand the evolution of the art of the portrait during the Italian Renaissance.</p>
              <div className="card-actions self-center">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <Image src="/Ren-Van-Eyke-and-his-Bride.jpg" alt="Arnolfini Portrait" width={184} height={128}/>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">Arnolfini Portrait</h2>
              <p className="text-center">The Arnolfini Portrait, painted by Jan van Eyck in 1434, is significant for its intricate detail, symbolism, and portrayal of the merchant class. It offers insight into 15th-century life, cultural values, and artistic techniques of the Northern Renaissance.</p>
              <div className="card-actions self-center">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <Image src="/Bar--Girl-w-a-pearl.jpg" alt="Girl with a pearl earring" width={184} height={128}/>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">Girl with a Pearl Earring</h2>
              <p className="text-center">This piece has become a cultural icon, inspiring works of art across different mediums and serving as a symbol of beauty and mystery. The painting's enduring appeal has cemented its place in art history as a masterpiece of the Dutch Golden Age.</p>
              <div className="card-actions self-center">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <Image src="/Rom--Head-of-Fog.jpg" alt="Wanderer above the Sea of Fog" width={184} height={128}/>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">Wanderer above the Sea of Fog</h2>
              <p className="text-center">Romanticism was characterized by its emphasis on emotion and individualism, paganism, idealization of nature, distrust of science and industrialization. It shows a man confronting the vastness of nature and ultimately God.</p>
              <div className="card-actions self-center">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}