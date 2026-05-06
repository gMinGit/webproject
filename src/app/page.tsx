// 1. Next.js에게 이 컴포넌트는 '클릭' 같은 이벤트가 일어나는 '클라이언트용'이라고 알려줍니다.
'use client'; 

import { useState } from 'react'; // React의 상태 관리 도구 (Hook)
import Button from '@/components/atoms/Button';

export default function Home() {
  // 2. 상태(State) 선언
  // count: 변수 (Getter 역할)
  // setCount: 변수를 바꾸는 함수 (Setter 역할)
  // useState(0): 초기값은 0으로 설정
  const [count, setCount] = useState(0);

  // 3. 이벤트 핸들러 (C#의 Command 로직)
  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="space-y-8">
      {/* 상단 헤더 영역 */}
      <section>
        <h1 className="text-3xl font-bold text-[#191f28]">인터랙션 마스터</h1>
        <p className="text-[#4e5968] mt-2">React의 State가 어떻게 화면을 다시 그리는지 확인해보세요.</p>
      </section>

      {/* 카운터 카드 영역 */}
      <section className="bg-white p-8 rounded-2xl border border-[#e5e8eb] shadow-sm">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-[#8b95a1] uppercase tracking-wider">Current Count</span>
          <div className="text-6xl font-black text-[#007aff] mt-2">{count}</div>
        </div>

        <div className="flex gap-4 justify-center">
          {/* 우리가 만든 커스텀 버튼 사용 */}
          <Button variant="primary" size="lg" onClick={handleIncrease}>
            1씩 증가시키기
          </Button>
          
          <Button variant="outline" size="lg" onClick={handleReset}>
            초기화
          </Button>
        </div>
      </section>

      {/* 가이드 텍스트 */}
      <div className="bg-[#e8f3ff] p-4 rounded-xl text-[#007aff] text-sm">
        💡 <b>개발자 팁:</b> 버튼을 누를 때 <code>layout.tsx</code>의 사이드바는 가만히 있고, 
        오직 여기 있는 <b>{count}</b> 숫자만 React가 감지해서 번개처럼 업데이트합니다.
      </div>
    </div>
  );
}