import Axios from 'axios';
export default {
    async getRandomShow(){
        let id = parseInt((Math.random()*40000) + 1)
        try{
            const response = await Axios.get(`https://api.jikan.moe/v3/anime/${id}`)
            console.log(response.data);
            return response.data;
        }
        catch(err){
            console.log(err);
            return this.getRandomShow();
        }
    }
}