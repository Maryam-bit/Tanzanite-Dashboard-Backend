import server from "./server.js";
import apiRoutes from '../src/routes/index.js'

server.get('/', ( req, res) => {
    res.send("welcome to the Tanzanite Dashboard");
})

server.use('/api/v1', apiRoutes);

server.get('*', function(req, res){
    res.status(404).send('what??????')
    console.log('Non existing route called')
});