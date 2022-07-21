import { useState } from 'react';
import  React from 'react';


function VeggieItem( props ){
    const [ show, setShow ] = useState( null )

    
    const toggleShow = () =>{
        setShow( !show );
    }

    return (
        <div>
        
                                <div onClick={toggleShow} className="veggies" key={props.veggie.id}>                                
                                    <h3 className="veggieName">{props.veggie.veg_name}</h3>{/*this displays vegetables names from db table*/}
                                    {   show?
                                         <p className="veggies">{props.veggie.water_needs}
                                         <button className='btn'>Add to Garden</button></p>//*this displays vegetables water needs from cd table*/
                                         
                                        :
                                        <img className="veggies" src={props.veggie.images} alt={props.veggie.veg_name} />//*this displays vegetables images from db table

                                    }
                                    
                                </div>
                               
                        
                    </div>
    );
}
{/* 
https://api.weather.gov/stations/KMSP/observations
<main>
<Typography variant="h6">
    <Grid
    container
    display=“flex”
    wrap=“wrap”
    justify=“center”
    spacing={6}
>
    {vegetables.map((vegetable) => (
        <Grid item key={vegetable.id}>
        {vegetable.veg_name}
        <img src={vegetable.images} alt={vegetable.veg_name} />
        {vegetable.water_needs}
        </Grid>
    ))}
</Grid> 
</Typography>
</main>
*/}
// {vegetables.map(veggies => {
//     {/*mapping through the vegetables db info from vegetables table*/ }
//     return (
//         <div className="veggies" key={veggies.id}>
//             <p>{veggies.veg_name}</p>{/*this displays vegetables names from db table*/}
//             <img src={veggies.images} alt={veggies.veg_name} />{/*this displays vegetables images from db table*/}
//             <p>{veggies.water_needs}</p>{/*this displays vegetables water needs from cd table*/}
//             <button className='btn' onClick={setHook}>Add to Garden</button>
//         </div>
//     )
// })}


export default VeggieItem;