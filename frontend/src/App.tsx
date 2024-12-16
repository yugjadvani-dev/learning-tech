import React, {useEffect, useState} from 'react'
import axios from "axios";

const App = () => {
    const [jokes, setJokes] = useState([])

    useEffect(() => {
        axios.get("/api/v1/jokes").then((res)=>{
            setJokes(res.data)
        }).catch((error)=>{
            console.log(error)
        })
    });

    return (
        <div className={"App"}>
            <p>{jokes.length}</p>

            <div>
                {jokes.map((joke)=>(
                    <div key={joke?.id}>
                        <h5>{joke?.text}</h5>
                        <p>{joke?.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default App
