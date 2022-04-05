import React from "react";
import { Image } from "../../UI/Image/Image";

import "./BaseWorkCardImg.css";

export function BaseWorkCardImg(props) {
    return (
        <div className="baseWorkCardImg">
            <Image src="https://eurabota.com/uploads/photo_1483349982.jpg" alt="auto-repair" width="432" height="375"/>
        </div>
    );
}

