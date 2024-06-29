import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component";

const CustomerTable = () => {
    const [rows, setRows] = useState([]);// Almacenar datos

    useEffect(() => { // Obtener datos en cada render
        const fetchData = async () => {
             const response = await axios.get("http://localhost:3000/productos");
             setRows(response.data);
         };
         fetchData();
     }, []);

    
    const columns = [
        {
            name: "ID",
            selector: row => row.id
        },
        {
            name: "Nombre",
            selector: row => row.nombre
        },
        {
            name: "Código",
            selector: row => row.codigo
        },
        {
            name: "Precio",
            selector: row => row.precio
        },
        {
            name: "Disponible",
            selector: row => row.disponible
        },
    ];



  return (
    <div className="container my-5">
        <DataTable columns={columns} data={rows} pagination selectableRows />
    </div>
  )
}

export default CustomerTable