import React from 'react'
import styles from "@/app/styles/common.module.css";
import Image from 'next/image';

export const Page = async ({params}) => {
  const id = params.id;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1e2867e353msh7c4d993cc5c0ff5p183539jsn69df6498657b',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

const res = await fetch(url, options);
const data = await res.json();
const main_data = data[0].details;

  return (
    <div className={styles.container}>
      <h2 className={styles.movie_title}> Netflix \ <span>{main_data.type}</span></h2>
            <div className={styles.card_section}>
              <div>
                <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300} />
                </div>
            </div>
            <div>
                <h2>{main_data.title}</h2>
                <p>{main_data.synopsis}</p>                
            </div>
        </div>
  )
}
export default Page;