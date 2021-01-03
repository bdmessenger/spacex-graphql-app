import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo'
import { LaunchItem, MissionKey, Loader } from '../components'

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`
export default function Launches() {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY)

    if (loading) return <Loader/>
    if (error) {
        console.log(error)
        return <h4>Error</h4>
    }

    return (
        <section>
            <h1 className="display-4 my-3">Launches</h1>
            <MissionKey/>
            {
                data.launches.map(launch => (
                    <LaunchItem key={launch.flight_number} launch={launch}/>
                ))
            }
        </section>
    )
}