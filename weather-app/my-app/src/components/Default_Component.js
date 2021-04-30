import React from 'react';
import windSock from '../icon/windsock.svg'
import feelsLike from '../icon/temperature.svg'
import humidity from '../icon/humidity.svg'
import sunRise from '../icon/sunrise.svg'
import sunSet from '../icon/sunset.svg'


const DefaultComponent = (props) => {
    
    return(
        <>
            <div id="defaultArea">
            <div className="cityName">{props.city}</div>
            <div className="status">{props.currentStatus}</div>

            <div className="flipArea" onClick="">
                <div className="temparea frontSide">
                    <span className="temp">{props.currentTemp}°</span>
                </div>
                <div className="backSide">
                    <div className="wind">
                    
                    <span><img src={windSock}></img>{props.currentWind}km/h</span>
                    </div>

                    <div className="feelLike">
                    
                    <span><img src={feelsLike}></img>{props.currentFeel}°</span>
                    </div>

                    <div className="humidity">
                   
                    <span><img src={humidity}></img>{props.currentHumidity}%</span>
                    </div>

                    <div className="sunrise">
                    
                    <span><img src={sunRise}></img>{props.sunrise}</span>
                    </div>

                    <div className="sunset">
                    
                    <span><img src={sunSet}></img>{props.sunset}</span>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default DefaultComponent;
