/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInterested = /* GraphQL */ `
  mutation CreateInterested(
    $condition: ModelInterestedConditionInput
    $input: CreateInterestedInput!
  ) {
    createInterested(condition: $condition, input: $input) {
      country
      createdAt
      email
      id
      name
      notes
      product
      updatedAt
      __typename
    }
  }
`;
export const deleteInterested = /* GraphQL */ `
  mutation DeleteInterested(
    $condition: ModelInterestedConditionInput
    $input: DeleteInterestedInput!
  ) {
    deleteInterested(condition: $condition, input: $input) {
      country
      createdAt
      email
      id
      name
      notes
      product
      updatedAt
      __typename
    }
  }
`;
export const updateInterested = /* GraphQL */ `
  mutation UpdateInterested(
    $condition: ModelInterestedConditionInput
    $input: UpdateInterestedInput!
  ) {
    updateInterested(condition: $condition, input: $input) {
      country
      createdAt
      email
      id
      name
      notes
      product
      updatedAt
      __typename
    }
  }
`;
