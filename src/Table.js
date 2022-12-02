import React, { useContext, useEffect, useState } from 'react'
import { config } from './config'
import axios from 'axios'
import { Context } from './Dashboard';
import { Link } from 'react-router-dom';

function Table() {
    const PerPage = 3;
    const values = useContext(Context);

    useEffect(() => {
        pagenate(0)
    }, [values]);

    async function Assign(id) {

        try {
            var value = [{ available: false }]
            await axios.put(`${config.api}/employee/assign/${id}`, value)
            alert("Work Assigned")
        } catch (error) {
            console.log(error)
        }
    }

    async function Unassign(id) {

        try {
            var value = [{ available: true }]
            await axios.put(`${config.api}/employee/assign/${id}`, value)
            alert("Work Unassigned")
        } catch (error) {
            console.log(error)
        }
    }

    const [TableList, setTablelist] = useState([])
    const [currentPage, setcurrentPage] = useState(0)

    let pagenate = (index) => {
        let startValue = PerPage * index;
        let endValue = startValue + PerPage;
        let list = result.slice(startValue, endValue)
        setTablelist(list)
        setcurrentPage(index)
    }

    let prev = () => {
        if (currentPage !== 0)
            pagenate(currentPage - 1)
    }

    let next = () => {
        if (currentPage !== (values.length / PerPage) - 1)
            pagenate(currentPage + 1)
    }

    //Sorting data
    const result = values.sort(function (x, y) { return y.available - x.available })

    return (
        <div class="table-responsive mt-3 mt-md-4 mb-2">
            <table class="table table-bordered" >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Available</th>
                        <th>View Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        TableList.map((value, index) => {
                            return <tr key={index}>
                                <td>{value.name}</td>
                                <td>{value.department}</td>
                                <td>
                                    <div class="custom-control custom-checkbox">
                                        {
                                            value.available == true ?
                                                <button className='btn btn-outline-success btn-sm' onClick={() => { Assign(value._id) }}>Assign Work</button>
                                                :
                                                <button className='btn btn-outline-warning btn-sm' onClick={() => { Unassign(value._id) }}>Unassign Work</button>
                                        }
                                    </div>
                                </td>
                                <td>
                                    <Link to={`/edit/${value._id}`} type="button" class="btn btn-outline-info btn-sm mr-2" data-toggle="modal" data-target="#editEmployeeModal">
                                        <i class="fa fa-edit"></i> Edit
                                    </Link>
                                    <Link to={`/delete/${value._id}`} type="button" class="btn btn-outline-danger btn-sm" data-toggle="modal" data-target="#deleteEmployeeModal">
                                        <i class="fa fa-trash"></i> Delete
                                    </Link>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <div id='paginate'>
                <nav aria-label="Page navigation example">
                    <ul class="pagination" style={{ marginLeft: "300px", marginTop: "50px" }}>
                        {
                            <button class={`btn btn-outline-secondary ${currentPage !== 0 ? "active" : "disabled"} mr-1`} onClick={prev}>Previous</button>
                        }
                        {
                            [...Array(Math.ceil(values.length / PerPage))].map((page, index) => {
                                return <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        <li class="page-item">
                                            <button className={`btn btn-outline-primary mr-1 ${currentPage == index ? "active" : " "}`} onClick={() => pagenate(index)}>{index + 1}</button>
                                        </li>
                                    </ul>
                                </nav>
                            })
                        }
                        {
                            // currentPage !== (Math.ceil(values.length / PerPage)) - 1 ? <button class="page-link" onClick={next}>Next</button> : null
                            <button class={`btn btn-outline-secondary ml-1 ${ currentPage !== (Math.ceil(values.length / PerPage)) - 1 ? "active" : "disabled"}`} onClick={next}>Next</button>
                        }
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default Table