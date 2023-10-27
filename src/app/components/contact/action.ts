'use server'

type ContactForm = {
    [k:string]: string
}

const URL = process.env.URL

interface Errors extends ErrorConstructor {
    status: number,
    response: Partial<ContactForm>
}

export async function contactUs(data: ContactForm) {
    console.log(`${URL}`)
    const res = await fetch(`${URL}/contact-us`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    const response = await res.json();
    console.log(response, "response")
    return {
        ok: res.ok,
        status: res.status,
        response
    }
}