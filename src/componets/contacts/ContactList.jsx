
import React, { useState } from 'react'
import { UserPlus } from 'react-feather'
import { Link } from 'react-router-dom'
import ContactlistView from './ContactlistView'






const ContactList = () => {

  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }
  // console.log(searchQuery);





  return (
    <>

      <div className="container-fluid">
        <section className='contact-main p-3'>



          <div className="grid">
            <div className="row">
              <div className="col">
                <p className='h3'> Enter Contact Details
                  <Link to={'/contact/add'} className='btn btn-outline-success ms-4 fw-bold ' > New <UserPlus /> </Link>
                </p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iusto sequi veniam optio fugiat porro, nemo delectus sed amet error ut quam omnis ipsam tempore vero. Beatae mollitia perspiciatis qui!</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form className='row' onSubmit={(e)=>e.preventDefault()}>
                  <div className="col">
                    <div className="mb-2">
                      <input type='text' className='form-control' placeholder='Search Names' value={searchQuery}
                        onChange={handleSearch} />
                    </div>

                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <input type='submit' className='btn btn-outline-dark' value="search" />
                    </div>
                  </div>


                </form>
              </div>
            </div>

          </div>










        </section>

        <ContactlistView  searchQuery={searchQuery}/>

      </div>












    </>
  )
}

export default ContactList