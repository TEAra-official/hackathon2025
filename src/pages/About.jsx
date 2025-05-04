import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="w-full min-h-screen bg-white">
      <section className="py-16 px-6 bg-gradient-to-b from-green-100 to-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">About TEAra</h2>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl">
          ここにAboutページの内容が入るので記入お願いします
        </p>
      </section>
    </main>
  );
}