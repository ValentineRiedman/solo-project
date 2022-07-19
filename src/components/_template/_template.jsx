import { useState } from 'react';

function _template( props ){
    const [ hook, setHook ] = useState( null )
    return (
        <div>
            <h2>_template</h2>
            <p>Props: { JSON.stringify( props ) }</p>
        </div>
    );
}
{/* 

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


export default _template;