import React from "react";
import style from './Main.module.css'
import { Link } from "react-router-dom";

function Main(){
    return (
        <div className={style.main}>
           
            <div className={style.tagline_sec}> 
                <h1 className={style.tagline}>
                Step into your soul
            </h1>
            <p className={style.punchline}><b>E</b>xperience the perfect fusion of tradition and innovation designed to elevate your style with every moment of your journey</p>
        <div className={style.signbtn}>
        <Link to="login"><button className={`${style.btns} ${style.login}`}>login</button></Link>
        <Link to="signup"><button className={`${style.btns} ${style.sign}`}>Sign up</button></Link>
        </div>
            </div>
            <div className={style.pos_s}>
        <img style={{height: '-webkit-fill-available'}} src="/src/assets/p1.jpg" alt="Shoes" />
            </div>
            
        </div>
)
}
export default Main