const auth = require("./auth")
// @ponicode
describe("auth.onSignIn", () => {
    test("0", async () => {
        await auth.onSignIn({ email: "user@host:300", password: "1Ki77y" })
    })

    test("1", async () => {
        await auth.onSignIn({ email: "bed-free@tutanota.de", password: "1Ki77y" })
    })

    test("2", async () => {
        await auth.onSignIn({ email: "email@Google.com", password: "!ush3r" })
    })

    test("3", async () => {
        await auth.onSignIn({ email: "user@host:300", password: "!Lov3MyPianoPony" })
    })

    test("4", async () => {
        await auth.onSignIn({ email: "something@example.com", password: ".Matrix53" })
    })

    test("5", async () => {
        await auth.onSignIn({ email: undefined, password: undefined })
    })
})

// @ponicode
describe("auth.isSignedIn", () => {
    test("0", async () => {
        await auth.isSignedIn()
    })
})
