
import './App.css';
import Counter from './concepts/State';
import {Row, Col, Button, Container, Card, CardBody} from 'reactstrap'
import {ToastContainer, toast} from 'react-toastify'
import {useState} from 'react'
import Icon from './components/Icon';

const itemArray = new Array(9).fill("empty")
function App() {
  const [isCross, setIsCross] = useState(true);
  const [winMessage, setWinMessage] = useState("")


  // -> reloadGame --> set all state values to their initial state 

  const reloadGame = () => {
    setIsCross(true); 
    setWinMessage(""); 
    itemArray.fill("empty", 0, 8); 

  }



  /*
  // CHECK THE WINNER
-> horizontal lines with same icon--> 0,1,2  3,4,5  6,7,8
-> vertical lines with same icon -->  0,3,6  1,4,7  2,5,8
-> diagonal lines wth same icon -->   0,4,8  2,4,6
-> true -> declare the winner  --> winMessage
  */


const checkIsWinner =() => {

  if(
    itemArray[0] === itemArray[1] && itemArray[1] === itemArray[2] && itemArray[2] !== "empty"
  ) {
      setWinMessage(`${itemArray[0]} won!`)
  } else if( itemArray[3] === itemArray[4] && itemArray[4] === itemArray[5] && itemArray[3] !== "empty") {
    setWinMessage(`${itemArray[3]} won!`)
  }


}


  /*
  // CHANGEITEM  --> index 
-> box should be empty 
    -> cross / circle turn 
-> not empty 
    -> alert "already filled" 
-> checkWinner
  */




// box 7 
const changeItem = itemNumber => {

  if(itemArray[itemNumber] === "empty") {
    // this is telling us that whose turn it is 
      itemArray[itemNumber] = isCross ? "cross" : "circle"
      // switching the turns 
      setIsCross(!isCross);
  } else {
    return toast("already filled" , {type: "error"})
  }

  checkIsWinner()

} 


  return (
    <div className="bg vh-100">
      <ToastContainer position='bottom-center' />

    
    
    
      
   <Container className='p-5'>
    <Row>
      <Col md={6} className='offset-md-3'>
      {winMessage ? (
          <div className='text-center m-3'>
           <h1 className='text-success text-center'>{winMessage}</h1>
         <Button color="success" className='text-center' onClick={reloadGame}>Reload the Game</Button>
          </div>
      ) : (
        <h1 className='text-warning text-center'>
        {/* cross turn / circle turn */}
        {isCross ? "cross" : "circle"} turn
      </h1>
      )}
       

        <div className='grid'>
          {itemArray.map((item, index)=> (
            <Card color="warning" key={index} onClick={()=> changeItem(index)}>
              <CardBody className='box'>
                <Icon name={item} />
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


// Turns --> state value --> isCross

/*




*/


