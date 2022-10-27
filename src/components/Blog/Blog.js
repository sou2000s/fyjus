import React from "react";

const Blog = () => {
  return (
    <div className="grid md:grid-cols-3 mt-4 md:ml-10 gap-10">
      <div className="md:w-96  border-2 p-2 border-sky-500">
        <h1 className="text-2xl">what is cors?</h1>
        <p>
          Cors full form is Cross-Origin Resource Sharing <br />
          When we request from client site to server site browser check that
          request domain and server domain are not same so block the response
          this is cors. At first we have to get access from the server site to
          any website or desire client site domain. To solve this express js
          have an package called "cors" . <br />
          write this code : <br />
          const express = require("express"); const app = express(); const cors
          = require("cors") const port = process.env.PORT || 5000;
          app.use(cors());

          it will allow all the client site to access the response from the server.
        </p>
      </div>
      <div className="md:w-96 border-2  p-2 border-sky-500">
        <h1 className="text-2xl">How does the private route work?</h1>
        <p>
            private route have children props . when we saw that our user is valid or loggedin for going protected or private route then we simply return the children. In route setup just wrap the route under the private route. thats how its works"
        </p>
      </div>
      <div className="md:w-96 border-2 p-2 border-sky-500">
        <h1 className="text-2xl">Why are you using firebase? What other options do you have to implement authentication?</h1>
        <p>
          We using firebase because it provide us a smooth system and we dont want to set our own authencication system we easyly handle authencication with the help of firebse hooks . <br />
          <p>Firebase have many option in Authencication like : <br />
              <ul>
                   <li>GoogleAuthentication</li>
                   <li>Email and Password</li>
                   <li>Github</li>
                   <li>Microsoft</li>
                   <li>Play games</li> 
                   <li>Facebook ...  etc </li>

              </ul>
          </p>
        </p>
      </div>
      <div className="md:w-96 border-2 p-2 border-sky-500">
        <h1 className="text-2xl"> What is Node? How does Node work?</h1>
        Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return.
        <br />
         <p>Its accept client request and send response. Single thread handle this.  <br />
         node js works with two concept: <br />
           <ul>
            <li>Asnychronous</li>
            <li>Non-blocking I/O</li>
           </ul>
             
            <p><strong>Non-blocking I/o:</strong> Non-blocking i/o  means working with multiple requests without blocking the thread for a single request. Its intetacts with external system like file , database.Node js did not work at cpu intensive work beacause single thread can not work with cpu works </p> 
            <p><strong>Asynchronous: </strong> Node js only except the req and passed it to lets say workers this workers go to the server and came back with response. so node js is not waiting for response.  <br />
                 Libuv a open-source library hepl node js to accept request.
                 It has a strong focus on asynchronous and  I/O, this gives node access to the underlying computer operating system, file system, and networking. <br />
                 libuv implement event loop system is node js and help handle all of this . 
                 Thats how node js works.
             </p> 
         </p> 
      </div>
     
    </div>
  );
};

export default Blog;
