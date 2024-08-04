import Layout from "../layout/Layout";
import Navi from "../molecules/Navi";

const Students = () => {
  return (
    <div className="w-screen h-screen my-auto mx-auto flex">
      <Layout />
      <div className="flex flex-col w-4/5 h-screen mr-4">
        <div className="w-full my-4 mr-4 h-1/5 bg-gray-50 content-center text-center">
          <Navi />
        </div>
        <div className="w-full h-1/6 flex justify-center border border-red-500">검색창</div>
        <div className="w-full h-5/6 border border-red-500">학생정보 리스트</div>
      </div>
    </div>
  );
};

export default Students;
