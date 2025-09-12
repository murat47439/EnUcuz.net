import React from "react";
import { ProductDetailResponse } from "@/lib/types/types";
interface ProductDetailCardProps{
    product: ProductDetailResponse
}

const ProductDetailCard = ( {product}: ProductDetailCardProps) =>{
    return(
            <div className="space-y-8 grid xl:grid-cols-2 sm:grid-cols-1">

      {/* Ekran */}
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={2} className="text-lg font-bold bg-gray-100 p-2">Ekran</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">Boyut</td><td className="p-2">{product.Product.display.size}</td></tr>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">Teknoloji</td><td className="p-2">{product.Product.display.type}</td></tr>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">Çözünürlük</td><td className="p-2">{product.Product.display.resolution}</td></tr>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">Koruma</td><td className="p-2">{product.Product.display.protection}</td></tr>
        </tbody>
      </table>

      {/* Batarya */}
      <table className="w-full border-collapse">
        <thead>
          <tr><th colSpan={2} className="text-lg font-bold bg-gray-100 p-2">Batarya</th></tr>
        </thead>
        <tbody>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">Tip</td><td className="p-2">{product.Product.battery.type}</td></tr>
          <tr>
            <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">Şarj Teknolojisi</td>
            <td className="p-2">
              {product.Product.battery.charging.map((c, i) => <div key={i}>{typeof c === 'string' ? c : JSON.stringify(c)}</div>)}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Kamera */}
      <table className="w-full border-collapse">
        <thead>
          <tr><th colSpan={2} className="text-lg font-bold bg-gray-100 p-2">Kamera</th></tr>
        </thead>
        <tbody>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">Ana Kamera Türü</td><td className="p-2">{product.Product.cameras.mainCamera.type}</td></tr>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">Ana Kamera Özellikleri</td>
            <td className="p-2">{product.Product.cameras.mainCamera?.cameraSpecs?.map((c,i)=><div key={i}>{typeof c === 'string' ? c : JSON.stringify(c)}</div>)}</td>
          </tr>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">Video</td>
            <td className="p-2">{product.Product.cameras.mainCamera?.video?.map((v,i)=><div key={i}>{typeof v === 'string' ? v : JSON.stringify(v)}</div>)}</td>
          </tr>

          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">Ön Kamera Türü</td><td className="p-2">{product.Product.cameras.selfieCamera.type}</td></tr>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">Ön Kamera Özellikleri</td>
            <td className="p-2">{product.Product.cameras?.selfieCamera?.cameraSpecs?.map((c,i)=><div key={i}>{typeof c === 'string' ? c : JSON.stringify(c)}</div>)}</td>
          </tr>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">Video</td>
            <td className="p-2">{product.Product.cameras?.selfieCamera?.video?.map((v,i)=><div key={i}>{typeof v === 'string' ? v : JSON.stringify(v)}</div>)}</td>
          </tr>
        </tbody>
      </table>

      {/* Temel Donanım */}
      <table className="w-full border-collapse">
        <thead>
          <tr><th colSpan={2} className="text-lg font-bold bg-gray-100 p-2">Temel Donanım</th></tr>
        </thead>
        <tbody>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">OS</td><td className="p-2">{product.Product.platform.os}</td></tr>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">Yonga Seti</td><td className="p-2">{product.Product.platform.chipset}</td></tr>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">CPU</td><td className="p-2">{product.Product.platform.cpu}</td></tr>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">GPU</td><td className="p-2">{product.Product.platform.gpu}</td></tr>
        </tbody>
      </table>

      {/* Ağ bağlantıları */}
      <table className="w-full border-collapse">
        <thead><tr><th colSpan={2} className="text-lg font-bold bg-gray-100 p-2">Ağ Bağlantıları</th></tr></thead>
        <tbody>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">Teknoloji</td><td className="p-2">{product.Product.network.technology}</td></tr>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">Hız</td><td className="p-2">{product.Product.network.speed}</td></tr>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">2G</td><td className="p-2">{product.Product.network["2g"]}</td></tr>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">3G</td><td className="p-2">{product.Product.network["3g"]}</td></tr>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">4G</td><td className="p-2">{product.Product.network["4g"]}</td></tr>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">5G</td><td className="p-2">{product.Product.network["5g"]}</td></tr>
        </tbody>
      </table>

      {/* Gövde */}
      <table className="w-full border-collapse">
        <thead><tr><th colSpan={2} className="text-lg font-bold bg-gray-100 p-2">Gövde</th></tr></thead>
        <tbody>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">Boyut</td><td className="p-2">{product.Product.body.dimensions}</td></tr>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">Ağırlık</td><td className="p-2">{product.Product.body.weight}</td></tr>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center ">Malzeme</td><td className="p-2">{product.Product.body.build}</td></tr>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">SIM</td><td className="p-2">{product.Product.body.sim}</td></tr>
        </tbody>
      </table>

      {/* Bellek */}
      <table className="w-full border-collapse">
        <thead><tr><th colSpan={2} className="text-lg font-bold bg-gray-100 p-2">Bellek</th></tr></thead>
        <tbody>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">Dahili</td><td className="p-2">{product.Product.memory.internal}</td></tr>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">Kart Yuvası</td><td className="p-2">{product.Product.memory.cardSlot}</td></tr>
        </tbody>
      </table>

      {/* Ses */}
      <table className="w-full border-collapse">
        <thead><tr><th colSpan={2} className="text-lg font-bold bg-gray-100 p-2">Ses</th></tr></thead>
        <tbody>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">Hoparlör</td><td className="p-2">{product.Product.sound.loudspeaker}</td></tr>
        </tbody>
      </table>

      {/* Kablosuz Bağlantılar */}
      <table className="w-full border-collapse">
        <thead><tr><th colSpan={2} className="text-lg font-bold bg-gray-100 p-2">Kablosuz Bağlantılar</th></tr></thead>
        <tbody>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">Wi-Fi</td><td className="p-2">{product.Product.comms.wlan}</td></tr>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">Bluetooth</td><td className="p-2">{product.Product.comms.bluetooth}</td></tr>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">NFC</td><td className="p-2">{product.Product.comms.nfc}</td></tr>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">Konum</td><td className="p-2">{product.Product.comms.positioning}</td></tr>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">Radyo</td><td className="p-2">{product.Product.comms.radio}</td></tr>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">USB</td><td className="p-2">{product.Product.comms.usb}</td></tr>
        </tbody>
      </table>

      {/* Sensörler */}
      <table className="w-full border-collapse">
        <thead><tr><th colSpan={2} className="text-lg font-bold bg-gray-100 p-2">Sensörler</th></tr></thead>
        <tbody>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">Sensörler</td><td className="p-2">{product.Product.features.sensors}</td></tr>
        </tbody>
      </table>

      {/* Renkler */}
      <table className="w-full border-collapse">
        <thead><tr><th colSpan={2} className="text-lg font-bold bg-gray-100 p-2">Renkler</th></tr></thead>
        <tbody>
          <tr>
            <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">Mevcut Renkler</td>
            <td className="p-2">{product.Product.colors.map((c,i)=><div key={i}>{typeof c === 'string' ? c : JSON.stringify(c)}</div>)}</td>
          </tr>
        </tbody>
      </table>

      {/* Çıkış Tarihi */}
      <table className="w-full border-collapse">
        <thead><tr><th colSpan={2} className="text-lg font-bold bg-gray-100 p-2">Çıkış Tarihi</th></tr></thead>
        <tbody>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">Duyurulma</td><td className="p-2">{typeof product.Product.launch.announced === 'string' ? product.Product.launch.announced : "-"}</td></tr>
          <tr><td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">Çıkış</td><td className="p-2">{typeof product.Product.launch.released === 'string' ? product.Product.launch.released : "-"}</td></tr>
        </tbody>
      </table>

    </div>
  );
};

export default ProductDetailCard