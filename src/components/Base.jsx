import {Button, Container} from 'react-bootstrap'
import Footer from './Footer'

const Base = ({title="Page Tile" , description="This is Dynamic Store" ,buttonEnabled=false ,buttonText="Shop Now",buttonType='primary', children}) => {
  return (
    <div>
      <Container fluid className='bg-dark text-white p-5 text-center'>
        <h3 className='text-center'>{title}</h3>
        <p className='text-center'>{description && description}</p>
        { buttonEnabled && <Button variant={buttonType}>{buttonText}</Button> }
      </Container>
      {children}
      <Footer/>
    </div>
  )
}

export default Base
