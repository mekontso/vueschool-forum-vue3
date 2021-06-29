let fetchResource = (resource, id) => fetch(`/api/${resource}/${id}`)


let fetchUser = function (id) {
  return fetchResource('users', id)
}

let makeFetcher = (resource) => (id) => fetchResource(resource, id)
let fetchTheater = makeFetcher('theaters')
