'use client'
import dayjs from "dayjs";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Home() {

  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [dialog, setDialog] = useState(0)
  const [err, setErr] = useState('กรุณากรอกให้ครบ')
  const [form, setForm] = useState({})


  const handleChange = (e: any) => {
    setForm(
      {
        ...form,
        [e.target.name]: e.target.value
      }
    )
    return
  }


  const handleSubmit = () => {
    const today = dayjs()
    const start = dayjs(startDate)
    const end = dayjs(endDate)
    const data = Object.assign({}, form, { startDate: startDate }, { endDate: endDate })
    console.log(data)

    if (Object.keys(data).length != 10) {
      setErr('กรอกให้ครบ!!')
      return
    }

    if (start.isBefore(today, 'day')) {
      setErr('ไม่สามารถลาวันที่ย้อนหลังได้')
      return
    }
    if (end.isBefore(start, 'day')) {
      setErr('กวงตีงหรอ')
      return
    }

    if (start.diff(today, 'day') < 3) {
      setErr('การลากิจต้องลาล่วงหน้าอย่างน้อย 3 วัน')
      return
    }
    if ((startDate && endDate) === '') {
      setErr('กรุณาเลือกวันลาให้ครบ')
      return
    }

    setErr('เสร็จสิ้น')
    return
  }

  return (
    <div className="w-full h-full p-5 flex justify-center items-center">
      <form className="shadow-xl w-[40%] h-[49rem] flex flex-col justify-start items-center p-5" method="POST">
        <h1 className="w-full h-fit text-center text-3xl p-5">กรอกข้อมูลการลาเรียน</h1>
        <li className="w-full h-fit py-2">ข้อมูลส่วนตัว</li>
        <div className="w-full h-fit p-2 flex justify-between items-center">
          <input name="fname" onChange={handleChange} type="text" className="border w-[49%] h-[3rem] rounded-md p-2 outline-none" placeholder="ชื่อ" />
          <input name="lname" onChange={handleChange} type="text" className="border w-[49%] h-[3rem] rounded-md p-2 outline-none" placeholder="นามสกุล" />
        </div>
        <li className="w-full h-fit py-2">ติดต่อ</li>
        <div className="w-full h-fit p-2 flex justify-between items-center">
          <input name="phone_number_me" onChange={handleChange} type="text" className="border w-[49%] h-[3rem] rounded-md p-2 outline-none" placeholder="เบอร์โทรตัวเอง" />
          <input name="phone_number_family" onChange={handleChange} type="text" className="border w-[49%] h-[3rem] rounded-md p-2 outline-none" placeholder="เบอร์โทรผู้ปกครอง" />
        </div>
        <li className="w-full h-fit py-2">ชั้นปี</li>
        <div className="w-full h-fit p-2 flex justify-between items-center">
          <input name="class-learn" onChange={handleChange} type="text" className="border w-[49%] h-[3rem] rounded-md p-2 outline-none" placeholder="มัธยมศึกษาชั้นปีที่" />
          <input name="room_number" onChange={handleChange} type="text" className="border w-[49%] h-[3rem] rounded-md p-2 outline-none" placeholder="ห้อง" />
        </div>
        <li className="w-full h-fit py-2">ข้อมูลการลา</li>
        <div className="w-full h-fit p-2 flex justify-between items-center">
          <select name="type_leave" className="border w-[49%] h-[3rem] rounded-md outline-none" onChange={handleChange}>
            <option >เลือก</option>
            <option value='ลากิจ'>ลากิจ</option>
            <option value='ลาป่วย'>ลาป่วย</option>
          </select>
          <input name="type_leave" onChange={handleChange} type="text" className="border w-[49%] h-[3rem] rounded-md p-2 outline-none" placeholder="อื่นๆ ระบุ" />
        </div>
        <div className="w-full h-fit p-2 flex justify-between items-center">
          <input name="detail_leave" onChange={handleChange} type="text" className="border w-[100%] h-[3rem] rounded-md p-2 outline-none" placeholder="สาเหตุการลา" />
        </div>
        <div className="w-full h-fit p-2 flex justify-between items-center">
          <input type="date" className="border w-[45%] h-[3rem] rounded-md p-2 outline-none text-center" placeholder="สาเหตุการลา" onChange={(e) => setStartDate(e.target.value)} />
          {'ถึง'}
          <input type="date" className="border w-[45%] h-[3rem] rounded-md p-2 outline-none text-center" placeholder="สาเหตุการลา" onChange={(e) => setEndDate(e.target.value)} />
        </div>
        <div className="w-full h-fit p-2 flex justify-around items-center mt-10">
          <div className="w-[45%]" onClick={handleSubmit}>
            <Dialog>
              <DialogTrigger className="bg-green-400 text-white hover:bg-green-500 transition-all ease-in-out w-[100%] h-[3rem] rounded-md p-2 outline-none">
                ยืนยันการบันทึก
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle></DialogTitle>
                  <DialogDescription className="text-xl text-center">
                    {err}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <input type="reset" className="bg-red-400 text-white hover:bg-red-500 transition-all ease-in-out w-[45%] h-[3rem] rounded-md p-2 outline-none" value="รีเซ็ต" onClick={() => {
            setForm({})
            setErr('กรอกให้ครบ!')
            setStartDate('')
            setEndDate('')
          }} />
        </div>

      </form>
    </div>
  );
}
