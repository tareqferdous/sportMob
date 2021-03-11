import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPodcast, faFlag, faFutbol, faTransgender, faFacebook} from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import './TeamDetails.css';
import facebook from '../../image/Facebook.png';
import twitter from '../../image/Twitter.png';
import youtube from '../../image/YouTube.png';
import Male from '../../image/male.png';
import Female from '../../image/female.png';

const TeamDetails = () => {
    const {idTeam} = useParams();
    
    const [league, setLeague] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setLeague(data.teams[0]))
    }, [])

    return (
        <div className="container-fluid team-details">
           <div className="row">
                <div className="col-md-12 banner">
                <img className='w-25' src={league.strTeamBadge} alt=""/>   
                </div>
           </div>
            <div className="row pt-4 details">
                <div className="container">
                    <div className="row details-border">
                        <div className="col-md-6 pl-5 team-info">
                        <h2>{league.strAlternate}</h2>
                        <p><FontAwesomeIcon icon={faPodcast} /> Founded: {league.intFormedYear +'s'}</p>
                        <p><FontAwesomeIcon icon={faFlag} /> Country: {league.strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol} /> Sports Type: {league.strSport}</p>
                        <p><FontAwesomeIcon icon={faTransgender} /> Gender: {league.strGender}</p>
                        </div>

                        <div className="col-md-6 conditional-img">
                            {
                                league.strGender === 'Male'? <img className="img-fluid" src={Male} alt=""/>:<img className="img-fluid"src={Female} alt=""/>
                            }
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                <div className=" row pl-5 pr-5 pt-4">
                    <div className="col-md-6">
                        <p>{league.strDescriptionEN}</p><br/>

                        <p>{league.strStadiumDescription}</p>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid mt-3 w-100" src={league.strStadiumThumb} alt=""/>
                        <p className="text-center mt-2" style={{color: '#fff'}}>Stadium: {league.strStadium}</p>
                        <img className="img-fluid mt-3 w-100" src={league.strTeamFanart4} alt=""/>
                        <p className="text-center mt-2" style={{color: '#fff'}}>Fan Gallery</p>
                    </div>                   
                </div>
                </div>
                <div className="text-center pt-5 social">
                    <a href={`https://${league.strTwitter}`} target="_blank"><img src={twitter} alt=""/></a>
                    <a href={`https://${league.strFacebook}`}target="_blank"><img src={facebook} alt=""/></a>
                    <a href={`https://${league.strYoutube}`}target="_blank"><img src={youtube} alt=""/></a>
                </div>
            </div>         
        </div>
    );
};

export default TeamDetails;