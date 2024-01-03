import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { addContact } from '../../service/allapi'


import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';




function Addcontact() {

  const [createContact, setcreateContact] = useState({
    id: "", name: "", number: "", email: "", imageurl: "", batch: ""
  })

  const setInput = (e) => {
    // console.log(e.target.value);

    // this will identify that the data is from which input
    const { name, value } = e.target

    setcreateContact({ ...createContact, [name]: value })




  }
  console.log(createContact);


  // button

  const handleCreate = async () => {
    // destructuring
    const { id, name, number, email, imageurl, batch } = createContact

    if (!id || !name || !number || !email || !imageurl || !batch) {
      // toast.warn
      toast.warn('pls fill the form completely',{
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
    }
    else {
      const response = await addContact(createContact)
      console.log(response);

      if (response.status >= 200 && response.status < 300) {
        console.log(response.data);
        // toast.success('New contact Added successfully',{
        //   position: "top-right",
        //   autoClose: 2000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        // })
        alert('New contact Added successfully')
        // return <Navigate to={"/contact/list"} />;

        // Navigate("/contact/list",{replce:true})
        window.location.href='/'

      }
      else {
        

        alert('pls provide a unique Id')
      }
    }

  }



  return (
    <>
      <section className='add-contact'>

        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4">Create Contact</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus optio rem laudantium possimus accusamus facilis, delectus quaerat vel? Mollitia dignissimos tenetur quasi quis provident libero! Ab tempora amet cupiditate eaque.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <form >
                <div className="mb-2">
                  <input type="text" className='form-control' name='id' placeholder='Id' onChange={setInput} />
                </div>
                <div className="mb-2">
                  <input type="text" className='form-control' name='name' placeholder='Name' onChange={setInput} />
                </div>

                <div className="mb-2">
                  <input type="number" className='form-control' name='number' placeholder='Mobile Number' onChange={setInput} />
                </div>
                <div className="mb-2">
                  <input type="email" className='form-control' name='email' placeholder='email' onChange={setInput} />
                </div>
                <div className="mb-2">
                  <input type="text" className='form-control' name='imageurl' placeholder='Photo url' onChange={setInput} />
                </div>
                <div className="mb-2">
                  <input type="text" className='form-control' name='batch' placeholder='Batch' onChange={setInput} />
                </div>
                <div className="mb-2">
                  <input type="button" className='btn btn-success' value='Create' onClick={handleCreate} />
                  <Link to={'/contact/list'} className='btn btn-dark ms-2'>Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>

      </section>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />



    </>
  )
}

export default Addcontact