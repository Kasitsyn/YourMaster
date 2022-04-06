import React from "react";
import "./FindMasterPreview.css";
import { Image } from "../../UI/Image/Image"

export function FindMasterPreview(props) {
    return (
        <div className="findMasterPreviewBlock">
            <div className="findMasterPreviewImg">
                <Image src="https://eurabota.com/uploads/photo_1483349982.jpg" alt="auto-repair" width="279" height="174" />
            </div>
            <div className="findMasterShortNameBlock">
                <p className="findMasterShortName">Покраска капота</p>
            </div>
        </div>
    );
}