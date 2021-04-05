import React from 'react'

const Book = ({ img, title, author }) => {
    // console.log(props)
    const clickHandler = (name = "Akshay") => {
        alert(`Hello ${name}`);
    }
    return (
        <article className='book' onMouseOver={() => console.log(`Hovered over: ${title}`)}>

            <img src={img} alt="Book" />
            <h1>{title} </h1>
            <h4 >{author}</h4>
            <button type="button" onClick={clickHandler}>ClickMe</button>
            <button type="button" onClick={() => clickHandler("Akshay")}>SaymyName</button>
            {/* If we need to pass args */}


        </article>

    );
}

export default Book;
