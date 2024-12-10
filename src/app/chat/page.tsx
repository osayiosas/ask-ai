import { ClockIcon, MessageSquareIcon, ZapIcon } from "lucide-react";
import Image from "next/image";

const cards = [
  {
    id: 1,
    icon: MessageSquareIcon,
    title: "Normal Conversation",
    description: "Chat with our AI to get answers to your questions",
  },
  {
    id: 2,
    icon: ZapIcon,
    title: "Instant Answers",
    description: "Get instant answers to your questions",
  },
  {
    id: 3,
    icon: ClockIcon,
    title: "Real Conversation",
    description: "Real conversation with our AI",
  },
];

export default function page() {
  return (
    <main className="flex-1">
      <section className="w-full flex flex-col justify-center items-center py-6 xl:py-16 xl:px-24">
        <div className="container px-4 max-xl:px-6"></div>
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to Ask-Ai
            </h1>
            <p className="mx-auto max-w-[780px] text-gray-600 md:text-lg dark:text-gray-400">
              chat with our AI to get answers to your questions
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <div className="relative w-full h-48 mt-12 border rounded-lg">
              <Image
                src="/xiamge.png"
                alt="xlogo"
                layout="fill"
                className="object-contain aspect-square dark:invert rounded-lg"
              />
              <div className="absolute bottom-0 right-0 left-0 bg-black/90 text-white p-2  rounded-b-lg font-bold uppercase">
                Powered by
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex items-center justify-center">
        <div className="container px-4 md:px-5">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex flex-col items-center p-6 space-y-4 bg-white rounded-lg shadow-lg dark:bg-gray-800"
              >
                <card.icon size={48} />
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
