import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { viewSinglecontact } from '../../service/allapi'



function Viewcontact() {

  const { id } = useParams()

  const [contactDetails, setcontactDetails] = useState({})

  useEffect(() => {
    if (id) {
      viewSinglecontact(id)
        .then(response => {
          console.log('Fetched contact details:', response.data);
          setcontactDetails(response.data);
        })
        .catch(error => {
          console.error('Error in fetching contact details', error);
        });
    }
  }, [id]);






  return (
    <>


      <section className='veiw-contact'>
        <div className="row">
          <div className="col">
            <p className="h3 fw-bold"> View Contact </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aspernatur nihil dignissimos sapiente ullam doloremque! Iste, facilis provident, aut veritatis, accusamus omnis molestiae nemo vel est perferendis esse corporis iusto!</p>
          </div>
        </div>
      </section>
      <section className='view-contact mt-3'>
        <div className="container">

          {contactDetails ? (


            <div className="row">
              <div className="col-md-4">
                <img src={contactDetails.imageurl} alt=".." className='contact-img' />
              </div>
              <div className="col-md-8">
                <ul
                  className='list-group'>
                  <li className='list-group-item list-group-item-action'>
                    Id : <span className='fw-bold'> {contactDetails.id}</span>
                  </li>
                  <li className='list-group-item list-group-item-action'>
                    Name : <span className='fw-bold'> {contactDetails.name}</span>
                  </li>
                  <li className='list-group-item list-group-item-action'>
                    Mobile : <span className='fw-bold'> {contactDetails.number}</span>
                  </li>
                  <li className='list-group-item list-group-item-action'>
                    Email : <span className='fw-bold'> {contactDetails.email}</span>
                  </li>
                  <li className='list-group-item list-group-item-action'>
                    Batch : <span className='fw-bold'> {contactDetails.batch}</span>
                  </li>

                </ul>


              </div>
            </div>

          ) : (
            <p>Loading...</p>
          )}












          <div className="row">
            <div className="col">
              <Link to={'/contact/list'} className='btn btn-warning'>Back</Link>
            </div>
          </div>

        </div>
      </section>

    </>
  )
}

export default Viewcontact