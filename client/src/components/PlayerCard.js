import React from "react";

export default function PlayerCard(props) {
    return (
        <div className="player-card">
            {props.player_data.map(player => (
                <div className="card-container" key={player.id}>
                    <h2>{player.name}</h2>
                    <h3>{player.country}</h3>
                </div>
            ))}
        </div>
    )
}