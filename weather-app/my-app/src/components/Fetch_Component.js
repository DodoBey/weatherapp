import React, { useState,useEffect,setState } from 'react';
import BGVideoComponent from './BGVideo_Component';
import DefaultComponent from './Default_Component';
import WeeklyComponent from './Weekly_Component';

    const FetchComponent = () => {
  // Declare a new state variable, which we'll call "count"
    const [currentTemp, setCurrentTemp] = useState("");
    const [currentHumidity, setCurrentHumidity] = useState("");
    const [currentFeel, setCurrentFeel] = useState("");
    const [currentWind, setCurrentWind] = useState("");
    const [currentStatus, setCurrentStatus] = useState("");
    const [sunrise, setSunrise] = useState("");
    const [sunset, setSunset] = useState("");
    const [cityName, setCityName] = useState("");
    const [lon, setLon] = useState("");
    const [lat, setLat] = useState("");

    const [day, setDay] = useState("");
    // const [weeklyStatus,setWeeklyStatus] = useState("");
    // const [weeklyTemp,setWeeklyTemp] = useState("");
    const [weeklyDays, setWeeklyDay] = useState("");
    const [currentDay, setCurrentDay] = useState("");



    const api = {
    key: "db27287803721756d273ad76e35706ea",
    mainUrl: "https://api.openweathermap.org/data/2.5/"
}
    // Create fetch function for weekly data
  
    //create the function to fetch current the data
    const FetchData = (city,callback) => {
        fetch(`${api.mainUrl}weather?q=${city}&units=metric&appid=${api.key}`).then(response => {
            if(response.status !== 200) {
                console.log(`error ${response.status}`)
            }

        
        response.json().then(data => {
            setCurrentTemp(Math.round(data.main.temp));
            setCurrentHumidity(data.main.humidity);
            setCurrentFeel(Math.round(data.main.feels_like));
            setCurrentWind(Math.round(data.wind.speed));
            setCurrentStatus(data.weather[0].main);
            setSunrise(data.sys.sunrise);
            setSunset(data.sys.sunset);
            setCityName(data.name);
            setLon(data.coord.lon);
            setLat(data.coord.lat);
            callback(data.coord.lat,data.coord.lon);
        }) 
            .catch(err => {
                console.log(`error ${err}`)
            })
        })
    }

    const FetchWeeklyData = (...arg) => {
        fetch(`${api.mainUrl}onecall?lat=${arg[0]}&lon=${arg[1]}&units=metric&appid=${api.key}`).then(response => {
            if(response.status !== 200) {
                console.log(`error ${response.status}`)
            }
            response.json().then(weeklyData => {
                let arr = [];
                for(let day of weeklyData.daily){
                    arr.push([day.weather[0].main, Math.round(day.temp.day)]);
                }
                setWeeklyDay(arr);
                
            }).catch(error => {
                console.log(`error ${error}`)
            })
        })
       }

    const CreateWeeklyDay = (currentDayArg, dayArr) => {
        const arrDays = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        for(let i of dayArr){
         i.push(arrDays[currentDayArg+1]); 
         currentDayArg++;
     }
        return;
    }
 
    CreateWeeklyDay(currentDay,weeklyDays);
     //This will happen before your component to create
    useEffect(() => {
        setCurrentDay(new Date().getDay());
        FetchData("vancouver",FetchWeeklyData);
    },[]);
    
    const keyEnter = (e) => {
        if (e.key === 'Enter') {
        let value = document.getElementById("cityName").value;
        FetchData(value,FetchWeeklyData);
        return document.getElementById("cityName").value;
        }
    }
        //Time convert
        const sunRiseHour = new Date(sunrise * 1000).getHours();
        const sunRiseMinute = new Date(sunrise * 1000).getMinutes();
        const riseTime = ((sunRiseHour)+":"+(sunRiseMinute));
        

        const sunSetHour = new Date(sunset * 1000).getHours();
        const sunSetMinute = new Date(sunset * 1000).getMinutes();
        const setTime = ((sunSetHour)+":"+(sunSetMinute));
    
    


    return(
        <>
            <div className="search_area">
           <input type="text" placeholder="Search City" id="cityName" className="search_bar" onKeyPress={keyEnter}/>
           </div>
           <div id="weatherSection">
        <BGVideoComponent
        currentStatus={currentStatus}
        />
           <DefaultComponent 
            city={cityName} 
            currentWind={currentWind} 
            currentFeel={currentFeel}
            currentTemp={currentTemp}
            currentHumidity={currentHumidity}
            currentStatus={currentStatus}
            sunrise={riseTime}
            sunset={setTime}
            />
            <WeeklyComponent
            weeklyDays={weeklyDays}
            />
            </div>

        </>
    )
}
export default FetchComponent;