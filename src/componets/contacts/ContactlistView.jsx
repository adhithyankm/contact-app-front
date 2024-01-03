import React, { useEffect, useState } from 'react'
import { Edit2, Eye, Trash2, } from 'react-feather'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { deleteContact, getContact, } from '../../service/allapi'









function ContactlistView({searchQuery}) {

  const [allContacts, setallContacts] = useState([])

  const getallContacts = async () => {
    let response = await getContact()

    // console.log(response);
    setallContacts(response.data)


  }

  const handleDelete = (id) => {
    deleteContact(id)
      .then(() => {
        // refreshing
        getallContacts()
      })
      .catch((error) => {
        console.error("error deleting contact", error)
      })
  }

  console.log(allContacts);
  useEffect(() => {
    getallContacts()


  }, [])

  // const handleVeiw =async(id)=>{
  //   let response = await viewSinglecontact(id)
  //   console.log(response);
  // }







  return (
    <>

      <section className='contact-list'>
        <div className="list">

          <div className="row">


            {
              allContacts?.filter(
                (fullcontacts) =>
                  !searchQuery ||
                  fullcontacts.name.toLowerCase().includes(searchQuery.toLowerCase())
              ).map(fullcontacts => (





                <div className=" col-md-6 " >

                  <div className="card my-2 shadow">
                    <div className="card-body">
                      <div className="row align-items-center d-flex justify-content-around">
                        <div className="col-md-4 image-view">

                          <img src={fullcontacts.imageurl} alt=".." className='img-fluid contact-img' />

                        </div>
                        <div className="col-md-7 listview">

                          <ul
                            className='list-group'>
                            <li className='list-group-item list-group-item-action'>
                              Id : <span className='fw-bold'> {fullcontacts.id}</span>
                            </li>
                            <li className='list-group-item list-group-item-action'>
                              Name : <span className='fw-bold'> {fullcontacts.name}</span>
                            </li>
                            <li className='list-group-item list-group-item-action'>
                              Mobile : <span className='fw-bold'>{fullcontacts.number}</span>
                            </li>
                            <li className='list-group-item list-group-item-action'>
                              Email : <span className='fw-bold'> {fullcontacts.email}</span>
                            </li>
                          </ul>

                        </div>
                        <div className="col-md-1 d-flex flex-column align-items-center" >

                          <div className=' button-view'>

                            <Link to={`/contact/view/${fullcontacts.id}`} className='btn btn-warning m-1'>
                              <Eye />
                            </Link>
                            <Link to={`/contact/edit/${fullcontacts.id}`} className='btn btn-primary m-1'>
                              <Edit2 />
                            </Link>
                            <Button className='btn btn-danger m-1 ' onClick={() => handleDelete(fullcontacts.id)}>
                              <Trash2 />

                            </Button>

                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              ))


            }

          </div>
        </div>

      </section>



    </>
  )
}

export default ContactlistView