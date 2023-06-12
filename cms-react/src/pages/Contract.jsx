import React, {useState, useEffect} from 'react'
import { Container, Row, Modal, Form, Button } from 'react-bootstrap'
import Helmet from '../components/helmet/Helmet'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import {BsEyeFill, BsFillTrashFill} from "react-icons/bs"
import {MdEdit} from "react-icons/md"
import Navbar from '../components/Navbar'

const Contract = () => {
    const pathname = window.location.pathname;
    const [filterValue, setFilterValue] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [company, setCompany] = useState('');
    const [project, setProject] = useState('');
    const [dateC, setDateC] = useState('');
    const [dateR, setDateR] = useState('');
    const [status, setStatus] = useState('');
    const [priceO, setPriceO] = useState('');
    const [priceS, setPriceS] = useState('');
    const [description, setDescription] = useState('');

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

  const handleProjectChange = (e) => {
    setProject(e.target.value);
  };

  const handleDateCChange = (e) => {
    setDateC(e.target.value);
  };
  const handleDateRChange = (e) => {
      setDateR(e.target.value);
    };
    const handleStatusChange = (e) => {
      setStatus(e.target.value);
    };
    const handlePriceOChange = (e) => {
      setPriceO(e.target.value);
    };
    const handlePriceSChange = (e) => {
      setPriceS(e.target.value);
    };
    const handleDescriptionChange = (e) => {
      setDescription(e.target.value);
    };

  return (
 <Helmet title=" - Zakázky">
       <Container fluid>
    <Row>
    <Navbar/>
    <div className="dashboard">
        <Sidebar/>
       <div className='main'>
       <div className="path">
       <Link to="/nastenka">Nástěnka</Link> &gt; <span>Zakázky</span>
        </div>
        <div className="header">
        <h2>Zakázky</h2>
        <Link onClick={handleAddModal} type='button' className='add'>Přidat zakázku</Link>
        </div>
        <input className="form-control mt-2" id="myInput" type="text" value={filterValue} onChange={handleInputChange} placeholder="Hledat..." />
        <br></br>
        <div id="myTable">
       <table className="table">
        <thead className="thead-dark">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Firma</th>
            <th scope="col">Projekt</th>
            <th scope="col">Datum zakázky</th>
            <th scope="col">Datum realizace</th>
            <th scope="col">Stav</th>
            <th scope="col">Odhadovaná cena zakázky</th>
            <th scope="col">Skutečná cena zakázky</th>
            <th scope="col">Akce</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Firma 1</td>
            <td>Projekt 1</td>
            <td>25.3.2023</td>
            <td>25.12.2023</td>
            <td className='status-jednani'>v jednání</td>
            <td>150 000 Kč</td>
            <td>180 000 Kč</td>
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
            <td>Projekt 1</td>
            <td>25.3.2023</td>
            <td>25.12.2023</td>
            <td className='status-probihajici'>probíhající</td>
            <td>150 000 Kč</td>
            <td>180 000 Kč</td>
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
            <td>Projekt 1</td>
            <td>25.3.2023</td>
            <td>25.12.2023</td>
            <td className='status-dokonceno'>dokončeno</td>
            <td>150 000 Kč</td>
            <td>180 000 Kč</td>
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
            <td>Projekt 1</td>
            <td>25.3.2023</td>
            <td>25.12.2023</td>
            <td className='status-storno'>storno</td>
            <td>150 000 Kč</td>
            <td>180 000 Kč</td>
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
            <th scope="row">5</th>
            <td>Firma 1</td>
            <td>Projekt 1</td>
            <td>25.3.2023</td>
            <td>25.12.2023</td>
            <td className='status-predano'>předáno</td>
            <td>150 000 Kč</td>
            <td>180 000 Kč</td>
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
            <Modal.Title>Detail zakázky</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span className='fw-bold'>Firma</span>
            <p>Firma 1</p>
            <span className='fw-bold'>Projekt</span>
            <p>Jan Novák</p>
            <span className='fw-bold'>Datum zakázky</span>
            <p>23.5.2023</p>
            <span className='fw-bold'>Realizace</span>
            <p>23.12.2023</p>
            <span className='fw-bold'>Stav</span>
            <p>probíhající</p>
            <span className='fw-bold'>Odhadovaná cena zakázky</span>
            <p>150 000 Kč</p>
            <span className='fw-bold'>Skutečná cena zakázky</span>
            <p>180 000 Kč</p>
            <span className='fw-bold'>Poznámka</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eligendi.</p>
            
          </Modal.Body>
        </Modal>

        <Modal show={addModal} onHide={handleAddCloseModal} className='modal' size='xl'>
          <Modal.Header closeButton>
            <Modal.Title>Přidat zakázku</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="path">
              <Link to="/nastenka">Nástěnka</Link> &gt; <Link to="/zakazky">Zakázky</Link> &gt; <span>Přidat zakázku</span>
            </div>
              <Form className='row g-3 form_add' onSubmit={handleAddSubmit}>  
              <Form.Group controlId="company" className='col-8'>
                    <Form.Label>Firma</Form.Label>
                    <Form.Select value={company} onChange={handleCompanyChange}>
                      <option value="">-- vybrat firmu --</option>
                      <option value="firma1">Firma 1</option>
                      <option value="firma2">Firma 2</option>
                      <option value="firma3">Firma 3</option>
                      <option value="firma4">Firma 4</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group controlId="project" className='col-8'>
                    <Form.Label>Zakázka</Form.Label>
                    <Form.Select value={project} onChange={handleProjectChange}>
                      <option value="">-- vybrat projekt --</option>
                      <option value="projekt1">Projekt 1</option>
                      <option value="projekt2">Projekt 2</option>
                      <option value="projekt3">Projekt 3</option>
                      <option value="projekt4">Projekt 4</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group controlId="dateC" className='col-8'>
                    <Form.Label >Datum zakázky</Form.Label>
                    <Form.Control type="date" value={dateC} onChange={handleDateCChange} />
                  </Form.Group>
                  <Form.Group controlId="dateR" className='col-8'>
                    <Form.Label >Datum realizace</Form.Label>
                    <Form.Control type="date" value={dateR} onChange={handleDateRChange} />
                  </Form.Group>
                  <Form.Group controlId="status" className='col-8'>
                    <Form.Label>Stav</Form.Label>
                    <Form.Select value={status} onChange={handleStatusChange}>
                      <option value="">-- vybrat stav --</option>
                      <option value="vjednani">v jednání</option>
                      <option value="probihajici">probíhající</option>
                      <option value="dokonceno">dokončeno</option>
                      <option value="predano">předáno</option>
                      <option value="storno">storno</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group controlId="PriceO" className='col-8'>
                    <Form.Label >Odhadovaná cena zakázky</Form.Label>
                    <Form.Control type="text" value={priceO} onChange={handlePriceOChange} />
                  </Form.Group>
                  <Form.Group controlId="PriceS" className='col-8'>
                    <Form.Label >Skutečná cena zakázky</Form.Label>
                    <Form.Control type="text" value={priceS} onChange={handlePriceSChange} />
                  </Form.Group>
                  <Form.Group controlId="description" className='col-8'>
                    <Form.Label>Poznámka</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={description}
                      onChange={handleDescriptionChange}
                      className="custom-description " // Příklad použití CSS třídy
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className='col-8 mt-5'>Přidat</Button>
                </Form>          
            
          </Modal.Body>
        </Modal>

        <Modal show={editModal} onHide={handleEditCloseModal} className='modal' size='xl'>
          <Modal.Header closeButton>
            <Modal.Title>Upravit zakázku</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="path">
              <Link to="/anastenka">Nástěnka</Link> &gt; <Link to="/zakazky">Zakázky</Link> &gt; <span>Upravit zakázku</span>
            </div>
              <Form className='row g-3 form_add' onSubmit={handleEditSubmit}>  
              <Form.Group controlId="company" className='col-8'>
                    <Form.Label>Firma</Form.Label>
                    <Form.Select value={company} onChange={handleCompanyChange}>
                      <option value="">-- vybrat firmu --</option>
                      <option value="firma1">Firma 1</option>
                      <option value="firma2">Firma 2</option>
                      <option value="firma3">Firma 3</option>
                      <option value="firma4">Firma 4</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group controlId="project" className='col-8'>
                    <Form.Label>Zakázka</Form.Label>
                    <Form.Select value={project} onChange={handleProjectChange}>
                      <option value="">-- vybrat projekt --</option>
                      <option value="projekt1">Projekt 1</option>
                      <option value="projekt2">Projekt 2</option>
                      <option value="projekt3">Projekt 3</option>
                      <option value="projekt4">Projekt 4</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group controlId="dateC" className='col-8'>
                    <Form.Label >Datum zakázky</Form.Label>
                    <Form.Control type="date" value={dateC} onChange={handleDateCChange} />
                  </Form.Group>
                  <Form.Group controlId="dateR" className='col-8'>
                    <Form.Label >Datum realizace</Form.Label>
                    <Form.Control type="date" value={dateR} onChange={handleDateRChange} />
                  </Form.Group>
                  <Form.Group controlId="status" className='col-8'>
                    <Form.Label>Stav</Form.Label>
                    <Form.Select value={status} onChange={handleStatusChange}>
                      <option value="">-- vybrat stav --</option>
                      <option value="vjednani">v jednání</option>
                      <option value="probihajici">probíhající</option>
                      <option value="dokonceno">dokončeno</option>
                      <option value="predano">předáno</option>
                      <option value="storno">storno</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group controlId="PriceO" className='col-8'>
                    <Form.Label >Odhadovaná cena zakázky</Form.Label>
                    <Form.Control type="text" value={priceO} onChange={handlePriceOChange} />
                  </Form.Group>
                  <Form.Group controlId="PriceS" className='col-8'>
                    <Form.Label >Skutečná cena zakázky</Form.Label>
                    <Form.Control type="text" value={priceS} onChange={handlePriceSChange} />
                  </Form.Group>
                  <Form.Group controlId="description" className='col-8'>
                    <Form.Label>Poznámka</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={description}
                      onChange={handleDescriptionChange}
                      className="custom-description " 
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

export default Contract