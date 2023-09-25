/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInterested = /* GraphQL */ `
  query GetInterested($id: ID!) {
    getInterested(id: $id) {
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
export const listInteresteds = /* GraphQL */ `
  query ListInteresteds(
    $filter: ModelInterestedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInteresteds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
