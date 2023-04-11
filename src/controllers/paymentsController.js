import mercadoPago from 'mercadopago';

mercadoPago.configure({
  sandbox: true,
  access_token: "TEST-2145823385260047-013022-63190c3625798c9cfa7854becac9fb90-141916951"
});

const home = (req, res) => {
  res.send('Hello Home')
}

/*
const createPayment = (req, res) => {
  res.render("payment.ejs")
}
*/

const createPay = (req, res) => {
  res.render("payment.ejs")
}

const creatPayment = async (req, res) => {

  const id = ""+Date.now();
  const emailPagador = "dionesnote@x18y2.onmicrosoft.com";


  const data = {
    items: [
      {
        id: id,
        title: "video game PS5",
        quantity: 1,
        currency_id: "BRL",
        unit_price: parseFloat(150)
      }
    ],
    payer: {
      email: emailPagador
    },
    external_reference: id
  }

  try {
    const payment = await mercadoPago.preferences.create(data);
    console.log(payment);
    res.redirect(payment.body.init_point);
  } catch (error) {
    console.log(error.messsge)
    return res.json({ message: error.message})
  }
  
  
}

export default {
  home,
  creatPayment,
  createPay
}
