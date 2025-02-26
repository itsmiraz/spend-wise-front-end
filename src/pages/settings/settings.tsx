
import React, { useState } from 'react'
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import AnimatedPage from '@/components/ui/animatedPage'
const Settings = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [hideBalance, setHideBalance] = useState(false)
  const [hideIncome, setHideIncome] = useState(false)
  return (
    <div className="container mx-auto py-8">
      <AnimatedPage>
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        <div className="space-y-8">
          {/* Personal Details */}
          <section className='p-4 border border-gray-800 rounded-lg bg-gray-300 dark:bg-[#0E1B2B]'>
            <h2 className="text-xl font-medium mb-4">Personal Details</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              <Button>Update Personal Details</Button>
            </div>
          </section>
          {/* Currency */}
          <section className='p-4 border border-gray-800 rounded-lg bg-gray-300 dark:bg-[#0E1B2B]'>
            <h2 className="text-xl font-medium mb-4">Currency</h2>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">USD ($)</SelectItem>
                <SelectItem value="eur">EUR (€)</SelectItem>
                <SelectItem value="gbp">GBP (£)</SelectItem>
                <SelectItem value="jpy">JPY (¥)</SelectItem>
              </SelectContent>
            </Select>
          </section>
          {/* Theme */}
          <section className='p-4 border border-gray-800 rounded-lg bg-gray-300 dark:bg-[#0E1B2B]'>
            <h2 className="text-xl font-medium mb-4">Theme</h2>
            <div className="flex items-center space-x-2">
              <Switch id="dark-mode" checked={darkMode} onCheckedChange={setDarkMode} />
              <Label htmlFor="dark-mode">Dark Mode</Label>
              {darkMode ? <Moon className="ml-2" /> : <Sun className="ml-2" />}
            </div>
          </section>

          {/* Language */}
          <section className='p-4 border border-gray-800 rounded-lg bg-gray-300 dark:bg-[#0E1B2B]'>
            <h2 className="text-xl font-medium mb-4">Language</h2>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
              </SelectContent>
            </Select>
          </section>

          {/* Privacy Settings */}
          <section className='p-4 border border-gray-800 rounded-lg bg-gray-300 dark:bg-[#0E1B2B]'>
            <h2 className="text-xl font-medium mb-4">Privacy Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="hide-balance" checked={hideBalance} onCheckedChange={setHideBalance} />
                <Label htmlFor="hide-balance">Hide Balance</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="hide-income" checked={hideIncome} onCheckedChange={setHideIncome} />
                <Label htmlFor="hide-income">Hide Income</Label>
              </div>
            </div>
          </section>


        </div>
      </AnimatedPage>
    </div>
  )
}

export default Settings