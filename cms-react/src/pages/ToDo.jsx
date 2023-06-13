import React, {useState} from 'react'
import Helmet from '../components/helmet/Helmet'
import { Container, Row, Modal, Button, Form } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialTasks = [
    { id: 'task-1', content: 'Úkol 1', status: 'Úkoly' },
    { id: 'task-2', content: 'Úkol 2', status: 'Úkoly' },
    { id: 'task-3', content: 'Úkol 3', status: 'Probíhající' },
    { id: 'task-4', content: 'Úkol 4', status: 'Dokončeno' },
  ];


const ToDo = () => {
    const [tasks, setTasks] = useState(initialTasks);
    const [showModal, setShowModal] = useState(false);
    const [newTaskContent, setNewTaskContent] = useState('');

    const handleDragEnd = (result) => {
      if (!result.destination) return;
  
      const { source, destination } = result;
      if (source.droppableId === destination.droppableId && source.index === destination.index) return;
  
      const sourceColumn = getColumnTasks(source.droppableId);
      const destinationColumn = getColumnTasks(destination.droppableId);
  
      const draggedTask = sourceColumn[source.index];
      const newSourceColumn = Array.from(sourceColumn);
      newSourceColumn.splice(source.index, 1);
  
      const newDestinationColumn = Array.from(destinationColumn);
      newDestinationColumn.splice(destination.index, 0, draggedTask);
  
      const newTasks = [...tasks];
      newTasks.forEach((task) => {
        if (task.status === source.droppableId) {
          task.status = destination.droppableId;
        }
      });
  
      setTasks(newTasks);
    };
  
    const getColumnTasks = (status) => {
      return tasks.filter((task) => task.status === status);
    };

    const handleNewTaskSubmit = (e) => {
        e.preventDefault();
        if (newTaskContent.trim() === '') return;
    
        const newTask = {
          id: `task-${tasks.length + 1}`,
          content: newTaskContent,
          status: 'Úkoly',
        };
    
        setTasks([...tasks, newTask]);
        setNewTaskContent('');
        setShowModal(false);
      };
    
    

  return (
    <Helmet title=" - Plánovač">
        <Container fluid>
            <Row>
                <Navbar/>
                <div className="dashboard">
                    <Sidebar/>
                    <div className="main">
                    <div className="path">
                        <Link to="/nastenka">Nástěnka</Link> &gt; <span>Plánovač</span>
                     </div>
                     <div className="header">
                     <h2>Plánovač</h2>
                    <Link className="add"  onClick={() => setShowModal(true)}>
                        Přidat událost
                    </Link>
                     </div>
                     <div className="todo-container">
                     <DragDropContext onDragEnd={handleDragEnd}>
                  <div className="column">
                    <h3>Úkoly</h3>
                    <Droppable droppableId="column-1" >
                      {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef} className="task-list" id="task-1" >
                          {getColumnTasks('Úkoly').map((task, index) => (
                            <Draggable key={task.id} draggableId={task.id} index={index}>
                              {(provided) => (
                                <div
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                                  className="task"
                                >
                                  {task.content}
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </div>
                  <div className="column">
                    <h3>Probíhající</h3>
                    <Droppable droppableId="column-2">
                        {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef} className="task-list" id="task-2">
                            {getColumnTasks('Probíhající').map((task, index) => (
                            <Draggable key={task.id} draggableId={task.id} index={index}>
                                {(provided) => (
                                <div
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}
                                    className="task"
                                >
                                    {task.content}
                                </div>
                                )}
                            </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                        )}
                    </Droppable>
                    </div>
                    <div className="column">
                    <h3>Dokončeno</h3>
                    <Droppable droppableId="column-3">
                        {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef} className="task-list" id="task-3">
                            {getColumnTasks('Dokončeno').map((task, index) => (
                            <Draggable key={task.id} draggableId={task.id} index={index}>
                                {(provided) => (
                                <div
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}
                                    className="task"
                                >
                                    {task.content}
                                </div>
                                )}
                            </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                        )}
                    </Droppable>
                    </div>
                    
                    </DragDropContext>
                     </div>
                   
                    </div>
                </div>
            </Row>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Přidat úkol</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleNewTaskSubmit}>
                <Form.Group controlId="newTaskContent">
                    <Form.Label>Název úkolu</Form.Label>
                    <Form.Control
                    type="text"
                    value={newTaskContent}
                    onChange={(e) => setNewTaskContent(e.target.value)}
                    />
                </Form.Group>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                    Zrušit
                    </Button>
                    <Button variant="primary" type="submit">
                    Přidat
                    </Button>
                </Modal.Footer>
                </Form>
            </Modal.Body>
            </Modal>
        </Container>
    </Helmet>
  )
}

export default ToDo