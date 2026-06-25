"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">โปรไฟล์ของฉัน</h1>
        <p className="text-muted-foreground">จัดการข้อมูลส่วนตัวและตรวจสอบประวัติการสั่งซื้อของคุณ</p>
      </div>

      <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">
            U
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-semibold">ผู้ใช้งานทั่วไป</h2>
            <p className="text-sm text-muted-foreground">user@example.com</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">ชื่อ-นามสกุล</label>
            <div className="p-2 rounded border bg-muted text-sm">สมชาย ใจดี</div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">เบอร์โทรศัพท์</label>
            <div className="p-2 rounded border bg-muted text-sm">081-234-5678</div>
          </div>
        </div>

        <div className="pt-6 flex justify-end gap-2">
          <Button variant="outline">แก้ไขโปรไฟล์</Button>
          <Button>บันทึกการเปลี่ยนแปลง</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-4">
          <h3 className="font-semibold text-lg">คำสั่งซื้อของฉัน</h3>
          <p className="text-sm text-muted-foreground">ตรวจสอบสถานะการจัดส่งและประวัติการสั่งซื้อ</p>
          <Button variant="outline" className="w-full">ดูประวัติการสั่งซื้อ</Button>
        </div>
        <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-4">
          <h3 className="font-semibold text-lg">ที่อยู่จัดส่ง</h3>
          <p className="text-sm text-muted-foreground">จัดการที่อยู่ที่ใช้ในการจัดส่งสินค้า</p>
          <Button variant="outline" className="w-full">จัดการที่อยู่</Button>
        </div>
      </div>
    </main>
  );
}
