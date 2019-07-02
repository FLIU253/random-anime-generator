import Axios from 'axios';
export default {
    async getUserAnimeList(user){
        try{
            const response = await Axios.get(`https://api.jikan.moe/v3/user/${user}/animelist/all`)
            console.log(response.data);
            return response.data;
        }
        catch(err){
            console.log(err);
            return [];
        }
    }
}