//1. Important Area

// 2. Defination Area
function handler(req, res) {
    // every function return something
    // function serialaziation
    // object.method().method(actualArgument)
    res.status(200).json({
        msg1:  `Mobile Model ${req.query.name}`,
        ref: "Oct_DLandingS_D_676e0322_5",
        th: "1",
        // obj.property.property
        testkey:req.query.name
    })
}
// Every function return something

// 3. Export Area
export default handler;