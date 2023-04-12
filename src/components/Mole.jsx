import { useEffect } from "react"
import mole from "../embedded/mole.png"


const RAND_DEFAULT = 5000
const RAND_MINIMUM = 2000

export default function Mole({ onMoleClick, SetIsShowing }) {
    useEffect(() => {
        let randMills = Math.ceil(Math.random() * RAND_DEFAULT + RAND_MINIMUM)
        let timer = setTimeout(() => {
            SetIsShowing(false)
        }, randMills)
        return () => clearTimeout(timer)
    })



    return (<div>
        <img

            style={{ 'Width': "30vw" }}
            src={mole}
            onClick={onMoleClick}
        />
    </div>
    )

}