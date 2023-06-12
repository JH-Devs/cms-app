import React, {useState, useEffect} from 'react'
import { Container, Row, Modal, Form, Button } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import Helmet from '../components/helmet/Helmet'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import {BsEyeFill, BsFillTrashFill} from "react-icons/bs"
import {MdEdit} from "react-icons/md"


const Employees = () => {
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
    const [bank, setBank] = useState('');
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
    const handleBankChange = (e) => {
      setBank(e.target.value);
    };
    const handlePracChange = (e) => {
      setPrac(e.target.value);
    };
    const handleCommentChange = (e) => {
      setComment(e.target.value);
    };

    
  
  return (
 <Helmet title=" - Zaměstnanci">
       <Container fluid>
    <Row>
    <Navbar/>
    <div className="dashboard">
        <Sidebar/>
       <div className='main'>
       <div className="path">
       <Link to="/nastenka">Nástěnka</Link> &gt; <span>Zaměstnanci</span>
        </div>
        <div className="header">
        <h2>Zaměstnanci</h2>
        <Link onClick={handleAddModal} type='button' className='add'>Přidat zaměstnance</Link>
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
            <th scope="col">Telefon</th>
            <th scope="col">Email</th>
            <th scope="col">Pracovní zařazení</th>
            
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
            <td>+420 123 456 789</td>
            <td>email@email.cz</td>
            <td>IT tester</td>
            <td>
                <div className="actions">
                <Link onClick={handleShowModal}>
                          <BsEyeFill className="icon_eye" />
                        </Link>
                        <Link onClick={handleEditModal}>
                      <MdEdit className="icon_edit" />
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
            <td>+420 123 456 789</td>
            <td>email@email.cz</td>
            <td>FE developer</td>
            <td>
                <div className="actions">
                <Link onClick={handleShowModal}>
                          <BsEyeFill className="icon_eye" />
                        </Link>
                        <Link onClick={handleEditModal}>
                      <MdEdit className="icon_edit" />
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
            <td>+420 123 456 789</td>
            <td>email@email.cz</td>
            <td>BE developer</td>
            <td>
                <div className="actions">
                <Link onClick={handleShowModal}>
                          <BsEyeFill className="icon_eye" />
                        </Link>
                        <Link onClick={handleEditModal}>
                      <MdEdit className="icon_edit" />
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
            <td>+420 123 456 789</td>
            <td>email@email.cz</td>
            <td>IT analytik</td>
            <td>
                <div className="actions">
                <Link onClick={handleShowModal}>
                          <BsEyeFill className="icon_eye" />
                        </Link>
                        <Link onClick={handleEditModal}>
                      <MdEdit className="icon_edit" />
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
            <Modal.Title>Detail zaměstnance</Modal.Title>
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
            <span className='fw-bold'>Adresa</span>
            <p>Adresa 1, 111 11 Město</p>
            <span className='fw-bold'>Telefon</span>
            <p>+420 123 456 789</p>
            <span className='fw-bold'>Email</span>
            <p>email@email.cz</p>
            <span className='fw-bold'>Číslo účtu</span>
            <p>11122233/1010</p>
            <span className='fw-bold'>Procovní zařazení</span>
            <p>IT tester</p>
            <span className='fw-bold'>Poznámka</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eligendi.</p>
            
          </Modal.Body>
        </Modal>

        <Modal show={addModal} onHide={handleAddCloseModal} className='modal' size='xl'>
          <Modal.Header closeButton>
            <Modal.Title>Přidat zaměstnance</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="path">
              <Link to="/nastenka">Nástěnka</Link> &gt; <Link to="/zamestnanci">Zaměstnanci</Link> &gt; <span>Přidat zaměstnance</span>
            </div>
              <Form className='row g-3 form_add' onSubmit={handleAddSubmit}>  
                  <Form.Group controlId="firstName" className='col-8'>
                    <Form.Label >Jméno</Form.Label>
                    <Form.Control type="text" value={firstName} onChange={handleFirstNameChange} />
                  </Form.Group>
                  <Form.Group controlId="lastName" className='col-8'>
                    <Form.Label>Příjmení</Form.Label>
                    <Form.Control type="text" value={lastName} onChange={handleLastNameChange} />
                  </Form.Group>
                  <Form.Group controlId="code" className='col-8'>
                    <Form.Label>Kód zaměstnance</Form.Label>
                    <Form.Control type="text" value={code} onChange={handleCodeChange} />
                  </Form.Group>
                  <Form.Group controlId="address" className='col-8'>
                    <Form.Label >Adresa</Form.Label>
                    <Form.Control type="text" value={address} onChange={handleAddressChange} />
                  </Form.Group>
                  <Form.Group controlId="phone" className='col-8'>
                    <Form.Label >Telefon</Form.Label>
                    <Form.Control type="text" value={phone} onChange={handlePhoneChange} />
                  </Form.Group>
                  <Form.Group controlId="email" className='col-8'>
                    <Form.Label >Email</Form.Label>
                    <Form.Control type="text" value={email} onChange={handleEmailChange} />
                  </Form.Group>
                  <Form.Group controlId="bank" className='col-8'>
                    <Form.Label >Číslo účtu</Form.Label>
                    <Form.Control type="text" value={bank} onChange={handleBankChange} />
                  </Form.Group>
                  <Form.Group controlId="prac" className='col-8'>
                    <Form.Label>Pracovní zařazení</Form.Label>
                    <Form.Select value={prac} onChange={handlePracChange}>
                      <option value="">-- vybrat zařazení --</option>
                      <option value="firma1">IT analytik</option>
                      <option value="firma2">IT tester</option>
                      <option value="firma3">FE developer</option>
                      <option value="firma4">BE developer</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group controlId="comment" className='col-8'>
                    <Form.Label >Poznámka</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={comment}
                      onChange={handleCommentChange}
                      className="custom-description " // Příklad použití CSS třídy
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className='col-8 mt-5'>Přidat</Button>
                </Form>          
          </Modal.Body>
        </Modal>

      
        <Modal show={editModal} onHide={handleEditCloseModal} className='modal' size='xl'>
          <Modal.Header closeButton>
            <Modal.Title>Upravit zaměstnance</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="path">
              <Link to="/nastenka">Nástěnka</Link> &gt; <Link to="/zamestnanci">Zaměstnanci</Link> &gt; <span>Upravit zaměstnance</span>
            </div>
              <Form className='row g-3 form_add' onSubmit={handleEditSubmit}>  
                  <Form.Group controlId="firstName" className='col-8'>
                    <Form.Label >Jméno</Form.Label>
                    <Form.Control type="text" value={firstName} onChange={handleFirstNameChange} />
                  </Form.Group>
                  <Form.Group controlId="lastName" className='col-8'>
                    <Form.Label>Příjmení</Form.Label>
                    <Form.Control type="text" value={lastName} onChange={handleLastNameChange} />
                  </Form.Group>
                  <Form.Group controlId="code" className='col-8'>
                    <Form.Label>Kód zaměstnance</Form.Label>
                    <Form.Control type="text" value={code} onChange={handleCodeChange} />
                  </Form.Group>
                  <Form.Group controlId="address" className='col-8'>
                    <Form.Label >Adresa</Form.Label>
                    <Form.Control type="text" value={address} onChange={handleAddressChange} />
                  </Form.Group>
                  <Form.Group controlId="phone" className='col-8'>
                    <Form.Label >Telefon</Form.Label>
                    <Form.Control type="text" value={phone} onChange={handlePhoneChange} />
                  </Form.Group>
                  <Form.Group controlId="email" className='col-8'>
                    <Form.Label >Email</Form.Label>
                    <Form.Control type="text" value={email} onChange={handleEmailChange} />
                  </Form.Group>
                  <Form.Group controlId="bank" className='col-8'>
                    <Form.Label >Číslo účtu</Form.Label>
                    <Form.Control type="text" value={bank} onChange={handleBankChange} />
                  </Form.Group>
                  <Form.Group controlId="prac" className='col-8'>
                    <Form.Label>Pracovní zařazení</Form.Label>
                    <Form.Select value={prac} onChange={handlePracChange}>
                      <option value="">-- vybrat zařazení --</option>
                      <option value="analytik">IT analytik</option>
                      <option value="tester">IT tester</option>
                      <option value="frontend">FE developer</option>
                      <option value="backend">BE developer</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group controlId="comment" className='col-8'>
                    <Form.Label >Poznámka</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={comment}
                      onChange={handleCommentChange}
                      className="custom-description " // Příklad použití CSS třídy
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className='col-8 mt-5'>Upravit</Button>
                </Form>          
          </Modal.Body>
        </Modal>
</Container>
 </Helmet>
  )
}

export default Employees