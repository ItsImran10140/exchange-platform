const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();
const app = express();

const targetUrl = process.env.API_TARGET_URL || '';

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization', 'Accept');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Expose-Headers', 'Content-Length, Content-Range');
    next();
});

app.use('/', createProxyMiddleware({
    target: targetUrl,
    changeOrigin: true,
    onProxyReq: (proxyReq, req, res) => {},
    onProxyRes: (proxyRes, req, res) => {}
}));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Proxy server running on http://localhost:${port}`);
});
