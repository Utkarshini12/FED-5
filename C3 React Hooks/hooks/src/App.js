
import './App.css';
import Counter from './concepts/State';
import {Row, Col, Button, Container, Card, CardBody} from 'reactstrap'
import {useState} from 'react'

const itemArray = new Array(9).fill("empty")
function App() {
  const [isCross, setIsCross] = useState(true)
  return (
    <div className="bg vh-100">
   <Container className='p-5'>
    <Row>
      <Col md={6} className='offset-md-3'>
        <h1 className='text-warning text-center'>
          {/* cross turn / circle turn */}
          {isCross ? "cross" : "circle"} turn
        </h1>

        <div className='grid'>
          {itemArray.map(()=> (
            <Card color="warning">
              <CardBody className='box'>
                X
              </CardBody>

            </Card>
          ))}
       

        </div>

      </Col>
    </Row>
   </Container>
          </div>

  );
}

export default App;
