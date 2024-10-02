import {ColorRing} from "react-loader-spinner";

const Loading = () => {

    return (
        <div className="flex justify-center items-center mt-64">
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#1884FF', '#2288d0', '#34a5c3', '#49CDFF', '#49CDFF']}
            />
        </div>
    )
}

export default Loading;
