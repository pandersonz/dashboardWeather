
import $ from 'jquery';

export function mostrarKardexConductor(that,city){
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
                vector['city']=result[0].ci;
                

                that.setState({objWeather:vector}) ;  
                console.log(vector);      
            }
    
    }).done(function(result){
       //alert(data);
       console.log(result);
       
       
    })
}