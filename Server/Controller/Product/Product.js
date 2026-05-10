const { ProductModel } = require("../../Modle/BestSeller/BestSeller");


const GetProduct = async (req, res) => {
    try{
        const responce = await ProductModel.find();
        res.send({
            status: 0,
            messaged: "Product Get Success",
            data:responce,
        })
    }
    catch(error){
         res.send({
            status: 0,
            messaged: "Product Get failed",
            error: error.message
        })
    }
}

const GetWebProduct = async (req, res) => {
    try{
        const responce = await ProductModel.find({isActive:true});
        res.send({
            status: 0,
            messaged: "Product Get Success",
            data:responce,
        })
    }
    catch(error){
         res.send({
            status: 0,
            messaged: "Product Get failed",
            error: error.message
        })
    }
}
const PostProduct = async (req, res) => {
    try {
        const { title, description, weight, stock, price, ingredients,category, productType } = req.body;
        console.log(req.files)
        // const {mainimage,subimage} = req.file;
        const data = new ProductModel({
            title, description, weight, stock, price, category,
            productType,
            ingredients, subimage: [
                req.files[0].path,req.files[1].path,req.files[2].path,req.files[3].path
            ],
            
        })
        const responce = await data.save();
        res.send({
            status: 1,
            messaged: "Product Success full add",
            responce
        })
    }
    catch (error) {
        res.send({
            status: 0,
            messaged: "Product failed",
            error: error.message
        })
    }
}

module.exports = { GetProduct,PostProduct ,GetWebProduct}