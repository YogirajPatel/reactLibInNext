import { ResponsiveStream } from "@nivo/stream";
import streamData from "../Component/streamData";

const Stream = () => {
  return (
    <>
   
      <div
        style={{
          height: "30rem",
          width: "60rem",
          margin: "auto",
        }}
      >
        <ResponsiveStream
          data={streamData}
          keys={["Ronaldo", "Neymar", "Messi"]}
          margin={{
            top: 50,
            right: 180,
            bottom: 50,
            left: 100,
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 90,
            legend: "Number of Years Playing",
            legendOffset: 36,
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Number of Goals",
            legendOffset: -40,
          }}
          offsetType="silhouette"
          colors={{ scheme: "accent" }}
          fillOpacity={0.85}
          borderColor={{ theme: "background" }}
          dotBorderColor={{
            from: "color",
            modifiers: [["darker", 0.7]],
          }}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              translateX: 100,
              itemWidth: 80,
              itemHeight: 20,
              itemTextColor: "#999999",
              symbolSize: 12,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000000",
                  },
                },
              ],
            },
          ]}
        />
        <footer>
          <p>Representing football goals stats with Nivo stream</p>
          <p
            style={{
              fontStyle: "oblique",
              marginTop: "0.5rem",
            }}
          >
            PS: Not real stats
          </p>
        </footer>
        <h1
          style={{
            background: "linear-gradient(45deg, #49a09d, #5f2c82)",
            borderRadius: "5px",
            textAlign: "center",
            color: "white",
          }}
        >
          Stream Chart
        </h1>
      </div>
    </>
  );
};

export default Stream;
