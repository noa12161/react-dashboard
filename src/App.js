import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
// 컴포넌트
// 컨텍스트

const App = () => {
  const activeMenu = true;

  return (
    <div>
      <BrowserRouter>
        {/* 하단 설정 아이콘 */}
        <div className="flex realtive dark:bg-main-dart-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {/* 사이드바 */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              SideBar
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">Sidebar w-0</div>
          )}
          {/* 네비게이션바 */}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              NavBar
            </div>
            <div>
              <Routes>
                {/* 대시보드 */}
                <Route path="/" element="ECommerce" />
                <Route path="/ecommerce" element="ECommerce" />
                {/* 페 이지 */}
                <Route path="/orders" element="Orders" />
                <Route path="/employees" element="Employees" />
                <Route path="/customers" element="Customers" />
                {/* 앱 */}
                <Route path="/kanban" element="Kanban" />
                <Route path="/editor" element="Editor" />
                <Route path="/calandar" element="Calandar" />
                <Route path="/color-picker" element="ColorPicker" />
                {/* 차트 */}
                <Route path="/line" element="Line" />
                <Route path="/area" element="Area" />
                <Route path="/bar" element="Bar" />
                <Route path="/pie" element="Pie" />
                <Route path="/financial" element="Financial" />
                <Route path="/color-mapping" element="ColorMapping" />
                <Route path="/pyramid" element="Pyramid" />
                <Route path="/stacked" element="Stacked" />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
