import axios from 'axios';
import 'regenerator-runtime/runtime';
// Utils functions
const sum = (a, b) => {
  return a + b;
};

const httpRequest = {
  apiUrl:
    'https://api.giphy.com/v1/gifs/search?api_key=FuK9vyHs1jaaavSCbyKexWJRkJvzn1dM&q=rick+roll&limit=1&offset=0&rating=g&lang=en',
};

// Equality test
test('Ajoutez 1 + 2 pour obtenir 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// Async Chain
it("Test async : utilisation de l'api Giphy => recherche Rick Roll et verifie que le type de retour est bien une image .gif", async () => {
  expect.assertions(1);
  await axios.get(httpRequest.apiUrl).then((res) => {
    const data = res.data.data[0];
    expect(data.type).toEqual('gif');
  });
});
