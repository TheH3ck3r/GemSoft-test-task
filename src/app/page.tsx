import { Data } from "@/components/Data";
import { Page } from "@/components/Page";

export default function Home() {
  return (
    <Page>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        Главаня страница
      </div> */}
      <Data></Data>
    </Page>
  );
}
