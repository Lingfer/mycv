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
import { AiOutlineDownload, AiOutlineTwitter } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

import {
  FaFacebookF,
  FaGithubAlt,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

import { BsCalendar2Date } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

import React from "react";
import img2 from "../assets/pixel.jpg";
function Home() {
  const ex = [
    {
      
      icon: <img src="https://www.lawencon.com/wp-content/uploads/2016/11/lwcn-favicon.png" className="h-12 w-12" />,
      judul: "Frontend Developer",
      Exp: "Full Time",
      time: "01-02-2023 - Present ",
      perusahaan: "Lawencon",
      iconPerusahaan: <img src="https://www.lawencon.com/wp-content/uploads/2016/11/lwcn-favicon.png" className=" w-4" />,
      city: "Jakarta",
      iconCity: <FaLinkedin className="h-4 w-4" />,
      desc: "Material Tailwind is an easy to use components library for Tailwind CSS and Material Design. It provides a simple way to customize your components, you can change the colors, fonts, breakpoints and everything you need.",
    },
    {
      icon: <img src="data:image/png;base64,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" className="h-12 w-12" />,
      judul: "Full Stack Developer",
      Exp: "Full Time",
      time: "01-07-2020 - 01-02-2021",
      perusahaan: "PT. INDO KOPPE ENJINIRING",
      iconPerusahaan: <img src="data:image/png;base64,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" className="h-4 w-4" />,
      city: "Jakarta",
      iconCity: <FaLinkedin className="h-4 w-4" />,
      desc: "Material Tailwind is an easy to use components library for Tailwind CSS and Material Design. It provides a simple way to customize your components, you can change the colors, fonts, breakpoints and everything you need.",
    },
    {
      icon: <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAS1BMVEX////8+vb28OTw5dPz693u4cvYu4nQrW/Pq2vXuYTo2Lz+/vzj0K3PqmnPrGzdxJnizKf69/HVtn7OqmnTsnfav5Dr3cXfyKDm1LSuWMDbAAAA5UlEQVR4AWKgFgD0QleJDcNAFEXH+GQY0YT2v9JWZkGbfOX8mK5FVd0k2oouuh4qgWGcaDezQkaz2YuRw/MCwX7HlhbOa0D7BX5tdyGpKegEwOiCGoBqXdDdABkpmAXqPlHgAHBNC8v7HFagTB7McgT8hUB4X6RmyYPH8/ncjrWarbUuDWgqoZn3YDRFXp9rUCUaZ4CiKNCSiUbQfs70OjooymQn+U8gb4KXQA+OEpNRkJmCVgPadE2kewKQjoLqzoASjogA2m/j1lAo0NzQpvXCSscU3zo6uNH0ifurjhddJSb60A8QJRopkW+xcgAAAABJRU5ErkJggg==" className="h-12 w-12" />,
      judul: "Full Stack Developer",
      Exp: "Full Time",
      time: "01-09-2019 - 01-09-2020",
      perusahaan: "Metropolitan Golden Management",
      iconPerusahaan: <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAS1BMVEX////8+vb28OTw5dPz693u4cvYu4nQrW/Pq2vXuYTo2Lz+/vzj0K3PqmnPrGzdxJnizKf69/HVtn7OqmnTsnfav5Dr3cXfyKDm1LSuWMDbAAAA5UlEQVR4AWKgFgD0QleJDcNAFEXH+GQY0YT2v9JWZkGbfOX8mK5FVd0k2oouuh4qgWGcaDezQkaz2YuRw/MCwX7HlhbOa0D7BX5tdyGpKegEwOiCGoBqXdDdABkpmAXqPlHgAHBNC8v7HFagTB7McgT8hUB4X6RmyYPH8/ncjrWarbUuDWgqoZn3YDRFXp9rUCUaZ4CiKNCSiUbQfs70OjooymQn+U8gb4KXQA+OEpNRkJmCVgPadE2kewKQjoLqzoASjogA2m/j1lAo0NzQpvXCSscU3zo6uNH0ifurjhddJSb60A8QJRopkW+xcgAAAABJRU5ErkJggg==" className="h-4 w-4" />,
      city: "Jakarta",
      iconCity: <FaLinkedin className="h-4 w-4" />,
      desc: "Material Tailwind is an easy to use components library for Tailwind CSS and Material Design. It provides a simple way to customize your components, you can change the colors, fonts, breakpoints and everything you need.",
    },
    {
      icon: <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACcklEQVR4AYWTQ4DgUBBE17Zt27ZtjW3btm3btm3btm30/mTsw4vTrFoGAHPo6xtYExSa8UlBxVVeRNJWX0vPRzg9o/T28PDwnG/nPEhOLb739rNE3tmrLCMImOAMuqdh0vOqq2/bt2CAhKTCR1fvcnZN/jgHZnj7WTKvpaVz55wAPT39a1+8Fy2Z+9NceIUszVA7MwN4+ST9PXOFeQQBM7g68x7j0k22/obG9r14ACySj1/yH0U19whuAQu4+ZAHVDQ8QUTSDqgYdOHxKyF4+lYECMjUgJHdEAjI1fAq/INSv+EBIqNzXmETZuM2sXv5QRz/kZnDCK7d5QJn11h4+0UKPv2QwYKiYMLw5LUIHsDJNZYCD4AuKNvbu7dIyjlqnL/OCmpaXmBhHQZ8QpZAy6w3GeDrH3kgodIAVi4TvI2Q8MyPeACsF11DPwEzq1AeWSUX+EmoBMycRniW158kgJ7VAJhQRaJS9vDsrSjwCVvClTscXa1tXVsnh9jV3bchM7v8NiGZWurV68xAdp8KiC/8xDKhCiThzWdJwKr7+lsert/nHpFTclGasYX+xqbdNc6upCG/SCJ9jl+A0GOngencp3lXSECmGolWvn5SB30NDXtjHj0vCTl+BkKOnYFQdEYBRl5eIpuhxMu3OXrRnDSxaucosauo6EzM/cflIShz6PGzEHXrbn1udtk1O8coGjQffg/vRAIk4f2LeqG7tOxk9IMnpXl8AhCnopdi4xBJh1b8xss36a+5dSiLoUkgt4lFMAeGo2sMxeDg0PI5XugprzgR8/hFcaWFFQOWbQJM5tPvEQu7saey8ijiyMT9UvwH9Et1Li3UlaIAAAAASUVORK5CYII=" className="h-12 w-12" />,
      judul: "Full Stack Developer",
      Exp: "Full Time",
      time: "01-04-2019 - 01-09-2019",
      perusahaan: "OPUS IT Services Pte Ltd",
      iconPerusahaan: <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACcklEQVR4AYWTQ4DgUBBE17Zt27ZtjW3btm3btm3btm30/mTsw4vTrFoGAHPo6xtYExSa8UlBxVVeRNJWX0vPRzg9o/T28PDwnG/nPEhOLb739rNE3tmrLCMImOAMuqdh0vOqq2/bt2CAhKTCR1fvcnZN/jgHZnj7WTKvpaVz55wAPT39a1+8Fy2Z+9NceIUszVA7MwN4+ST9PXOFeQQBM7g68x7j0k22/obG9r14ACySj1/yH0U19whuAQu4+ZAHVDQ8QUTSDqgYdOHxKyF4+lYECMjUgJHdEAjI1fAq/INSv+EBIqNzXmETZuM2sXv5QRz/kZnDCK7d5QJn11h4+0UKPv2QwYKiYMLw5LUIHsDJNZYCD4AuKNvbu7dIyjlqnL/OCmpaXmBhHQZ8QpZAy6w3GeDrH3kgodIAVi4TvI2Q8MyPeACsF11DPwEzq1AeWSUX+EmoBMycRniW158kgJ7VAJhQRaJS9vDsrSjwCVvClTscXa1tXVsnh9jV3bchM7v8NiGZWurV68xAdp8KiC/8xDKhCiThzWdJwKr7+lsert/nHpFTclGasYX+xqbdNc6upCG/SCJ9jl+A0GOngencp3lXSECmGolWvn5SB30NDXtjHj0vCTl+BkKOnYFQdEYBRl5eIpuhxMu3OXrRnDSxaucosauo6EzM/cflIShz6PGzEHXrbn1udtk1O8coGjQffg/vRAIk4f2LeqG7tOxk9IMnpXl8AhCnopdi4xBJh1b8xss36a+5dSiLoUkgt4lFMAeGo2sMxeDg0PI5XugprzgR8/hFcaWFFQOWbQJM5tPvEQu7saey8ijiyMT9UvwH9Et1Li3UlaIAAAAASUVORK5CYII=" className="h-4 w-4" />,
      city: "Jakarta",
      iconCity: <FaLinkedin className="h-4 w-4" />,
      desc: "Material Tailwind is an easy to use components library for Tailwind CSS and Material Design. It provides a simple way to customize your components, you can change the colors, fonts, breakpoints and everything you need.",
    },
  ];
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
                {/* <img
                  src="https://instagram.fcgk30-1.fna.fbcdn.net/v/t51.2885-19/299331640_122374073875428_9202622030559878173_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fcgk30-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=dLv2enfCXL4AX_js8JZ&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDyLu66Hr-fcU1nvOZb5XwNJdYNDj_DT_MihLpnE0knZA&oe=6532692F&_nc_sid=ee9879"
                  alt="card-image"
                  className="h-full "
                /> */}
                <CgProfile className="h-full w-full"/>
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
              <Typography variant="h6">Lingga Fernando</Typography>
              <Typography variant="small" className="text-gray-500">
                Frontend And Backend
              </Typography>
            </div>
            <div className="mt-5 mb-7">
              {/* <Button
                size="md"
                variant="gradient"
                color="light-blue"
                className="group relative flex items-center gap-3 overflow-hidden pr-[72px]"
              >
                Download Cv
                <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
                  <AiOutlineDownload className="h-6 w-6" />
                </span>
              </Button> */}
            </div>
          </div>
        </Card>
        <Card className="col-span-4 p-8">
          <Typography className="mb-6 mt-4 text-[20px] font-semibold">
            About me
          </Typography>
          <Typography className="text-[16px] text-[#4b5563]">
          Change will not come if we wait for some other person or some other time. We are the ones we’ve been waiting for. We are the change that we seek
          </Typography>
          <Typography variant="small" className="mt-8" color="blue">
            <a href="mailto:lingfer46@gmail.com.com"> lingfer46@gmail.com</a>
          </Typography>
          <div className="w-1/3 mt-5 grid grid-rows-1 grid-flow-col gap-4">
            <a href="https://www.linkedin.com/in/lingga-fernando-099438182/#">
              <FaLinkedin className="h-6 w-6 hover:drop-shadow-md" />
            </a>
            <a href="https://www.instagram.com/lingfer46/">
              <FaInstagramSquare className="h-6 w-6" />
            </a>
            <a href="#">
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a href="https://github.com/Lingfer">
              <FaGithubAlt className="h-6 w-6" />
            </a>
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
          <div className="px-10 py-6">
            <Typography variant="h6">Experience</Typography>
            {ex.map((d, i) => {
              return (
                <div className="py-4">
                  <div className="flex mt-6 gap-5">
                    <div className="flex-none w-12 ">{d.icon}</div>
                    <div className="flex-initial w-1/2">
                      <Typography variant="paragraph">{d.judul}</Typography>
                      <div className="flex flex-row gap-4">
                        <div className="gap-2 flex flex-row text-[12px] font-semibold mt-2">
                          {d.iconPerusahaan}
                          {d.perusahaan}
                        </div>
                        <div className="flex flex-row text-[12px] font-semibold mt-2">
                          <CiLocationOn className="h-4 w-4" />
                          {d.city}
                        </div>
                      </div>
                    </div>
                    <div className="flex-initial w-1/2 ">
                      <div className="grid justify-items-end ">
                        <Chip
                          variant="ghost"
                          value={d.Exp}
                          className="justify-end px-2 text-[10px] w-[65px] h-[25px] text-gray-500"
                        />
                        <div className="gap-2 flex flex-row text-[12px] font-semibold mt-2">
                          <BsCalendar2Date className="h-4 w-4" />
                          {d.time}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-6 gap-5">
                    <div className="flex-none w-12 "></div>
                    <div className="flex-initial w-full ...">
                      <Typography variant="small" className="text-gray-500">{d.desc}</Typography>
                    </div>
                  </div>
                </div>
              );
            })}
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
