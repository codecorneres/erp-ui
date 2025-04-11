import React, { useState } from "react";
import "./SalesOrder.css";

const SalesOrder = () => {
  const [orderData, setOrderData] = useState({
    orderNumber: "",
    orderDate: new Date().toISOString().split("T")[0],
    customerCode: "",
    customerNumber: "",
    subtotalBeforeTax: 0,
    discountAmount: 0,
    taxAmount: 0,
    salesperson: "",
    dueDate: "",
    installer: "",
    customerName: "",
    warehouse: "",
    isExport: false,
    totalAmount: 0,
    paidAmount: 0,
    balanceAmount: 0,
    settlementDate: "",
    notes: "",
    taxType: "included",
    items: [],
  });

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...orderData.items];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value,
    };

    if (field === "quantity" || field === "unitPrice") {
      updatedItems[index].subtotal =
        updatedItems[index].quantity * updatedItems[index].unitPrice;
    }

    setOrderData({
      ...orderData,
      items: updatedItems,
    });
  };

  const handleAddItem = () => {
    setOrderData({
      ...orderData,
      items: [
        ...orderData.items,
        {
          id: Date.now(),
          productCode: "",
          unitPrice: 0,
          quantity: 0,
          subtotal: 0,
          warehouse: "",
          productName: "",
          unit: "",
        },
      ],
    });
  };

  return (
    <div className="sales-order-window">
      <div className="window-title">
        銷售作業 2025/04/10 PM 06:10 使用者:李中富 Server:
      </div>

      <div className="sales-order">
        <div className="order-header">
          <div className="tab-title-bar">
            <div className="tab-title">銷售主檔</div>
          </div>

          <div className="header-form">
            <div className="form-left">
              <div className="form-row">
                <div className="form-group">
                  <label>銷售單號:</label>
                  <input
                    type="text"
                    value={orderData.orderNumber}
                    onChange={(e) =>
                      setOrderData({
                        ...orderData,
                        orderNumber: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>銷售日期:</label>
                  <input
                    type="text"
                    value={orderData.orderDate}
                    onChange={(e) =>
                      setOrderData({ ...orderData, orderDate: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>客戶編號:</label>
                  <input
                    type="text"
                    value={orderData.customerCode}
                    onChange={(e) =>
                      setOrderData({
                        ...orderData,
                        customerCode: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>客戶實號:</label>
                  <input
                    type="text"
                    value={orderData.customerNumber}
                    onChange={(e) =>
                      setOrderData({
                        ...orderData,
                        customerNumber: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>未稅小計:</label>
                  <input
                    type="text"
                    value={orderData.subtotalBeforeTax}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label>折讓金額:</label>
                  <input
                    type="text"
                    value={orderData.discountAmount}
                    onChange={(e) =>
                      setOrderData({
                        ...orderData,
                        discountAmount: Number(e.target.value),
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>稅額:</label>
                  <input type="text" value={orderData.taxAmount} readOnly />
                </div>
                <div className="form-group">
                  <label>銷售人員:</label>
                  <input
                    type="text"
                    value={orderData.salesperson}
                    onChange={(e) =>
                      setOrderData({
                        ...orderData,
                        salesperson: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>帳款日期:</label>
                  <input
                    type="text"
                    value={orderData.dueDate}
                    onChange={(e) =>
                      setOrderData({ ...orderData, dueDate: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>安裝人員:</label>
                  <input
                    type="text"
                    value={orderData.installer}
                    onChange={(e) =>
                      setOrderData({ ...orderData, installer: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>姓名:</label>
                  <input
                    type="text"
                    value={orderData.customerName}
                    onChange={(e) =>
                      setOrderData({
                        ...orderData,
                        customerName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>預設倉庫:</label>
                  <input
                    type="text"
                    value={orderData.warehouse}
                    onChange={(e) =>
                      setOrderData({ ...orderData, warehouse: e.target.value })
                    }
                  />
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={orderData.isExport}
                      onChange={(e) =>
                        setOrderData({
                          ...orderData,
                          isExport: e.target.checked,
                        })
                      }
                    />
                    是否借出
                  </label>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>金額合計:</label>
                  <input type="text" value={orderData.totalAmount} readOnly />
                </div>
                <div className="form-group">
                  <label>已付金額:</label>
                  <input type="text" value={orderData.paidAmount} readOnly />
                </div>
                <div className="form-group">
                  <label>未結金額:</label>
                  <input type="text" value={orderData.balanceAmount} readOnly />
                </div>
                <div className="form-group">
                  <label>結清日期:</label>
                  <input
                    type="text"
                    value={orderData.settlementDate}
                    onChange={(e) =>
                      setOrderData({
                        ...orderData,
                        settlementDate: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group full-width">
                  <label>附記事項:</label>
                  <input
                    type="text"
                    value={orderData.notes}
                    onChange={(e) =>
                      setOrderData({ ...orderData, notes: e.target.value })
                    }
                    className="notes-input"
                  />
                </div>
              </div>
            </div>

            <div className="form-right">
              <div className="form-row">
                <div className="form-group tax-type">
                  <label>稅別:</label>
                  <div className="radio-group">
                    <label>
                      <input
                        type="radio"
                        name="taxType"
                        value="exempt"
                        checked={orderData.taxType === "exempt"}
                        onChange={(e) =>
                          setOrderData({
                            ...orderData,
                            taxType: e.target.value,
                          })
                        }
                      />
                      免稅
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="taxType"
                        value="external"
                        checked={orderData.taxType === "external"}
                        onChange={(e) =>
                          setOrderData({
                            ...orderData,
                            taxType: e.target.value,
                          })
                        }
                      />
                      外加
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="taxType"
                        value="included"
                        checked={orderData.taxType === "included"}
                        onChange={(e) =>
                          setOrderData({
                            ...orderData,
                            taxType: e.target.value,
                          })
                        }
                      />
                      內含
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-items">
          <div className="tab-title">銷售明細</div>
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>項次</th>
                  <th>產品編號</th>
                  <th>單價</th>
                  <th>數量</th>
                  <th>小計</th>
                  <th>倉庫</th>
                  <th>品名規格</th>
                  <th>單位</th>
                </tr>
              </thead>
              <tbody>
                {orderData.items.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>
                      <input
                        type="text"
                        value={item.productCode}
                        onChange={(e) =>
                          handleItemChange(index, "productCode", e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={item.unitPrice}
                        onChange={(e) =>
                          handleItemChange(
                            index,
                            "unitPrice",
                            Number(e.target.value)
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={item.quantity}
                        onChange={(e) =>
                          handleItemChange(
                            index,
                            "quantity",
                            Number(e.target.value)
                          )
                        }
                      />
                    </td>
                    <td>{item.subtotal}</td>
                    <td>
                      <input
                        type="text"
                        value={item.warehouse}
                        onChange={(e) =>
                          handleItemChange(index, "warehouse", e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={item.productName}
                        onChange={(e) =>
                          handleItemChange(index, "productName", e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={item.unit}
                        onChange={(e) =>
                          handleItemChange(index, "unit", e.target.value)
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="button-bar">
          <button onClick={handleAddItem}>新增</button>
          <button>修改</button>
          <button>刪除</button>
          <button>查詢</button>
          <button>列印</button>
          <button>上傳</button>
          <button>明細瀏覽</button>
          <button>上銷貨單</button>
          <button>已過濾</button>
        </div>

        <div className="status-bar">
          <div className="status-left">說明:</div>
          <div className="status-right">狀態:</div>
        </div>
      </div>
    </div>
  );
};

export default SalesOrder;
