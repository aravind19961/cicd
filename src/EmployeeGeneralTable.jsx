import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

import "./App.css";

const columns = [
    { field: 'id', headerName: ' ID', width: 100 },
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 150,
    },
    {
        field: 'salary',
        headerName: 'Salary',
        type: 'number',
        width: 170,
    },
    {
        field: 'current_usage',
        headerName: 'Used Amount',
        type: 'number',
        width: 170,
    },
    {
        field: 'working_days',
        headerName: 'Work Days',
        type: 'number',
        width: 170,
    },{
        field: 'absent_days',
        headerName: 'Absent Days',
        type: 'number',
        width: 170,
    },
    {
        field: 'present_days',
        headerName: 'Present Days',
        type: 'number',
        width: 170,
    }
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
    return (
        <div className="DataTable" style={{height:'85%', width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
        </div>
    );
}