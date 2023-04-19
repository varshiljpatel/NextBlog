const express = require('express');

const HCL = {
    handleGet: (req, res) => {
        res.redirect('http://localhost:3000/');
    },
}

module.exports = HCL;