import Image from "next/image";
import { headers } from 'next/headers';
import { parseUserAgent, getIPLocation } from "@/lib/utils";

export default async function Home() {  
  const headersList = headers();
  const ip = headersList.get('x-forwarded-for') || 'IP não disponível';
  const browser =  headersList.get('user-agent') || 'Unknown';
  const { browserName, osName } = parseUserAgent(browser);
  const locationData = await getIPLocation(ip)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Your IP is{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              {ip}
            </code>
            .
          </li>
          <li className="mb-2">
            Your Browser is{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              {browserName}
            </code>
            .
          </li>
          <li className="mb-2">
            Your OS is{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              {osName} 
            </code>
            .
          </li>
          <li className="mb-2">
            Your Location is{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              {locationData?.country} 
            </code>
            .
          </li>
        </ol>

       
      </main>
      
    </div>
  );
}
