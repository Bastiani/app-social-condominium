/**
 * @flow
 * @relayHash 65fd8909ec8aa158561dbdd75430d7a9
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AllPersonsQueryResponse = {|
  +allPersons: ?$ReadOnlyArray<?{| |}>;
|};
*/


/*
query AllPersonsQuery {
  allPersons {
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AllPersonsQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Person",
        "name": "allPersons",
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
  "name": "AllPersonsQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "AllPersonsQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Person",
        "name": "allPersons",
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
  "text": "query AllPersonsQuery {\n  allPersons {\n    ...PersonInfo_persons\n    id\n  }\n}\n\nfragment PersonInfo_persons on Person {\n  id\n  _id\n  name\n  email\n  telephone\n  address\n}\n"
};

module.exports = batch;
