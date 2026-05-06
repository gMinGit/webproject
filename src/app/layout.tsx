import type { Metadata } from "next";
import "./globals.css";

// 1. 페이지의 메타 데이터 (브라우저 탭에 띄워지는 제목 등)
export const metadata: Metadata = {
  title: "UX/UI 기술 대시보드",
  description: "프론트엔드 아키텍처 및 컴포넌트 시스템",
};

// 2. 전체 레이아웃 (C#의 마스터 페이지나 Shell 역할)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      {/* 화면 전체를 꽉 채우고(min-h-screen) 가로로 배치(flex) */}
      <body className="bg-[#f2f4f6] flex min-h-screen text-[#191f28] m-0">
        
        {/* 🟡 왼쪽 메뉴바 (Sidebar) */}
        <aside className="w-64 bg-white border-r border-[#e5e8eb] shadow-sm flex flex-col">
          {/* 로고 영역 */}
          <div className="p-6 border-b border-[#e5e8eb]">
            <h2 className="text-xl font-extrabold text-[#007aff]">Dev Dashboard</h2>
            <p className="text-xs text-[#8b95a1] mt-1">UX/UI Architecture</p>
          </div>
          
          {/* 메뉴 리스트 */}
          <nav className="flex-1 p-4 space-y-2">
            <div className="block p-3 rounded-lg bg-[#e8f3ff] text-[#007aff] font-semibold cursor-pointer">
              📊 대시보드 홈
            </div>
            <div className="block p-3 rounded-lg text-[#4e5968] hover:bg-[#f9fafb] cursor-pointer transition-colors">
              🧩 공통 컴포넌트
            </div>
            <div className="block p-3 rounded-lg text-[#4e5968] hover:bg-[#f9fafb] cursor-pointer transition-colors">
              🌐 REST API 테스트
            </div>
          </nav>

          {/* 하단 사용자 정보 */}
          <div className="p-4 border-t border-[#e5e8eb] text-sm text-[#4e5968]">
            <p className="font-semibold">프론트엔드 고도화</p>
            <p className="text-xs text-[#8b95a1]">v1.0.0</p>
          </div>
        </aside>

        {/* 🟢 오른쪽 메인 콘텐츠 영역 */}
        <main className="flex-1 p-10 overflow-y-auto">
          {/* 바로 이 'children' 자리에 우리가 아까 만든 page.tsx가 쏙 들어옵니다! */}
          <div className="max-w-5xl mx-auto">
            {children}
          </div>
        </main>

      </body>
    </html>
  );
}