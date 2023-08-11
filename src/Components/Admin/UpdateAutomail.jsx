import React from "react";
import TopHeader from "../../Common/TopHeader";
import AdminSideBar from "./AdminSideBar";
import AdiminFileSideBar from "./AdiminFileSideBar";

const UpdateAutomail = () => {
  return (
    <div>
      <TopHeader />
      <div className="DropdownForAdmin">
        <AdminSideBar />
      </div>
      <AdiminFileSideBar />
      <div className="main">
        <h5 className="text-center mt-2">UPDATE AUTOMAIL</h5>
        <div class="row">
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateAutomail;
