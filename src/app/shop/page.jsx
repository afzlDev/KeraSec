// app/shop/page.jsx
"use client";
import { useState } from "react";

const products = [
  { id: 1, name: "Dome CCTV Camera", price: 2999, category: "dome" },
  { id: 2, name: "Bullet CCTV Camera", price: 3499, category: "bullet" },
  { id: 3, name: "PTZ CCTV Camera", price: 5999, category: "ptz" },
  { id: 4, name: "Wireless CCTV Camera", price: 3999, category: "wireless" },
  { id: 5, name: "Night Vision Camera", price: 4499, category: "night" },
  { id: 6, name: "4 Channel DVR", price: 2999, category: "dvr" },
  { id: 7, name: "8 Channel DVR", price: 4999, category: "dvr" },
  { id: 8, name: "CCTV Hard Disk 1TB", price: 2999, category: "storage" },
];

// Simple rule-based product finder
function interpretQuery(query) {
  query = query.toLowerCase();
  let results = [];

  if (query.includes("dome")) {
    results = products.filter((p) => p.category === "dome");
  } else if (query.includes("bullet")) {
    results = products.filter((p) => p.category === "bullet");
  } else if (query.includes("ptz") || query.includes("rotate")) {
    results = products.filter((p) => p.category === "ptz");
  } else if (query.includes("wireless") || query.includes("wifi")) {
    results = products.filter((p) => p.category === "wireless");
  } else if (query.includes("night") || query.includes("dark")) {
    results = products.filter((p) => p.category === "night");
  } else if (query.includes("dvr") || query.includes("recorder")) {
    results = products.filter((p) => p.category === "dvr");
  } else if (
    query.includes("storage") ||
    query.includes("hard disk") ||
    query.includes("hdd")
  ) {
    results = products.filter((p) => p.category === "storage");
  }

  if (query.includes("cheap") || query.includes("low")) {
    results = products.filter((p) => p.price < 3500);
  }

  return results;
}

export default function ShopAssistant() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Welcome! What kind of CCTV product are you looking for?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    // Find products
    const results = interpretQuery(input);

    let botReply =
      "❌ Sorry, I couldn't find a product for that. Try keywords like Dome, Bullet, PTZ, Wireless, DVR, or Storage.";
    if (results.length > 0) {
      botReply =
        "✅ Here are some options:\n" +
        results.map((r) => `- ${r.name} (₹${r.price})`).join("\n");
    }

    setMessages((prev) => [...prev, { from: "bot", text: botReply }]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">CCTV Shopping Assistant</h1>

      {/* Chat box */}
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-4 flex flex-col h-[500px]">
        <div className="flex-1 overflow-y-auto mb-4 space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg max-w-xs whitespace-pre-line ${
                msg.from === "user"
                  ? "bg-blue-600 text-white self-end"
                  : "bg-gray-200 text-black self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 border rounded-lg p-2"
            placeholder="Type your request... e.g. 'Need night vision camera'"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
