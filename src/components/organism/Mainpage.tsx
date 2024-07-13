import Navi from "../molecules/Navi";
import Layout from "../layout/Layout";

const Mainpage = () => {
  return (
    <div className="w-screen h-screen my-auto mx-auto flex">
      <Layout />
      <div className="w-4/5 my-4 mr-4 h-32 bg-gray-50 content-center text-center ">
      <Navi/>
      </div>
    </div>
  );
};

export default Mainpage;
