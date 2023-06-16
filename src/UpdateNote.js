import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { getNote } from './graphql/queries';
import { updateNote } from './graphql/mutations';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateNote() {
  const [note, setNote] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(id); // To check if the id is retrieved correctly
    fetchNote();
  }, []);

  const fetchNote = async () => {
    try {
      const noteData = await API.graphql(graphqlOperation(getNote, { id }));
      setNote(noteData.data.getNote);
    } catch (error) {
      console.error('error fetching note:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedNote = {
      id: note.id,
      name: event.target.name.value,
      description: event.target.description.value,
      // include any other fields here that you want to be able to update...
    };

    try {
      await API.graphql(graphqlOperation(updateNote, { input: updatedNote }));
      navigate('/');
    } catch (error) {
      console.error('error updating note:', error);
    }
  };

  if (!note) return null;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" defaultValue={note.name} />
      </label>
      <label>
        Description:
        <input type="text" name="description" defaultValue={note.description} />
      </label>
      {/* Include form inputs for any other fields you want to be able to update... */}
      <button type="submit">Update Note</button>
    </form>
  );
}

export default UpdateNote;
