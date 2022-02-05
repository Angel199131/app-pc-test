import 'regenerator-runtime/runtime'

const signIn = async (user) => {

  let response = await fetch('/api/sign-in', {
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  },
  credentials: 'include',
  body: JSON.stringify(user)
  })

  return await response.json()
}

export {signIn}