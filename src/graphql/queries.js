/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserNotes = /* GraphQL */ `
  query GetUserNotes($id: String!) {
    getUserNotes(id: $id) {
      todoList {
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
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;