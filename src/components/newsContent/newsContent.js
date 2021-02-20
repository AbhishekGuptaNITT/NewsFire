import React from 'react'
import { CardDeck,Card,CardColumns,Media, Jumbotron } from 'react-bootstrap'

const newsContent = (props) => {
    let cards = null
    if(props.data){
            cards = props.data.map((val,ind) => {
            return (
                <Media style={{margin:'10px 0px',boxShadow:'2px 2px 3px lightgrey',padding:'10px 20px'}} href='#'>
                    <img
                        width={80}
                        height={80}
                        className="mr-3"
                        src={val.image.thumbnail.contentUrl}
                        alt="image load fail"
                    />
                    <Media.Body>
                        <h5>{val.name}</h5>
                        <p>
                            {val.description}
                        </p>
                    </Media.Body>
                </Media>
            )
        })
    }
    return(
        <div className='bg-light text-secondary m-4 newscontent'>
            {cards}
        </div>
    )
}

export default newsContent