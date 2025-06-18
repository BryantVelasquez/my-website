"use client";

import { useState } from "react";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(15);
  const [people, setPeople] = useState(1);
  const [result, setResult] = useState<{
    tipAmount: number;
    totalWithTip: number;
    perPerson: number;
  } | null>(null);

  const calculateTip = () => {
    const billAmount = parseFloat(bill);
    if (isNaN(billAmount) || isNaN(tip) || isNaN(people) || people <= 0) {
      alert("Please enter valid numbers");
      return;
    }

    const tipAmount = billAmount * (tip / 100);
    const totalWithTip = billAmount + tipAmount;
    const perPerson = totalWithTip / people;

    setResult({ tipAmount, totalWithTip, perPerson });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full animate-fade-in">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">💡 Tip Calculator</h1>

        <div className="space-y-4">
          {/* Bill Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bill Amount ($)</label>
            <input
              type="number"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter bill total"
            />
          </div>

          {/* Tip Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tip Percentage</label>
            <input
              type="number"
              value={tip}
              onChange={(e) => setTip(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. 15"
            />
          </div>

          {/* People Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Number of People</label>
            <input
              type="number"
              value={people}
              onChange={(e) => setPeople(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. 2"
              min={1}
            />
          </div>

          {/* Button */}
          <button
            onClick={calculateTip}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all duration-200"
          >
            Calculate
          </button>

          {/* Results */}
          {result && (
            <div className="text-center mt-4 text-base font-medium text-green-700 space-y-1">
              <p>💸 Tip Amount: <strong>${result.tipAmount.toFixed(2)}</strong></p>
              <p>🧾 Total with Tip: <strong>${result.totalWithTip.toFixed(2)}</strong></p>
              <p>👥 Each Person Pays: <strong>${result.perPerson.toFixed(2)}</strong></p>
            </div>
          )}
        </div>
      </div>

      {/* Back to Home Button */}
      <a
        href="/"
        className="mt-6 inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200 transition"
      >
        ← Back to Home
      </a>
    </div>
  );
}
