import React, {useState, useEffect} from 'react'
import { Container, Row, Modal, Form, Button } from 'react-bootstrap'
import NavbarAdmin from '../components/Navbar'
import Helmet from '../components/helmet/Helmet'
import Sidebar from '../components/Sidebar'
import FooterAdmin from '../components/Footer'
import { Link } from 'react-router-dom'
import {BsEyeFill, BsFillTrashFill} from "react-icons/bs"
import {MdEdit} from "react-icons/md"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Project = () => {
    const pathname = window.location.pathname;
    const [filterValue, setFilterValue] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [company, setCompany] = useState('');
    const [project, setProject] = useState('');
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

  const handleDescriptionChange = (e, editor) => {
    const data = editor.getData();
    setDescription(data);
  };

  return (
 <Helmet title=" - Projekty">
       <Container fluid>
    <Row>
    <NavbarAdmin/>
    <div className="dashboard">
        <Sidebar/>
       <div className='main'>
       <div className="path">
       <Link to="/nastenka">Nástěnka</Link> &gt; <span>Projekty</span>
        </div>
        <div className="header">
        <h2>Projekty</h2>
        <Link onClick={handleAddModal}  type='button' className='add'>Přidat projekt</Link>
        </div>
        <input className="form-control mt-2" id="myInput" type="text" value={filterValue} onChange={handleInputChange} placeholder="Hledat..." />
        <br></br>
        <div id="myTable">
       <table className="table">
        <thead className="thead-dark">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Firma</th>
            <th scope="col">Název projektu</th>
            <th scope="col">Akce</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Firma 1</td>
            <td>Tvorba www</td>
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
            <td>Tvorba eshopu</td>
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
            <td>Tvorba hry</td>
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
            <td>Tvorba aplikace</td>
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
       <FooterAdmin />
    </Row>
    <Modal show={showModal} onHide={handleCloseModal} className='modal' size='xl'>
          <Modal.Header closeButton>
            <Modal.Title>Detail projektu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span className='fw-bold'>Firma</span>
            <p>Firma 1</p>
            <span className='fw-bold'>Název projektu</span>
            <p>Tvorba www</p>
            <span className='fw-bold'>Technnická dokumentace</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus impedit amet molestias illo dignissimos deserunt. Reiciendis rerum cumque labore dolore eum! Ut deleniti corrupti iure! Hic nesciunt cupiditate aliquam eum nihil explicabo architecto voluptatibus voluptatum dolore, ipsam et officia maiores iure, dolores id alias reprehenderit deserunt quaerat, nam molestias perferendis quidem iusto? Tempore, molestias? Non cupiditate est possimus! Quod, soluta sapiente laudantium nostrum magni, animi temporibus ratione obcaecati dolorum excepturi, incidunt similique ullam ad necessitatibus. Maiores illum saepe et debitis inventore delectus eaque, maxime quo ea harum ratione dignissimos, eos ducimus molestias aspernatur unde libero quam excepturi deleniti eius nulla temporibus, ipsam eveniet. Accusantium repellendus ab blanditiis ducimus reprehenderit at adipisci facilis ipsum quam tempore aperiam dolore animi, velit porro laborum ut nesciunt. At facere consequuntur ea iure quod? Unde id similique rerum a? Autem ducimus explicabo quibusdam, provident voluptate voluptates sed cupiditate molestiae assumenda. Suscipit, expedita rerum. Qui eum, dignissimos corrupti ab, natus nihil impedit pariatur, ipsam consectetur repellat aliquam eveniet laudantium ut incidunt a. Tenetur earum aliquam voluptatum sequi reprehenderit, itaque mollitia beatae aliquid ullam? Est molestiae ratione, cum corrupti obcaecati ea nemo hic sunt, sint inventore, fuga autem magnam ad neque. Fuga esse voluptatem deserunt, officia nulla similique laudantium eligendi. Vitae, iste aut? Optio ducimus reprehenderit pariatur odio sit, nesciunt consequuntur, quas animi illum nihil non voluptas doloremque architecto a reiciendis tempore ullam? Nisi ea dolorem iusto fugiat reiciendis ut facilis aliquid consectetur, magnam maiores vero! Cupiditate facilis repellendus magnam eius delectus excepturi itaque optio ducimus veniam.</p>
            <span className='fw-bold'>Poznámka</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eligendi.</p>
            
          </Modal.Body>
        </Modal>
        <Modal show={addModal} onHide={handleAddCloseModal} className='modal' size='xl'>
          <Modal.Header closeButton>
            <Modal.Title>Přidat projekt</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="path">
                <Link to="/admin">Admin</Link> &gt; <Link to="/admin/projekty">Projekty</Link> &gt; <span>Přidat projekty</span>
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
                  <Form.Label >Název projektu</Form.Label>
                  <Form.Control type="text" value={project} onChange={handleProjectChange} />
                </Form.Group>
                <Form.Group controlId="description" className='col-8'>
                  <Form.Label>Technická dokumentace</Form.Label>
                  <CKEditor
                    editor={ClassicEditor}
                    onChange={handleDescriptionChange}
                  />
                </Form.Group>
                  <Button variant="primary" type="submit" className='col-8 mt-5'>Přidat</Button>
                </Form>          
          </Modal.Body>
        </Modal>
        <Modal show={editModal} onHide={handleEditCloseModal} className='modal' size='xl'>
          <Modal.Header closeButton>
            <Modal.Title>Upravit projekt</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="path">
                <Link to="/admin">Admin</Link> &gt; <Link to="/admin/projekty">Projekty</Link> &gt; <span>Upravit projekty</span>
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
                  <Form.Label >Název projektu</Form.Label>
                  <Form.Control type="text" value={project} onChange={handleProjectChange} />
                </Form.Group>
                <Form.Group controlId="description" className='col-8'>
                  <Form.Label>Technická dokumentace</Form.Label>
                  <CKEditor
                    editor={ClassicEditor}
                    onChange={handleDescriptionChange}
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

export default Project