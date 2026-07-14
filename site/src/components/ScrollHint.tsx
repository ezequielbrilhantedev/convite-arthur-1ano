export function ScrollHint() {
  return (
    <div aria-hidden="true" className="relative mt-6 flex flex-col items-center gap-[3px]">
      <span
        className="scroll-hint-chevron"
        style={{ animation: 'scroll-hint-bounce 1.6s ease-in-out 0s infinite' }}
      />
      <span
        className="scroll-hint-chevron"
        style={{ animation: 'scroll-hint-bounce 1.6s ease-in-out .2s infinite' }}
      />
    </div>
  );
}
