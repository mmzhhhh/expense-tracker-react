import { createContext, useState } from "react";

export const GlobalContent = createContext(null);

export default function GlobalState({ children }) {
  //保存当前记录
  const [formData, setFormData] = useState({
    type: "income",
    amount: 0,
    description: "",
  });
  //保存交易类型
  const [value, setValue] = useState("expense");
  //总花费
  const [totalExpense, setTotalExpense] = useState(0);
  //总收入
  const [totalIncome, setTotalIncome] = useState(0);
  //存储所有记录
  const [allTransactions, setAllTransactions] = useState([]);

  //表单提交方法
  function handleFormSubmit(currentFormData) {
    if (!currentFormData.amount || !currentFormData.description) return;
    setAllTransactions([
      ...allTransactions,
      { ...currentFormData, id: Date.now() },
    ]);
  }
  console.log(allTransactions);

  return (
    <GlobalContent.Provider
      value={{
        formData,
        setFormData,
        totalExpense,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
        allTransactions,
        setAllTransactions,
        handleFormSubmit,
        value,
        setValue,
      }}
    >
      {children}
    </GlobalContent.Provider>
  );
}
