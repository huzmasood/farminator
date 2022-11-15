import React from "react";
import { Row } from "react-bootstrap";
import CustomCard from "../../components/CustomCard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { BsThermometerHalf } from "react-icons/bs";
import { BsDropletFill } from "react-icons/bs";
import { GiDroplets } from "react-icons/gi";

const CustomCardListing = [
  {
    id: 0,
    title: "30°C",
    icon: () => <BsThermometerHalf size={40} />,
    desc: "Temperature",
  },
  {
    id: 1,
    title: "27%",
    icon: () => <BsDropletFill size={40} />,
    desc: "Humidity",
  },
  {
    id: 2,
    title: "YES",
    icon: () => <GiDroplets size={40} />,
    desc: "Irrigation",
  },
];

const data = [
  {
    name: "Monday",
    humidity: 4000,
    temperature: 2400,
    amt: 2400,
  },
  {
    name: "Tuesday",
    humidity: 3000,
    temperature: 1398,
    amt: 2210,
  },
  {
    name: "Wednesday",
    humidity: 2000,
    temperature: 9800,
    amt: 2290,
  },
  {
    name: "Thursday",
    humidity: 2780,
    temperature: 3908,
    amt: 2000,
  },
  {
    name: "Friday",
    humidity: 1890,
    temperature: 4800,
    amt: 2181,
  },
  {
    name: "Saturday",
    humidity: 2390,
    temperature: 3800,
    amt: 2500,
  },
  {
    name: "Sunday",
    humidity: 3490,
    temperature: 4300,
    amt: 2100,
  },
];

function ClientDashboard() {
  return (
    <div className="main">
      <div className="pt-4">
        <h1>Current Information on the Farm</h1>
        <Row className="mt-4 threeCol text-center">
          {CustomCardListing.map((item) => {
            return (
              <CustomCard
                key={item.id}
                title={item.title}
                Icon={item.icon}
                detail={item.desc}
              />
            );
          })}
        </Row>
      </div>
      <div className="mt-5" style={{ height: "400px" }}>
        <h1>Illustration Curve</h1>
        <ResponsiveContainer width="75%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="temperature"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ClientDashboard;
