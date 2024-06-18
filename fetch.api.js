import axios from "axios"

const getData = async() =>{
    try {
        const res = await axios.get("https://jsonplaceho.typicode.com/posts");
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};
export default getData;