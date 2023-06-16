/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addNewTodo = /* GraphQL */ `
  mutation AddNewTodo(
    $id: String!
    $ListDescription: String!
    $ListImage: String!
    $ListStatus: String!
    $ListTitle: String!
  ) {
    addNewTodo(
      id: $id
      ListDescription: $ListDescription
      ListImage: $ListImage
      ListStatus: $ListStatus
      ListTitle: $ListTitle
    ) {
      SK
      GSI1PK
      GSI1SK
      ListCreatedDate
      ListDescription
      ListImage
      ListStatus
      ListTitle
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo($pkid: String!, $skid: String!) {
    deleteTodo(pkid: $pkid, skid: $skid)
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $pkid: String!
    $skid: String!
    $ListDescription: String!
    $ListImage: String!
    $ListStatus: String!
    $ListTitle: String!
  ) {
    updateTodo(
      pkid: $pkid
      skid: $skid
      ListDescription: $ListDescription
      ListImage: $ListImage
      ListStatus: $ListStatus
      ListTitle: $ListTitle
    ) {
      SK
      GSI1PK
      GSI1SK
      ListCreatedDate
      ListDescription
      ListImage
      ListStatus
      ListTitle
    }
  }
`;
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;