"use client"

import React, { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';

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
    DataGridTypes,
    Export,
    Editing,
    StateStoring
} from 'devextreme-react/data-grid';

// import { exportDataGrid } from 'devextreme/excel_exporter';
import { exportDataGrid } from 'devextreme/pdf_exporter';

import { jsPDF } from 'jspdf';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver-es';


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

const exportFormats = ['pdf'];

const onExporting = (e: DataGridTypes.ExportingEvent) => {
    const doc = new jsPDF();

    exportDataGrid({
        jsPDFDocument: doc,
        component: e.component,
        indent: 5,
    }).then(() => {
        doc.save('Simpplify.pdf');
    });
};


// const onExporting = (e: DataGridTypes.ExportingEvent) => {
//     const workbook = new Workbook();
//     const worksheet = workbook.addWorksheet('Main sheet');

//     exportDataGrid({
//         component: e.component,
//         worksheet,
//         autoFilterEnabled: true,
//     }).then(() => {
//         workbook.xlsx.writeBuffer().then((buffer) => {
//             saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
//         });
//     });
// };

export default function DataGridComponent() {
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
        <div className="h-[86%] w-[94%] bg-white m-[50px] rounded-[5px] shadow-sm border border-[#E9ECEF] p-[30px] dx-viewport overflow-none">
            <div className='flex flex-row gap-2'>
                <div className='border border-[#006C3E] rounded-md w-[30px] h-[30px]'>
                    <Plus color='#006C3E' className='w-full h-full' />
                </div>
                <div className='bg-[#006C3E] rounded-md w-[30px] h-[30px]'>
                    <Pencil color='#fff' className='w-full h-full p-1' />
                </div>
                <div className='bg-red-500 rounded-md w-[30px] h-[30px]'>
                    <Trash2 color='#fff' className='w-full h-full p-1' />
                </div>
            </div>
            <div className="h-[96%] w-full mt-2">
                <DataGrid
                    dataSource={dataSource}
                    showBorders={true}
                    filterBuilder={filterBuilder}
                    allowColumnReordering={true}
                    allowColumnResizing={true}
                    columnResizingMode={"widget"}
                    rowAlternationEnabled={true}
                    onExporting={onExporting}
                    height="100%"
                    width="100%"
                >
                    <StateStoring enabled={true} type="localStorage" storageKey="storage" />
                    <Selection mode="multiple" selectAllMode="allPages" showCheckBoxesMode="always" />
                    <GroupPanel visible={true} />
                    <Export enabled={true} formats={exportFormats} allowExportSelectedData={true} />
                    <Paging enabled={true} pageSize={10} />
                    <Pager
                        visible={true}
                        allowedPageSizes={[10, 20, 40]}
                        showPageSizeSelector={true}
                        showNavigationButtons={true}
                        showInfo={true}
                        infoText="Página {0} de {1} ({2} registros)"
                    />
                    <FilterRow visible={true} />
                    <FilterPanel visible={true} />
                    <FilterBuilderPopup />
                    <HeaderFilter visible={true} />
                    <Scrolling scrollByContent={true} />
                    <Column dataField="Task_ID" caption="Código da Tarefa" />
                    <Column dataField="Task_Subject" caption="Objetivo" />
                    <Column dataField="Task_Start_Date" caption="Data de Inicio" />
                    <Column dataField="Task_Priority" caption="Prioridade" />
                    <Column dataField="Task_Status" caption="Status" />
                    <Column dataField="Task_Completion" caption="% de finalização" />
                    <Column dataField="ResponsibleEmployee.Employee_Title" caption="Título do responsável" />
                    <Column dataField="ResponsibleEmployee.Employee_Full_Name" caption="Nome do responsável" />
                </DataGrid>
            </div>
        </div>
    );
}