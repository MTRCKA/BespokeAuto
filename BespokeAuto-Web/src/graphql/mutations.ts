/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInterested = /* GraphQL */ `
  mutation CreateInterested(
    $input: CreateInterestedInput!
    $condition: ModelInterestedConditionInput
  ) {
    createInterested(input: $input, condition: $condition) {
      id
      name
      email
      country
      notes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateInterested = /* GraphQL */ `
  mutation UpdateInterested(
    $input: UpdateInterestedInput!
    $condition: ModelInterestedConditionInput
  ) {
    updateInterested(input: $input, condition: $condition) {
      id
      name
      email
      country
      notes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteInterested = /* GraphQL */ `
  mutation DeleteInterested(
    $input: DeleteInterestedInput!
    $condition: ModelInterestedConditionInput
  ) {
    deleteInterested(input: $input, condition: $condition) {
      id
      name
      email
      country
      notes
      createdAt
      updatedAt
      __typename
    }
  }
`;
