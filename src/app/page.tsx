import Button from '@/components/atoms/Button';

export default function Home() {
  return (
    <main className="p-10 space-y-4">
      <h1 className="text-xl font-bold mb-6">컴포넌트 시스템 테스트 바로 바뀌나?</h1>
      
      <div className="flex gap-4">
        <Button variant="primary">기본 버튼</Button>
        <Button variant="secondary">보조 버튼</Button>
        <Button variant="outline" size="sm">작은 버튼</Button>
      </div>

      <div className="max-w-sm">
        <Button variant="primary" size="lg" fullWidth>
          로그인 (Full Width)
        </Button>
      </div>
    </main>
  );
}