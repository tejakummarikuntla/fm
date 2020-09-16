import React from "react";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";

const Ama1 = () => {
    return (
        <div>
            <Helmet>
                <title>Dr. Justin Chan -Ask Me Anything</title>
            </Helmet>

            <Navbar />
            <br />
            <br />
            <br />
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe5eGPRK2CLspZDvk8IpooOgXEenMqHOfM4u_O4n1H0olqDIA/viewform?embedded=true" width="100%" height="1315" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    );
};

export default Ama1;
