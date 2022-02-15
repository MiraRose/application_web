const initialState = {
    applications: [],
    status: 'idle',
    application: {
        businessName: "",
        industry: "",
        email: "",
        annualSales: 10000,
        annualPayroll: 10000,
        numOfEmployees: 0,
        zipCode: ""
    }
}

const applications = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_APPLICATIONS_SUCCESS':
            return {
                ...state,
                applications: action.payload.applications
            }
        case 'POST_APPLICATIONS_SUCCESS':
            return {
                ...state,
            }
        default:
            return state
    }
}

export default applications