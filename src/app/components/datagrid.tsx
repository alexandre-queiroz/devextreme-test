"use client"

import React, { useEffect, useState } from 'react';
import DataGrid, {
    Column,
    FilterRow,
    HeaderFilter,
    FilterPanel,
    FilterBuilderPopup,
    Scrolling,
} from 'devextreme-react/data-grid';
import ODataStore from 'devextreme/data/odata/store';

interface DataGridDataSource {
    store: ODataStore;
    expand: string[];
    select: string[];
}

interface Task {
    OrderDate: Date;
    Task_ID: number;
    Task_Subject: string;
    Task_Start_Date: Date | string;
    Task_Status: string;
    ResponsibleEmployee: {
        Employee_Full_Name: string;
    };
}


function DataGridComponent() {
    const [dataSource, setDataSource] = useState<DataGridDataSource | null>(null);
    const getOrderDay = (rowData: Task) => (new Date(rowData.OrderDate)).getDay();

    useEffect(() => {
        const oDataStore = new ODataStore({
            url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks',
            key: 'Task_ID',
            version: 2,
        });

        setDataSource({
            store: oDataStore,
            expand: ['ResponsibleEmployee'],
            select: [
                'Task_ID',
                'Task_Subject',
                'Task_Start_Date',
                'Task_Status',
                'ResponsibleEmployee/Employee_Full_Name',
            ],
        });
    }, []);

    const filterBuilderPopupPosition = {
        of: window,
        at: 'top' as const,
        my: 'top' as const,
        offset: { y: 10 },
    };

    const filterBuilder = {
        customOperations: [{
            name: 'weekends',
            caption: 'Weekends',
            dataTypes: ['date' as const],
            icon: 'check',
            hasValue: false,
            calculateFilterExpression: () => [[getOrderDay, '=', 0], 'or', [getOrderDay, '=', 6]],
        }],
        allowHierarchicalFields: true,
    };


    if (!dataSource) {
        return <div>Loading...</div>;
    }

    return (
        <DataGrid dataSource={dataSource} showBorders={true} filterBuilder={filterBuilder}>
            <FilterRow visible={true} />
            <FilterPanel visible={true} />
            <FilterBuilderPopup position={filterBuilderPopupPosition} />
            <HeaderFilter visible={true} />
            <Scrolling mode="infinite" />
            <Column dataField="Task_ID" caption="ID" />
            <Column dataField="Task_Subject" caption="Subject" />
            <Column dataField="Task_Start_Date" caption="Start Date" />
            <Column dataField="Task_Status" caption="Status" />
            <Column dataField="ResponsibleEmployee/Employee_Full_Name" caption="Responsible Employee" />
        </DataGrid>
    );
}

export default DataGridComponent;
