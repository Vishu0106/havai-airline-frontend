import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    airports: [
        { id: '1', name: 'Indira Gandi Internation Airport',country:'Ind',code:'IGI'},
        { id: '2', name: 'Chatrapathi ShivajiMaharaj Airport',country:'Ind',code:'CSM'},
        { id: '3', name: 'Heathrow Airport',country:'UK',code:'HTR'},
        { id: '4', name: 'JFK Airport',country:'USA',code:'JFK'},
        { id: '5', name: 'Changi Airport',country:'SG',code:'CGI'},
        { id: '6', name: 'Dubai Airport',country:'UAE',code:'DBI'},
    ],
}

const airportsSlice = createSlice({
    name: 'airports',
    initialState,
    reducers: { }
})
export default airportsSlice.reducer