import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <>
            <p>Opps! Nothing Found~~</p>
        </>
    )
}

export default Error