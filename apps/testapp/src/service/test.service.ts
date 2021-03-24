function example1 () {
  const jsonwt = require('jsonwebtoken')
  const token1 = jsonwt.sign({password: 123}, 'secret', {some: 'params'})
}

function example2 () {
  // ruleid: jwt-exposed-credentials
  const jsonwt = require('jsonwebtoken')
  const payload = {one: 1, two: 2, password: 123}
  const token1 = jsonwt.sign(payload, 'secret', {some: 'params'})
}

function example3 () {
  // ruleid: jwt-exposed-credentials
  const jsonwt = require('jsonwebtoken')
  let payload;
  payload = {one: 1, two: 2, password: 123}
  const token1 = jsonwt.sign(payload, 'secret', {some: 'params'})
}
