import React from "react";
import styles from "@/app/styles/common.module.css";
import MovieCard from "../components/MovieCard";

const Movie = async () => { 
  await new Promise(resolve => setTimeout(resolve, 2000)); 

const url = process.env.RAPID_KEY;

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1e2867e353msh7c4d993cc5c0ff5p183539jsn69df6498657b',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

const res = await fetch(url, options);
const data = await res.json();
const main_data = data.titles;
  return (
    <>
    <section className={styles.movieSection}>
      <div className={styles.container}>
       <h1>Series & Movies</h1>
       <div className={styles.card_section}>
        {
          main_data.map((curElem)=>{
              return <MovieCard key ={curElem.id} {...curElem }/>
          })
        }
        </div>
      </div>
    </section>
      
      
    </>
  );
}
 export default Movie;