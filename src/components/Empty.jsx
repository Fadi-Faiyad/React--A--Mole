import { useEffect } from "react"
import molehill from "../embedded/molehill.png"


const RAND_DEFAULT = 5000
const RAND_MINIMUM = 2000


export default function Empty({ SetIsShowing }) {
    useEffect(() => {
        let randMills = Math.ceil(Math.random() * RAND_DEFAULT + RAND_MINIMUM)
        let timer = setTimeout(() => {
            SetIsShowing(true)
        }, randMills)
        return () => clearTimeout(timer)
    })



    return (<div>
        <img
            style={{ 'Width': "30vw" }}
            src={molehill}
        />
    </div>
    )
}