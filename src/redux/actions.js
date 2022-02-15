import axios from 'axios'

//synchronous action creator
const fetchApplicationsSuccess = applications => ({
    type: 'FETCH_APPLICATIONS_SUCCESS',
    payload: { applications }
})

const postApplicationsSuccess = applications => ({
    type: 'POST_APPLICATIONS_SUCCESS',
})

/*asynchronous thunk action creator
  calls the api, then dispatches the synchronous action creator
*/
export const fetchApplications =  () => {
    return async dispatch => {
        try {
            let applications = await axios.get('https://localhost:7174/api/application')
            dispatch(fetchApplicationsSuccess(applications.data))
        }
        catch(e){
            console.log(e)
        }
    }
}

export const postApplication = (params) => {
    return async dispatch => {
        try {
            console.log(params)
            await axios.post('https://localhost:7174/api/application', params)
            dispatch(postApplicationsSuccess())
        }
        catch(e){
            console.log(e)
        }
    }
}