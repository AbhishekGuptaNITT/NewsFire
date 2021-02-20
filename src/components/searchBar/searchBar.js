import React from 'react'
import {Form,Button} from 'react-bootstrap'
const searchBar = (props) => {
    const searchKey = () => {
        const tag = document.getElementById('tag').value
        props.search(tag)
    }
    let form = (
        <Form style={{padding:'15px',boxShadow:'2px 2px 3px grey',margin:'15px'}} className='bg-light'>
            <Form.Group controlId="searchbar">
                <Form.Label>Search News</Form.Label>
                <Form.Control type="text" placeholder="India, headlines, news today..." autoFocus id='tag'/>
                <Form.Text className="text-muted">
                    we never save what you search
                </Form.Text>
            </Form.Group>

            <Button variant="info" type="button" onClick={searchKey}>
                Search NewsFire
            </Button>
        </Form>
    )
    if(!props.show)
        form=<Button onClick={props.showBar} className='btn-lg mt-4 mb-4 btn btn-primary' style={{width:'50%',margin:'auto',display:'block'}} >SEARCH AGAIN</Button>
    return(
     <div>
         {form}
     </div>
    )
}

export default searchBar