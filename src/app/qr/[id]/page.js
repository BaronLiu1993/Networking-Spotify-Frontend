import QRGenerator from "@/app/components/QR/QRGenerator"

export default function QR ({ params }) {
    const userId = params.id
    return (
        <>
            <QRGenerator />
        </>
    )
}