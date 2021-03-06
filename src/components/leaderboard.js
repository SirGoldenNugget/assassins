import React, { useEffect, useState } from "react";
import axios from "axios";
import getKDRatio from "../helpers/getKDRatio";

export default function Profile() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        let isMounted = true;
        axios.get("/api/leaderboard", { withCredentials: true })
            .then(res => {
                if (res.status === 200) {
                    isMounted && setPlayers(res.data.map(player =>
                        <tr key={player.username}>
                            <td>{player.rank}</td>
                            <td>{player.username}</td>
                            <td>{player.wins}</td>
                            <td>{player.elims}</td>
                            <td>{player.deaths}</td>
                            <td>{getKDRatio(player.elims, player.deaths)}</td>
                        </tr>
                    ));
                }
            })
            .catch(err => {
                console.log(err);
            });
        return () => { isMounted = false };
    }, []);

    return (
        <React.Fragment>
            <h3>Leaderboard</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Name</th>
                        <th scope="col">Wins</th>
                        <th scope="col">Kills</th>
                        <th scope="col">Deaths</th>
                        <th scope="col">K/D</th>
                    </tr>
                </thead>
                <tbody>
                    {players}
                </tbody>
            </table>
        </React.Fragment>
    );
}