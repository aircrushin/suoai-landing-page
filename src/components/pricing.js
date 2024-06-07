export default () => {
  const plans = [
    {
      name: "免费版",
      price: "0",
      icon: "/pricing/free.svg",
      features: [
        "每月 200 次对话功能",
        "社区技术支持",
        "新注册即送百万 tokens",
      ],
    },
    {
      name: "个人版",
      price: 35,
      icon: "/pricing/personal.svg",
      features: ["无限制对话", "社区技术支持", "每月 200 次 API 调用次数 "],
    },
    {
      name: "企业版",
      price: 60,
      icon: "/pricing/enterprise.svg",
      features: [
        "无限制对话",
        "定制化云端/本地部署",
        "无限制 API 调用次数",
        "专家技术支持",
      ],
    },
  ];

  return (
    <section className="py-14 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-xl mx-auto sm:text-center">
          <h1 className="lg:mt-10 mt-4 md:mt-8 text-center md:text-5xl text-3xl text-[#28374F] mb-20 tracking-wider font-semibold">
            索飞AI定价
          </h1>
        </div>
        <div className="mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className="relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={item.icon}
                  alt={`${item.name} icon`}
                  className="w-6 h-6"
                />
                <span className="text-gray-800 font-bold text-2xl">
                  {item.name}
                </span>
              </div>
              {/* <div className="mt-4 text-gray-800 text-3xl font-semibold">
                ￥{item.price}{" "}/月
              </div> */}
              <ul className="py-16 space-y-8">
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    {featureItem}
                  </li>
                ))}
              </ul>
              <div className="flex-1 flex items-end">
                <button className="opacity-95 flex items-center justify-center px-3 py-3 rounded-3xl w-1/2 duration-150 text-white bg-blue-500 hover:bg-blue-400 active:bg-blue-600">
                  了解详情
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 ml-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
