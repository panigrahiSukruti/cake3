import Cake from "../models/cake.model.js"

export const getCakes = async(request, response) => {
    try {
        const result = await Cake.find();
        if(!result){
            return response.status(400).json({message: "No cakes found"})
        }
        return response.status(200).json(result);
    } catch (error) {
        console.log("Error in getCakes controller", error);
        return response.status(500).json({error: 'Internal server error'})
    }
}

export const postCakes = async(request, response) => {
    try {
       const {body: cakeData} = request;
       console.log(cakeData);
       const cake = new Cake({...cakeData});
       const result = await cake.save();
       console.log(result)
       return response.status(200).json(result);
    } catch (error) {
        console.log("Error in getCakes controller", error);
        return response.status(500).json({error: 'Internal server error'})
    }
}

export const editCakes = async(request, response)=>{
    try {
        const {id} = request.params;
        

        const cakeToBeEdited = await Cake.findById(id);
        if(!cakeToBeEdited){
            return response.status(404).json({error: "Not found"});
        }

        const result = await Cake.findOneAndUpdate({_id: id}, {...request.body}, {new: true});
        return response.status(200).json(result);
    } catch (error) {
        return response.status(500).json({error: "Internal server error"})        
    }
}

export const deleteCakes = async (request, response)=>{
    try {
        const {id} = request.params;
        

        const cakeToBedeleted = await Cake.findById(id);
        if(!cakeToBedeleted){
            return response.status(404).json({error: "Not found"});
        }

        const result = await Cake.findOneAndDelete({_id: id});
        return response.status(200).json({message:"Cake Deleted"});
    } catch (error) {
        return response.status(500).json({error: "Internal server error"})        
    }
}
