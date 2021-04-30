import CloudyImg from '../icon/cloudy.svg';
import RainyImg from '../icon/rainy.svg';
import SnowyImg from '../icon/snow.svg';
import ClearImg from '../icon/clear.svg'

const WeeklyComponent = (props) => {
    console.log(props.weeklyDays)
    const dayName = Array.from(props.weeklyDays);
    

    const weeklyInformation = dayName.map((value,key) => {
        let icon = "";
        console.log(value[0])  
        switch(value[0]) {
            case "Clouds": {
                icon = <img src={CloudyImg}></img>
                break;
            }
            case "Rain": {
                icon = <img src={RainyImg}></img>
                break;
            }
            case "Clear": {
                icon = <img src={ClearImg}></img>
                break;
            }
            case "Snow": {
                icon = <img src={SnowyImg}></img>
                break;
            }
        }
        
        return <>
            <div className="weeklyCondition">
            <div><div >{icon}</div>
            <div >{value[1]+"°"}</div> {/**TODO - Fix the key issue */}
            <div >{value[2]}</div></div>
            </div>
        </>;
        });

        
    return(
        <>
        <div id="weeklyBar">{weeklyInformation}</div>
        </>
    )
}

export default WeeklyComponent;