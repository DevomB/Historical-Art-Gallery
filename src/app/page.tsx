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
              <h2 className="font-semibold leading-7 text-lg gap-2 items-center text-center">The Chartes Cathedral</h2>
              <p className="text-center">The Chartes Cathedral was the destination of a pilgrimage dedicated to the Virgin Mary, among the most popular in all medieval Western Christianity.</p>
              <div className="card-actions self-center">
                <button className="btn btn-primary"><a href="https://en.wikipedia.org/wiki/Chartres_Cathedral" target="_blank" rel="noopener noreferrer">Learn More</a></button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <Image src="/Gothic--The-Virgin-and-the-Child-Enthroned.jpg" alt="The Virgin and Child Enthroned" width={184} height={128}/>
            </figure>
            <div className="card-body">
              <h2 className="font-semibold leading-7 text-lg gap-2 items-center text-center">The Virgin and Child Enthroned</h2>
              <p className="text-center">This represents a complex, medieval theological notion known as a Sedes Sapientiae (Throne of Wisdom), in which Mary serves as a throne for Christ, who in turn embodies divine wisdom</p>
              <div className="card-actions self-center">
                <button className="btn btn-primary"><a href="https://en.wikipedia.org/wiki/Virgin_and_Child_Enthroned" target="_blank" rel="noopener noreferrer">Learn More</a></button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <Image src="/Ren--Mona-Lisa.jpg" alt="The Mona Lisa" width={184} height={128}/>
            </figure>
            <div className="card-body">
              <h2 className="font-semibold leading-7 text-lg gap-2 items-center text-center">Mona Lisa</h2>
              <p className="text-center">The Mona Lisa, also known as the Joconde, is an important painting in art history as it is an important key to understand the evolution of the art of the portrait during the Italian Renaissance.</p>
              <div className="card-actions self-center">
                <button className="btn btn-primary"><a href="https://en.wikipedia.org/wiki/Mona_Lisa" target="_blank" rel="noopener noreferrer">Learn More</a></button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <Image src="/Ren-Van-Eyke-and-his-Bride.jpg" alt="Arnolfini Portrait" width={184} height={128}/>
            </figure>
            <div className="card-body">
              <h2 className="font-semibold leading-7 text-lg gap-2 items-center text-center">Arnolfini Portrait</h2>
              <p className="text-center">The Arnolfini Portrait, painted by Jan van Eyck in 1434, is significant for its intricate detail, symbolism, and portrayal of the merchant class. It offers insight into 15th-century life, cultural values, and artistic techniques of the Northern Renaissance.</p>
              <div className="card-actions self-center">
                <button className="btn btn-primary"><a href="https://en.wikipedia.org/wiki/Arnolfini_Portrait" target="_blank" rel="noopener noreferrer">Learn More</a></button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <Image src="/Bar--Girl-w-a-pearl.jpg" alt="Girl with a pearl earring" width={184} height={128}/>
            </figure>
            <div className="card-body">
              <h2 className="font-semibold leading-7 text-lg gap-2 items-center text-center">Girl with a Pearl Earring</h2>
              <p className="text-center">This piece has become a cultural icon, inspiring works of art across different mediums and serving as a symbol of beauty and mystery. The painting&apos;s enduring appeal has cemented its place in art history as a masterpiece of the Dutch Golden Age.</p>
              <div className="card-actions self-center">
                <button className="btn btn-primary"><a href="https://en.wikipedia.org/wiki/Girl_with_a_Pearl_Earring" target="_blank" rel="noopener noreferrer">Learn More</a></button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <Image src="/Rom--Head-of-Fog.jpg" alt="Wanderer above the Sea of Fog" width={184} height={128}/>
            </figure>
            <div className="card-body">
              <h2 className="font-semibold leading-7 text-lg gap-2 items-center text-center">Wanderer above the Sea of Fog</h2>
              <p className="text-center">Romanticism was characterized by its emphasis on emotion and individualism, paganism, idealization of nature, distrust of science and industrialization. It shows a man confronting the vastness of nature and ultimately God.</p>
              <div className="card-actions self-center">
                <button className="btn btn-primary"><a href="https://en.wikipedia.org/wiki/Wanderer_above_the_Sea_of_Fog" target="_blank" rel="noopener noreferrer">Learn More</a></button>
              </div>
            </div>
          </div>


        </div>
      </div>

      <br/> {/* ---------------------------------------- ROW 2 --------------------------------------------------------------------------------------------------------- */ }

      <h2 className="text-5xl font-bold text-center text-purple-600 mb-8 tracking-wide shadow-lg">African Art</h2>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <Image src="/Af--Les-Chad.jpg" alt="Les-Chad" width={400} height={128}/>
            </figure>
            <div className="card-body">
              <h2 className="font-semibold leading-7 text-lg gap-2 items-center text-center">Les Chadoufs</h2>
              <p className="text-center">ts controlled and coherent design recalls principles of the Italian Renaissance, while its iconography evokes prototypes from key periods in Egypt&apos;s long history.</p>
              <div className="card-actions self-center">
                <button className="btn btn-primary"><a href="https://www.paulfrasercollectibles.com/blogs/art-photography/the-contemporary-and-egyptian-art-collections-of-dr-mohammed-said-farsi" target="_blank" rel="noopener noreferrer">Learn More</a></button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <Image src="/Af--Suez.jpg" alt="Suez Canal" width={500} height={128}/>
            </figure>
            <div className="card-body">
              <h2 className="font-semibold leading-7 text-lg gap-2 items-center text-center">Construction of the Suez Canal</h2>
              <p className="text-center">The Suez Canal connects the Mediterranean Sea to the Red Sea, making it the shortest maritime route to Asia from Europe. Since its completion in 1869, it has become one of the world&apos;s most heavily used shipping lanes.</p>
              <div className="card-actions self-center">
                <button className="btn btn-primary"><a href="https://www.artnet.com/artists/abd-al-hadi-el-gazzar/construction-of-the-suez-canal-CFAljfKqza36L_FCzRZcbw2" target="_blank" rel="noopener noreferrer">Learn More</a></button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <Image src="/Af--Herdsmen.jpg" alt="Tassili n&apos;Ajjer" width={400} height={128}/>
            </figure>
            <div className="card-body">
              <h2 className="font-semibold leading-7 text-lg gap-2 items-center text-center">Tassili n&apos;Ajjer</h2>
              <p className="text-center">The rock art of Tassili n&apos;Ajjer, is the most eloquent expression of relationships between humans and the environment, with more than 15,000 drawings and engravings testifying to climate changes, wildlife migrations, and the evolution of humankind on the edge of the Sahara.</p>
              <div className="card-actions self-center">
                <button className="btn btn-primary"><a href="https://whc.unesco.org/en/list/179/" target="_blank" rel="noopener noreferrer">Learn More</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br/> {/* ---------------------------------------- ROW 3 --------------------------------------------------------------------------------------------------------- */ }

      <h2 className="text-5xl font-bold text-center text-purple-600 mb-8 tracking-wide shadow-lg">Asian Art</h2>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-xl flex flex-col">
            <figure>
              <Image src="/As--Shiva.jpg" alt="Shiva" width={250} height={200}/>
            </figure>
            <div className="card-body">
              <div className="text-center">
                <h2 className="font-semibold leading-7 text-lg gap-2 items-center text-center">Shiva</h2>
                <p>The statue of Shiva Nataraja signifies the universe&apos;s cycle of death and rebirth through various symbolic elements. Shiva, the Hindu god of destruction and creation, is depicted as a cosmic dancer in the statue.</p>
              </div>
              <div className="card-actions self-center">
                <button className="btn btn-primary"><a href="https://en.wikipedia.org/wiki/Shiva "target="_blank" rel="noopener noreferrer">Learn More</a></button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <Image src="/As--Wave.jpg" alt="The Great Wave" width={450} height={128}/>
            </figure>
            <div className="card-body">
              <h2 className="font-semibold leading-7 text-lg gap-2 items-center text-center">The Great Wave</h2>
              <p className="text-center">The Artist may have wished to depict a fear of and respect for the ocean with this play on perspective. Mount Fuji holds religious/sacred significance in Japan. The Great Wave is best thought of as a large, rogue wave or perhaps as a mythical event, a &quot;yarn&quot; told by sailors.</p>
              <div className="card-actions self-center">
                <button className="btn btn-primary"><a href="https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa" target="_blank" rel="noopener noreferrer">Learn More</a></button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <Image src="/As--Buddha.jpg" alt="The Great Wave" width={450} height={128}/>
            </figure>
            <div className="card-body">
              <h2 className="font-semibold leading-7 text-lg gap-2 items-center text-center">Buddha</h2>
              <p className="text-center">Not only do the statues and images of Buddha serve as physical representations or depictions of how Buddha appeared in his physical form, but they also serve as symbols of Buddha&apos;s teachings, good fortune, inner peace, and the motivating force that should be present in every human being.</p>
              <div className="card-actions self-center">
                <button className="btn btn-primary"><a href="https://en.wikipedia.org/wiki/The_Buddha" target="_blank" rel="noopener noreferrer">Learn More</a></button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}