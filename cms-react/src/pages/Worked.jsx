import React, {useState, useEffect} from 'react'
import { Container, Row, Modal, Form, Button } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import Helmet from '../components/helmet/Helmet'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import {BsEyeFill, BsFillTrashFill} from "react-icons/bs"
import {MdEdit} from "react-icons/md"


const Worked = () => {
    const pathname = window.location.pathname;
    const [filterValue, setFilterValue] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [prac, setPrac] = useState('');
    const [code, setCode] = useState('');
    const [comment, setComment] = useState('');


     // hledání
     useEffect(() => {
      const handleFilter = () => {
        const value = filterValue.toLowerCase();
        const rows = Array.from(document.querySelectorAll('#myTable tr'));
  
        rows.forEach((row) => {
          const text = row.textContent.toLowerCase();
          row.style.display = text.indexOf(value) > -1 ? 'block' : 'none';
        });
      };
  
      const input = document.getElementById('myInput');
      input.addEventListener('keyup', handleFilter);
  
      return () => {
        input.removeEventListener('keyup', handleFilter);
      };
    }, [filterValue]);
  
    const handleInputChange = (event) => {
      setFilterValue(event.target.value);
    };
   // zobrazení
   const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // přidání
  const handleAddModal = () => {
    setAddModal(true);
  };

  const handleAddCloseModal = () => {
    setAddModal(false);
  };
  const handleAddSubmit = (e) => {
    e.preventDefault();
    // Zde můžete provést logiku pro odeslání dat na server
  };

  // editace
  const handleEditModal = () => {
    setEditModal(true);
  };

  const handleEditCloseModal = () => {
    setEditModal(false);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
  };



  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handlePhoneChange = (e) => {
      setPhone(e.target.value);
    };
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
    const handlePracChange = (e) => {
      setPrac(e.target.value);
    };
    const handleCommentChange = (e) => {
      setComment(e.target.value);
    };

    
  
  return (
 <Helmet title=" - Odpracované hodiny">
       <Container fluid>
    <Row>
    <Navbar/>
    <div className="dashboard">
        <Sidebar/>
       <div className='main'>
       <div className="path">
       <Link to="/nastenka">Nástěnka</Link> &gt; <span>Odpracované hodiny</span>
        </div>
        <div className="header">
        <h2>Odpracované hodiny</h2>
        </div>
        <input className="form-control mt-2" id="myInput" type="text" value={filterValue} onChange={handleInputChange} placeholder="Hledat..." />
        <br></br>
        <div id="myTable">
       <table className="table">
        <thead className="thead-dark text-center">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Jméno</th>
            <th scope="col">Příjmení</th>
            <th scope="col">Kód zaměstnance</th>
            <th scope="col">Odpracované hodiny</th>           
            <th scope="col">Akce</th>
            </tr>
        </thead>
        <tbody className='text-center'>
            <tr>
            <th scope="row">1</th>
            <td>Jan</td>
            <td>Novák</td>
            <td>125869</td>
            <td >50 h</td>
            <td>
                <div className="actions">
                <Link onClick={handleShowModal}>
                          <BsEyeFill className="icon_eye" />
                        </Link>
                    <BsFillTrashFill className='icon_trash' />
                </div>
            </td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jana</td>
            <td>Nováková</td>
            <td>145869</td>
            <td>80 h</td>
            <td>
                <div className="actions">
                <Link onClick={handleShowModal}>
                          <BsEyeFill className="icon_eye" />
                        </Link>
                    <BsFillTrashFill className='icon_trash' />
                </div>
            </td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>Petr</td>
            <td>Kadlec</td>
            <td>146987</td>
            <td>150 h</td>
            <td>
                <div className="actions">
                <Link onClick={handleShowModal}>
                          <BsEyeFill className="icon_eye" />
                        </Link>
                    <BsFillTrashFill className='icon_trash' />
                </div>
            </td>
            </tr>
            <tr>
            <th scope="row">4</th>
            <td>Petra</td>
            <td>Kadlecová</td>
            <td>596743</td>
            <td>30 h</td>
            <td>
                <div className="actions">
                <Link onClick={handleShowModal}>
                          <BsEyeFill className="icon_eye" />
                        </Link>
                    <BsFillTrashFill className='icon_trash' />
                </div>
            </td>
            </tr>
        </tbody>
        </table>
        </div>
       </div>
       </div>
       <Footer />
    </Row>
    <Modal show={showModal} onHide={handleCloseModal} className='modal' size='xl'>
          <Modal.Header closeButton>
            <Modal.Title>Detail odpracovaných hodin zaměstnance</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span className='fw-bold'>Jméno</span>
            <p>Jan</p>
            <span className='fw-bold'>Příjmení</span>
            <p>Novák</p>
            <span className='fw-bold'>Kód zaměstnance</span>
            <p>156987</p>
            <span className='fw-bold'>Odpracované hodiny</span>
            <p>50 h</p>
            <span className='fw-bold'>Číslo účtu</span>
            <p>11122233/1010</p>
            <span className='fw-bold'>Poznámka</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eligendi.</p>
            
          </Modal.Body>
        </Modal>

</Container>
 </Helmet>
  )
}

export default Worked