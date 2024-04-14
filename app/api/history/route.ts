import Donations from "../../(models)/Donations"

export async function GET(request: Request) {
    try {
        const data = await Donations.find().sort({ date: -1}).limit(5)
        return Response.json(data)
    } catch (error) {
        return Response.json({ message: 'Error', error}, { status: 500 })
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json()
        await Donations.create(body)

        return Response.json({message: "Donation Created"}, {status: 201});
    } catch (error) {
        return Response.json({ message: 'Error', error }, { status: 500 })
    }
}