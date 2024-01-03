
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componets/Header';
import ContactList from './componets/contacts/ContactList';
import Addcontact from './componets/contacts/Addcontact';
import Viewcontact from './componets/contacts/Viewcontact';
import Editcontact from './componets/contacts/Editcontact';





function App() {
  return (

    
   <>
   

   <Header/>
      <div className="App  mt-3 ">


        <Routes>
          <Route path='/' element={<Navigate to={'/contact/list'}/>}/>
          <Route path='/contact/list' element={<ContactList/>}/>
          <Route path='/contact/add' element={<Addcontact/>}/>
          {/* important   if it is to view a item with id mention the :id after a /      */}
          <Route path='/contact/view/:id' element={<Viewcontact/>}/>
          <Route path='/contact/edit/:id' element={<Editcontact/>}/>
        </Routes>

        

        
        
        
        
      </div>
   </>
  );
}

export default App;
