import React from "react";

function Featurebox(props) {
    return (
        <div className="a-box">
            <div className="a-b-image">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="a-b-text">
                <h2>{props.title}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, distinctio!
                </p>
            </div>
        </div>
    );
}

export default Featurebox;
