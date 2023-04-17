
import React from "react"

import Card from "./Card"

export default props => {
    const min=props.min
    const max= props.max

    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return (
        <Card title="Sorteio d eum Numero" purple>
            <div>
                <span>
                    <span>Resultado :</span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>
    )
}