import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { editContact, viewSinglecontact } from '../../service/allapi'


function Editcontact() {

  const [contactData, setcontactData] = useState({
    id: "",
    name: "",
    number: "",
    email: "",
    imageurl: "",
    batch: ""
  })

  const { id } = useParams()
  useEffect(() => {

    // fetching details when loading

    viewSinglecontact(id)
      .then(response => {
        setcontactData(response.data)
        // console.log(response);
      })
      .catch(error => {
        console.error("error fetching Details", error)
      })



  }, [id])

  // const handleInputChange = (e, fieldName) => {
  //   const { value } = e.target
  //   setcontactData((prevData) => ({
  //     ...prevData,
  //     [fieldName]: value,
  //   }))
  //   console.log(contactData);
  // }

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
  
    setcontactData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }), () => {
      console.log(contactData); // Log the updated state in the callback
    });
  };

  // const handleSubmit=()=>{
  //   editContact(id,contactData)
  //   .then(()=>{
  //     window.location.href='/'
  //   })
  //   .catch(error=>{
  //     console.error("error fetching data",error)
  //   })
  // }

  const handleSubmit = () => {
    editContact(id, contactData)
      .then(() => {
        window.location.href = '/';
      })
      .catch((error) => {
        console.error('Error updating contact:', error);
      });
  };



  return (
    <>
      <section className='add-contact'>

        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4">Edit Contact</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus optio rem laudantium possimus accusamus facilis, delectus quaerat vel? Mollitia dignissimos tenetur quasi quis provident libero! Ab tempora amet cupiditate eaque.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <form  >
                <div className="mb-2">
                  <input
                    type="text"
                    className='form-control'
                    placeholder='Id'
                    value={contactData.id}
                    readOnly
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className='form-control'
                    placeholder='Name'
                    value={contactData.name}
                    onChange={(e)=>handleInputChange(e,"name")}

                  />
                </div>

                <div className="mb-2">
                  <input 
                  type="number"
                   className='form-control'
                    placeholder='Mobile Number'
                    value={contactData.number}
                    onChange={(e)=>handleInputChange(e,"number")}
                    />
                </div>
                <div className="mb-2">
                  <input 
                  type="email"
                   className='form-control' 
                   placeholder='email'
                   value={contactData.email}
                   onChange={(e)=>handleInputChange(e,"email")}
                   />
                </div>
                <div className="mb-2">
                  <input 
                  type="text" 
                  className='form-control'
                   placeholder='Photo url'
                   value={contactData.imageurl}
                   onChange={(e)=>handleInputChange(e,"imageurl")}
                   />
                </div>
                <div className="mb-2">
                  <input
                   type="text"
                    className='form-control'
                     placeholder='Batch'
                     value={contactData.batch}
                     onChange={(e)=>handleInputChange(e,"batch")}
                     />
                </div>
                <div className="mb-2">
                  <input type="button" className='btn btn-primary' value='Update' onClick={handleSubmit} />
                  <Link to={'/contact/list'} className='btn btn-dark ms-2'>Cancel</Link>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <img src={contactData.imageurl} alt=".." className='contact-img' />
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Editcontact