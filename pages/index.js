// our-domain.com/

import { useState, useEffect } from 'react';
import MeetupList from "@/components/meetups/MeetupList";
const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'A First MeetUp',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg',
        address: 'Agra, India',
        description: 'This is the first meetup in Arga'
    },
    {
        id: 'm2',
        title: 'A Second MeetUp',
        image: 'https://images.livemint.com/img/2019/12/26/1600x900/ranchi_1577382578748.jpg',
        address: 'Ranchi, India',
        description: 'This is the second meetup in Ranchi'
    },
    {
        id: 'm3',
        title: 'A Third MeetUp',
        image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/c8/3a.jpg',
        address: 'Mumbai, India',
        description: 'This is the third meetup in Mumbai'
    }
]
function HomePage(props) {
    //const [loadedMeetups, setLoadedMeetups] = useState();
    // useEffect(() => {
    //     // Send a http request and fetch data
    //     setLoadedMeetups(DUMMY_DATA);
    // }, []);
    return (
        // <MeetupList meetups={loadedMeetups} />
        <MeetupList meetups={props.meetups} />
    )
}
export async function getStaticProps() {
    //this code will be executed first then any other fucton on this component
    //we can execute any code inside this because this code will be executed during build 
    // this code will not be executed on visiter browser or client side

    // we can write any code on this such as 
    // fetch data from an api
    // file syster IO system
    // database connection 
    return {
        props: {
            meetups: DUMMY_DATA
        }
    }
}
export default HomePage;