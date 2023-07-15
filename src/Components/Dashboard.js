import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/Dashboard.css';
import Navbar from './Navbar';
import Footer from './Footer';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';


function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    );
}
  
TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};


function Dashboard() {
    const [rows, setRows] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/Dashboard');
                console.log(response.data); // Add this line to check the data structure
                setRows(response.data.slice().reverse());
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []
  
    );

    const totalRows = rows.length;
    const totalNormalRows = rows.filter(row => row.result === 'Normal').length;
    const totalAttackRows = rows.filter(row => row.result === 'Attack').length;

    const handleArchive = async (id) => {
        try {
            const updatedRows = rows.map((row) => {
                if (row.id === id) {
                    return {
                        ...row,
                        archive: true,
                    };
                }
                return row;
            });
    
        setRows(updatedRows);
        await axios.patch(`http://localhost:5000/Dashboard/${id}`, { archive: true });

        window.location.reload();

        } catch (error) {
            console.error(error);
        }
    };

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const [isHovered, setIsHovered] = useState({currentRow: 0, isHovered: false});

    const handleMouseEnter = (row_id) => {
      setIsHovered({currentRow: row_id, isHovered: true});
    };
  
    const handleMouseLeave = () => {
      setIsHovered({currentRow: 0, isHovered: false});
    };

    return(
        <div>
            <Navbar />
            <div class="container dashboard-container">
                <div class="row">
                    <div class="col-4 dashboard-page-first-col">
                        <div class="dashboard-title">
                            <h1 id="dashboard-title">Dashboard</h1>
                            <i class="fas fa-home" id="dashboard-icon"></i>
                        </div>

                        <ul class="dashboard-links">
                            <li><a href='/Dashboard' class="current-dash">HISTORY</a></li>
                            <li><a href='/NSLKDD'>NSL-KDD</a></li>
                            <li><a href='/UNSWNB15'>UNSW-NB15</a></li>
                            <li><a href='/Archive'>ARCHIVE</a></li>
                        </ul>

                        <a href='/ScanWithDT'>
                            <button id="button-to-start-scan">SCAN YOUR FILES</button>
                        </a>

                    </div>

                    <div class="col dashboard-page-second-col">

                        <h1 id="history-title">History</h1>
                        
                        <div class="dashboard-statistics">
                            <div>
                                <p class="dashboard-stat total-test">
                                    Total Test
                                    <p class="stat-number" id="total-test"> {totalRows} </p>
                                </p>

                            </div>
                            <div>
                                <p class="dashboard-stat normal-class">
                                    Normal Class
                                    <p class="stat-number" id="normal-class">{totalNormalRows}</p>
                                </p>

                            </div>
                            <div>
                                <p class="dashboard-stat attack-class">
                                    Attack Class
                                    <p class="stat-number" id="attack-class">{totalAttackRows}</p>
                                </p>
                            </div>

                        </div>

                        <TableContainer sx={{
                              width: '1000px',
                              marginLeft: '20px',
                              marginTop: '50px',
                              overflow: 'hidden'
                        }} component={Paper}>
                            <Table sx={{  
                                minWidth: '100px',
                            }} aria-label="custom pagination table">
                                <TableHead>
                                <TableRow>
                                    <TableCell class="table-head" align="center">Date</TableCell>
                                    <TableCell class="table-head" align="center">File name</TableCell>
                                    <TableCell class="table-head" align="center">Dataset name</TableCell>
                                    <TableCell class="table-head" align="center">Model used</TableCell>
                                    <TableCell class="table-head" align="center">Class</TableCell>
                                    <TableCell class="table-head" align="center"></TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {(rowsPerPage > 0
                                    ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : rows
                                ).map((row) => (
                                    <TableRow  key={row.id} >
                                        <TableCell class="table-cell" style={{width: "150px"}} align="center" component="th" scope="row">
                                            {row.date}
                                        </TableCell>
                                        <TableCell class="table-cell" style={{width: "250px"}} align="center">{row.filename}</TableCell>
                                        <TableCell class="table-cell" style={{width: "200px"}} align="center">{row.datasetname}</TableCell>
                                        <TableCell class="table-cell" style={{width: "200px"}} align="center">{row.classifier}</TableCell>
                                        <TableCell class="table-cell" style={{width: "150px"}} align="center">{row.result}</TableCell>
                                        <TableCell class="table-cell" align="center">
                                            <button id="archive-button" onMouseEnter={()=> {handleMouseEnter(row.id)}} onMouseLeave={handleMouseLeave} onClick={() => handleArchive(row.id)}>
                                                    {isHovered.isHovered && isHovered.currentRow === row.id && <span className="hover-text">Archive</span>}
                                                <i class="fa fa-trash" aria-hidden="true"></i>
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))}

                                {emptyRows > 0 && (
                                    <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                                </TableBody>
                                <TableFooter>
                                <TableRow>
                                    <TablePagination
                                    rowsPerPageOptions={[5, 10, 15, { label: 'All', value: -1 }]}
                                    colSpan={3}
                                    count={rows.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        inputProps: {
                                        'aria-label': 'rows per page',
                                        },
                                        native: true,
                                    }}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActions}
                                    />
                                </TableRow>
                                </TableFooter>
                        </Table>
                        </TableContainer>


                        {/* <TableContainer sx={{
                            width: '1000px',
                            marginLeft: '20px',
                            marginTop: '50px'
                            
                            }} component={Paper}>
                            <Table sx={{ width: '100%' }} aria-label="caption table">
                                <TableHead>
                                <TableRow>
                                    <TableCell class="table-head" align="center">Date</TableCell>
                                    <TableCell class="table-head" align="center">File name</TableCell>
                                    <TableCell class="table-head" align="center">Dataset name</TableCell>
                                    <TableCell class="table-head" align="center">Model used</TableCell>
                                    <TableCell class="table-head" align="center">Class</TableCell>
                                    <TableCell class="table-head" align="center"></TableCell>
                                </TableRow>
                                </TableHead>


                                <TableBody>

                                {rows.map((row) => (
                                    <TableRow  key={row.id} >
                                        <TableCell class="table-cell" style={{width: "150px"}} align="center" component="th" scope="row">
                                            {row.date}
                                        </TableCell>
                                        <TableCell class="table-cell" style={{width: "250px"}} align="center">{row.filename}</TableCell>
                                        <TableCell class="table-cell" style={{width: "200px"}} align="center">{row.datasetname}</TableCell>
                                        <TableCell class="table-cell" style={{width: "200px"}} align="center">{row.classifier}</TableCell>
                                        <TableCell class="table-cell" style={{width: "150px"}} align="center">{row.result}</TableCell>
                                        <TableCell class="table-cell" align="center">
                                            <button id="archive-button" onClick={() => handleArchive(row.id)}>
                                                <i class="fa fa-trash" aria-hidden="true"></i>
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>



                            </Table>
                        </TableContainer> */}
                        



                    </div>

                </div>

            </div>  
            <Footer />
                
        
        </div>
    )

    
}
export default Dashboard;