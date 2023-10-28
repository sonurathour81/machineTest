import SpaceData from "./SpaceData";
import ReduxProvider from "./reduxProvider";
export default function Home() {
  return (
    <ReduxProvider>
      <SpaceData/>
    </ReduxProvider>
  );
}
