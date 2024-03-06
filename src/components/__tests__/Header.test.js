import { render , screen} from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../../utils/appStore"
import Header from "../Header"
import "@testing-library/jest-dom"


it("Should render header button with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button")

    expect(loginButton).toBeInTheDocument()
})