const Product=require('../productModel/productModel.js')

//logic

const getProducts=async(req,res)=>
{
    try{
            const allproducts= await Product.find()
            if(!allproducts || allproducts.length===0){
                res.json({
                    message:"there is no product"
                })
            }
            //if we have product  
            res.status(500).json({
                success:true,
                products:allproducts
            })
            
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}
    //create 
    const createProduct=async(req,res)=>

        {
            const { name, price, description, category } = req.body;

            if (!name || !price || !description || !category) {
                return res.status(400).json({
                    success: false,
                    message: 'All fields (name, price, description, category) are required.'
                });
            }
        try{
            //   const {name,price,description,category}=req.body;
              const newProduct=new Product({name,price,description,category})
             
              await newProduct.save(newProduct)
              console.log(newProduct)
              res.status(200).json({
                success:true,
                // products:newProduct

              })

        }
        catch(err){
            res.status(500).json({
                success:false,
                message:err.message
            })
        }
    }


const updateProducts=async(req,res)=>{
    try{

        const {id}=req.body;
        const{name,price,description,category}=req.body;
        const updateproducts=await Product.findByIdAndUpdate(id,{name,price,description,category},{new:true})
        if(!updateproducts){
            res.json("data not updated")
        }
        else{
            res.status(200).json({
                success:true,
                message:"data updated",
                //products:updateproducts
            })
        }
    }catch(err){
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}

const deleteProduct=async(req,res)=>{
    try{
        const{id}=req.params;
        const deleteproduct=await Product.findByIdAndDelete(id)
        if(!deleteproduct){
            res.json({
                message:"no data"
            })
        }
        else{
            res.json({
                message:"deleted"
            })
        }
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}

module.exports={getProducts,createProduct,updateProducts,deleteProduct}


