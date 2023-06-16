import { API, Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserNotes } from './graphql/queries';
import { addNewTodo, updateTodo, deleteTodo } from "./graphql/mutations";
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import NoteForm from './NoteForm';

function Template() {
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [showFormCreate, setShowFormCreate] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [currentNoteSKId, setCurrentNoteSKId] = useState('');
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteConfirmText, setDeleteConfirmText] = useState("");
  const [noteToDelete, setNoteToDelete] = useState("");

  // fetch notes when component mounts
  useEffect(() => {
    if(userEmail !== "") {
        fetchNotes();
    }
}, [userEmail]);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userInfo = await Auth.currentAuthenticatedUser();
        setUserEmail(userInfo.attributes.email);
      } catch (error) {
        console.error('error fetching user info:', error);
      }
    };
    fetchUser();
  }, []);

  // function to handle button click to update note
  const handleButtonClick = (noteSKId) => {
    const realnoteSKId = noteSKId.substring(2);
    setShowForm(true);
    setCurrentNoteSKId(realnoteSKId);
  };

  // function to handle submission of update form
  const handleSubmitForm = async (formData) => {
    const { ListDescription, ListImage, ListStatus, ListTitle } = formData;
    await API.graphql({
      query: updateTodo,
      variables: {
        pkid: userEmail,
        skid: currentNoteSKId,
        ListDescription: ListDescription,
        ListImage: ListImage,
        ListStatus: ListStatus,
        ListTitle: ListTitle
      },
    });
    // refresh notes after update
    fetchNotes();
    // hide form after submission
    setShowForm(false);
    setCurrentNoteSKId('');
  };

  // function to handle button click to create note
  const handleButtonClickCreate = () => {
    setShowFormCreate(true);
  };

  // function to handle submission of create form
  const handleSubmitFormCreate = async (formData) => {
    const { ListDescription, ListImage, ListStatus, ListTitle } = formData;
    await API.graphql({
      query: addNewTodo,
      variables: {
        id: userEmail,
        ListDescription: ListDescription,
        ListImage: ListImage,
        ListStatus: ListStatus,
        ListTitle: ListTitle
      },
    });
    // refresh notes after creation
    fetchNotes();
    // hide form after submission
    setShowFormCreate(false);
  };

  // function to handle form cancellation
  const handleCancelForm = () => {
    setShowForm(false);
    setShowFormCreate(false);
  };

  // function to fetch notes
  async function fetchNotes() {
    const apiData = await API.graphql({
      query: getUserNotes,
      variables: { id: userEmail },
    });
    const notesFromAPI = apiData.data.getUserNotes.todoList;
    await Promise.all(notesFromAPI.map(async (note) => note));
    setNotes(notesFromAPI);
  }

  const handleDeleteConfirmation = (SK) => {
    setNoteToDelete(SK);
    setConfirmDelete(true);
  }

  const handleConfirmDeleteChange = (event) => {
    setDeleteConfirmText(event.target.value);
  }

  const confirmDeleteNote = () => {
    if (deleteConfirmText === "Delete") {
      deleteNote(noteToDelete);
      setConfirmDelete(false);
      setDeleteConfirmText("");
    } else {
      alert("Please enter 'Delete' to confirm deletion.");
    }
  }

  const cancelDeleteConfirmation = () => {
    setConfirmDelete(false);
    setDeleteConfirmText("");
    setNoteToDelete("");
  }

  const deleteNote = async (SK) => {
    const realnoteSKId = SK.substring(2);
    const newNotes = notes.filter((note) => note.SK !== SK);
    setNotes(newNotes);
    await API.graphql({
      query: deleteTodo,
      variables: { 
        pkid: userEmail, 
        skid: realnoteSKId
      },
    });
  }

  // sign out function
  const signOut = () => {
    Auth.signOut()
      .then(() => navigate('/')) // Navigate back to Home page
      .catch((error) => console.log('error signing out:', error));
  };

  // extract username from email
  const username = userEmail.split("@")[0];

  return (
    <div>
      <h1>Hello, {username}!</h1>
      <View className="App">
        <Heading level={1}>My Notes App</Heading>
        <Button onClick={handleButtonClickCreate}>Create</Button>
        {showFormCreate && (
          <NoteForm onSubmit={(formData) => handleSubmitFormCreate(formData)} onCancel={handleCancelForm} />
        )}
        <Heading level={2}>Current Notes</Heading>
        <View margin="3rem 0">
          {notes.map((note) => (
            <Flex
              key={note.SK}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Text as="span" fontWeight={700} style={{color: 'skyblue'}}>{note.GSI1PK}</Text>
              <Text as="span" fontWeight={700} style={{color: 'skyblue'}}>{note.GSI1SK}</Text>
              <Text as="span" fontWeight={700} style={{color: 'skyblue'}}>{note.ListCreatedDate}</Text>
              <Text as="span" fontWeight={700} style={{color: 'skyblue'}}>{note.ListDescription}</Text>
              <Text as="span" fontWeight={700} style={{color: 'skyblue'}}>{note.ListImage}</Text>
              <Text as="span" fontWeight={700} style={{color: 'skyblue'}}>{note.ListStatus}</Text>
              <Text as="span" fontWeight={700} style={{color: 'skyblue'}}>{note.ListTitle}</Text>
              <Button onClick={() => handleButtonClick(note.SK)}>Update</Button>
              <Button onClick={() => handleDeleteConfirmation(note.SK)}>Delete</Button>
            </Flex>
          ))}
          {showForm && (
            <NoteForm onSubmit={(formData) => handleSubmitForm(formData)} onCancel={handleCancelForm} />
          )}
        </View>
        {confirmDelete && (
        <View>
          <Text style={{ color: 'white' }}>Are you sure that you want to delete this to-do list?</Text>
          <Text style={{ color: 'white' }}>If so, please type in "Delete" below.</Text>
          <TextField
            onChange={handleConfirmDeleteChange}
            value={deleteConfirmText}
            placeholder="Type 'Delete' here"
          />
          <Button onClick={confirmDeleteNote}>Confirm Delete</Button>
          <Button onClick={cancelDeleteConfirmation}>Cancel</Button>
        </View>
      )}
      </View>
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default Template;
