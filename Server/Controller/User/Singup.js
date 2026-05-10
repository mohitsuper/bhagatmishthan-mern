const { SingupModel } = require("../../Modle/User/Signup.modle.js")
const bcrypt = require("bcrypt")
const transporter = require("../../Config/mailConfig")
const jwt = require("jsonwebtoken");
const {LoginModel} = require('../../Modle/User/Login.modle.js')


const singup = async (req, res) => {
    try {
        const singupdata = await SingupModel.find()
        res.json({
            status: 1,
            massage: "data Recived",
            data: singupdata,
        })
    }
    catch (error) {
        res.json({
            status: 0,
            massage: "data Failed",
            data: error.message,
        })
    }
}
const singupPost = async (req, res) => {

    try {

        const { username, email, password } = req.body;

        // email check
        const isEmail = await SingupModel.findOne({ email });

        if (isEmail) {

            return res.send({
                status: 0,
                message: "Email already exists"
            });

        }

        // hash password
        const hashPassword = await bcrypt.hash(password, 10);

        // save user
        const data = new SingupModel({

            username,
            email,
            password: hashPassword

        });

        const response = await data.save();

        // send email
        await transporter.sendMail({

            from: `"Bhagat Mishthan" <${process.env.EMAIL_USER}>`,

            to: email,

            subject: "Welcome To Our Website",

            html: `
            
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f5f5f5;padding:20px;">
                    <tr>
                        <td align="center">

                        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;border-radius:10px;overflow:hidden;font-family:sans-serif;">

                            <!-- Logo -->
                            <tr>
                            <td align="center" style="background-color:#7D18C9;padding:20px;">
                                <img src="https://symphonyinfotech.com/logo-bhagat.png" alt="Logo" width="140" style="display:block;">
                            </td>
                            </tr>

                            <!-- Content -->
                            <tr>
                            <td style="padding:30px;text-align:center;color:#000000;">

                                <h1 style="margin:0;font-size:24px;color:#7D18C9;">
                                Welcome ${username}
                                </h1>

                                <p style="font-size:16px;margin:15px 0;color:#333;">
                                Your account has been created successfully.
                                </p>

                                <h3 style="margin-top:20px;color:#000;">
                                Thanks for joining us ❤️
                                </h3>

                            </td>
                            </tr>

                            <!-- Footer -->
                            <tr>
                            <td style="background-color:#000000;padding:10px;text-align:center;color:#ffffff;font-size:12px;">
                                © 2026 All rights reserved
                            </td>
                            </tr>

                        </table>

                        </td>
                    </tr>
                    </table>
                                
            `

        });

        res.send({

            status: 1,

            message: "User Signup Successful",

            data: response

        });

    }
    catch (error) {

        res.send({

            status: 0,

            message: `User Signup Failed ${error.message}`,

            error: error.message

        });

    }

}

const loginPost = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check user exists
    const user = await SingupModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // 2. Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // 3. Create JWT Token
    const token = jwt.sign(
      { id: user._id, email: user.email },
       process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    

    const mailOptions = {
      from: `"Bhagat Mishthan" <${process.env.EMAIL_USER}>`,
      to: user.email,
      subject: "Login Successful",
      html: `

<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f5f5f5;padding:20px;">
  <tr>
    <td align="center">

      <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;border-radius:10px;overflow:hidden;font-family:sans-serif;">

        <!-- Logo -->
        <tr>
          <td align="center" style="background-color:#7D18C9;padding:20px;">
            <img src="https://symphonyinfotech.com/logo-bhagat.png" alt="Logo" width="140" style="display:block;">
          </td>
        </tr>

        <!-- Content -->
        <tr>
          <td style="padding:30px;text-align:center;color:#000000;">

            <h1 style="margin:0;font-size:24px;color:#7D18C9;">
              Login Successful
            </h1>

            <p style="font-size:16px;margin:15px 0;color:#333;">
              Hello <b>${user.username}</b>,
            </p>

            <p style="font-size:15px;margin:10px 0;color:#333;">
              You just logged in successfully to your account.
            </p>

            <p style="font-size:14px;margin:15px 0;color:green;">
              If this wasn't you, please secure your account immediately.
            </p>

            <h3 style="margin-top:20px;color:#000;">
              Thanks ❤️
            </h3>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color:#000000;padding:10px;text-align:center;color:#ffffff;font-size:12px;">
            © 2026 All rights reserved
          </td>
        </tr>

      </table>

    </td>
  </tr>
</table>

`,
    };

    await transporter.sendMail(mailOptions);

    // 5. Send response
    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};


module.exports = { singupPost, singup,loginPost }