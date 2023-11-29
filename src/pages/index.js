import React from 'react'
import Base from '../components/Base'
import { Button} from 'react-bootstrap'
import {toast} from 'react-toastify'
import axios from 'axios'


function Index() {
  const getDataFromServer = ()=>{
    toast.info('Geting Data From Server',
    {
      position: "top-center"
    }
    );
    axios.get("https://jsonplaceholder.typicode.com/posts").then((data)=>{
      console.log(data.data);
      toast.success("Reuest Success")
    }).catch((error)=>{
      console.log(error);
      toast.error("Somthing is Went Worng")
    })
  }

  function showSuccessToast(){
    toast.success("Yes You Can Access",
    {
      position: "top-center"
    }
    )
  }
  return (
    <Base title='Welcom To Our Shop' description='This is Shoping Website. ' buttonEnabled={true} buttonText='Shop Now' buttonType='primary'>
      <h1>Working On Home Page</h1>
      <Button variant='success' onClick={showSuccessToast}>Toastify Example</Button><br /><br />
      <Button onClick={getDataFromServer}>Get Data From Fack API</Button>
    </Base>
  )
}

export default Index
