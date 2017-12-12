/**
 * @flow
 * @relayHash 932661a27248f03e05b88969fd66c75f
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type PersonsQueryResponse = {|
  +persons: ?$ReadOnlyArray<?{| |}>;
|};
*/


/*
query PersonsQuery(
  $name: String!
) {
  persons(name: $name) {
    ...PersonInfo_persons
    id
  }
}

fragment PersonInfo_persons on Person {
  id
  _id
  name
  email
  telephone
  address
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "name",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PersonsQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name",
            "type": "String"
          }
        ],
        "concreteType": "Person",
        "name": "persons",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "PersonInfo_persons",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "PersonsQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "name",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "PersonsQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name",
            "type": "String"
          }
        ],
        "concreteType": "Person",
        "name": "persons",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "Person",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "_id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "email",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "telephone",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "address",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query PersonsQuery(\n  $name: String!\n) {\n  persons(name: $name) {\n    ...PersonInfo_persons\n    id\n  }\n}\n\nfragment PersonInfo_persons on Person {\n  id\n  _id\n  name\n  email\n  telephone\n  address\n}\n"
};

module.exports = batch;
