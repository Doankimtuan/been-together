import Modal from "./Modal";
import ReactPlayer from 'react-player'

export default function Video({onClose}){
    return(
        <Modal closeIcon={true} onClose={onClose}>
            <ReactPlayer
                className='react-player fixed-bottom'
                url= 'video/video.MP4'
                controls = {true}
                playing={true}
            />
        </Modal>
    )
}