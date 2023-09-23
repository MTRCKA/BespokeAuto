/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInterested = /* GraphQL */ `
  query GetInterested($id: ID!) {
    getInterested(id: $id) {
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
export const listInteresteds = /* GraphQL */ `
  query ListInteresteds(
    $filter: ModelInterestedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInteresteds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        country
        notes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
