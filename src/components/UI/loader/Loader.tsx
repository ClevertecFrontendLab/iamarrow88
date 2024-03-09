import Lottie from "lottie-react";
import LoaderCode from '../../../assets/icons/loader.json';
import './loader.css';

const Loader = () => <Lottie
    animationData={LoaderCode}
    loop={true}
    data-test-id='loader'
    className='loader'/> ;

export default Loader;
