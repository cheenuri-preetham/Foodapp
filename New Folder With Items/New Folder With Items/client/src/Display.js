import { Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { DeleteOutlined } from "@ant-design/icons";
const Display = () => {
  const { foodItem } = useSelector((state) => state.rootReducer);
  const dispatch = useDispatch();
  const click = (record) => {
    dispatch({ type: "delete", payload: record });
  };
  const [total, setTotal] = useState();
  useEffect(() => {
    let temp = 0;
    foodItem.forEach((item) => {
      temp = temp + item.Price * item.quantity;
    });
    setTotal(temp);
  }, [foodItem]);
  const [modal, setModal] = useState(false);
  const cart=[
    {
      title:"Item",
      dataIndex:"Name"
    },
    {
      title:"Sub Total",
      dataIndex:"total"
    }
  ]
  const columns = [
    {
      title: "Item",
      dataIndex: "Name",
    },
    {
      title: "Image",
      dataIndex: "Image",
      render: (image, record) => (
        <img src={image} height="60px" width="60px"></img>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Sub Total",
      dataIndex: "total",
    },
    {
      title: "Delete",
      dataIndex: "id",
      render: (id, record) => (
        <div>
          <DeleteOutlined onClick={() => click(record)}></DeleteOutlined>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Navbar>
        <Table columns={columns} dataSource={foodItem} bordered></Table>
        <div className="d-flex justify-content-end">
          <h1>TOTAL :{total}</h1>
        </div>
        <div className="my-3 d-flex justify-content-end">
          <button className="btn-primary" onClick={() => setModal(true)}>
            Genrate Bill
          </button>
        </div>
        <Modal
          visible={modal}
          onCancel={() => setModal(false)}
          footer={false}
          title="Total Bill"
          width="800px"
        >
          <div className="d-flex justify-content-between">
            <h1>SR MARKET</h1>
            <div>
              <div>
                <h7>
                  Kukatpally &nbsp;&nbsp;<b>503002</b>
                </h7>
              </div>
              <div>
                {" "}
                <h7>
                  Help Line :&nbsp;&nbsp;<b>9989222721</b>
                </h7>
              </div>
              <div>
                <h7>
                  email :&nbsp;&nbsp;<b>foodpand@gmail.com</b>
                </h7>
              </div>
            </div>
            <hr />
          </div>
          <center>
            <div className="my-5">
            <Table columns={cart} style={{"width":"200px"}} dataSource={foodItem} bordered></Table>
            </div>
            </center>
           <center className="mt-1">
             <h1>TOTAL:{total}</h1>
           </center>
           <div className="d-flex justify-content-end" >
             <button>PAY BILL</button>
           </div>
        </Modal>
      </Navbar>
    </div>
  );
};

export default Display;
