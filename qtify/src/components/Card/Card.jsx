import React from "react";
import "./Card.css";
import { Chip, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

function Card({data, type}) {
    const getCard = (type) => {
        switch (type) {
            case "album": {
                const {image, title, follows, songs, slug} = data;
                return (
                    <Tooltip title={`${songs.length} songs`} placement="top" arrow>
                        <Link to={`/album/${slug}`}>
                            <div className="cardBannerWrapper">
                                <div className="card">
                                    <img src={image} alt="song" loading="lazy" />
                                    <div className="banner">
                                        <Chip
                                            label={`${follows} Follows`}
                                            size="small"
                                            className="chip"
                                        />
                                    </div>
    
                                </div>
                                <div className="titleWrapper">
                                    <p>{title}</p>
                                </div>
                            </div>
                        </Link>
                    </Tooltip>
                );
    
            }
            case "song": {
                const {image, likes, title} = data;
                return (
                    <div className="cardBannerWrapper">
                        <div className="card">
                            <img src={image} alt="song" loading="lazy" />
                            <div className="banner">
                                <div className="pill">
                                    <p>{likes} Likes</p>
                                </div>
                            </div>
    
                        </div>
                        <div className="titleWrapper">
                            <p>{title}</p>
                        </div>
                    </div>
                );
            }
            default:
                return <></>
        }
    }
    return getCard(type); 

}

export default Card;