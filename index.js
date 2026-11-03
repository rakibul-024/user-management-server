import express from 'express';
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Users are coming soon');
});
const users = [
  {id:1,name:'John Doe',email:'john.doe@example.com'},
  {id:2,name:'Jane Smith',email:'jane.smith@example.com'},
  {id:3,name:'Bob Johnson',email:'bob.johnson@example.com'},
  {id:4,name:'Alice Williams',email:'alice.williams@example.com'},
  {id:5,name:'Michael Brown',email:'michael.brown@example.com'},
  {id:6,name:'Emily Davis',email:'emily.davis@example.com'},
  {id:7,name:'David Wilson',email:'david.wilson@example.com'},
  {id:8,name:'Sarah Miller',email:'sarah.miller@example.com'},
  {id:9,name:'James Taylor',email:'james.taylor@example.com'},
  {id:10,name:'Olivia Anderson',email:'olivia.anderson@example.com'},
  {id:11,name:'William Thomas',email:'william.thomas@example.com'},
  {id:12,name:'Sophia Jackson',email:'sophia.jackson@example.com'},
  {id:13,name:'Daniel White',email:'daniel.white@example.com'},
  {id:14,name:'Isabella Harris',email:'isabella.harris@example.com'},
  {id:15,name:'Matthew Martin',email:'matthew.martin@example.com'},
  {id:16,name:'Mia Thompson',email:'mia.thompson@example.com'},
  {id:17,name:'Christopher Garcia',email:'christopher.garcia@example.com'},
  {id:18,name:'Amelia Martinez',email:'amelia.martinez@example.com'},
  {id:19,name:'Andrew Robinson',email:'andrew.robinson@example.com'},
  {id:20,name:'Charlotte Clark',email:'charlotte.clark@example.com'}
];
app.get('/users', (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});