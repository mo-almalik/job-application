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
  description,
}) {
  const handlePageChange = async (page, pageSize) => {
    await handlePage(page, pageSize);
  };

  return (
    <>
      <div className="my-8">
        {total?.length === 0 || total === undefined ? (
          <div className="h-[80vh] flex items-center justify-center">
            <Empty description={description}>
              {btn && <Button type="primary"> {btn} </Button>}
            </Empty>
          </div>
        ) : (
          <>
            <Table
              loading={isLoading}
              columns={columns}
              dataSource={dataSource}
              pagination={{
                total: total,
                onChange: handlePageChange,
                showSizeChanger: true,
                showTotal: (total, range) => `العدد الكلي ${total}`,
                pageSizeOptions: ["5", "10", "20", "30", "40"],
                nextIcon: <ChevronLeft />,
                prevIcon: <ChevronRight />,
                size:'small',
              }}
            />
          </>
        )}
      </div>
    </>
  );
}

export default MyTable;
