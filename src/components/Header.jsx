export default function Header() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <img
        src="/Image_fx(6).jpg"
        alt="TEAra header"
        className="w-full h-full object-cover"
        style={{ objectPosition: "center" }} // 中央部分を表示
      />
    </div>
  );
}
