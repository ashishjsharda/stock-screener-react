import React  from "react";
import {useTable} from "react-table/src";

const StockTable = () => {
    const columns = React.useMemo(
        ()=>[
            {Header:'Symbol',accessor:'symbol'},
            {Header:'Name',accessor:'name'},
            {Header:'Price',accessor:'price'},
            {Header:'Market Cap',accessor:'marketCap'},
        ],
        []
    );

    const tableInstance = useTable({columns,data});
}