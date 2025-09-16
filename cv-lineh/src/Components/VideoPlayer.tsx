import type { Project } from "../Types";


export default function VideoPlayer({ video }: Project){
    return (
        <video src={video} autoPlay loop muted className="slider-video"></video>
    )
}