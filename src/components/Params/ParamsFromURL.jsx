import { useParams } from "react-router-dom";


const Params = () => {
    const {userId} = useParams()  // object describing the user
    console.log(userId);
    return (
        <div>
        
            <h1 className="text-orange-800"> Params Example : {userId}
</h1>
            <p>
                This is a simple example of using params in React Router.
                The URL '/example/param1/param2' will render this component with the params 'param1' and 'param2' in the state.
            </p>
            <p>
                The params are accessible via the 'useParams' hook from React Router.
            </p>
            <p>
                The first parameter is 'param1' and the second parameter is 'param2'.
            </p>
        </div>
    )
}

export default Params;