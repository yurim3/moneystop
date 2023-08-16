import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Transaction.css';

function Transaction() {
  const [selectedButton, setSelectedButton] = useState('수입');
  const [selectedDate, setSelectedDate] = useState(null);
  const [amount, setAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedAsset, setSelectedAsset] = useState('');
  const [note, setNote] = useState('');

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAmountChange = (e) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, '');
    const formattedValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setAmount(`${formattedValue}원`);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleAssetChange = (e) => {
    setSelectedAsset(e.target.value);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };
  
  const handleSave = async () => {
    try {
      const response = await fetch('/api/save-expense', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: selectedDate,
          amount: amount,
          category: selectedCategory,
          asset: selectedAsset,
          note: note,
        }),
      });
  
      if (response.ok) {
        console.log('Expense saved successfully');
        // 지출 내역 저장 후 필요한 작업 처리
      }
    } catch (error) {
      console.error('Error saving expense:', error);
      // 에러 처리 로직
    }
  };
  
  return (
    <div className="transaction-container">
      <div className="button-container">
        <button
          className={`transaction-button ${selectedButton === '수입' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('수입')}
        >
          수입
        </button>
        <button
          className={`transaction-button ${selectedButton === '지출' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('지출')}
        >
          지출
        </button>
      </div>
      
      <div className="date-container">
        <div className="date-label">날짜</div>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy/MM/dd"
          className="date-picker"
        />
      </div>

      <div className="amount-container">
        <div className="amount-label">금액</div>
        <input
          type="text"
          value={amount}
          onChange={handleAmountChange}
          className="amount-input"
        />
      </div>

      <div className="category-container">
        <div className="category-label">카테고리</div>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="category-select"
        >
          <option value="">카테고리 선택</option>
          <option value="식비">식비</option>
          <option value="교통비">교통비</option>
          <option value="문화/여가">문화/여가</option>
        </select>
      </div>

      <div className="asset-container">
        <div className="asset-label">자산</div>
        <select
          value={selectedAsset}
          onChange={handleAssetChange}
          className="asset-select"
        >
          <option value="">자산 선택</option>
          <option value="현금">현금</option>
          <option value="카드">카드</option>
        </select>
      </div>

      <div className="note-container">
        <div className="note-label">내용</div>
        <textarea
          value={note}
          onChange={handleNoteChange}
          className="note-input"
        />
      </div>

      <button className="save-button" onClick={handleSave}>
          저장
        </button>
    </div>
  );
}

export default Transaction;
