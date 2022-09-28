const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = (req, res, next) => {
    const payload = req.body

    const msg = {
        to: payload.recipient, // Change to your recipient
        from: 'mumshoppe@myhmbiz.com', // Change to your verified sender
        subject: payload.subject,
        text: payload.body,
        html: `<p>${payload.body}</p>`,
    }

    sgMail
        .send(msg)
        .then(() => {
            res.status(200).send('Email sent')
        })
        .catch((error) => {
            res.status(500).send(error)
        })
}