import { useEffect } from "react";
import { getCabins } from "../services/apiCabins";

function Cabins() {
    useEffect(() => {
        getCabins().then(data => console.log(data));
    });
    return (
        <div>
            {/* const { id, created_at, description, discount, imgUrl, maxCap, name, price } = cabin; */}
        </div>
    );
}

export { Cabins };
