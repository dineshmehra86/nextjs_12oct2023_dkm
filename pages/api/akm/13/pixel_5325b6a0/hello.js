//1. import area

//2. defination area
function handler(req, res) {
    // function serailazation
    // object.method().method(actualArguement)
    res.status(200).json({
     // propety:value
        schoolname: `School ABC ${req.query.name}`,
        address: "ABC School Delhi",
        // object.property.property
        testkey:req.query.name  
    })
}

//3. export area
export default handler
