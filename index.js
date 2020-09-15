const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const PORT = process.env.PORT || 5000;
const path = require('path');
const app = express();
const API_URI = 'https://api.exchangeratesapi.io';

app.use(express.json());
app.use(cors());

app.get('/latest', async(req, res) => {
    try {
        const api_url = `${API_URI}/latest`;
        const fetch_res = await fetch(api_url);
        const json = await fetch_res.json();
        res.json(json);
    } catch (err) {
        console.error(err.message);
    }
})

app.get('/:date', async(req, res) => {
    try {
        const { date } = req.params;
        const api_url = `${API_URI}/${date}`;
        const fetch_res = await fetch(api_url);
        const json = await fetch_res.json();
        res.json(json); 
    } catch (err) {
        console.error(err.message); 
    }
})

app.get('/latest/base/:base', async(req, res) => {
    try {
        const { base } = req.params;
        const api_url = `${API_URI}/latest?base=${base}`;
        const fetch_res = await fetch(api_url);
        const json = await fetch_res.json();
        res.json(json); 
    } catch (err) {
        console.error(err.message); 
    }
})

app.get('/latest/symbols/:symbols', async(req, res) => {
    try {
        const { symbols } = req.params;
        const api_url = `${API_URI}/latest?symbols=${symbols}`
        const fetch_res = await fetch(api_url);
        const json = await fetch_res.json();
        res.json(json); 
    } catch (err) {
        console.error(err.message); 
    }
})

app.get('/history/startdate/:sdate/enddate/:edate', async(req, res) => {
    try {
        const { sdate, edate } = req.params;
        const api_url = `${API_URI}/history?start_at=${sdate}&end_at=${edate}`
        const fetch_res = await fetch(api_url);
        const json = await fetch_res.json();
        res.json(json); 
    } catch (err) {
        console.error(err.message); 
    }
})

app.get('/history/startdate/:sdate/enddate/:edate/symbols/:symbols', async(req, res) => {
    try {
        const { sdate, edate, symbols } = req.params;
        const api_url = `${API_URI}/history?start_at=${sdate}&end_at=${edate}&symbols=${symbols}`
        const fetch_res = await fetch(api_url);
        const json = await fetch_res.json();
        res.json(json); 
    } catch (err) {
        console.error(err.message); 
    }
})

app.get('/history/startdate/:sdate/enddate/:edate/base/:base', async(req, res) => {
    try {
        const { sdate, edate, base } = req.params;
        const api_url = `${API_URI}/history?start_at=${sdate}&end_at=${edate}&base=${base}`
        const fetch_res = await fetch(api_url);
        const json = await fetch_res.json();
        res.json(json); 
    } catch (err) {
        console.error(err.message); 
    }
})

app.get('*', async(req, res) => {
    try {
        res.sendFile(path.join(__dirname, "index.html"));
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})