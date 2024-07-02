import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    airports: [
        { id: '1', name: 'Indira Gandi Internation airport',country:'Ind',code:'IGI'},
        { id: '2', name: 'Chatrapathi ShivajiMaharaj airport',country:'Ind',code:'CSM'},
        { id: '3', name: 'Heathrow airport',country:'UK',code:'HTR'},
        { id: '4', name: 'JFK airport',country:'USA',code:'JFK'},
        { id: '5', name: 'Changi airport',country:'SG',code:'CGI'},
        { id: '6', name: 'Dubai airport',country:'UAE',code:'DBI'},
    ],
}

const airportsSlice = createSlice({
    name: 'airports',
    initialState,
    reducers: { }
})
export default airportsSlice.reducer