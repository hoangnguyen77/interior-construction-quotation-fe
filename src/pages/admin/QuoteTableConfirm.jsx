import { Input, Modal, Table } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {getValidCurrency} from "../../utils/Validation.js";

const QuoteTableConfirm = ({ selectedQuotationItem , dataSource, setDataSource, totalPrice, setTotalPrice}) => {



  useEffect(() => {
    const fetchData = async () => {
      if (!selectedQuotationItem) {
        return;
      }

      try {
        const response = await axios.get(`http://localhost:8080/quotation-list/${selectedQuotationItem}/quotationDetailList`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
          }
        });

        if (response.status === 200) {
          setDataSource(response.data._embedded.quotationDetails);
          calculateTotalPrice(response.data._embedded.quotationDetails); // Calculate initial total price
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        console.error('There was a problem with the request:', error);
      }
    };

    fetchData();
  }, [selectedQuotationItem]);

  const calculateTotalPrice = (data) => {
    const totalPrice = data.reduce((acc, cur) => acc + parseFloat(cur.realTotalPrice), 0);
    setTotalPrice(totalPrice);
  };

  const handlePriceChange = (value, key) => {
    const newData = dataSource.map((item) => {
      if (item.detailId === key) {
        return { ...item, realTotalPrice: value };
      }
      return item;
    });
    setDataSource(newData);
    calculateTotalPrice(newData);
  };
  const handleNoteChange = (value, key) => {
    const newData = dataSource.map((item) => {
      if (item.detailId === key) {
        return { ...item, note: value }; // Update the 'note' property
      }
      return item;
    });
    setDataSource(newData);
  };



  const columns = [
    {
      title: 'Loại phòng',
      dataIndex: 'typeRoom',
    },
    {
      title: 'Sản phẩm',
      dataIndex: 'productName',
    },
    {
      title: 'Dài',
      dataIndex: 'length',
      width: 30,
    },
    {
      title: 'Rộng',
      dataIndex: 'width',
      width: 30,
    },
    {
      title: 'Cao',
      dataIndex: 'height',
      width: 30,
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      width: 91,
    },
    {
      title: 'Tổng Tiền',
      dataIndex: 'estimateTotalPrice',
      render: (estimateTotalPrice) => getValidCurrency(estimateTotalPrice),
      width: 130,
    },
    {
      title: 'Giá thực tế',
      dataIndex: 'realTotalPrice',
      width: 120,
      render: (_, record) => (
          <Input
              value={record.realTotalPrice}
              onChange={(e) => handlePriceChange(e.target.value, record.detailId)}
          />
      ),
    },
    {
      title: 'Ghi chú',
      dataIndex: 'note',
      width: 300,
      render: (_, record) => (
          <Input
              value={record.note}
              onChange={(e) => handleNoteChange(e.target.value, record.detailId)} // Call handleNoteChange on change
          />
      ),
    },
  ];

  return (
      <div className='table-container' >
        <div className='quotetable-title'>
          <Title level={2}>Bảng Tạm Tính Giá Phần Vật Liệu</Title>
        </div>
        <Table
            bordered
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            rowKey="detailId"
            footer={() => (
                <div>
                  <span style={{ fontWeight: 'bold' }}>Tổng Tiền: </span>
                  <span>{totalPrice}</span>
                </div>
            )}
        />
      </div>
  );
};

export default QuoteTableConfirm;
