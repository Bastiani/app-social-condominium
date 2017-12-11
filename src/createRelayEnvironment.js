import { Environment, Network, Store, RecordSource } from 'relay-runtime';

// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:
function fetchQuery(operation, variables, cacheConfig, uploadables) {
  return fetch('https://rafaelbastiani.com:5000/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables,
    }),
  })
    .then(response => response.json())
    .catch((err) => {
      console.log(`erro fetch ====== ${err}`);
      return 'error';
    });
}

// Create a network layer from the fetch function
const network = Network.create(fetchQuery);
const source = new RecordSource();
const store = new Store(source);

// Create an environment using this network:
const environment = new Environment({
  // other options
  network,
  store,
});

export default environment;
