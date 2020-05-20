const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '../public'));

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`server running on port: ${PORT}`));