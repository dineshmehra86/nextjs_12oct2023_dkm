// 1. Import Area


// 2. Defination Area
function handler(req, res) {
    // function serialization
    // object.method().method(actualArgument)
res.status(200).json({
    discount : {
        // P:V
        offer1: "1440 Rs",
        offer2: "1000 Rs",
        offer3: `Best Offer ${req.query.name}`,
        // object.propert.property
        bestoffer: req.query.name
    }
})
}

// 3. Export Area
export default handler;