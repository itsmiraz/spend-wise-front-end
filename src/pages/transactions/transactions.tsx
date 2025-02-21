import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react'

const Transactions = () => {
  // Sample transaction data with the new structure
  const transactions = [
    {
      id: 1,
      category: "Grocery",
      type: "Need",
      paymentMethod: "Cash",
      date: "Jan 1 - 7:30 pm",
      amount: -45.54,
    },
    {
      id: 2,
      category: "Restaurant",
      type: "Want",
      paymentMethod: "Credit Card",
      date: "Jan 2 - 1:15 pm",
      amount: -32.8,
    },
    {
      id: 3,
      category: "Transportation",
      type: "Need",
      paymentMethod: "Cash",
      date: "Jan 3 - 9:00 am",
      amount: -20.0,
    },
    {
      id: 4,
      category: "Entertainment",
      type: "Want",
      paymentMethod: "Debit Card",
      date: "Jan 4 - 8:45 pm",
      amount: -15.99,
    },
    {
      id: 5,
      category: "Utilities",
      type: "Need",
      paymentMethod: "Bank Transfer",
      date: "Jan 5 - 3:00 pm",
      amount: -100.0,
    },
    {
      id: 6,
      category: "Healthcare",
      type: "Need",
      paymentMethod: "Insurance",
      date: "Jan 6 - 11:30 am",
      amount: -50.0,
    },
    {
      id: 7,
      category: "Income",
      type: "Salary",
      paymentMethod: "Bank Transfer",
      date: "Jan 7 - 9:00 am",
      amount: 3000.0,
    },
    {
      id: 8,
      category: "Grocery",
      type: "Need",
      paymentMethod: "Debit Card",
      date: "Jan 8 - 6:20 pm",
      amount: -62.35,
    },
    {
      id: 9,
      category: "Shopping",
      type: "Want",
      paymentMethod: "Credit Card",
      date: "Jan 9 - 2:40 pm",
      amount: -89.99,
    },
    {
      id: 10,
      category: "Education",
      type: "Investment",
      paymentMethod: "Credit Card",
      date: "Jan 10 - 10:00 am",
      amount: -199.99,
    },
  ];

  return (
    <div> <div className="w-full mt-4 bg-[#0E1B2B] rounded-xl p-4">
      <div className="w-full  space-y-4">
        <h2 className="text-2xl font-semibold  mb-6">Recent Transactions</h2>

        <div className="border-none md:block hidden text-white rounded-md">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-400 ">
                <TableHead>Category</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead className="text-right ">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="space-y-4">
              {transactions.map((transaction, i) => (
                <TableRow
                  className="border-none text-lg py-4 text-white"
                  key={transaction.id}
                >
                  <TableCell>
                    {i + 1}. {transaction.category}
                  </TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>{transaction.paymentMethod}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        transaction.amount >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      ${Math.abs(transaction.amount).toFixed(2)}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="space-y-4 block md:hidden">
          {transactions.map((transaction, i) => (
            <div key={transaction.id} className="pb-1 border-b border-gray-700 text-white">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">
                  {i + 1}. {transaction.category}
                </span>
                <span
                  className={
                    transaction.amount >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }
                >
                  ${Math.abs(transaction.amount).toFixed(2)}
                </span>
              </div>
              {/* <div className="text-sm text-gray-300">{transaction.type}</div>
              <div className="text-sm text-gray-300">
                {transaction.paymentMethod}
              </div>
              <div className="text-sm text-gray-300">{transaction.date}</div> */}
            </div>
          ))}
        </div>
      </div>
    </div></div>
  )
}

export default Transactions