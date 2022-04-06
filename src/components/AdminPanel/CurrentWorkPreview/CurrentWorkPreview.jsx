import React from "react";
import "./CurrentWorkPreview.css";
import { Image } from "../../UI/Image/Image"

export function CurrentWorkPreview(props) {
    return (
        <div className="currentWorkPreviewBlock">
            <div className="currentWorkPreviewImg">
                <Image src="https://eurabota.com/uploads/photo_1483349982.jpg" alt="auto-repair" width="279" height="174" />
            </div>
            <p className="currentWorkShortName">Покраска двери</p>
            <div className="currentWorkDatePriceBlock">
                <div>
                    <p>20.04.2022</p>
                </div>
                <div>
                    <p><span>$250</span></p>
                </div>
            </div>
        </div>
    );
}