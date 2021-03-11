import React, { useEffect, useState } from 'react';
import SingleTeam from '../SingleTeam/SingleTeam';

const Home = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
        .then(response => response.json())
        .then(data => setLeagues(data.teams))
    }, [])

    return (
        <div>
            <div className="container-fluid">
             <div className="row">
                <div className="col-md-12 header-img">                  
                   <h1 className="header-text">Welcome To SportMob</h1>
                </div>
             </div>
           </div>
            <div className="container-fluid">
            <div className="row background">
                <div className="container">
                    <h2 className="pt-3 pb-3 text-center heading">Select Your Favorite Team</h2>
                    <div className="row">
                    {
                    leagues.map(league => <SingleTeam league={league}></SingleTeam>)
                    }
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Home; 