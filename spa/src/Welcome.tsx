import axios from "axios";
import { useEffect, useState } from "react";

const WELCOME_URL = "http://api.training.com/api/welcome";

function Welcome() {
    const [data, setData] = useState();

    const fetchWelcome = async () => {
        try {
            const resp = await axios.get(WELCOME_URL);
            setData(resp.data);
        } catch(e) {
            throw e;
        }
    }

    useEffect(() => {
        fetchWelcome();
    }, [])

    return (
        <div>
            <h3>{data}</h3>
        </div>
    )
}

export default Welcome;