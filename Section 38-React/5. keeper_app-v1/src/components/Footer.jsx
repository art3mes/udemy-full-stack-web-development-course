import React from  "react";

console.log(new Date().getFullYear)
function Footer(){
    return (
        <footer>
            <p>copyright {new Date().getFullYear()}</p>
        </footer>
    );
}


export default Footer;