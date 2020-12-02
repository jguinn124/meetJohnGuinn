import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  graph: {
    fontFamily: "Arial",
    fontSize: 18,
  },
}));

const data = [
  {
    Year: "2006",
    People: 11,
  },
  {
    Year: "2008",
    People: 21,
  },
  {
    Year: "2010",
    People: 46,
  },
  {
    Year: "2012",
    People: 57,
  },
  {
    Year: "2014",
    People: 62,
  },
  {
    Year: "2016",
    People: 69,
  },
  {
    Year: "2018",
    People: 70,
  },
];

export default function SimpleLineChart() {
  const classes = useStyles();

  return (
    <LineChart
      className={classes.graph}
      width={450}
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
      <XAxis
        dataKey="Year"
        label={{
          position: "top",
          value: "Year",
        }}
      />
      <YAxis
        label={{
          value: "% of People Polled",
          angle: -90,
          position: "insideBottomLeft",
          textAnchor: "middle",
        }}
      />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="People"
        stroke="#169873"
        activeDot={{ r: 8 }}
        unit="%"
      />
    </LineChart>
  );
}
