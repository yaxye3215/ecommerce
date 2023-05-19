import product from "../models/productsmodel.js";


export const createproduct = async(req , res)=>{
    try{const {name, description,image,category,price,countInStock} = req.body;

    const Product = await product.create({
        name, description,image,category,price,countInStock

    });

    if (Product) {
        res.status(201).json(createproduct)
        
    }else{
        res.status(400).json({Message: "product not created"})
    }}catch(error){
        res.status(500).json({error: error.Message})


    }
}

export const updateProduct = async (req, res) => {
   try{ const {name, description,image,category,price,countInStock} = req.body;

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
       res.status(404).json({Message: "product not found"})
   }
   const updatedproduct = await Product.save()

   if (updatedproduct) {
       res.status(201).json(updatedproduct)
       
   }}catch(error){
    res.status(500).json({error: error.Message})

   }
}

export const deleteProduct = async(req, res)=>{
   try{ const { id} = req.params
   const Product =  await product.findByIdAndDelete(id)
   if (Product) {
       res.statusCode(200).json({Message: "product product deleted"})
       
   }}catch(error){

    res.status(500).json({error: error.Message})
   }


}

export const getProducts = async (req, res)=>{
    try {
        const products = await product.find()
    res.json(products)
        
    } catch (error) {
        res.status(500).json({error: error.Message})

        
    }
}