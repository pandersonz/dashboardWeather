
import $ from 'jquery';

export function obtenerWeather(that,city){
    $.ajax({
        url: 'http://127.0.0.1/datos',
        type: "POST",
        data: {
                data_op:city,
                op:'READ-CITY'
        },
        success: function(result)            
		   {
            var array = JSON.parse( result );
            console.log(array);
            result= array['data'];
            var url = array['url']
            console.log(url);
           
                let vector={};
                vector['name']=result[0].name;
                vector['description']=result[0].descriptionWeather;
                vector['currenttemp']=result[0].currentTemp;
                vector['mintemp']=result[0].minTemp;
                vector['maxtemp']=result[0].maxTemp;
                vector['humidity']=result[0].humidity;
                vector['pressure']=result[0].pressure;
                vector['speedWind']=result[0].speedWind;
                vector['degreeWind']=result[0].degreeWind;
                vector['rain']=result[0].rain;
                vector['dateWeather']=result[0].dateWeather;

                that.setState({objWeather:vector}) ;  
                console.log(vector);      
            }
    
    }).done(function(result){
       //alert(data);
       console.log(result);
       
       
    })
}