import React, { useState, useEffect } from 'react';
import Helmet from '../components/helmet/Helmet';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Container, Row, Modal, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { BsFillTrashFill } from 'react-icons/bs';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { format } from 'date-fns';
import axios from 'axios';

const ToDo = () => {
  const [todos, setTodos] = useState({
    'Úkoly': [],
    'Probíhající': [],
    'Dokončeno': [],
  });
  const [showModal, setShowModal] = useState(false);
  const [newTodoContent, setNewTodoContent] = useState('');
  const [todoDescription, setTodoDescription] = useState('');
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [showTodoDetailsModal, setShowTodoDetailsModal] = useState(false);
  const [todoCreated, setTodoCreated] = useState('');
  const [todoDeadline, setTodoDeadline] = useState('');

  useEffect(() => {
    // Načtení úkolů z databáze po načtení stránky
    fetchTodosFromDatabase();
  }, []);

  const fetchTodosFromDatabase = async () => {
    try {
      // Make an HTTP GET request to fetch tasks from the database
      const response = await axios.get('/api/todos');
      const data = response.data;
      setTodos(data);
    } catch (error) {
      console.log('Error úkol:', error);
    }
  };
  const saveTodosToDatabase = async (newTodos) => {
    try {
      // Make an HTTP POST request to save tasks to the database
      await axios.post('/api/todos', newTodos);
    } catch (error) {
      console.log('Error ukládání úkolu:', error);
    }
  };

  const getColumnTodos = (todos, columnId) => {
    return todos[columnId] || [];
  };

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceColumnId = source.droppableId;
    const destinationColumnId = destination.droppableId;
    const sourceIndex = source.index;
    const destinationIndex = destination.index;

    if (
      sourceColumnId === destinationColumnId &&
      sourceIndex === destinationIndex
    )
      return;

    const sourceColumnTodos = getColumnTodos(todos, sourceColumnId);
    const destinationColumnTodos = getColumnTasks(todos, destinationColumnId);
    const [removedTodo] = sourceColumnTodos.splice(sourceIndex, 1);
    destinationColumnTodos.splice(destinationIndex, 0, removedTodo);

    const newTodos = {
      ...todos,
      [sourceColumnId]: sourceColumnTodos,
      [destinationColumnId]: destinationColumnTodos,
    };

    setTodos(newTodos);
    saveTodosToDatabase(newTodos);
  };

  const handleNewTodoSubmit = async (e) => {
    e.preventDefault();
    if (newTodoContent.trim() === '') return;

    const newTodo = {
      id: `todo-${Date.now()}`,
      content: newTodoContent,
      created: todoCreated,
      deadline: todoDeadline,
      description: todoDescription,
    };

    const newTodos = {
      ...todos,
      'Úkoly': [...getColumnTodos(todos, 'Úkoly'), newTodo],
    };

    setTodos(newTodos);
    setNewTodoContent('');
    setTodoCreated('');
    setTodoDeadline('');
    setTodoDescription('');
    setShowModal(false);

    await saveTodosToDatabase(newTodos);
  };

  const handleDeleteTodo = (todoId, columnId) => {
    const columnTodos = getColumnTodos(todos, columnId);
    const updatedTodos = columnTodos.filter((todo) => todo.id !== todoId);

    const newTodos = {
      ...todos,
      [columnId]: updatedTodos,
    };

    setTodos(newTodos);
    saveTodosToDatabase(newTodos);
  };

 
  const handleTodoClick  = (todoId, columnId) => {
    const columnTodos = getColumnTodos(todos, columnId);
    const selectedTodo = columnTodos.find((todo) => todo.id === todoId);
    setSelectedTodo(selectedTodo);
    setShowTodoDetailsModal(true);
  };

  return (
    <Helmet title=" - Plánovač">
      <Container fluid>
        <Row>
          <Navbar />
          <div className="dashboard">
            <Sidebar />
            <div className="main">
              <div className="path">
                <Link to="/nastenka">Nástěnka</Link> &gt; <span>Plánovač</span>
              </div>
              <div className="header">
                <h2>Plánovač</h2>
                <Link className="add" onClick={() => setShowModal(true)}>
                  Přidat úkol
                </Link>
              </div>
              <div className="todo-container">
                <DragDropContext onDragEnd={handleDragEnd}>
                  {Object.entries(todos).map(([columnId, columnTodos], index) => (
                    <div className="column" key={columnId}>
                      <h3
                        style={{
                          color:
                            index === 0 ? '#f39c12' : index === 1 ? '#3498db' : index === 2 ? '#2ecc71' : '',
                        }}
                      >
                        {columnId}
                      </h3>
                      <Droppable droppableId={columnId}>
                        {(provided) => (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="task-list"
                            style={{
                              backgroundColor:
                                index === 0 ? '#f39c12' : index === 1 ? '#3498db' : index === 2 ? '#2ecc71' : '',
                            }}
                          >
                            {columnTodos.map((todo, index) => (
                              <Draggable key={todo.id} draggableId={todo.id} index={index}>
                                {(provided) => (
                                  <div
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}
                                    className="task"
                                    onClick={() => handleTodoClick(todo)}
                                  >
                                    {todo.content}
                                    <BsFillTrashFill
                                      onClick={() => handleDeleteTodo(columnId, todo.id)}
                                      className="icon_trash"
                                    />
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    </div>
                  ))}
                </DragDropContext>
              </div>
            </div>
          </div>
        </Row>
      </Container>
      <Modal show={showModal} onHide={() => setShowModal(false)} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Přidat úkol</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleNewTodoSubmit}>
            <Form.Group controlId="newTaskContent">
              <Form.Label>Název úkolu</Form.Label>
              <Form.Control
                type="text"
                value={newTodoContent}
                onChange={(e) => setNewTodoContent(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="taskCreated">
              <Form.Label>Datum vytvoření</Form.Label>
              <Form.Control
                type="date"
                value={todoCreated}
                onChange={(e) => setTodoCreated(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="taskDeadline">
              <Form.Label>Datum dokončení</Form.Label>
              <Form.Control
                type="date"
                value={todoDeadline}
                onChange={(e) => setTodoDeadline(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="description" className="col-12">
              <Form.Label>Popis</Form.Label>
              <CKEditor
                editor={ClassicEditor}
                data={todoDescription}
                config={{
                  ckfinder: {
                    uploadUrl: '../assets/img',
                  },
                  filebrowserImageAllowedTypes: ['jpeg', 'jpg', 'png', 'gif'],
                }}
                onChange={(event, editor) => setTodoDescription(editor.getData())}
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
      <Modal show={showTodoDetailsModal} onHide={() => setShowTodoDetailsModal(false)} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Podrobnosti úkolu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTodo && (
            <div>
              <span className="fw-bold">Název úkolu:</span>
              <h5 className="text-success mb-3"> {selectedTodo.content}</h5>
              <div className="date d-flex justify-content-around">
                <span className="fw-bold">Datum vytvoření:</span>
                <p className="mb-3">{format(new Date(selectedTodo.created), 'dd.MM.yyyy')}</p>
                <span className="fw-bold">Datum dokončení:</span>
                <p className="mb-3 text-danger">{format(new Date(selectedTodo.deadline), 'dd.MM.yyyy')}</p>
              </div>
              <span className="fw-bold ">Popis úkolu:</span>
              <div className="mt-3" dangerouslySetInnerHTML={{ __html: selectedTodo.description }}></div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </Helmet>
  );
};

export default ToDo;
