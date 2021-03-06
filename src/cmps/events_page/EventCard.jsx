import React, {useState} from "react"
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from '@mui/icons-material/LinkedIn';




const EventCard = (props) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (

        <div className="event-card">

            <Card className="card">
                <CardMedia
                    className="card-img"
                    component="img"
                    height="200"
                    alt="founderImg"
                    image={props.event.img}
                />
                <Link to='\'>
                <IconButton className="inButton" >
                    <LinkedInIcon className="inIcon" fontSize="medium" />
                </IconButton>
                </Link>

                <CardActions className="card-footer">

                    <h2 className="date_HL">{props.event.date + ' ' + props.event.day}</h2>

                    <span className="time_HL">בשעה {props.event.hour}</span>

                    <h2 className="subject_HL"> {props.event.subject} </h2>

                    <hr />
                    
                    <h4 className="lecture_HL">מציג: {props.event.lecturer} </h4>
                    
                    <span className="video">
                        <span className="videoIcon"></span>
                        קישור יישלח בסמוך לשעה
                    </span>

                    <input type="button" value="הירשם עכשיו" className="events-button" />
                </CardActions>
            </Card>
        </div>
    )

}

export default EventCard