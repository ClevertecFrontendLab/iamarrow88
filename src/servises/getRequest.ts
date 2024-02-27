import axios from 'axios';
export default function getRequest(url: string) {
    axios.get(url).then(res => console.log(res))
}
