import React, { useEffect } from "react";

import { BlogHomePage } from "./styles";

function Blog() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <BlogHomePage>
            Information
        </BlogHomePage>
    );
}

export default Blog;