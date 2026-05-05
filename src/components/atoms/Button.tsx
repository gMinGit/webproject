import React from 'react';

// 1. 버튼이 가질 수 있는 성격(속성)을 정의합니다.
// 이 부분은 나중에 면접에서 "타입스크립트를 활용해 안정성을 높였다"고 설명하기 좋습니다.
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'; // 버튼 색상 종류
  size?: 'sm' | 'md' | 'lg';                    // 버튼 크기
  fullWidth?: boolean;                          // 가로 꽉 채우기 여부
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) => {
  
  // 2. 기본 스타일 (공통)
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all active:scale-95 focus:outline-none disabled:opacity-50";
  
  // 3. 상황별 스타일 (삼성의 깔끔한 블루 톤 적용)
  const variants = {
    primary: "bg-[#007aff] text-white hover:bg-[#0063ce]",
    secondary: "bg-[#f2f4f6] text-[#4e5968] hover:bg-[#e5e8eb]",
    outline: "border border-[#d1d8dc] text-[#4e5968] hover:bg-[#f9fafb]"
  };

  // 4. 크기별 스타일
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;