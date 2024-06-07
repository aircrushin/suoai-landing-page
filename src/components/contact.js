export default function Component()  {

    const contactMethods = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
            ,
            title: "访问我们的官网",
            desc: "专业、可靠、简洁、易懂的安全生产管理与智能协作平台",
            link: {
                name: "Safebition官网",
                href: "https://www.safebition.com/"
            },
        },
        {
            icon:(
                <img src="/logo.svg" alt="Baidu Icon"/>
            ),
            title: "关注我们的百家号",
            desc: "成都养路工数字科技有限公司",
            link: {
                name: "成都养路工",
                href: "https://baijiahao.baidu.com/u?app_id=1793299385961563"
            },
        },
    ]

    return (
        <section className="py-14 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-12 md:px-8 lg:flex">
                <div className="max-w-md">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        联系我们
                    </h3>
                    <p className="mt-6">
                        如果您正在寻求合作或相关咨询,请联系我们：
                    </p>
                    <p className="mt-3">地址：成都市青羊总部基地二期6号楼1单元306</p>
                    <p className="mt-3">联系电话：1905-034-0631</p>
                </div>
                <div>
                    <ul className="mt-12 gap-y-6 gap-x-12 items-center md:flex lg:gap-x-0 lg:mt-0">
                        {
                            contactMethods.map((item, idx) => (
                                <li key={idx} className="space-y-3 border-t py-6 md:max-w-sm md:py-0 md:border-t-0 lg:border-l lg:px-12 lg:max-w-none">
                                    <div className="w-12 h-12 rounded-full border flex items-center justify-center text-gray-700">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-gray-800 text-lg font-medium xl:text-xl">
                                        {item.title}
                                    </h4>
                                    <p>
                                        {item.desc}
                                    </p>
                                    <a href={item.link.href} className="flex items-center gap-1 text-sm text-indigo-600 duration-150 hover:text-indigo-400 font-medium">
                                        {item.link.name}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}