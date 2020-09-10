import React from "react";

import '../styles/main-card.scss';

interface MainCardProps {
    img?: string;
}

const MainCard = ({ img }: MainCardProps) => {
    return (
        <div className="card-container">
            <div className="img">

            </div>
        </div>
    )
}

export default MainCard
