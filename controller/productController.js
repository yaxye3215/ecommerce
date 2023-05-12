import product from "../models/productsmodel.js";


export const createproduct = async(req , res)=>{
    const {name, description,image,category,price,countInStock} = req.body;

    const Product = await product.create({
        name, description,image,category,price,countInStock

    });

    if (Product) {
        res.statusCode(201).json(createproduct)
        
    }else{
        res.statusCode(400).json({Message: "product not created"})
    }
}

export const updateProduct = async (req, res) => {
    const {name, description,image,category,price,countInStock} = req.body;

    const { id} = req.params
    const Product =  await product.findById(id)

    if (Product) {
        Product.name = name
        Product.description = description
        Product.image = image
        Product.category = category
        Product.price = price
        Product.countInStock = countInStock
        
       

        
    }else{
        res.statusCode(404).json({Message: "product not found"})
    }
    const updatedproduct = await Product.save()

    if (updatedproduct) {
        res.statusCode(201).json(updatedproduct)
        
    }
}

export const deleteProduct = async(req, res)=>{
    const { id} = req.params
    const Product =  await product.findByIdAndDelete(id)
    if (Product) {
        res.statusCode(200).json({Message: "product product deleted"})
        
    }


}