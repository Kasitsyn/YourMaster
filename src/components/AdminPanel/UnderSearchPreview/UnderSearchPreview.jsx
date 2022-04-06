import React from "react";
import "./UnderSearchPreview.css";
import { Image } from "../../UI/Image/Image"

export function UnderSearchPreview(props) {
    return (
        <div className="underSearchPreviewBlock">
            <div className="underSearchPreviewImg">
                <Image src="https://eurabota.com/uploads/photo_1483349982.jpg" alt="auto-repair" width="279" height="174" />
            </div>
            <p className="underSearchShortName">Покраска двери</p>
            <div className="underSearchDatePriceBlock">
                <div>
                    <p>20.04.2022</p>
                </div>
            </div>
        </div>
    );
}