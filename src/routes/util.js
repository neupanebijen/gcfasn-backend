import express from "express"
import nodemailer from "nodemailer"

const router = express.Router()

router.post("/sendMail", (req, res) => {
  const { userData } = req.body

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "", // add username and password
      pass: "",
    },
  })

  var mailOptions = {
    from: "gcfedunp@gmail.com",
    to: "gcfedunp@gmail.com",
    subject: "Admission Email",
    text: `Data : ${JSON.stringify(userData)}`,
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log("Email sent: " + info.response)
      res.status(200).json({ success: true })
    }
  })
})

export default router
