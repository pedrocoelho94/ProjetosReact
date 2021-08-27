export const API_URL = 'http://localhost:3001'

export function GET_USER(body) {
   return {
      url: API_URL + '/users',
      options: {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(body)
      }
   }
}