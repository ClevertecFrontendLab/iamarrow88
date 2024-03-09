import Loader from "@components/UI/loader/Loader.tsx";
import './loader-wrapper.css';

const LoaderWrapper = ({ className }: { className: string }) => {
    return (
        <div className={"loader-wrapper " + className}>
            <Loader />
        </div>
    );
};

export default LoaderWrapper;
