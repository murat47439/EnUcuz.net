import React from "react";
import Image from "next/image";
import { ProductDetailResponse } from "@/lib/types/types";



interface ComparisonTableProbs{
    products: ProductDetailResponse[]
}
const ComparisonTable = ({products}: ComparisonTableProbs) => {
    return (
        <main className="grid grid-cols-1 gap-40">
            
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th>
                                <Image src={"/placeholder.png"} alt="logo" width={150} height={100} />
                        </th>
                        <th  className="text-lg font-bold bg-gray-100 p-2">
                                {products[0].Product.name}
                        </th>
                        <th className="text-lg font-bold bg-gray-100 p-4">
                                {products[1].Product.name}
                        </th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th colSpan={3} className="p-5">
                            Ekran
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                                Boyut
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.display.size}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.display.size}
                        </td>
                    </tr>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            Teknoloji
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.display.type}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.display.type}
                        </td>
                    </tr>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            Çözünürlük
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.display.resolution}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.display.resolution}
                        </td>
                    </tr>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            Koruma
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.display.protection}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.display.protection}
                        </td>
                    </tr>
                    
                    
                </tbody>
            </table>

            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th colSpan={3} className="p-5">
                            Batarya
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            Batarya kapasitesi
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.battery.type}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.battery.type}
                        </td>
                    </tr>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            Şarj Teknolojisi
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.battery.charging}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.battery.charging}
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th colSpan={3} className="p-5">
                            Kamera
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            Ana kamera türü
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.cameras.mainCamera.type}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.cameras.mainCamera.type}
                        </td>
                    </tr>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            Ana kamera Çözünürlük
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.cameras.mainCamera.cameraSpecs}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.cameras.mainCamera.cameraSpecs}
                        </td>
                    </tr>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            Ana kamera Özellikleri
                        </td>
                        <td className="p-2 w-96 text-center ">
                                {products[0].Product.cameras.mainCamera.features}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.cameras.mainCamera.features}
                        </td>
                    </tr>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            Video
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.cameras.mainCamera.video}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.cameras.mainCamera.video}
                        </td>
                    </tr>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            Ön kamera Çözünürlük
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.cameras.selfieCamera.cameraSpecs}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.cameras.selfieCamera.cameraSpecs}
                        </td>
                    </tr>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            Ön kamera Özellikleri
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.cameras.selfieCamera.features}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.cameras.selfieCamera.features}
                        </td>
                    </tr>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            Video
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.cameras.selfieCamera.video}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.cameras.selfieCamera.video}
                        </td>
                    </tr>
                </tbody>
            </table>

              <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th colSpan={3} className="p-5">
                            Temel Donanım
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            OS
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.platform.os}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.platform.os}
                        </td>
                    </tr>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            Yonga Seti
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.platform.chipset}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.platform.chipset}
                        </td>
                    </tr>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            CPU
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.platform.cpu}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.platform.cpu}
                        </td>
                    </tr>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            GPU
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.platform.gpu}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.platform.gpu}
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th colSpan={3} className="p-5">
                            Ağ Bağlantıları
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            Teknoloji
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.network.technology}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.network.technology}
                        </td>
                    </tr>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            Hız
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.network.speed}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.network.speed}
                        </td>
                    </tr>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                           5G
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.network["5g"]}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.network["5g"]}
                        </td>
                    </tr>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            4G
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.network["4g"]}
                        </td>
                        <td className="p-2 w-96 text-center">
                               {products[0].Product.network["4g"]}
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th colSpan={3} className="p-5">
                           Gövde
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            Boyut
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.body.dimensions}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.body.dimensions}
                        </td>
                    </tr>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            Ağırlık
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.body.weight}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.body.weight}
                        </td>
                    </tr>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            Renkler
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.colors}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.colors}
                        </td>
                    </tr>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            Malzeme
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.body.build}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.body.build}
                        </td>
                    </tr>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            Ağırlık
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.body.sim}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.body.sim}
                        </td>
                    </tr>
                </tbody>
            </table>

             <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th colSpan={3} className="p-5">
                            Bellek
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            Dahili kapasitesi
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.memory.internal}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.memory.internal}
                        </td>
                    </tr>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            Kart Yuvası
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.memory.cardSlot}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.memory.cardSlot}
                        </td>
                    </tr>
                </tbody>
            </table>
             <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th colSpan={3} className="p-5">
                            Ses
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            Hoparlör
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.sound.loudspeaker}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.sound.loudspeaker}
                        </td>
                    </tr>
                </tbody>
            </table>
              <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th colSpan={3} className="p-5">
                            Kablosuz Bağlantılar
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            Wi-Fi
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.comms.wlan}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.comms.wlan}
                        </td>
                    </tr>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            Bluetooth
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.comms.bluetooth}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.comms.bluetooth}
                        </td>
                    </tr>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            NFC
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.comms.nfc}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.comms.nfc}
                        </td>
                    </tr>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                           Konum
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.comms.positioning}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.comms.positioning}
                        </td>
                    </tr>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                           Radyo
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.comms.radio}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.comms.radio}
                        </td>
                    </tr>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                           USB
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.comms.usb}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.comms.usb}
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th colSpan={3} className="p-5">
                            Sensörler
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            Sensörler
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[0].Product.features.sensors}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {products[1].Product.features.sensors}
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th colSpan={3} className="p-5">
                            Diğer Bilgier
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            Çıkış Tarihi
                        </td>
                        <td className="p-2 w-96 text-center">
                                {typeof products[0].Product.launch.released === 'string' ? products[0].Product.launch.released : "-"}
                        </td>
                        <td className="p-2 w-96 text-center">
                                {typeof products[1].Product.launch.released === 'string' ? products[1].Product.launch.released : "-"}
                        </td>
                    </tr>
                    <tr>
                        <td className="bg-amber-200 p-2 w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center">
                            Duyurulma Tarihi
                        </td>
                        <td className="p-2 w-96 text-center">
                                {typeof products[0].Product.launch.announced === 'string' ? products[0].Product.launch.announced : "-"}
                        </td>
                        <td className="p-2 w-96 text-center">
                               {typeof products[1].Product.launch.announced === 'string' ? products[1].Product.launch.announced : "-"}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
            </div>
        </main>
    )
}


export default ComparisonTable