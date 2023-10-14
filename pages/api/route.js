// 1. Import Area
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// 2. Define Area
function handler(req, res) {
    // Every function return something
            // function serialization
    // object.method().method(actualArgument);
                      // { Property:Value} is a Javascript object
    res.status(200).json({ 
                            msg1: `Hello1 ${req.query.name}`,
                            msg2: `Hello2`,
                            msg3: "Hello3",
                             // obj.property.property
                            testkey:req.query.name
     })
  }
  
  
  // 3. Export Area
  export default handler;