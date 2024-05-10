"use client"

import React, { useEffect, useState } from 'react';
import DataGrid, {
    Column,
    FilterRow,
    HeaderFilter,
    FilterPanel,
    FilterBuilderPopup,
    Scrolling,
    Paging,
    Pager,
    Selection,
    GroupPanel,
    DataGridTypes
} from 'devextreme-react/data-grid';
import ODataStore from 'devextreme/data/odata/store';
import { locale, loadMessages } from 'devextreme/localization';
import ptMessages from 'devextreme/localization/messages/pt.json';

locale('pt')
loadMessages(ptMessages);

interface DataGridDataSource {
    store: ODataStore;
    expand: string[];
    select: string[];
}

interface Task {
    Task_ID: number;
    OrderDate: Date;
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
                'Task_Priority',
                'Task_Status',
                'Task_Completion',
                'ResponsibleEmployee/Employee_Full_Name',
                'ResponsibleEmployee/Employee_Title',
            ],
        });
    }, []);

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
        <DataGrid 
            dataSource={dataSource}
            showBorders={true}
            filterBuilder={filterBuilder}
            allowColumnReordering={true}
            allowColumnResizing={true}
            columnResizingMode={"widget"} >
            <Selection mode="multiple" selectAllMode="allPages" showCheckBoxesMode="always" />
            <GroupPanel visible={true} />
            <Paging enabled={true} pageSize={10} />
            <Pager
                visible={true}
                allowedPageSizes={[5, 10, 20]}
                showPageSizeSelector={true}
                showNavigationButtons={true}
                showInfo={true}
                infoText="Página {0} de {1} ({2} registros)"
            />
            <FilterRow visible={true} />
            <FilterPanel visible={true} />
            <FilterBuilderPopup />
            <HeaderFilter visible={true} />
            <Scrolling scrollByContent={true}/>
            <Column dataField="Task_ID" caption="Código da Tarefa" />
            <Column dataField="Task_Subject" caption="Objetivo" />
            <Column dataField="Task_Start_Date" caption="Data de Inicio" />
            <Column dataField="Task_Priority" caption="Prioridade" />
            <Column dataField="Task_Status" caption="Status" />
            <Column dataField="Task_Completion" caption="% de finalização" />
            <Column dataField="ResponsibleEmployee.Employee_Title" caption="Título do responsável" />
            <Column dataField="ResponsibleEmployee.Employee_Full_Name" caption="Nome do responsável" />
        </DataGrid>
    );
}

export default DataGridComponent;
