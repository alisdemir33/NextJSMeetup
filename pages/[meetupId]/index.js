import { Fragment } from "react"
import MeetupDetail from "../../components/meetups/MeetupDetail"

const MeetupDetailPage = () =>{

    return <MeetupDetail 
    title ='A First Meetup '
    image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
    address ='Some address 5, 12345 Some City'
    description ='This is a first meetup!'    
    ></MeetupDetail>
}

export default MeetupDetailPage;