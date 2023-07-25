import { Button } from '@twilio-paste/core'

export default function TryNow() {
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <div className="try-now-text">
                                <h1>Love at first bite</h1>
                                <p>"Whether it is your first party or your third party, these cookies are for you!"</p>
                                <Button variant="primary">TRY NOW</Button>
                            </div>
                        </td>
                        <td>
                            <img className="try-now-image" src="frontpage.png" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}