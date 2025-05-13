import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const contacts = [
  {
    name: "★Git Hub(こちらを使って共同開発を行います。）",
    value: "@github_login",
    url: "https://github.com",
    sns: {
      x: null,
      instagram: null,
      github: "https://github.com/github_login"
    }
  },
  {
    name: "★O-Tips(TEAra以外のお茶大の技術系団体です。競技プログラミングに興味のある方はこちらもチェックしてみてください。）",
    value: "@otips_ocha",
    sns: {
      x: "https://x.com/otips_ocha",
      instagram: "https://instagram.com/otips_ocha"
    }
  }
];

export default function Contact() {
  return (
    <main className="w-full min-h-screen bg-green-100">
      <div className="p-6 max-w-xl mx-auto">
        <section className="py-16 px-6 bg-white ">
          <h1 className="text-3xl font-bold justify-center mb-6">Contact</h1>
          <ul className="space-y-4">
            {contacts.map((contact, idx) => (
              <li key={idx} className="flex items-center gap-4">
                <span>
                  {contact.name} {contact.value}
                </span>
                {contact.sns.github && (
                  <a
                    href={contact.sns.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-4xl transition-transform duration-300 hover:scale-150 pointer-events-auto"
                    />
                  </a>
                )}
                {contact.sns.x && (
                  <a
                    href={contact.sns.x}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faXTwitter}
                      className="text-4xl transition-transform duration-300 hover:scale-150 pointer-events-auto"
                    />
                  </a>
                )}
                {contact.sns.instagram && (
                  <a
                    href={contact.sns.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-4xl transition-transform duration-300 hover:scale-150 pointer-events-auto"
                    />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
