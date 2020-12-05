function setCorsHeader(req, res, next) {
    // “no-cache” directive, according to the RFC, tells the browser that it should
    // revalidate with the server before serving the page from the cache
    res.setHeader('Access-Control-Allow-Origin','*')
    next()
  }
  
export default setCorsHeader;