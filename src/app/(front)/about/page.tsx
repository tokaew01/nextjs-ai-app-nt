import Link from "next/link";
import AppLoading from "../components/app-loading";
import { Suspense } from "react";

async function ApiVersion() {
  const response = await fetch('https://api.codingthailand.com/api/version');
  const apiInfo = await response.json();

  return <p>API Version: {apiInfo.data.version}</p>;
}

// http://localhost:3000/about
export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">เกี่ยวกับเรา</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          ยินดีต้อนรับสู่ร้านค้าออนไลน์ของเรา เรามุ่งมั่นที่จะนำเสนอผลิตภัณฑ์คุณภาพสูง 
          พร้อมการบริการที่ประทับใจ เพื่อให้ลูกค้าได้รับประสบการณ์การช้อปปิ้งที่ดีที่สุด
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
        <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
          <h3 className="font-semibold text-xl">คุณภาพ</h3>
          <p className="text-sm text-muted-foreground">เราคัดสรรสินค้าที่มีคุณภาพและได้มาตรฐาน</p>
        </div>
        <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
          <h3 className="font-semibold text-xl">บริการ</h3>
          <p className="text-sm text-muted-foreground">ดูแลลูกค้าด้วยใจ พร้อมให้คำปรึกษาตลอดเวลา</p>
        </div>
        <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
          <h3 className="font-semibold text-xl">รวดเร็ว</h3>
          <p className="text-sm text-muted-foreground">จัดส่งสินค้าถึงมือคุณอย่างรวดเร็วและปลอดภัย</p>
        </div>
      </div>

      <div className="pt-8 border-t">
        <Suspense fallback={ <AppLoading /> }>
          <ApiVersion />
        </Suspense>     
      </div>

      <div className="flex justify-center">
        <Link href="/" className="text-primary underline font-medium">
          กลับสู่หน้าหลัก
        </Link>
      </div>
    </main>
  );
}