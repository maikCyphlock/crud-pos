// api.test.js
import { test, expect } from 'vitest'

test('GET /', async () => {
  const response = await fetch('http://localhost:3000/')
  const data = await response.text()
  expect(response.status).toBe(200)
  expect(data).toBe('Hello World')
})
// api.test.js

test('GET /USERS', async () => {
  const response = await fetch('http://localhost:3000/users')
  const data = await response.json()
  expect(response.status).toBe(200)
  // Aquí puedes verificar la estructura de los datos devueltos
})

test('POST /create', async () => {
  const response = await fetch('http://localhost:3000/users/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'test_maikol',
      email: 'test_maikol@gmail.com',
      password: 'test_maikol'
    })
  })
  const data = await response.json()
  expect(response.status).toBe(201)
  console.log(data)

  // Aquí puedes verificar la estructura de los datos devueltos
})
