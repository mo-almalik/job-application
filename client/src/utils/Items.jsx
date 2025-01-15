import { BriefcaseBusiness, ChartPie, Handshake, Info, LayoutDashboard, Paperclip, Settings } from "lucide-react";

export const EmployerItems =[
    {
        title:'الرئيسية',
        path:'',
        icon:<LayoutDashboard size={20} />
    },
    {
        title:'الوظائف',
        path:'jobs',
        icon:<BriefcaseBusiness size={20} />
    },
    {
        title:'المتقدمون',
        path:'candidates',
        icon:<Handshake size={20} />
    },
    {
        title:'الشركة',
        path:'copmanies',
        icon:<Paperclip size={20} />
    },
    {
        title:'تقارير',
        path:'reports',
        icon:<ChartPie size={20} />
    },
    {
        title:'الأعدادات',
        path:'/settings',
        icon:<Settings size={20} />
    },
    {
        title:'الدعم   ',
        path:'/support',
        icon:<Info size={20} />
    }
]