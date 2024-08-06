const nodemailer = require('nodemailer');


async function sendEmailWithReport() {
    try {
      // Create a transporter using your email service provider's SMTP settings
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465, // replace with your SMTP port
        secure: true, // replace with true if using SSL/TLS
        auth: {
          user: 'testdevice9851@gmail.com',
          pass: 'password',
        },
      });
  
      // Define the email options
      const mailOptions = {
        from: 'soumadipbasu333@gmail.com', // replace with your email address
        to: 'soumadipbasu@gmail.com', // replace with the recipient's email address
        subject: 'Automation Test Report',
        text: 'Attached is the automation test report.', // you can customize the email body
        attachments: [
          {
            filename: 'index.html', // replace with the name of your report file
            path: './testResults/index.html', // replace with the actual path to your report file
          },
        ],
      };
  
      // Send the email
      await transporter.sendMail(mailOptions);
      console.log('Report email sent successfully!');
    } catch (error) {
      console.error('Error sending report email:', error);
    }

  }


  module.exports = sendEmailWithReport;




