import React from 'react'
import styles from '../AboutUs/About.module.css'
import Image from 'next/image'


function about(){
    return (
        <div className={styles.bigbox}>

            <div className={styles.boxone}>
               <Image src = "/where.svg" width={20} height ={20}  />
               <input  type='text'placeholder='Where' name=''id=''/>
            </div>

            <div className={styles.boxtwo}>
               <Image src = "/Dates.svg" width={20} height ={20}  />
               <input  type='te'placeholder='Dates' name=''id=''/>
            </div>

            <div className={styles.boxthree}>
               <Image src = "/person.svg" width={20} height ={20}  />
               <input  type='tex'placeholder='Travellers' name=''id=''/>
            </div>

            <div className={styles.boxfour}>
               <button onClick=''>GO</button>
            </div>
        
       
        </div>
    )
}

export default about