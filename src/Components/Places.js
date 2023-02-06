import React from "react";

function Places(props) {
    return (
        <div>
            <div className="place">
                <img src={`/Images/${props.item.imageUrl}`} className="place--img" alt="Mount Fuji"/>
                <div className="place--details">
                    <div className="place--location">
                        <img src="/Images/location.png" className="location--icon" alt="location" />
                        <span className="place--country">{props.item.location}</span>
                        <span><a href={`${props.item.googleMapsUrl}`}>View on Google Maps</a></span>
                    </div>
                    <h1 className="place--title">{props.item.title}</h1>
                    <div className="travel--date">
                        <span className="start--date">{props.item.startDate}</span>
                        -
                        <span className="end-date">{props.item.endDate}</span>
                    </div>
                    <div className="place--description">{props.item.description}</div>
                </div>
            </div>
            {props.item.id !== 3 && <hr />}
        </div>
    )
}

export default Places;
