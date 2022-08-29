import {useEffect, useState} from 'react'; 
import Axios from 'axios'; 
import {Container, Row, Col, Card, CardBody, CardTitle} from 'reactstrap'

function Random() {
    const [details, setDetails] = useState([]);

    // making an async request 
    const fetchDetails = async () => {
        const fetch = await Axios.get("https://randomuser.me/api/")
        console.log(fetch);

        const data = fetch.data.results[0];
        setDetails(data);

    }

    useEffect(()=> {
        fetchDetails()

    }, [])

    console.log("****", details)
    
    return (
        
        <Container fluid className='p-5 bg-primary d-flex justify-content-center'>
            <Card style={{width: "28" + 'rem'}}>
                <CardTitle tag="h3">{details.name?.title} {details.name?.first} {details.name?.last}</CardTitle>
                <hr />
                <CardBody>
                    <img src={details.picture?.large} className='rounded-circle' />
                    <div className='d-flex justify-content-center'>
                        <p className='lead fw-bolder m-1'>{details?.email}</p>
                        <p className='lead fw-bolder m-1'>{details?.gender}</p>

                    </div>
                </CardBody>
            </Card>

        </Container>
       
    )
}

export default Random;