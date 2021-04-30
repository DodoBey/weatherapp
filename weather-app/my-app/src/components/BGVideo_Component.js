import RainyVideo from '../videos/rainy.mp4';
import CloudyVideo from '../videos/cloudy.mp4';
import SnowyVideo from '../videos/snowy.mp4';
import ClearVideo from '../videos/clear.mp4';

const BGVideoComponent = (props) => {
    const currentValue = [props.currentStatus];
    console.log(currentValue);

    // const bgVideochanger = currentValue => {
        let bgVideo = "" ;
        console.log(currentValue[0]);
        switch(currentValue[0]){
            case "Clouds":{
                bgVideo = <source src={CloudyVideo} type='video/mp4' />
                break;
            }
            case "Rain" : {
                bgVideo = <source src={RainyVideo} type='video/mp4' />
                break;
            }
            case "Snow" :{
                bgVideo = <source src={SnowyVideo} type='video/mp4' />
                break;
            }
            case "Clear" :{
                bgVideo = <source src={ClearVideo} type='video/mp4' />
                break;
            }
            case "" :{
                bgVideo = <source src={ClearVideo} type='video/mp4' />
                break;
            }
        
        return bgVideo = <>{bgVideo}</>
        
    };

   



    return (
        <video className='bgVideo' autoPlay loop muted>
            {bgVideo}   
        </video>
    )
}

export default BGVideoComponent