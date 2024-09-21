
export const parseUserAgent = (ua: string) => {
    let browserName = "Desconhecido";
    let osName = "Desconhecido";

    // Detecção do navegador
    if (ua.includes("Firefox")) {
        browserName = "Mozilla Firefox";
    } else if (ua.includes("Opera") || ua.includes("OPR")) {
        browserName = "Opera";
    } else if (ua.includes("Trident")) {
        browserName = "Microsoft Internet Explorer";
    } else if (ua.includes("Edge")) {
        browserName = "Microsoft Edge";
    } else if (ua.includes("Chrome")) {
        browserName = "Google Chrome";
    } else if (ua.includes("Safari")) {
        browserName = "Apple Safari";
    }

    // Detecção do sistema operacional
    if (ua.includes("Win")) {
        osName = "Windows";
    } else if (ua.includes("Mac")) {
        osName = "MacOS";
    } else if (ua.includes("X11")) {
        osName = "UNIX";
    } else if (ua.includes("Linux")) {
        osName = "Linux";
    }

    return { browserName, osName };
};


export async function getIPLocation(ip: string) {
    try {
        const response = await fetch(`http://ip-api.com/json/${ip}`);
        const data = await response.json();

        if (data.status === 'success') {
            return {
                country: data.country,
                city: data.city,
                lat: data.lat,
                lon: data.lon,
            };
        }
    } catch (error) {
        console.error('Erro ao obter localização:', error);
    }
}