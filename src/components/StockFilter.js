import React,{useState} from 'react';

const StockFilter=({onFilter})=>{
    const [filters,setFilters]=useState(
        {
            marketCapMin:'',
            marketCapMax:'',
        }

    );


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        onFilter(filters);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Market Cap Min
            </label>
            <input type="number"
                   name="marketCapMin"
                    value={filters.marketCapMin}
                    onChange={handleChange}/>
        </form>
    )


}