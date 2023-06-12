import React, {useState, useEffect} from 'react'
import { Container, Row, Modal, Form, Button } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import Helmet from '../components/helmet/Helmet'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import {BsEyeFill, BsFillTrashFill} from "react-icons/bs"
import {MdEdit} from "react-icons/md"


const Customers = () => {
    const pathname = window.location.pathname;
    const [filterValue, setFilterValue] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [company, setCompany] = useState('');
    const [person, setPerson] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [ico, setIco] = useState('');
    const [dic, setDic] = useState('');
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



  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handlePersonChange = (e) => {
    setPerson(e.target.value);
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
    const handleIcoChange = (e) => {
      setIco(e.target.value);
    };
    const handleDicChange = (e) => {
      setDic(e.target.value);
    };
    const handleCommentChange = (e) => {
      setComment(e.target.value);
    };

    
  
  return (
 <Helmet title=" - Zákazníci">
       <Container fluid>
    <Row>
    <Navbar/>
    <div className="dashboard">
        <Sidebar/>
       <div className='main'>
       <div className="path">
       <Link to="/nastenka">Nástěnka</Link> &gt; <span>Zákazníci</span>
        </div>
        <div className="header">
        <h2>Zákazníci</h2>
        <Link onClick={handleAddModal} type='button' className='add'>Přidat zákazníka</Link>
        </div>
        <input className="form-control mt-2" id="myInput" type="text" value={filterValue} onChange={handleInputChange} placeholder="Hledat..." />
        <br></br>
        <div id="myTable">
       <table className="table">
        <thead className="thead-dark">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Firma</th>
            <th scope="col">Odpovědná osoba</th>
            <th scope="col">Adresa</th>
            <th scope="col">Telefon</th>
            <th scope="col">Email</th>
            <th scope="col">IČO</th>
            <th scope="col">DIČ</th>
            <th scope="col">Akce</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Firma 1</td>
            <td>Jan Novák</td>
            <td>Adresa 1, 111 11 Město</td>
            <td>+420 123 456 789</td>
            <td>email@email.cz</td>
            <td>11559977</td>
            <td>CZ121345678989</td>
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
            <td>Firma 1</td>
            <td>Jan Novák</td>
            <td>Adresa 1, 111 11 Město</td>
            <td>+420 123 456 789</td>
            <td>email@email.cz</td>
            <td>11559977</td>
            <td>CZ121345678989</td>
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
            <td>Firma 1</td>
            <td>Jan Novák</td>
            <td>Adresa 1, 111 11 Město</td>
            <td>+420 123 456 789</td>
            <td>email@email.cz</td>
            <td>11559977</td>
            <td>CZ121345678989</td>
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
            <td>Firma 1</td>
            <td>Jan Novák</td>
            <td>Adresa 1, 111 11 Město</td>
            <td>+420 123 456 789</td>
            <td>email@email.cz</td>
            <td>11559977</td>
            <td>CZ121345678989</td>
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
            <Modal.Title>Detail zákazníka</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span className='fw-bold'>Firma</span>
            <p>Firma 1</p>
            <span className='fw-bold'>Odpovědná osoba</span>
            <p>Jan Novák</p>
            <span className='fw-bold'>Adresa</span>
            <p>Adresa 1, 111 11 Město</p>
            <span className='fw-bold'>Telefon</span>
            <p>+420 123 456 789</p>
            <span className='fw-bold'>Email</span>
            <p>email@email.cz</p>
            <span className='fw-bold'>IČO</span>
            <p>11559977</p>
            <span className='fw-bold'>DIČ</span>
            <p>CZ121345678989</p>
            <span className='fw-bold'>Poznámka</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eligendi.</p>
            
          </Modal.Body>
        </Modal>

        <Modal show={addModal} onHide={handleAddCloseModal} className='modal' size='xl'>
          <Modal.Header closeButton>
            <Modal.Title>Přidat zákazníka</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="path">
              <Link to="/nastenka">Nástěnka</Link> &gt; <Link to="/zakaznici">Zákazníci</Link> &gt; <span>Přidat zákazníka</span>
            </div>
              <Form className='row g-3 form_add' onSubmit={handleAddSubmit}>  
                  <Form.Group controlId="company" className='col-8'>
                    <Form.Label >Firma</Form.Label>
                    <Form.Control type="text" value={company} onChange={handleCompanyChange} />
                  </Form.Group>
                  <Form.Group controlId="person" className='col-8'>
                    <Form.Label>Odpovědná osoba</Form.Label>
                    <Form.Control type="text" value={person} onChange={handlePersonChange} />
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
                  <Form.Group controlId="ico" className='col-8'>
                    <Form.Label >IČO</Form.Label>
                    <Form.Control type="text" value={ico} onChange={handleIcoChange} />
                  </Form.Group>
                  <Form.Group controlId="dic" className='col-8'>
                    <Form.Label >DIČ</Form.Label>
                    <Form.Control type="text" value={dic} onChange={handleDicChange} />
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
            <Modal.Title>Upravit zákazníka</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="path">
              <Link to="/nastenka">Nástěnka</Link> &gt; <Link to="/zakaznici">Zákazníci</Link> &gt; <span>Upravit zákazníka</span>
            </div>
              <Form className='row g-3 form_add' onSubmit={handleEditSubmit}>  
                  <Form.Group controlId="company" className='col-8'>
                    <Form.Label >Firma</Form.Label>
                    <Form.Control type="text" value={company} onChange={handleCompanyChange} />
                  </Form.Group>
                  <Form.Group controlId="person" className='col-8'>
                    <Form.Label>Odpovědná osoba</Form.Label>
                    <Form.Control type="text" value={person} onChange={handlePersonChange} />
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
                  <Form.Group controlId="ico" className='col-8'>
                    <Form.Label >IČO</Form.Label>
                    <Form.Control type="text" value={ico} onChange={handleIcoChange} />
                  </Form.Group>
                  <Form.Group controlId="dic" className='col-8'>
                    <Form.Label >DIČ</Form.Label>
                    <Form.Control type="text" value={dic} onChange={handleDicChange} />
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

export default Customers