const Product = require("../models/product")


const getAllProducts = async (req,res)=>{
   const {Title, Actors} = req.query;
const queryObject = {};

if(Title){
queryObject.Title = Title;
}

if(Actors){
queryObject.Actors = {$regex:Actors, $options:"i"}}


const myData = await Product.find(req.query)
console.log(req.query,"mila kya")
   res.status(200).json({myData })
}

const getAllProductsTesting = async (req, res) => {
   const queryObject = {};
   let page = Number(req.query.page) || 1;
   let limit = Number(req.query.limit) || 4;
   let skip = (page - 1) * limit;

   const apiData = Product.find(queryObject).skip(skip).limit(limit);
   console.log(queryObject);

   const myData = await apiData;
   res.status(200).json({ myData, nbHits: myData.length });
};

module.exports = {getAllProducts, getAllProductsTesting}