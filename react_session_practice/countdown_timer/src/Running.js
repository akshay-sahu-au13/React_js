import React from 'react'

export default function Running({message}) {
    return (
        <section>
            <h4 style={{'text-decoration':'underline', 'margin-bottom': "1rem"}}>Message from Message Component</h4>
            <h2>{message}</h2>

        </section>   )
}
