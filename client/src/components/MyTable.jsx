import { Button, Empty, Table } from "antd";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

function MyTable({
  columns,
  dataSource,
  handlePage,
  total,
  btn,
  isLoading,
  description = 'لا توجد بيانات',
  pagination= true,
}) {
  const handlePageChange = async (page, pageSize) => {
    await handlePage(page, pageSize);
  };

  return (
    <>
      <div className="my-8">

            <Table
              loading={isLoading}
              columns={columns}
              dataSource={dataSource}
              
              pagination={
                pagination
                  ? {
                      total: total,
                      onChange: handlePageChange,
                      showSizeChanger: true,
                      showTotal: (total, range) => `العدد الكلي ${total}`,
                      pageSizeOptions: ["5", "10", "20", "30", "40"],
                      nextIcon: <ChevronLeft />,
                      prevIcon: <ChevronRight />,
                      size: 'small',
                    }
                  : false 
              }
            />
     
   
      </div>
    </>
  );
}

export default MyTable;
