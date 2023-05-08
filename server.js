#!/usr/bin/env node

import minimist from 'minimist';
import express from 'express';
import {rps, rpsls} from './lib/rpsls.js';

const argv = minimist(process.argv.slice(2));
const app = express();
const port = argv.port || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Check endpoint
app.get('/app/', (req, res) => {
  res.status(200).send('200 OK');
});

app.get('/app/rps', (req, res) => {
  res.status(200).send(rps());
});
app.get('/app/rpsls/', (req, res) => {
  res.status(200).json(rpsls());
});

app.get("/app/rps/play", (req,res) => {
    res.status(200).json(rps(req.query.shot));
});

app.get("/app/rpsls/play", (req,res) => {
    res.status(200).json(rpsls(req.query.shot));
});
app.post("/app/rps/play", (req,res) => {
    res.status(200).json(rps(req.body.shot));
});

app.post("/app/rpsls/play", (req,res) => {
    res.status(200).json(rpsls(req.body.shot));
});

app.get("/app/rps/play/:shot", (req,res) => {
    res.json(rps(req.params.shot));
    res.status(200);
});

app.get("/app/rpsls/play/:shot", (req,res) => {
    res.json(rpsls(req.params.shot));
    res.status(200);
});
// Default endpoint for undefined routes
app.get("*", (req, res) => {
                  res.status(404).send("404 NOT FOUND");
})

const server=app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});