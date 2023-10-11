import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { AiOutlineDownload ,AiOutlineTwitter} from "react-icons/ai";
import {
  FaFacebookF,
  FaGithubAlt,
  FaInstagramSquare,
  FaLinkedin,

} from "react-icons/fa";

import React from "react";
import img2 from "../assets/pixel.jpg";
function Home() {
  return (
    <div className="px-36 pt-11 ">
      <div className="grid md:grid-cols-6 gap-6">
        <Card className="col-span-2">
          <img
            className="h-32 rounded-t-lg w-full object-cover object-center"
            src={img2}
          />
          <div className="px-7">
            <div className="grid grid-cols-2 ">
              <CardHeader className="relative w-20 h-20 pl-0 border-solid border-2 border-sky-500 ml-0">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                  className="h-full "
                />
              </CardHeader>
              <div className="grid justify-end mt-5 mr-3 ">
                <Chip
                  className="px-2 py-1 w-19 h-4 text-[8px] text-gray-400"
                  variant="ghost"
                  value="BUSY"
                />
              </div>
            </div>
            <div className="mt-3">
              <Typography variant="h6">Nama Anda Wow</Typography>
              <Typography variant="small" className="text-gray-500">
                Frontend And Backend
              </Typography>
            </div>
            <div className="mt-5 mb-5">
              <Button
                size="md"
                variant="gradient"
                color="light-blue"
                className="group relative flex items-center gap-3 overflow-hidden pr-[72px]"
              >
                Download Cv
                <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
                  <AiOutlineDownload className="h-6 w-6" />
                </span>
              </Button>
            </div>
          </div>
        </Card>
        <Card className="col-span-4 p-8">
          <Typography variant="h4" className="mb-6">
            About me
          </Typography>
          <Typography variant="paragraph">
            Libero quas veritatis nulla distinctio fuga nihil temporibus et.
            Quia dicta sapiente qui porro molestiae nobis incidunt voluptatem.
            Et voluptas sunt nihil. At perferendis voluptatem dolores nulla.
            Adipisci dolore non. Praesentium ipsa magnam ut quia explicabo
            voluptates.
          </Typography>
          <Typography variant="small" className="mt-6" color="blue">
            <a href="mailto:sayhello@mjurnal.com"> sayhello@mjurnal.com</a>
          </Typography>
          <div className="w-1/3 mt-5 grid grid-rows-1 grid-flow-col gap-4">
            <FaLinkedin className="h-7 w-7" />
            <FaInstagramSquare className="h-7 w-7" />
            <FaFacebookF className="h-7 w-7" />
            <FaGithubAlt className="h-7 w-7" />
          </div>
          {/* {UnderlineTabs()} */}
        </Card>
      </div>
      <div className="grid md:grid-cols-6 gap-6 mt-6">
        <div className="col-span-2">
          <Card>
            <div className="px-7 py-6">
              <Typography variant="h6">Information</Typography>
              <div className="grid grid-cols-2 gap-3 my-2 ">
                <Typography variant="small" className="text-gray-500">
                  Location
                </Typography>

                <Typography
                  variant="small"
                  className="font-semibold text-inherit grid justify-end"
                >
                  Jakarta
                </Typography>
              </div>
              <div className="grid grid-cols-2 gap-3 my-2 ">
                <Typography variant="small" className="text-gray-500">
                  Experience
                </Typography>

                <Typography
                  variant="small"
                  className="font-semibold text-inherit grid justify-end"
                >
                  5 Year
                </Typography>
              </div>
              <div className="grid grid-cols-2 gap-3 my-2">
                <Typography variant="small" className=" text-gray-500">
                  Availability
                </Typography>

                <Typography
                  variant="small"
                  className="font-semibold text-inherit grid justify-end"
                >
                  1 Week
                </Typography>
              </div>
              <div className="grid grid-cols-2 gap-3 my-2">
                <Typography variant="small" className="text-gray-500">
                  Relocation
                </Typography>

                <Typography
                  variant="small"
                  className="font-semibold text-inherit grid justify-end"
                >
                  No
                </Typography>
              </div>
            </div>
          </Card>
          <Card className="mt-6">
            <div className="px-7 py-6">
              <Typography variant="h6">Skill</Typography>
              <div className="grid  grid-cols-3 gap-2 my-2 ">
                <Chip
                  variant="ghost"
                  className="px-2 text-[10px] text-gray-500"
                  value="Node Js"
                />
                <Chip
                  variant="ghost"
                  value="Next Js"
                  className="px-2 text-[10px] text-gray-500"
                />
                <Chip
                  variant="ghost"
                  value="React Js"
                  className="px-2 text-[10px] text-gray-500"
                />
                <Chip
                  variant="ghost"
                  value="Express Js"
                  className="px-2 text-[10px] text-gray-500"
                />
                <Chip
                  variant="ghost"
                  value="Typescript"
                  className="px-2 text-[10px] text-gray-500"
                />
                <Chip
                  variant="ghost"
                  value="Tailwind"
                  className="px-2 text-[10px] text-gray-500"
                />
                <Chip
                  variant="ghost"
                  value="bootstrap"
                  className="px-2 text-[10px] text-gray-500"
                />
              </div>
            </div>
          </Card>
        </div>
        <Card className="col-span-4">
          <div className="px-7 py-6">
            <Typography variant="h6">Experience</Typography>

            <div className="flex mt-6">
              <div className="flex-none w-10 ">
                <FaLinkedin className="h-7 w-7" />
               <AiOutlineTwitter/>
              </div>
              <div className="flex-initial w-96 ...">
                <Typography variant="paragraph">Programming</Typography>
                <Typography className="text-[12px] font-semibold mt-2">
                  No
                </Typography>
              </div>
              <div className="flex-initial w-32 ...">03</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Home;

export function UnderlineTabs() {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "Rasume",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people 
        who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Product",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      {/* <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody> */}
    </Tabs>
  );
}
