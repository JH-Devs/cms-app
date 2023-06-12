import React, {useState} from 'react'
import Helmet from '../components/helmet/Helmet'
import { Container, Row, Modal, Form, Button } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import moment from 'moment';
import 'moment/locale/cs';
import "react-big-calendar/lib/css/react-big-calendar.css"

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
          <Button variant="secondary" onClick={handleCancel}>
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
  const [showForm, setShowForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Nastavení locale na 'cs' pro Moment.js
  moment.locale('cs');

  const [showFormModal, setShowFormModal] = useState(false);

const handleAddEvent = () => {
  setShowFormModal(true);
};

const handleCloseFormModal = () => {
  setShowFormModal(false);
};

  const localizer = momentLocalizer(moment);

  const handleSelect = ({ start, end }) => {
    setShowForm(true);
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
    setShowForm(false);
  };

  const handleFormCancel = () => {
    setShowForm(false);
  };
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
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
                <Link className="add" onClick={handleAddEvent}>
                    Přidat událost
                </Link>
                <Modal show={showFormModal} onHide={handleFormCancel} centered>
                    <Modal.Header closeButton>
                    <Modal.Title>Přidat událost</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <EventForm onSubmit={handleFormSubmit} onCancel={handleCloseFormModal} />
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseFormModal}>
                        Zavřít
                    </Button>
                    </Modal.Footer>
                </Modal>
              </div>
              <div className="calendar-container">
            <Calendar
              selectable
              localizer={localizer}
              events={events}
              onSelectSlot={handleSelect}
              onSelectEvent={handleSelectEvent}
              style={{ height: 500 }}
              messages={{
                today: 'Dnes',
                previous: 'Předchozí',
                next: 'Další',
                month: 'Měsíc',
                week: 'Týden',
                day: 'Den',
                agenda: 'Agenda',
                date: 'Datum',
                time: 'Čas',
                event: 'Událost',
                noEventsInRange: 'Žádné události',
                showMore: (total) => `Zobrazit další (${total})`,
              }}
            />
          </div>
          <div className="event-list">
            <h2>Seznam událostí</h2>
            <ul>
              {events.map((event, index) => (
                <li key={index}>
                  <strong>{event.title}</strong> - {event.location} -{' '}
                  {moment(event.start).format('lll')} -{' '}
                  {moment(event.end).format('lll')}
                </li>
              ))}
            </ul>
          </div>
         
    
            </div>
          </div>
        </Row>
      </Container>
    </Helmet>
  )
}

export default CalendarHome