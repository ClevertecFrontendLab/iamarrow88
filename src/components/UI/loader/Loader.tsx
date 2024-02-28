import Lottie from "lottie-react";
import LoaderCode from '../../../assets/icons/loader.json';

const Loader = () => <Lottie animationData={LoaderCode} loop={true} data-test-id='loader'/> ;

export default Loader;
