import express from 'express';
import cors from 'cors';
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
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
];
app.get('/users', (req, res) => {
  res.send(users);
});

app.post('/users',(req,res)=>{
  console.log('data from client',req.body);
  res.send({success:true,message:'User added successfully'})

});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});