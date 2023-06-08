import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'
import { useParams } from 'react-router-dom'

export const Details = () => {

    const {store, actions} = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getDetails(params.endpoint, params.theid)
    }, [])

    return(
            <>
            <div className='d-flex justify-content-center pt-5'>
            <div className="card mb-3" style={{maxWidth: "540px"}}>
            <div className="row g-0">
            <div className="col-md-4">
                <img src={`${params.endpoint == "planets" && params.theid == 1 ? tatooineImg : `https://starwars-visualguide.com/assets/img/${params.endpoint == "people" ? "characters" : params.endpoint}/${params.theid}.jpg`}`} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8"> 
            
                {params.endpoint == "people" && <div className="card-body">
                <h4 className="card-title">{store.details && store.details.properties.name}</h4>
                <p className="card-title">Gender: {store.details && store.details.properties.gender}</p>
                <p className="card-title">Height: {store.details && store.details.properties.height}</p>
                <p className="card-title">Hair Color: {store.details && store.details.properties.hair_color}</p>
                <p className="card-title">Eye Color: {store.details && store.details.properties.eye_color}</p>
            </div>
                }
            
            {params.endpoint == "vehicles" && <div className="card-body">
                <h4 className="card-title">{store.details && store.details.properties.name}</h4>
                <p className="card-title">Length: {store.details && store.details.properties.length}</p>
                <p className="card-title">Crew: {store.details && store.details.properties.crew}</p>
                <p className="card-title">Consumables: {store.details && store.details.properties.consumables}</p>
                <p className="card-title">Cargo Capacity: {store.details && store.details.properties.cargo_capacity}</p>
            </div>
                }

            {params.endpoint == "planets" && <div className="card-body">
                <h4 className="card-title">{store.details && store.details.properties.name}</h4>
                <p className="card-title">Climate: {store.details && store.details.properties.climate}</p>
                <p className="card-title">Diameter: {store.details && store.details.properties.diameter}</p>
                <p className="card-title">Population: {store.details && store.details.properties.population}</p>
                <p className="card-title">Gravity: {store.details && store.details.properties.gravity}</p>
            </div>
                }
        
        </div>
        </div>
        </div>
        </div>
        </>
    )

}