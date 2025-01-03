'use client';

export const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="flex-col gap-4 w-full flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-transparent border-t-[var(--green)] rounded-full animate-spin flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-transparent border-t-[#f06363] rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
}; 