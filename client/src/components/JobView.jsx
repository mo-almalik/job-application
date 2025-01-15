import React from 'react';
import { Dropdown, Table, Skeleton, Empty, Button } from 'antd';
import dayjs from 'dayjs';
import { ChevronLeft, ChevronRight, CircleX, Copy, EllipsisVertical, Eye } from 'lucide-react';

function JobView({ items, isLoading ,handlePage,total}) {
    const actionClick = [
        {
            label: (
                <button className='p-1 w-full justify-end flex-row-reverse px-5 flex items-center gap-x-2 rounded-md text-[14px] text-gray-500 hover:text-gray-800 hover:bg-gray-100 my-1'>
                   <span> نسخ الوظيفة</span>
                    <span><Copy size={15} /></span>
                </button>
            ),
            key: '1',
        },
        {
            label: (
                <button className='p-1 w-full justify-end flex-row-reverse px-5 flex items-center gap-x-2 rounded-md text-[14px] text-gray-500 hover:text-gray-800 hover:bg-gray-100 my-1'>
                    <span>التفاصيل</span>
                    <span><Eye size={15} /></span>
                </button>
            ),
            key: '2',
        },
        {
            label: (
                <button className='p-1 w-full justify-end flex-row-reverse px-5 flex items-center gap-x-2 rounded-md text-[14px] text-gray-500 hover:text-gray-800 hover:bg-gray-100 my-1'>
                  <span>  انهاء التقديم</span>
                  <span><CircleX size={15}/></span>
                </button>
            ),
            key: '3',
        },
    ];

    const columns = [
        { title: 'عنوان الوظيفة', dataIndex: 'title', key: 'title', width: '40%' },
        { title: 'الحالة', dataIndex: 'status', key: 'status', width: '5%' },
        { title: 'المتقدمين', dataIndex: 'applications', key: 'applications', width: '10%' },
        { title: 'اجراء', dataIndex: 'action', key: 'action', width: '10%' },
    ];

    const dataSource = items?.map((item) => ({
        key: item._id,
        title: (
            <div>
                <h3>{item.title}</h3>
                <div className='flex items-center mt-3 gap-4'>
                    <div>{item.jobType}</div>
                    <div className='w-1 h-1 bg-gray-500 rounded-full'></div>
                    <div>منذ {dayjs(item.createdAt).format('d')} يوم</div>
                </div>
            </div>
        ),
        status: item.status,
        applications: (
            <div>
                <span className='text-sm text-gray-400'>المتقدمين</span>
                <span> {item.applicationCount}</span>
            </div>
        ),
        action: (
            <div className='flex items-center gap-x-5'>
                <div>
                    <button className='bg-primary-50 text-primary py-2 px-5 rounded-md text-sm'>
                    عرض الطلبات
                    </button>
                </div>
                <Dropdown
                    placement='bottom'
                    menu={{
                        items: actionClick,
                    }}
                    trigger={['click']}
                >
                    <button className='bg-gray-200 p-2 rounded-md'>
                        <EllipsisVertical size={18} />
                    </button>
                </Dropdown>
            </div>
        ),
    }));

    const handlePageChange = async (page, pageSize) => {
        await handlePage(page, pageSize);
    };

    return (
        <>
           <div className='my-8'>
           {items?.length === 0 ? (
                <div className='h-[80vh] flex items-center justify-center'>
                    <Empty
                        description='لا توجد وظائف متاحة حاليا'
                    >
                        <Button type="primary">إنشاء وظيفة جديدة</Button>
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
    );
}

export default JobView;

// total:total,
// nextIcon: <ChevronLeft />,
// prevIcon: <ChevronRight />,
// showSizeChanger: true,
// pageSizeOptions: ['5', '10', '20'],
// pageSize: 10,
// showTotal: (total) => `صفحة ${Math.ceil(total / 10)} من ${Math.ceil(total / 10)}`,
// onChange: handlePageChange,
// onShowSizeChange: handlePageChange,
