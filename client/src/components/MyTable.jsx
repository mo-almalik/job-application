 import { Table } from 'antd'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'
 
 function MyTable({columns,dataSource,handlePage,total,btn ,isLoading}) {


    const handlePageChange = async (page, pageSize) => {
        await handlePage(page, pageSize);
    };

   return <>
               <div className='my-8'>
           {total?.length === 0 ? (
                <div className='h-[80vh] flex items-center justify-center'>
                    <Empty
                        description='لا توجد وظائف متاحة حاليا'
                    >
                        <Button type="primary"> {btn} </Button>
                    </Empty>
                </div>
            ) : <>
            <Table
               
                loading={isLoading}
                columns={columns}
                dataSource={dataSource}
                pagination={{
                  
                    total: total,
                    onChange: handlePageChange,
                    showSizeChanger: true,
                    showTotal: (total, range) => `العدد الكلي ${total}`,
                    pageSizeOptions: ['5', '10', '20','30','40'],
                    nextIcon: <ChevronLeft />,
                    prevIcon: <ChevronRight />,
 
                }}

            />
             </>}
           
           </div>
   </>
 }
 
 export default MyTable