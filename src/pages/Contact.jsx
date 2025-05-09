import React from "react";

export default function Contact() {
  const contacts = [
    {
      name: "メール",
      value: "teara.offical@gmail.com",
      url: "mailto:teara.offical@gmail.com",
    },
    {
      name: "X",
      value: "@teara_ocha",
      url: "https://x.com/teara_ocha",
    },
    {
      name: "Instagram",
      value: "@teara_instagram_id",
      // url: "https://www.instagram.com/your_instagram_id"
    },
  ];

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <ul className="space-y-4">
        {contacts.map((contact, index) => (
          <li
            key={index}
            className="border rounded-xl p-4 shadow hover:shadow-md transition duration-300 bg-white"
          >
            <p className="text-lg font-semibold">{contact.name}</p>
            {contact.url ? (
              <a
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {contact.value}
              </a>
            ) : (
              <p className="text-gray-600">{contact.value}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
