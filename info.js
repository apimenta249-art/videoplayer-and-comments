function escrever(id, valor) {
    document.getElementById(id).textContent = valor || "Não disponível";
}

escrever("navegador", navigator.appName + " " + navigator.appVersion.split(" ")[0]);
escrever("user-agent", navigator.userAgent);

var ua = navigator.userAgent;
var sistema = "Desconhecido";
if (ua.indexOf("Win") > -1) sistema = "Windows";
else if (ua.indexOf("Mac") > -1) sistema = "macOS";
else if (ua.indexOf("Linux") > -1) sistema = "Linux";
else if (ua.indexOf("Android") > -1) sistema = "Android";
else if (ua.indexOf("iPhone") > -1 || ua.indexOf("iPad") > -1) sistema = "iOS";
escrever("sistema", sistema);
escrever("plataforma", navigator.platform);

escrever("resolucao", screen.width + " x " + screen.height + " pixels");
escrever("janela", window.innerWidth + " x " + window.innerHeight + " pixels");
escrever("pixel-ratio", "Ratio: " + window.devicePixelRatio);

escrever("idioma", navigator.language);
escrever("online", navigator.onLine ? "Sim" : "Não");

escrever("cores", (navigator.hardwareConcurrency || "?") + " núcleos de CPU");
escrever("memoria", navigator.deviceMemory ? navigator.deviceMemory + " GB (aprox.)" : "Não disponível");
escrever("touch", "ontouchstart" in window ? "Sim" : "Não");

escrever("data", new Date().toLocaleString("pt-BR"));
escrever("timezone", Intl.DateTimeFormat().resolvedOptions().timeZone);

fetch("https://freeipapi.com/api/json/")
    .then(function (r) { return r.json(); })
    .then(function (dados) {
        escrever("ip", dados.ipAddress);
        escrever("cidade", dados.cityName + ", " + dados.regionName + ", " + dados.countryName);
    })
    .catch(function () {
        escrever("ip", "Não foi possível obter");
        escrever("cidade", "Não foi possível obter");
    });
