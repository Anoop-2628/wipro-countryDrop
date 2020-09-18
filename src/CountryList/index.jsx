import React, { useEffect } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import Select from "react-dropdown-select";

import './Button.css';
const columns = [
    {
        name: 'Title',
        selector: 'name',
    },
    {
        name: 'Population',
        selector: 'population',
        sortable: true,
    }, {
        name: 'Region',
        selector: 'region'

    }
];

const onChange = (data, props) => {
    props.fireOnClickData(data)
}

const rowClickhandler = (data, props) => {
    props.rowClickhandler(data);
}
export const ExpandableCopm = (props) => (
    <React.Fragment>
        {props.data.moreDetails ?
            <div className={'moreDetailsComponent'}>
                <table className={'tableData'}>
                    <tr>
                        <th>  {'Currency'}</th>
                        <th>  {'Languages'}</th>
                        <th>  {'Capital'}</th>
                    </tr>
                    <tr>
                        <td>{props.data.moreDetails.currencies.map((data, index) => {
                            return (
                                <React.Fragment >
                                    <div key={index}>
                                        {data.name}
                                    </div>
                                </React.Fragment>
                            )
                        })}</td>
                        <td>{props.data.moreDetails.languages.map((data, index) => {
                            return (
                                <React.Fragment >
                                    <div key={index}>
                                        {data.name}
                                    </div>
                                </React.Fragment>
                            )
                        })}</td>
                        <td>{props.data.moreDetails.capital ? props.data.moreDetails.capital : ''}</td>
                    </tr>
                </table>
            </div>
            : ''}
    </React.Fragment>
)


export const CountryList = (props) => {
    useEffect(() => {
        props.fireAjaxData()
    }, [])
    return (
    
         <div className ={'container'}>
            <div className='dropDown'>
                
                <Select
                    labelField={'name'}
                    clearable={true}
                    valueField={'name'}
                    options={props.CountryListdata.countryListData.data ? props.CountryListdata.countryListData.data : ''}
                    onChange={(values) => onChange(values, props)}
                    dropdownwidth={"30px"}
                    placeholder= {'Please Select Country'}
                    multi={true}

                />
            </div>
            <DataTable

                columns={columns}
                // expandableRows
                onRowClicked={(values) => rowClickhandler(values, props)}
                Clicked
                pagination
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5, 15, 20, 25, 30]}
                data={props.CountryListdata.OnSelectedData && props.CountryListdata.OnSelectedData.length > 0 ? props.CountryListdata.OnSelectedData : props.CountryListdata.countryListData.data}
            //expandableRowsComponent={<ExpandableCopm />}
            />
            <ExpandableCopm data={props.SlectedData ? props.SlectedData : ''}></ExpandableCopm>
            </div>
        
    )

}

