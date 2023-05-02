import nodemailer from "nodemailer";

export const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  //smtp connection
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "torrey12@ethereal.email",
      pass: "fFrD7M1YTYr8MVmWq9",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Varun 👻" <torrey12@ethereal.email>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hi Varun", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};
