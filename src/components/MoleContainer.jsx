import { useState } from "react"
import Mole from "./Mole"
import Empty from "./Empty"

export default function MoleContainer({ setScore, score }) {
    const [isShowing, SetIsShowing] = useState(false);

    const onMoleClick = e => {
        if (isShowing) {
            setScore(score + 1)
            SetIsShowing(false)
        }
    }
    return (
        <dinv className="mole-container">
            {
                isShowing ?
                    <Mole SetIsShowing={SetIsShowing} onMoleClick={onMoleClick} />
                    :
                    <Empty SetIsShowing={SetIsShowing} />
            }
        </dinv>
    )
}