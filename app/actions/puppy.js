const apiUrl = '';


export function findAllComplete(data = []) {
  return {
  type: 'PUPPY@FINDALL_COMPLETE',
  data
};
}

export function findAll() {
    return dispatch => fetch(apiUrl).then(data => data.json())
    .then((response) => {
      dispatch(findAllComplete(response));
    });
