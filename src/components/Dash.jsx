import { Button } from "../../node_modules/antd";
import { PlusOutlined, DownOutlined } from "../../node_modules/@ant-design/icons";
import { AnalyticsCard } from "./cards/Analytics";
import { QuotationCard } from "./cards/Quotations";
import { quotations, tableData } from "./constants";
import { Table } from "../../node_modules/antd";

const columns = [
  {
    title: "Page",
    dataIndex: "page",
    key: "page",
  },
  {
    title: "Pageviews",
    dataIndex: "pageviews",
    key: "pageviews",
  },
  {
    title: "Unique pageviews",
    dataIndex: "uniquePageviews",
    key: "uniquePageviews",
  },
  {
    title: "Avg. time on page",
    dataIndex: "avgTimeOnPage",
    key: "avgTimeOnPage",
  },
  {
    title: "Extrances",
    dataIndex: "extrances",
    key: "extrances",
  },
  {
    title: "% Exit",
    dataIndex: "exit",
    key: "exit",
  },
  {
    title: "Page value",
    dataIndex: "pageValue",
    key: "pageValue",
  },
];

export const DashboardHome = () => {
  return (
    <div>
      <div className="flex items-center justify-between ">
        <Button
          icon={<PlusOutlined />}
          type="primary"
          className="px-8 rounded-full bg-[#2F667F]"
        >
          Create Report
        </Button>
        <Button className="px-8 rounded-full text-[#2F667F]">
          {" "}
          Share this dashboard
        </Button>
        <Button className="px-8 rounded-full text-[#2F667F]">
          {" "}
          Select Duration
a        </Button>
        <Button className="px-8 rounded-full text-[#2F667F]">
          {" "}
          Compare with Duration
        </Button>
      </div>

      <div className="mt-8 grid grid-cols-4 gap-3">
        <AnalyticsCard
          title="Efficiency"
          description="Lorem Ipsum"
          val={1.1921}
          isProfitable={true}
          analytics="+0.0015 (+0.13%)"
          finance="0.00 USD"
          className="bg-[#539BBB]"
        />

        <AnalyticsCard
          title="time to market"
          description="Lorem Ipsum"
          val={327176}
          isProfitable={false}
          analytics="-97,914.00 (-23.03%)"
          finance="131,040,723,108 JPY"
          className="bg-[#14827B]"
        />

        <AnalyticsCard
          title="Tech debt"
          description="Lorem Ipsum"
          val={1.1763}
          isProfitable={true}
          analytics="+0.0015 (+0.13%)"
          finance="0.00 USD"
          className="bg-[#FFFFFF] text-black"
        />

        <AnalyticsCard
          title="Predictability"
          description="Lorem Ipsum"
          val={0.0031301}
          isProfitable={true}
          analytics="-0.00050430(-13.88%)"
          finance="1,566 BTC"
          className="bg-[#FF4F52]"
        />
      </div>

      <div className="mt-8 grid grid-cols-3 gap-3 mb-8 ">
        {quotations.map((q) => (
          <QuotationCard
            key={q.title}
            title={q.title}
            quotation={q.quotation}
            isGreenFlag={q.isGreenFlag}
          />
        ))}
      </div>
      <div className="flex justify-between p-5 ">
        <Button className="px-8 border-none ">
          PAGE VIEWS <DownOutlined />
        </Button>
        <div className="flex items-center justify-between">
          <Button className="px-6 text-[#2F667F]"> Today</Button>
          <Button className="px-6 text-[#2F667F]"> Yesterday</Button>
          <Button className="px-6 text-[#2F667F]"> Week</Button>
          <Button className="px-6 text-[#2F667F]"> Month</Button>
          <Button className="px-6 text-[#2F667F]"> Quarter</Button>
          <Button className="px-6 text-[#2F667F]"> year</Button>
          <Button className="px-8 ml-5 text-[#2F667F]">
            {" "}
            select period <DownOutlined />
          </Button>
        </div>
      </div>

      <Table columns={columns} dataSource={tableData} />
    </div>
  );
};
