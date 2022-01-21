var supertest = require('supertest')

it("GET /", async () => {
    await supertest('http://localhost:3000').get('/')
    .expect(200)
    .then(res => {
        console.log(res.body)
    })
})

// it("POST /", async () => {
//     await supertest('http://localhost:3000').post('/').send({
//         "id" : 2,
//         "name" : "Rahul"
//     })
//     .expect(200)
//     .then(res => {
//         console.log(res.body)
//     })
// })

// it("PUT /2", async () => {
//     await supertest('http://localhost:3000').put('/3').send({
//         "name" : "Niral"
//     })
//     .expect(200)
//     .then(res => {
//         console.log(res.body)
//     })
//     .catch(err => {
//         console.log(err.message)
//     })
// })