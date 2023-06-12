import React, {useState} from 'react'
import Helmet from '../components/helmet/Helmet'
import { Container, Row, Modal, Form, Button } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import cs from 'date-fns/locale/cs';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const EventForm = ({ onSubmit, onCancel }) => {
    const [formData, setFormData] = useState({
      title: '',
      start: '',
      end: '',
      location: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(formData);
    };
  
    const handleCancel = () => {
      onCancel();
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="eventTitle">
          <Form.Label>Název události</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="eventStart">
          <Form.Label>Začátek</Form.Label>
          <Form.Control
            type="datetime-local"
            name="start"
            value={formData.start}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="eventEnd">
          <Form.Label>Konec</Form.Label>
          <Form.Control
            type="datetime-local"
            name="end"
            value={formData.end}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="eventLocation">
          <Form.Label>Místo</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </Form.Group>
        <div className="buttons">
        <Button variant="secondary"  onClick={handleCancel}>
          Zrušit
        </Button>
        <Button variant="primary" type="submit">
          Přidat
        </Button>
        </div>
      </Form>
    );
  };

const CalendarHome = () => {
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
  
    const locales = {
      cs: cs,
    };
  
    const localizer = dateFnsLocalizer({
      format,
      parse,
      startOfWeek,
      getDay,
      locales,
    });
  
    const handleSelect = ({ start, end }) => {
      setShowModal(true);
    };
    const handleSelectEvent = (event) => {
        setSelectedEvent(event);
        setShowModal(true);
      };
  
    const handleFormSubmit = (formData) => {
      const { title, start, end, location } = formData;
      const newEvent = {
        start,
        end,
        title,
        location,
      };
      setEvents([...events, newEvent]);
      setShowModal(false);
    };
  
    const handleFormCancel = () => {
      setShowModal(false);
    };
  return (
    <Helmet title=" - Kalendář">
      <Container fluid>
        <Row>
          <Navbar />
          <div className="dashboard">
            <Sidebar />
            <div className="main">
              <div className="path">
                <Link to="/nastenka">Nástěnka</Link> &gt; <span>Kalendář</span>
              </div>
              <div className="header">
                <h2>Kalendář</h2>
              </div>
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                selectable
                onSelectSlot={handleSelect}
                onSelectEvent={handleSelectEvent}
                style={{ height: 500 }}
              />
                          <Modal
                show={showModal}
                onHide={handleFormCancel}
                centered
                contentClassName="event-modal"
              >
                <Modal.Header closeButton>
                  <Modal.Title>
                    {selectedEvent ? 'Detail události' : 'Vytvořit událost'}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {selectedEvent ? (
                    <div>
                      <h4>{selectedEvent.title}</h4>
                      <p>
                      Začátek: {selectedEvent.start && format(selectedEvent.start, 'dd.MM.yyyy HH:mm')}
                      </p>
                      <p>Konec: {selectedEvent.end && format(selectedEvent.end, 'dd.MM.yyyy HH:mm')}</p>
                      <p>Místo: {selectedEvent.location}</p>
                    </div>
                  ) : (
                    <EventForm onSubmit={handleFormSubmit} onCancel={handleFormCancel} />
                  )}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleFormCancel}>
                    Zavřít
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </Row>
      </Container>
    </Helmet>
  )
}

export default CalendarHome