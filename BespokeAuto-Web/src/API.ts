/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateInterestedInput = {
  id?: string | null,
  name?: string | null,
  email?: string | null,
  country?: string | null,
  notes?: string | null,
};

export type ModelInterestedConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  country?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelInterestedConditionInput | null > | null,
  or?: Array< ModelInterestedConditionInput | null > | null,
  not?: ModelInterestedConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Interested = {
  __typename: "Interested",
  id: string,
  name?: string | null,
  email?: string | null,
  country?: string | null,
  notes?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateInterestedInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  country?: string | null,
  notes?: string | null,
};

export type DeleteInterestedInput = {
  id: string,
};

export type ModelInterestedFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  country?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelInterestedFilterInput | null > | null,
  or?: Array< ModelInterestedFilterInput | null > | null,
  not?: ModelInterestedFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelInterestedConnection = {
  __typename: "ModelInterestedConnection",
  items:  Array<Interested | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionInterestedFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionInterestedFilterInput | null > | null,
  or?: Array< ModelSubscriptionInterestedFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateInterestedMutationVariables = {
  input: CreateInterestedInput,
  condition?: ModelInterestedConditionInput | null,
};

export type CreateInterestedMutation = {
  createInterested?:  {
    __typename: "Interested",
    id: string,
    name?: string | null,
    email?: string | null,
    country?: string | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInterestedMutationVariables = {
  input: UpdateInterestedInput,
  condition?: ModelInterestedConditionInput | null,
};

export type UpdateInterestedMutation = {
  updateInterested?:  {
    __typename: "Interested",
    id: string,
    name?: string | null,
    email?: string | null,
    country?: string | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteInterestedMutationVariables = {
  input: DeleteInterestedInput,
  condition?: ModelInterestedConditionInput | null,
};

export type DeleteInterestedMutation = {
  deleteInterested?:  {
    __typename: "Interested",
    id: string,
    name?: string | null,
    email?: string | null,
    country?: string | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetInterestedQueryVariables = {
  id: string,
};

export type GetInterestedQuery = {
  getInterested?:  {
    __typename: "Interested",
    id: string,
    name?: string | null,
    email?: string | null,
    country?: string | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInterestedsQueryVariables = {
  filter?: ModelInterestedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInterestedsQuery = {
  listInteresteds?:  {
    __typename: "ModelInterestedConnection",
    items:  Array< {
      __typename: "Interested",
      id: string,
      name?: string | null,
      email?: string | null,
      country?: string | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateInterestedSubscriptionVariables = {
  filter?: ModelSubscriptionInterestedFilterInput | null,
};

export type OnCreateInterestedSubscription = {
  onCreateInterested?:  {
    __typename: "Interested",
    id: string,
    name?: string | null,
    email?: string | null,
    country?: string | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateInterestedSubscriptionVariables = {
  filter?: ModelSubscriptionInterestedFilterInput | null,
};

export type OnUpdateInterestedSubscription = {
  onUpdateInterested?:  {
    __typename: "Interested",
    id: string,
    name?: string | null,
    email?: string | null,
    country?: string | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteInterestedSubscriptionVariables = {
  filter?: ModelSubscriptionInterestedFilterInput | null,
};

export type OnDeleteInterestedSubscription = {
  onDeleteInterested?:  {
    __typename: "Interested",
    id: string,
    name?: string | null,
    email?: string | null,
    country?: string | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
